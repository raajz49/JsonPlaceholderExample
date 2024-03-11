
import React from 'react';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Album from './Album';
import User from './User';
import PhotoGallary from './PhotoGallary';
// import Post from './Post'
import View from './view'
import UserPost from './UserPost';
import PostComment from './PostComment';

function App() {
  return (
    <Router>
      <Routes>

      <Route exact path="/" element={<View />} />
       
      <Route path="/users/:userId" element={<User />}/>
        <Route path="/users/:userId/albums" element={<Album />} />
        
      
        <Route path="/album/:albumId/photos" element={<PhotoGallary />} />

        {/* <Route path="/users/:userId/posts" element={<Post />} /> */}

        <Route path="/users" element={<User />} />
        <Route path="/albums" element={<Album />} />
        
        <Route path="/users/:userId/posts" element={<UserPost />} />
        <Route path="/users/:userId/posts/:postId" element={<PostComment />} />
      </Routes>
    </Router>
  );
}

export default App;
