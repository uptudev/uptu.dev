/**
 ** Vue imports
 */
import { createApp } from "vue";
import { createPinia } from "pinia";

/**
 ** Import main webapp and router
 */
import App from "./App.vue";
import router from "./router";

/**
 ** Import CSS stylesheets
 */
import "./assets/main.css";

/**
 ** Import Firebase SDK elements
 */
import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
    apiKey: "AIzaSyBpJSHLszGkpFHNvSCQ-1l7L8az09wNkc0",

    authDomain: "vuetut-7992c.firebaseapp.com",

    projectId: "vuetut-7992c",

    storageBucket: "vuetut-7992c.appspot.com",

    messagingSenderId: "1084894783495",

    appId: "1:1084894783495:web:e00a702f6da2cbbf01a2a2",

    measurementId: "G-PYNKKC834H"
};

/** 
 ** Initializing webapp
 **/
const fbApp = initializeApp(firebaseConfig)
const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
