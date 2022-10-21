import React from "react";

function PresentationCard(props) {
    return (
        <div className="flex flex-col">
            <h1 className="text-white font-bold text-2xl">
                {props.title}
            </h1>
            <div className="flex w-[80%] h-[1px] bg-portfolio-light my-3"></div>
            <p className="text-gray-400 text-lg " style={{"white-space": "pre-wrap"}}>
                {props.text}
            </p>
        </div>
    );
}

export default PresentationCard;