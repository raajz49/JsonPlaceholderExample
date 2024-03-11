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
              <Link key={user.id} to={`/users/${user.id}/posts`} className="">
            <div className='bg-gray-800 text-white p-4 rounded hover:bg-gray-300 hover:text-black'>
            <p className='mb-2'><strong className=''>Name:</strong> {user.name}</p>
            <p className='mb-2'><strong className=''>Email:</strong> <span className='italic'>{user.email}</span></p>
            <p className='mb-2'><strong className=''>City:</strong> <span className=''>{user.address.city}</span></p>
            {/* <p><strong className='text-blue-700'>Albums:</strong> <Link to={`/users/${user.id}/albums`} className="text-blue-500">View Albums</Link></p> */}
          </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
