import {ref, push, set} from 'firebase/database';
import { useState, useEffect } from 'react';
import {User} from 'firebase/auth';
import { auth, db, sign_up, sign_in, sign_out } from "../firebase";
import "../stylesheets/pages/admin.scss";

// A function to serialize a blog post from fields into a JSON
function pushBlogPostToFirebase(title: string, text: string): Promise<void> {
    const post = {
        title,
        text,
        dateTime: new Date().toISOString(),
    };

    const databaseRef = ref(db, 'blogPosts');
    const newPostRef = push(databaseRef);

    return set(newPostRef, post)
        .then(() => {
            console.log('New blog post added to Firebase Realtime Database.');
        })
        .catch((error: any) => {
            console.error(`Error adding blog post to Firebase Realtime Database: ${error}`);
        });
}

export const cyrb53 = (str: string, seed: number = 0) => {
    let h1 = 0xdeadbeef ^ seed, h2 = 0x41c6ce57 ^ seed;
    for(let i = 0, ch; i < str.length; i++) {
        ch = str.charCodeAt(i);
        h1 = Math.imul(h1 ^ ch, 2654435761);
        h2 = Math.imul(h2 ^ ch, 1597334677);
    }
    h1  = Math.imul(h1 ^ (h1 >>> 16), 2246822507);
    h1 ^= Math.imul(h2 ^ (h2 >>> 13), 3266489909);
    h2  = Math.imul(h2 ^ (h2 >>> 16), 2246822507);
    h2 ^= Math.imul(h1 ^ (h1 >>> 13), 3266489909);

    return (4294967296 * (2097151 & h2) + (h1 >>> 0)).toString();
};

const Admin = (props: any) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState(null as User | null);
    const [error, setError] = useState(null as Error | null);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setUser(user);
        });

        return () => unsubscribe();
    }, []);

    function handleSignUp(event: { preventDefault: () => void; }) {
        event.preventDefault();
        console.log("Attempting to sign up...");
        let email_in = document.getElementById('email') as HTMLInputElement;
        let password_in = document.getElementById('password') as HTMLInputElement;
        let email_str = email_in.value;
        let password_str = password_in.value;
        if (email_str && password_str ) {
            setEmail(email_str);
            setPassword(cyrb53(password_str, 69420));
            sign_up(email, password)
                .catch((error) => {
                    setError(error.message);
                    console.log(error);
                });
            props.onLogin(email);
        }
    }

    function handleSignIn(event: { preventDefault: () => void; }) {
        event.preventDefault();
        console.log("Attempting to sign in...");
        let email_in =
            document.getElementById('email') as HTMLInputElement;
        let password_in =
            document.getElementById('password') as HTMLInputElement;
        let email_str = email_in?.value;
        let password_str = password_in?.value;
        if (email_str && password_str ) {
            setEmail(email_str);
            setPassword(cyrb53(password_str, 69420));
            sign_in(email, password)
                .catch((error) => {
                    setError(error.message);
                    console.log(error);
                });
            props.onLogin(email);
        }
    }

    function handleSignOut(event: { preventDefault: () => void; }) {
        event.preventDefault();
        console.log("Attempting to sign out...");
        sign_out()
            .catch((error) => {
                setError(error.message);
                console.log(error);
            });
    }

    function handleSubmit(event: { preventDefault: () => void; }) {
        event.preventDefault();
        let input = document.getElementById("blogtitle") as HTMLInputElement;
        let area = document.getElementById("markdown") as HTMLInputElement;
        let title = input.value;
        let text = area.value;
        pushBlogPostToFirebase(title, text).then(() => {console.log('New blog post added from admin console.')});
        input.value = "";
        area.value = "";
    }

    function handleClear(event: { preventDefault: () => void; }) {
        event.preventDefault();
        let input = document.getElementById("blogtitle") as HTMLInputElement;
        let area = document.getElementById("markdown") as HTMLInputElement;
        input.value = "";
        area.value = "";
    }

    if (
        user && user.email &&
        cyrb53(user.email) === "1083941953284809"
    )  {
        return(<div id="login">
            <p className="box">Welcome, uptu.</p>
            <div id="blog"  className="login">
                <h2>New Post</h2>
                <form>
                    <label className="blog-label" htmlFor="email">Title:</label><br />
                    <input className="blog-input-title" type="text" id="blogtitle" name="blogtitle" /><br />
                    <label className="blog-label" htmlFor="email">Text:</label><br />
                    <textarea className="blog-input-area" id="markdown" name="markdown" />
                    <div>
                        <button className="login-button" type="submit" onClick={handleSubmit}>Submit</button>
                        <button className="login-button" type="submit" onClick={handleClear}>Clear</button>
                    </div>
                </form>
            </div>
            <button className="login-button" onClick={handleSignOut}>Sign out</button>
        </div>);
    } else if (user) {
        return(<div id="login">
            <h2>Oops, you aren't an admin!</h2>
            <p className="box">This incident will be reported and logged.</p>
            <button onClick={handleSignOut}>Sign out</button>
        </div>);
    } else {
        return(<div id = "login">
            <h2>Log In</h2>
            <form>
                <label className="login_title" htmlFor="email">Email:</label><br />
                <input className="login" type="text" id="email" name="email" /><br />
                <label className="login_title" htmlFor="email">Password:</label><br />
                <input className="login" type="password" id="password" name="password" />
                <div>
                    <button className="login-button" type="submit" onClick={handleSignIn}>Sign in</button>
                    <button className="login-button" type="submit" onClick={handleSignUp}>Sign up</button>
                </div>
            </form>
        </div>);
    }
};

export default Admin;