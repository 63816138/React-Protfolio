import Header from './component/Header';
import React from 'react';
import { Route,Routes } from 'react-router-dom';
import Home from './component/Home.jsx';
import Project from './component/Project.jsx';
import Resume from './component/Resume.jsx';
import Techstack from './component/Techstack.jsx';
import profile from '/home/mugesh_ruthvi/Documents/react_protfolio/protfolio/src/component/images/photo.jpeg';
import github from '/home/mugesh_ruthvi/Documents/react_protfolio/protfolio/src/component/images/github.png';
import linkedin from '/home/mugesh_ruthvi/Documents/react_protfolio/protfolio/src/component/images/linkedin.png';
import gmail from '/home/mugesh_ruthvi/Documents/react_protfolio/protfolio/src/component/images/gmail.png';
import whatsapp from '/home/mugesh_ruthvi/Documents/react_protfolio/protfolio/src/component/images/whatsapp.png';


function App() {
  const image = {
    Profile : profile,
    Github : github,
    Linkedin  : linkedin,
    Gmail : gmail,
    Whatsapp : whatsapp
  }
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/projects' element={<Project/>}/>
        <Route path='/resume' element={<Resume
          image = {image}
        />}/>
        <Route path='/techstack' element={<Techstack/>}/>
      </Routes>
    </div>
  );
}

export default App;
