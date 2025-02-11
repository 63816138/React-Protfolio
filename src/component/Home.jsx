import React from 'react';

const Home = () => {
  function nav(e){
    document.getElementById(e.target.innerText.toLowerCase()).scrollIntoView({behavior:'smooth'})
  }
  return (
    <div className='home'>
      <div className='home_intro'>
        <div>
          <h1>I'm Mugesh R </h1>
          <h2>The MERN stack developer</h2>
          <p>
          I’m an aspiring MERN Stack Developer who loves building dynamic and user-friendly web applications. While I specialize in MongoDB, Express.js, React.js, and Node.js, I’ve also developed an app using MySQL, showcasing my versatility in database management. Always eager to learn and innovate, I strive to create seamless and efficient digital experiences. 🚀</p>
          <span>
            <button onClick={(event)=>{nav(event)}}>About</button>
            <button onClick={(event)=>{nav(event)}}>Education</button>
          </span>
        </div>
      </div>
      <section className='about_section' id='about'>about</section>
      <section className="educational_section" id='education' style={{margin:'30px'}}>
        <div>college</div>
        <div>school</div>
      </section>
    </div>
  )
}

export default Home
