import React, { useState, useEffect } from 'react';
import { onValue, ref } from 'firebase/database';
import { db } from '../firebase';
import marked from 'marked';

const Blog = () => {
    const [posts, setPosts]: [any, any] = useState([]);

    useEffect(() => {
        const dbRef = ref(db, 'blogPosts/');
        onValue(dbRef, (snapshot) => {
            const data = snapshot.val();
            if (data) {
                const postsArray =
                    Object.values(data)
                        .sort((a: any, b: any) => {
                            return new Date(b.dateTime).getTime() - new Date(a.dateTime).getTime();
                        });
                setPosts(postsArray);
            }
        });
    }, []);

    return (
        <div id="blog">
            <h1>Blog Articles</h1>
            <div id="posts">
                {posts.map((post: { id: React.Key | null | undefined; title: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; text: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; dateTime: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; }) => (
                    <div key={post.id}>
                        <h2>{post.title}</h2>
                        <p>{post.text}</p>
                        <p className="timestamp">{post.dateTime}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default Blog;
  