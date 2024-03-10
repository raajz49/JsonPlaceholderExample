import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function User() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className='container mx-auto px-4'>
      <h1 className='text-2xl font-serif mb-4 text-blue-900 font-bold underline'>Users</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
        {users.map(user => (
          <div key={user.id} className='bg-blue-100 p-4 rounded'>
            <p className='mb-2'><strong className='text-blue-700'>Name:</strong> <Link to={`/users/${user.id}/posts`} className="italic text-blue-500 underline">{user.name}</Link></p>
            <p className='mb-2'><strong className='text-blue-700'>Email:</strong> <span className='italic'>{user.email}</span></p>
            <p className='mb-2'><strong className='text-blue-700'>City:</strong> <span className='font-semibold'>{user.address.city}</span></p>
            {/* <p><strong className='text-blue-700'>Albums:</strong> <Link to={`/users/${user.id}/albums`} className="text-blue-500">View Albums</Link></p> */}
          </div>
        ))}
      </div>
    </div>
  );
}
