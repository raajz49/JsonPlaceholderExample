
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
      <div className="flex flex-wrap -mx-7 ">
        {albums.map(album => (
          <div key={album.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 px-4 mb-4 ">
          <Link to={`/album/${album.id}/photos`} className=" text-black ">
          
            <div className='bg-blue-200 rounded-lg p-4 hover:bg-blue-600'>
            <h2 className="text-lg font-semibold mb-2">{album.id}</h2>
            {album.title}
          </div>
          
          </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Album;
