import React from "react";

function ProjectItem({ name, about, technologies }) {
  return (
    <div className="projectLtem">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {technologies.map ((tech, index) => (
          <span key={index} className="technology"></span>

        ))}

      </div>
    </div>
  );
}

export default ProjectItem;
