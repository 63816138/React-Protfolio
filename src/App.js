import Header from './component/Header';
import React from 'react';
import { Route,Routes } from 'react-router-dom';
import Home from './component/Home.jsx';
import Project from './component/Project.jsx';
import Resume from './component/Resume.jsx';
import Techstack from './component/Techstack.jsx';
import profile from './component/images/photo.jpeg';
import github from './component/images/github.png';
import linkedin from './component/images/linkedin.png';
import gmail from './component/images/gmail.png';
import whatsapp from './component/images/whatsapp.png';


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
        <Route path='/React-Protfolio' element={<Home/>}/>
        <Route path='/React-Protfolio/projects' element={<Project/>}/>
        <Route path='/React-Protfolio/resume' element={<Resume
          image = {image}
        />}/>
        <Route path='/React-Protfolio/techstack' element={<Techstack/>}/>
      </Routes>
    </div>
  );
}

export default App;
