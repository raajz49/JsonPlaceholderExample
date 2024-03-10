
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Album() {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/albums');
        setAlbums(response.data);
      } catch (error) {
        console.error('Error fetching albums:', error);
      }
    };

    fetchAlbums();
  }, []);

  return (
    <div className='container mx-auto px-4'>
      <h1 className='text-2xl font-serif mb-4 text-blue-900 font-bold underline '>Albums</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {albums.map(album => (
          <div key={album.id} className="bg-blue-200 p-4 rounded-lg">
             <h2 className="text-lg font-semibold mb-2">{album.title}</h2>
             <Link to={`/album/${album.id}/photos`} className="text-blue-600 underline">View Photos</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Album;
