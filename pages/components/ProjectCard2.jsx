import React, { useState } from "react";

function ProjectCard2({ title, description, repo, tech, image, funct }) {
  return (
    <div className="flex flex-col gap-4">
      <img src={image} alt="qsd" />
      <h1 className="text-xl font-bold ">{title}</h1>
      <p className="line-clamp-2">{description}</p>
      <div className="flex gap-5">
        <a
          href={repo}
          className="underline decoration-2 underline-offset-2 text-portfolio-light"
        >
          Repository
        </a>
        <button
          onClick={() => funct()}
          href="fdsdsf"
          className="underline decoration-2 underline-offset-2 text-portfolio-light"
        >
          Details
        </button>
      </div>
    </div>
  );
}

export default ProjectCard2;
