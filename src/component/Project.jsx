import React from "react";
import carrerHUB from '/home/mugesh_ruthvi/Documents/react_protfolio/protfolio/src/component/images/carrerHUB.jpeg';
import resumeBuild from '/home/mugesh_ruthvi/Documents/react_protfolio/protfolio/src/component/images/resume_application.jpeg';

const Project = () => {
  const projects = [
    {
      project_title: "Career Hub",
      project_description:
        "The Career Path & IT Guidance Web Application is a dynamic platform designed to assist individuals in making informed career choices within the IT industry. Built using the MERN stack...",
      project_stack: ["React JS", "Node JS", "MongoDB", "Express JS"],
      project_keypoints: [
        "Latest IT Industry News & Trends",
        "Career Path Selection",
        "Guidance & Learning Resources",
        "Job & Skill Insights",
      ],
      code_link: "https://github.com/63816138?tab=repositories",
      project_img_url: carrerHUB,
      project_video_url: "", // Empty string for unavailable video
    },
    {
      project_title: "Resume Builder",
      project_description:
        "The Resume Builder Web Application is a simple and user-friendly platform designed to help individuals create professional resumes easily...",
      project_stack: ["React JS", "Node JS", "Express JS"],
      project_keypoints: [
        "Real-time Resume Preview",
        "Easy Customization",
        "Download Resume",
        "User-friendly Interface",
      ],
      code_link: "https://github.com/63816138/resume1.git",
      project_img_url: resumeBuild,
      project_video_url: "", // Empty string for unavailable video
    },
  ];

  function mediaToggle(url) {
    if (!url) {
      alert("The video is not available");
      return;
    }
    let mediaContainer = document.getElementById("media_container");
    mediaContainer.innerHTML = `
      <video width="300px" height="200px" controls>
        <source src="${url}" type="video/mp4">
        Your browser does not support the video tag.
      </video>
    `;
  }

  return (
    <div className="project_section">
      {projects.map((project, index) => (
        <section key={index} id={`project${index}`} className="project">
          <div className="project_details">
            <h3>{project.project_title}</h3>
            <p>{project.project_description}</p>
            <ul className="stack_list">
              {project.project_stack.map((stack, i) => (
                <li key={i}>{stack}</li>
              ))}
            </ul>
            <span className="button">
              <button>
                <a
                  href={project.code_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none", color: "whitesmoke" }}
                >
                  Get Code
                </a>
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  mediaToggle(project.project_video_url);
                }}
              >Demo
              </button>
            </span>
          </div>
          <div id="media_container">
            <img
              src={project.project_img_url}
              alt={`${project.project_title}image`}
              width="300px"
              height="200px"
              className="project_image"
            />
          </div>
        </section>
      ))}
    </div>
  );
};

export default Project;
