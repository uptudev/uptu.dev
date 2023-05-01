import React, {useState, useEffect} from 'react';
import {onValue, ref} from 'firebase/database';
import {db} from '../firebase';
import Markdown from "marked-react";
import "../stylesheets/pages/blog.scss";

function formatDate(isoDate: string): JSX.Element {
    const formattedDate = isoDate.slice(0, 10);
    const formattedTime = isoDate.slice(11, -1);
    return (
        <>
            {formattedDate}
            {",\t"}
            {formattedTime}
            {" UTC"}
        </>
    );

}

const Blog = () => {
    const [isLoading, setIsLoading] = useState(true);
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
                setIsLoading(false);
            }
        });
    }, []);

    return (
        <>
            {isLoading ? (
                <svg className="loading" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="50" cy="50" r="45"/>
                </svg>
            ) : (
                <div id="posts">
                    {posts.map((post: {
                        id: React.Key | null | undefined;
                        title: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined;
                        text: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined;
                        dateTime: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined;
                    }) => (
                        <>
                            <div key={post.id ?? Math.random()} className="box blog-post">
                                <div className="blog-post-header">
                                    <h2>{post.title}</h2>
                                    <hr/>
                                </div>
                                <Markdown>{post.text as string}</Markdown>
                                <hr/>
                                <p className="timestamp">{formatDate(post.dateTime as string)}</p>
                            </div>
                            <br/>
                        </>
                    ))}
                </div>
            )}
        </>
    );
};
export default Blog;
  