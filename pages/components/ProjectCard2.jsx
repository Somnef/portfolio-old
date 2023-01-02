import React, { useState } from "react";

function ProjectCard2({ title, description, repo, tech, image, funct }) {
	return (
		<div 
			className="flex flex-col group border rounded-b-md rounded-t-md overflow-hidden hover:cursor-pointer"
			onClick={() => funct()}
		>
			<img className="h-[60%]" src={image} alt="image" />
 
			<div className="h-[40%] group-hover:bg-[rgb(97,132,214)] ease-in-out duration-300 py-2 px-2">
				<h1 className="text-xl font-bold">
					{title}
				</h1>

				<p className="line-clamp-2 mt-1">
					{description}
				</p>

				<div className="flex justify-center gap-5 mt-5">
					<a
						href={repo}
						className="text-sm underline decoration-2 underline-offset-2 text-portfolio-light group-hover:text-white ease-in-out duration-300"
					>
						Repository
					</a>
				</div>
			</div>
		</div>
	);
}

export default ProjectCard2;
