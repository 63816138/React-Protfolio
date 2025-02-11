import React from 'react'
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiExpress, SiMongodb } from "react-icons/si";

const Techstack = () => {
  const techStack = [
    {
      name: "HTML",
      Icon: FaHtml5, // React Icon from 'react-icons/ai'
      expertise: "Writing clean, semantic, and SEO-friendly HTML to ensure accessibility and maintainability.",
      useCase: "Structuring well-organized and optimized web pages for better search engine indexing and user experience."
    },
    {
      name: "CSS",
      Icon: FaCss3Alt, // React Icon from 'react-icons/di'
      expertise: "Creating visually appealing, responsive, and modern UI designs using Flexbox, Grid, and animations.",
      useCase: "Designing intuitive user interfaces with smooth transitions and engaging visuals."
    },
    {
      name: "Tailwind CSS",
      Icon: SiTailwindcss, // React Icon from 'react-icons/si'
      expertise: "Leveraging utility-first CSS for rapid styling without writing repetitive custom CSS.",
      useCase: "Building scalable and consistent design systems with minimal CSS bloat."
    },
    {
      name: "JavaScript",
      Icon: FaJs, // React Icon from 'react-icons/si'
      expertise: "Writing modular, asynchronous, and optimized JavaScript to enhance interactivity and performance.",
      useCase: "Implementing complex UI logic, data fetching, event handling, and improving performance using debouncing and throttling techniques."
    },
    {
      name: "React.js",
      Icon:FaReact , // React Icon from 'react-icons/fa'
      expertise: "Developing dynamic and high-performance single-page applications (SPAs) with state management using hooks and context API.",
      useCase: "Creating reusable, scalable UI components and integrating RESTful APIs for real-time data updates."
    },
    {
      name: "Node.js",
      Icon: FaNodeJs, // React Icon from 'react-icons/fa'
      expertise: "Building event-driven, non-blocking, and scalable backend applications using asynchronous programming.",
      useCase: "Handling real-time operations like chat applications, streaming services, and API-driven microservices."
    },
    {
      name: "Express.js",
      Icon: SiExpress, // React Icon from 'react-icons/si'
      expertise: "Designing RESTful APIs, handling middleware for authentication, and optimizing API performance.",
      useCase: "Creating backend services that power dynamic applications with authentication and database integration."
    },
    {
      name: "MongoDB",
      Icon: SiMongodb, // React Icon from 'react-icons/si'
      expertise: "Designing flexible and high-performance data schemas using Mongoose and aggregation pipelines.",
      useCase: "Managing user authentication, handling large datasets, and storing unstructured data efficiently."
    },
    {
      name: "GitHub",
      Icon: FaGithub , // React Icon from 'react-icons/fa'
      expertise: "Utilizing Git for version control, branching strategies (Git Flow), and collaborative project management.",
      useCase: "Maintaining clean commit histories, resolving merge conflicts, and collaborating on open-source and team projects."
    }
  ];
  
  return (
    <div className='tech_stack'>
      <section className='stacks'>
        <div className='flip-card-inner'>
          <div className='flip-card-front'>
            <FaHtml5/>
          </div>
          <div className='flip-card-back'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, eligendi!</p>
          </div>
        </div>
        <ul className='stacks'>
          {
            techStack.map((icon,index)=>{
              return <li 
              onMouseEnter={(event)=>{
                event.target.className = 'flip-card-inner'
              }}
              onMouseLeave={(event)=>{
                event.target.className = ''
              }}
              key={index}>
                <div className='flip-card-front'>
                  <icon.Icon/>
                </div>
                <div className='flip-card-back'>
                  <h5>{icon.name}</h5>
                  <p>{icon.expertise}</p>
                  <p>{icon.useCase}</p>
                </div>
              </li>
            })
          }
        </ul>
      </section>
    </div>
  )
}

export default Techstack
