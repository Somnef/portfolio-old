import React from "react";
import { IoClose } from "react-icons/io5";

function Model({ shown, close, item }) {
  return (
    shown && (
      <>
        <div
          className="model bg-black bg-opacity-50 flex justify-center "
          onClick={() => close()}
        >
          <div
            className="bg-portfolio-light flex flex-col w-[70%] my-8  relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="cross text-xl font-bold mt-5 mr-5">
              <IoClose onClick={() => close()} />
            </div>
            <div className="flex flex-col py-12 items-center w-full gap-4">
              <h1 className="font-bold text-4xl">{item.title}</h1>
              <h2 className="text-portfolio-dark px-3 py-1 rounded-full bg-white">
                Data Science & AI
              </h2>

              <a
                href={item.repo}
                className="underline decoration-2 underline-offset-2 text-portfolio-dark"
              >
                Go to repository in Github
              </a>
              <div className=" flex gap-5 items-center font-bold mt-5">
                <h1>Technologies : </h1>
                {item.tech.map((el) => (
                  <h1 className="bg-white text-portfolio-dark px-4 py-1 rounded-3xl ">
                    {el}
                  </h1>
                ))}
              </div>
            </div>
            <div className="w-full px-10 h-44">
              <h1 className="text-3xl font-bold border-b-4 ">Description</h1>

              <div
                className="overflow-auto scroll 
                  p-4 px-8 h-[100%]"
              >
                {item.description}
              </div>
            </div>
          </div>
        </div>
      </>
    )
  );
}

export default Model;
