import React from 'react';
import { Link } from 'react-router-dom';

export default function View() {
  return (
    <div className='container mx-auto px-4 mt-8'>
      <div>
        <h1 className='text-2xl font-serif mb-4 text-blue-900 font-bold underline'>View</h1>
        <div className="flex flex-col md:flex-row">
        <Link to="/users" className="flex-1 md:mr-4">
  <div className="bg-blue-200 p-4 rounded-lg flex-1 hover:bg-blue-600">
    <h2 className="text-lg font-semibold mb-2">Users</h2>
    
  </div>
</Link>


          <Link to="/albums" className="flex-1">
  <div className="bg-blue-200 p-4 rounded-lg flex-1 hover:bg-blue-600">
    <h2 className="text-lg font-semibold mb-2">Albums</h2>
    {/* <p className="text-blue-600 italic underline text-base mb-2">View Albums</p> */}
  </div>
</Link>
        </div>
      </div>
    </div>
  );
}
