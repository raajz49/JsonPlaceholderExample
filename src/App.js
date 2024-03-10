// import React from 'react';
// import { BrowserRouter as Router, Route ,Routes} from 'react-router-dom';
// import Album from './Album';
// import PhotoGallary from './PhotoGallary';

// function App() {
//   return (
//     <Router>
//       <Routes>
//       <Route path="/" component={<Album />} />
//       <Route path="/album/:albumId/photos" component={<PhotoGallary />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;



// App.js
import React from 'react';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Album from './Album';
import User from './User';
import PhotoGallary from './PhotoGallary';
import Post from './Post'
import View from './view'

function App() {
  return (
    <Router>
      <Routes>

      <Route exact path="/" element={<View />} />
       
      <Route path="/users/:userId" element={<User />}/>
        <Route path="/users/:userId/albums" element={<Album />} />
        
      
        <Route path="/album/:albumId/photos" element={<PhotoGallary />} />

        <Route path="/users/:userId/posts" element={<Post />} />

        <Route path="/users" element={<User />} />
        <Route path="/albums" element={<Album />} />
        
      
  
      </Routes>
    </Router>
  );
}

export default App;
