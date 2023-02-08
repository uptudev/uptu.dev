<script setup lang="ts">
    import * as THREE from 'three';

    import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

    const renderer = new THREE.WebGLRenderer({
        canvas: document.getElementById('bg'),
    });

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000)

    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.position.setZ(30);

    const torgeo = new THREE.TorusGeometry(10, 3, 16, 100);
    const tormat = new THREE.MeshStandardMaterial({color:0x00ffff});
    const torus = new THREE.Mesh(torgeo, tormat);

    const sphtext = new THREE.TextureLoader().load('/textures/moon.jpg')
    const sphnorm = new THREE.TextureLoader().load('/textures/moon_normal.jpg')
    const sphere = new THREE.Mesh(
        new THREE.SphereGeometry(3, 32, 32,),
        new THREE.MeshStandardMaterial({
            map: sphtext,
            normalMap: sphnorm,
        }),
    );
    
    const hemiLight = new THREE.HemisphereLight(0xffffff, 0x131c3a, 1)
    const ambientLight = new THREE.AmbientLight(0x131c3a)
    const controls = new OrbitControls(camera, renderer.domElement)
    const defbg = new THREE.Color(0x17181a);
    scene.background = defbg;

    scene.add(torus, sphere);
    scene.add(ambientLight, hemiLight);


    function animate() {
        requestAnimationFrame(animate);

        torus.rotation.x += 0.01;
        torus.rotation.y += 0.005;
        torus.rotation.z += 0.01;

        controls.update();

        renderer.render(scene, camera);
    }

    function addStar() {
        const geo = new THREE.SphereGeometry(0.25, 24, 24);
        const mat = new THREE.MeshBasicMaterial({color: 0xffffff});
        const star = new THREE.Mesh(geo, mat);

        const [x, y, z] = [
            THREE.MathUtils.randFloatSpread(100)*5, 
            THREE.MathUtils.randFloatSpread(100), 
            THREE.MathUtils.randFloatSpread(100)*5];

        star.position.set(x, y, z);
        scene.add(star);
    }
    for (let i = 0; i < 200; i++) {
        addStar();
    }

    animate();
</script>

<style>
</style>