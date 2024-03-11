
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function PhotoGallery() {
  const [photos, setPhotos] = useState([]);
  const { albumId } = useParams(); // Get the albumId from the URL params

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`);
        setPhotos(response.data);
      } catch (error) {
        console.error('Error fetching photos:', error);
      }
    };

    fetchPhotos();
  }, [albumId]);

  return (
    <div className='container mx-auto px-4'>
     <h1 className='text-2xl text-red-600 font-serif mb-4'>Photos - Album {albumId}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
        {photos.map(photo => (
          <div className=''>
          <div key={photo.id} className="bg-white rounded-lg overflow-hidden shadow-md">
            <img src={photo.thumbnailUrl} alt={photo.title} className="w-full"/>
            <div className='p-4'> 
              <p className='text-gray-600 font-bold font-serif'>{photo.title}</p>
            </div>
          </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PhotoGallery;
