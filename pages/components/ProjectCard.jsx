import React from "react";

function ProjectCard({ title, repo, details }) {
    return (
        <div className="relative flex group overflow-hidden">
            <div
                className="absolute border border-white rounded bg-opacity-0 group-hover:flex justify-center items-center w-full h-full group-hover:bg-portfolio-light z-10 group-hover:bg-opacity-70"
                style={{
                    transition: "all 0.5s ease-in ",
                }}
            >
                <div
                    className="flex flex-col w-full font-bold h-full justify-center items-center gap-y-10 opacity-0 group-hover:opacity-100"
                    style={{
                        transition: "all 0.5s ease-in",
                    }}
                >
                    <h1 >{title}</h1>

                    <div className="flex w-full justify-center gap-3">
                        <button
                            className="border-2 px-2 py-1 hover:text-portfolio-dark rounded-md"
                            style={{
                                transition: "0.15s ease-in",
                            }}
                        >
                            repository
                        </button>
                        <button
                            className="border-2 px-2 py-1 hover:text-portfolio-dark rounded-md"
                            style={{
                                transition: "0.15s ease-in",
                            }}
                        >
                            details
                        </button>

                    </div>

                </div>

            </div>
            <img
                src="./images/snake3.gif"
                alt="qsdsq"
                className="w-full h-full aspect-video group-hover:scale-105" 
                style={{
                    transition: "0.35s ease-in",
                }}
            />
        </div>
    );
}

export default ProjectCard;