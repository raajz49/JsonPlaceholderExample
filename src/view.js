import React from 'react';
import { Link } from 'react-router-dom';

export default function View() {
  return (
    <div className='container mx-auto px-4 mt-8'>
      <div>
        <h1 className='text-2xl font-serif mb-4 text-blue-900 font-bold underline'>View</h1>
        <div className="flex flex-col md:flex-row">
          <div className="bg-blue-200 p-4 rounded-lg mb-4 md:mb-0 md:mr-4 flex-1">
            <h2 className="text-lg font-semibold mb-2">User Details and Posts</h2>
            <ul>
              <li className='italic underline text-base mb-2'><Link to="/users" className="text-blue-600">User details and Posts</Link></li>
            </ul>
          </div>
          <div className="bg-blue-200 p-4 rounded-lg flex-1">
            <h2 className="text-lg font-semibold mb-2">Albums</h2>
            <ul>
              <li className='italic underline text-base mb-2'><Link to="/albums" className="text-blue-600">Albums</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
