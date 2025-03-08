import React, { useState } from 'react';
import { FaBookOpen, FaUniversity, FaSchool } from "react-icons/fa";

const Home = () => {
  const [show_college, setShow_college] = useState('hide');
  const [display, setDisplay] = useState('none');
  const [show_school, setShow_school] = useState('hide');

  const nav = (e) => {
    document.getElementById(e.target.innerText.toLowerCase()).scrollIntoView({ behavior: 'smooth' });
  };

  const toggleTheEducation = () => {
    setDisplay(display === 'flex' ? 'none' : 'flex');
  };

  const toggleShow_college = () => {
    setShow_college(show_college === 'hide' ? 'show' : 'hide');
  };
  const toggleShow_school = () => {
    setShow_school(show_school === 'hide' ? 'show' : 'hide');
  };

  return (
    <div className='home'>
      <section className='home_intro'>
        <div>
          <h1>I'm Mugesh R</h1>
          <h2>The MERN stack developer</h2>
          <p>
            I’m an aspiring MERN Stack Developer who loves building dynamic and user-friendly web applications. While I specialize in MongoDB, Express.js, React.js, and Node.js, I’ve also developed an app using MySQL, showcasing my versatility in database management. Always eager to learn and innovate, I strive to create seamless and efficient digital experiences. 🚀
          </p>
          <span>
            <button onClick={(event) => { nav(event) }}>About</button>
            <button onClick={(event) => { nav(event) }}>Education</button>
          </span>
        </div>
      </section>

      <section className='about_section' id='about'>
        <h2>About</h2>
        <p>
          Hello! I'm Mugesh R, an aspiring Full Stack Developer with a strong passion for building dynamic and efficient web applications. I specialize in MERN stack development (MongoDB, Express.js, React.js, Node.js) and have hands-on experience in JavaScript, Python, and Java.
          I have successfully built projects like Career Hub, a career guidance platform that helps users explore IT career paths, and Resume Builder, a simple yet powerful tool for creating professional resumes with real-time previews and easy customization.
          My strengths include problem-solving, adaptability, teamwork, and a constant eagerness to learn new technologies. I enjoy working on challenging projects that push me to expand my skills and improve my understanding of web development. Beyond coding, I love reading e-books, exploring new tech trends, and working on creative projects. I'm always excited about new opportunities to apply my knowledge and contribute to innovative solutions in the tech industry.
        </p>
      </section>

      <h3 style={{ alignItems: 'left' }}>Educational</h3>
      <section className="educational_section" id='education' style={{ margin: '30px' }}>
        <div id='main_education' className="education" style={{ zIndex: '5' }} onClick={toggleTheEducation}>
          <FaBookOpen style={{ color: 'rosybrown' }} />
        </div>

        <span className='education_display education_icon' id='toggleElement' style={{ display: display }}>
          <div>
            <h3>College</h3>
            <div className='education_icon education' style={{ zIndex: '1' }} onMouseEnter={toggleShow_college} onMouseLeave={toggleShow_college}>
              {show_college === 'hide' ? (
                <FaUniversity style={{ color: 'saddlebrown' }} />
              ) : (
                <div style={{width:'150px',height:'150px',border:'none'}}>
                  <h4>Mahendra Engineering College(Autonomous)</h4>
                  <h5>BE-CSE</h5>
                  <p>CGPA: 8.34</p>
                </div>
              )}
            </div>
          </div>
          <div>
            <h3>School</h3>
            <div className='education' style={{ zIndex: '1' }} onMouseEnter={toggleShow_school} onMouseMove={toggleShow_school}>
              {show_school === 'hide' ? (
                  <FaSchool style={{ color: 'slategrey' }} />
                ) : (
                  <div style={{width:'150px',height:'150px',border:'none'}}>
                    <h4>Gokulnatha Hindhu Mahajana Higher Secondary School-salem</h4>
                    <p>percentage: 70%</p>
                  </div>
              )}
            </div>
          </div>
        </span>
      </section>
    </div>
  );
};

export default Home;
