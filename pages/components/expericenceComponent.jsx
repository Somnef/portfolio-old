import React from "react";

function ExpericenceComponent({ period, company, post, description }) {
  return (
    <div className="flex md:flex-row flex-col py-6 border-b-[1px] w-[90%] items-center md:items-left border-b-[#222222]">
      <h1 className="md:w-3/12 w-full text-center md:text-left text-lg">
        {period}
      </h1>
      <div className="flex md:flex-col items-center md:items-start justify-around md:justify-start flex-row md:w-3/12 w-full my-6 md:my-0">
        <h1 className="text-2xl">{company}</h1>
        <h2 className="text-portfolio-light md:text-lg text-2xl">{post}</h2>
      </div>
      <p className="md:w-6/12 w-11/12 text-lg">{description}</p>
    </div>
  );
}

export default ExpericenceComponent;
