import React, { useState } from "react";

function ProjectCard2(props) {
	return (
		<div 
			className="flex flex-col group border rounded-b-md rounded-t-md overflow-hidden hover:cursor-pointer hover:shadow-[0_0_5px_3px_rgba(255,255,255,1)] ease-in-out duration-300"
			onClick={() => props.funct()}
		>
			<img className="h-[60%] aspect-video" src={props.image} alt="image" />
 
			<div className="h-[40%] py-2 px-2 group-hover:bg-[rgb(97,132,214)] ease-in-out duration-300">
				<h1 className="text-xl font-bold">
					{props.title}
				</h1>

				<p className="line-clamp-2 mt-1">
					{props.description}
				</p>

				<div className="flex justify-center gap-5 mt-5 mb-5">
					{
						props.repo != undefined &&
						<a
							href={props.repo}
							target="_blank"
							rel="noreferrer"
							onClick={(e) => e.stopPropagation()}
							className="text-sm underline decoration-2 underline-offset-2 text-portfolio-light group-hover:text-white ease-in-out duration-300"
						>
							GitHub
						</a>
					}


					{
						props.researchgate != undefined &&
						<a
							href={props.researchgate}
							target="_blank"
							rel="noreferrer"
							onClick={(e) => e.stopPropagation()}
							className="text-sm underline decoration-2 underline-offset-2 text-portfolio-light group-hover:text-white ease-in-out duration-300"
						>
							ResearchGate
						</a>
					}
				</div>
			</div>
		</div>
	);
}

export default ProjectCard2;
