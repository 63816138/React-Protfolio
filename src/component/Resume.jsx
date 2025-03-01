import React from 'react';
import {FaHtml5,FaCss3,FaJs,FaReact,FaDatabase,FaNodeJs,FaInternetExplorer,FaFootball,FaBook,FaMusic,FaGamepad} from 'react-icons/fa6';
import resume from './images/resume.pdf';

const Resume = ({ image }) => {
  const whatsapp = '6381613806';
  document.querySelectorAll('.skills svg').forEach(item=>{
    item.addEventListener('mouseover',()=>{
      item.parentElement.className = 'hovered';
    })
    item.addEventListener('mouseleave' , ()=>{
      item.parentElement.className = '';
    })
  })

  return (
    <div className='resume_section'>
      <section className="contact">
        <img src={image.Profile} alt="profile" />
        <div className='contact_icon'>
          <div className='contact_download_button'>
            <a href={resume} download={'Mugesh_Resume.pdf'}><button>Resume</button></a>
            <button>CV</button>
          </div>
          <ul className="contact_nav">
            <li>
              <a href="https://github.com/63816138?tab=repositories">
                <img src={image.Github} alt="github" />
              </a>
            </li>

            <li>
              <a href="www.linkedin.com/in/mugesh-r-rajaram">
                <img src={image.Linkedin} alt="linkedin" />
              </a>
            </li>

            <li>
              <a href="mailto:mugeshmsd5@gmail.com?subject=Hello Mugesh!&body=I wanted to reach out to you.">
                <img 
                  src={image.Gmail} 
                  alt="gmail" 
                  className='image_toggle' 
                />
              </a>
            </li>

            <li>
              <a href={`https://wa.me/${whatsapp}`}>
                <img 
                  src={image.Whatsapp} 
                  alt="whatsapp" 
                  className='image_toggle' 
                />
              </a>
            </li>
          </ul>
        </div>
      </section>
      <section className="resume_about_section">
        <div className="about">
          <h3>About Me</h3>
          <p>I am an aspiring Full Stack Developer with a passion for creating impactful web applications. Currently pursuing a BE in Computer Science and Engineering at Mahendra Engineering College, I specialize in HTML, CSS, JavaScript, React.js, and Python. My projects, including CarreHUB (a career guidance platform) and a Resume Builder Web Application, showcase my ability to develop user-centric solutions. I am eager to learn new technologies, solve complex problems, and contribute to innovative software development teams.</p>
        </div>
        <div className="skills">
          <ul>
            <h3>Tech Stack</h3>
            <li>
              <FaHtml5 style={{color:'orangered'}}/>
              <div>
                <div style={{width:'90%'}}>90%</div>
              </div>
            </li>
            <li>
              <FaCss3 style={{color:'darkblue'}}/>
              <div>
                <div style={{width:'80%'}}>80%</div>
              </div>
            </li>
            <li>
              <FaJs style={{color:'yellow'}}/>
              <div>
                <div style={{width:'80%'}}>70%</div>
              </div>
            </li>
            <li>
              <FaReact style={{color:'blue'}}/>
              <div>
                <div style={{width:'60%'}}>60%</div>
              </div>
            </li>
            <li>
              <FaNodeJs style={{color:'greenyellow'}}/>
              <div>
                <div style={{width:'40%'}}>40%</div>
              </div>
            </li>
            <li>
              <FaInternetExplorer/>
              <div>
                <div style={{width:'30%'}}>30%</div>
              </div>
            </li>
            <li>
              <FaDatabase style={{color:'green'}}/>
              <div>
                <div style={{width:'60%'}}>60%</div>
              </div>
            </li>
          </ul>
        </div>
        <div className="hobbies">
          <ul>
            <h3>Hobbies</h3>
            <li>
              <FaBook/>
              <p>Reading Books</p>
            </li>
            <li>
              <FaMusic/>
              <p>Listening Music</p>
            </li>
            <li>
              <FaGamepad/>
              <p>video Games</p>
            </li>
            <li>
              <FaFootball/>
              <p>Playing Games</p>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Resume;
