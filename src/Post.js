import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Posts() {
    const [posts, setPosts] = useState([]);
    const [comments, setComments] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
                setPosts(response.data);
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        };

        const fetchComments = async () => {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/comments');
                setComments(response.data);
            } catch (error) {
                console.error('Error fetching comments:', error);
            }
        };

        fetchPosts();
        fetchComments();
    }, []);

    return (
        <div className='bg-blue-200'>
            <h1 className='underline text-3xl  font-sans font-bold'>Posts</h1>
            {posts.map(post => (
                <div key={post.id}>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                    <h2 className='underline font-serif font-bold text-xl'>Comments</h2>
                    <ul>
                        {comments.filter(comment => comment.postId === post.id).map(comment => (
                            <li key={comment.id} >
                               <p className='underline text-lg</p>'> {comment.name}</p> {comment.body}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}

export default Posts;
