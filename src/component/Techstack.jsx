import React, { useState } from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGithub,FaJava } from "react-icons/fa";
import { SiTailwindcss, SiExpress, SiMongodb } from "react-icons/si";

const Techstack = () => {
  const [flippedIndex, setFlippedIndex] = useState(null);

  const techStack = [
    {
      name: "HTML",
      Icon: FaHtml5,
      color: 'rgb(235, 76, 3)',
      expertise: "Writing clean, semantic, and SEO-friendly HTML to ensure accessibility and maintainability.",
      useCase: "Structuring well-organized and optimized web pages for better search engine indexing and user experience."
    },
    {
      name: "CSS",
      Icon: FaCss3Alt,
      color: 'rgb(4, 104, 255)',
      expertise: "Creating visually appealing, responsive, and modern UI designs using Flexbox, Grid, and animations.",
      useCase: "Designing intuitive user interfaces with smooth transitions and engaging visuals."
    },
    {
      name: "Tailwind CSS",
      Icon: SiTailwindcss,
      color: 'rgb(0, 205, 212)',
      expertise: "Leveraging utility-first CSS for rapid styling without writing repetitive custom CSS.",
      useCase: "Building scalable and consistent design systems with minimal CSS bloat."
    },
    {
      name: "JavaScript",
      Icon: FaJs,
      color: 'rgb(238, 255, 0)',
      expertise: "Writing modular, asynchronous, and optimized JavaScript to enhance interactivity and performance.",
      useCase: "Implementing complex UI logic, data fetching, event handling, and improving performance using debouncing and throttling techniques."
    },
    {
      name: "React.js",
      Icon: FaReact,
      color: 'rgb(46, 161, 255)',
      expertise: "Developing dynamic and high-performance single-page applications (SPAs) with state management using hooks and context API.",
      useCase: "Creating reusable, scalable UI components and integrating RESTful APIs for real-time data updates."
    },
    {
      name: "Node.js",
      Icon: FaNodeJs,
      color: 'rgb(9, 129, 5)',
      expertise: "Building event-driven, non-blocking, and scalable backend applications using asynchronous programming.",
      useCase: "Handling real-time operations like chat applications, streaming services, and API-driven microservices."
    },
    {
      name: "Express.js",
      Icon: SiExpress,
      color: 'black',
      expertise: "Designing RESTful APIs, handling middleware for authentication, and optimizing API performance.",
      useCase: "Creating backend services that power dynamic applications with authentication and database integration."
    },
    {
      name: "MongoDB",
      Icon: SiMongodb,
      color: 'rgb(9, 255, 0)',
      expertise: "Designing flexible and high-performance data schemas using Mongoose and aggregation pipelines.",
      useCase: "Managing user authentication, handling large datasets, and storing unstructured data efficiently."
    },
    {
      name: "GitHub",
      Icon: FaGithub,
      color: 'black',
      expertise: "Utilizing Git for version control, branching strategies (Git Flow), and collaborative project management.",
      useCase: "Maintaining clean commit histories, resolving merge conflicts, and collaborating on open-source and team projects."
    },
    {
      name: "Java",
      Icon: FaJava,
      color: 'black',
      expertise: "I'm Matered the Basic and Advanced concepts in the Java like OOPS , Thread , JDBC and AWT",
      useCase: "Java is widely used for web development, mobile applications (Android), enterprise software, and backend systems due to its scalability and platform independence. It is also used in cloud computing, game development, and data processing applications for building robust and efficient solutions."
    }
  ];

  return (
    <div className='tech_stack'>
      <ul className='stack'>
        {techStack.map((icon, index) => (
          <li key={index} className='stacks' onClick={() => setFlippedIndex(flippedIndex === index ? null : index)}>
            <div className={`flip-card-inner ${flippedIndex === index ? 'flipped' : ''}`}>
              <div className='flip-card-front'>
                <icon.Icon style={{ width: '60%', height: '60%', color:icon.color }} />
              </div>
              <div className='flip-card-back' style={{backgroundColor:icon.color}}>
                <h5>{icon.name}</h5>
                <p>{icon.expertise}</p>
                <p>{icon.useCase}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Techstack;
