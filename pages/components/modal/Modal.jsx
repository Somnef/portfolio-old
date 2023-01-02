import { useEffect, useRef } from "react";
import "./modal.module.scss";
import { IoClose } from "react-icons/io5";

function Modal(props) {
	const modalRef = useRef();

	useEffect(() => {
		const clickOutsideContent = (e) => {
			if (e.target === modalRef.current) {
				props.setShowModal(false);
			}
		};
		window.addEventListener("click", clickOutsideContent);
		return () => {
			window.removeEventListener("click", clickOutsideContent);
		};
	}, [props]);

	return (
		<div
			ref={modalRef}
			className={`z-[1001] modal ${props.show ? "active" : ""}`}
		>
			<div
				className="bg-portfolio-light modal__content w-[80%] h-[95%] flex flex-col relative"
				onClick={(e) => e.stopPropagation()}
			>
				<div className="cross text-xl font-bold mt-5 mr-5">
					<IoClose onClick={() => props.setShowModal(false)} />
				</div>
				<div className="flex flex-col py-12 items-center w-full gap-4">
					<h1 className="font-bold text-4xl">{props.item.title}</h1>
					<h2 className="text-portfolio-dark px-3 py-1 rounded-full bg-white">
						Data Science & AI
					</h2>

					<a
						href={props.item.repo}
						className="underline decoration-2 underline-offset-2 text-portfolio-dark"
					>
						Go to repository in Github
					</a>
					<div className=" flex gap-5 items-center font-bold mt-5">
						<h1>Technologies : </h1>
						{Object.entries(props.item.tech).map(([key, el]) => (
							<h1
								key={key}
								className="bg-white text-portfolio-dark px-4 py-1 rounded-3xl "
							>
								{el}
							</h1>
						))}
					</div>
				</div>
				<div className="w-full px-10 h-[40%]">
					<h1 className="text-3xl font-bold border-b-4 ">Description</h1>

					<div className="overflow-auto scroll p-4 px-8 h-[100%]">
						{props.item.description}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Modal;
