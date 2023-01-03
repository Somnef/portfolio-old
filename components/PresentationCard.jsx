import React from "react";

function PresentationCard(props) {
    return (
        <div className="px-3 py-2 flex flex-col rounded-sm group hover:bg-[rgb(97,132,214)] duration-300 ease-in-out">
            <h1 className="text-gray-200 font-bold text-2xl w-fit group-hover:text-white duration-300 ease-in-out">
                {props.title}
                <div className="flex w-[80%] h-[1px] bg-portfolio-light my-3 group-hover:bg-white duration-300 ease-in-out"></div>
            </h1>
            <p className="text-gray-400 text-lg group-hover:text-gray-200 duration-300 ease-in-out" style={{ "white-space": "pre-wrap" }}>
                {props.text}
            </p>
        </div>
    );
}

export default PresentationCard;