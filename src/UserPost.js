
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

export default function UserPosts() {
  const { userId } = useParams();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
        setPosts(response.data);
      } catch (error) {
        console.error('Error fetching posts', error);
      }
    };

    fetchPosts();
  }, [userId]);

  return (
    <div className='container mx-auto px-4 py-8'>
      <h1 className='text-2xl font-serif mb-4 text-blue-900 font-bold underline'>Posts for User {userId}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.map((post,index) => (
          <Link to={`/users/${userId}/posts/${post.id}`} className=''>
          
          <div key={post.id} className='bg-blue-200 rounded p-3 hover:bg-blue-500' >
            
            <p className="text-gray-700 font-bold font-serif">Post {index + 1}</p>
           <p> {post.title} </p>
            </div>
            </Link>
        ))}
       </div>
    </div>
  );
}
