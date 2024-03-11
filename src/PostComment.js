import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';

const PostComment = () => {
    const { postId } = useParams();
  
     console.log("postID=", postId)

     const [PostComments, setPostComments] = useState([]);

     useEffect(() => {
        const fetchPostComments = async () => {
          try {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
            setPostComments(response.data);
          } catch (error) {
            console.error('Error fetching users', error);
          }
        };
    
        fetchPostComments();
      }, [postId]);
    return (
        <div  className='container mx-auto px-4 py-8'>
            <h1 className='text-gray-700 font-bold font-serif underline mb-4 text-2xl'>Comments-Post{postId}</h1>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {PostComments.map((PostComment,index)=>(
                    <div key={PostComment.id} className='bg-blue-200 rounded  shadow-lg p-4'>

              <p className="text-gray-500 font-semibold font-serif">Comments {index + 1}</p>
                     
                    <div className='underline font-semibold text-gray-700'>Name</div>
                    <p>{PostComment.name}</p>
                    <div className='underline font-semibold text-gray-700'>Body</div>
                     <p>{PostComment.body}</p>
                     {/* <p>{PostComment.comment}</p> */}
                       

                        </div>
                ))}
            </div>



        </div>
    ); 
};

export default PostComment;