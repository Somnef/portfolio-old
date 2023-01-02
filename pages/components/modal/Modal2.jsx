import { useEffect, useRef } from "react";
import "./modal.module.scss";
import { IoClose } from "react-icons/io5";

function Modal2(props) {
    const modalRef = useRef();

    function handleClick(e) {
        e.stopPropagation();
        props.setShowModal(false);
    }

    return (
        <div
            className={`fixed top-0 left-0 w-screen h-screen
                        flex items-center justify-center 
                        bg-black bg-opacity-70
                        ease-in-out duration-500
                        ${props.show ? "opacity-100 z-[1001]" : "opacity-0 z-[-1]"}`}

            onClick={() => props.setShowModal(false)}
        >

            <div
                className={`w-3/4 h-3/4 
                            bg-black border border-blue-300 rounded-sm 
                            relative 
                            ease-in-out duration-700
                            ${props.show ? "-translate-y-0" : "-translate-y-20"}`}
                onClick={(e) => e.stopPropagation()}
            >
                <IoClose className="absolute right-0 mr-4 mt-4 text-2xl text-blue-300 z-[1002] hover:cursor-pointer" onClick={() => props.setShowModal(false)} />
                
                <div className="absolute left-0 w-1/3 h-full bg-white">
                    <img
                        src={props.item.image2}
                        alt="image"
                        className="w-full h-full" 
                        style={{
                            transition: "0.35s ease-in",
                        }}
                    />
                </div>

                <div className="absolute right-0 w-2/3 h-full bg-gray-900">
                    <div className="mt-10 mb-10 ml-10 mr-10">
                        <h1 className="text-2xl font-bold">
                            {props.item.title}
                        </h1>

                        <div className="ml-3 mt-5">
                            <p className="text-justify">
                                {props.item.description}
                            </p>

                            <p className="mt-2 ml-1 text-sm text-gray-400">
                                Techs used: {props.item.tech}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modal2;