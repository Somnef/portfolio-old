import React, { useEffect, useState } from "react";
import PresentationCard from "./components/PresentationCard";
import ProjectCard from "./components/ProjectCard";
import { BiArrowToBottom } from "react-icons/bi";
import ExpericenceComponent from "./components/expericenceComponent";
import AOS from "aos";
import { items } from "./components/data";
import ProjectCard2 from "./components/ProjectCard2";
import Modal2 from "./components/modal/Modal2";
import "aos/dist/aos.css";

function Home(props) {
	useEffect(() => {
		AOS.init({
			duration: 500,
			easing: "ease-out-quart",
		});
	}, []);

	const [toggler, setToggler] = useState(false);
	const [modalShown, setModel] = useState(false);
	const [render, setRender] = useState(false);

	const [selectedItem, setSelectedItem] = useState({
		title: "dsf",
		description: "dsf",
		repo: "sdf",
		tech: ["cxw"],
		image: "",
		image2: "",
	});

	function openModal(el) {
		setSelectedItem({
			title: el.title,
			description: el.description,
			repo: el.repo,
			tech: el.tech,
			image: el.image,
			image2: el.image2,
		});
		setShowModal(true);
	}

	useEffect(() => {
		setRender(true);
	});

	const [showModal, setShowModal] = useState(false);

	return (
		<div className={`flex items-center justify-center ${showModal ? "overflow-hidden" : ""}`}>
			<Modal2
				show={showModal}
				setShowModal={setShowModal}
				item={selectedItem}
			/>
			<div class="w-[90%]">
				<section className="w-full flex justify-center">
					<div className="flex flex-row items-center gap-10 mt-52 w-[80%]  ml-14">
						<img
							className="rounded-full bg-white w-1/5 aspect-square"
							src="images/dev.jpg"
							alt="qsdsq"
						/>

						<div className="container flex flex-col gap-5">
							<h1 className="text-7xl text-white font-extrabold">
								Hey, I'm {" "}
								<span style={{ color: "rgba(74, 100, 160, 1)" }}>Moncef</span>!
							</h1>

							<h2 className=" text-3xl text-[#999999]">
								{"Data Science & AI student, Web  developper"}
							</h2>
						</div>
					</div>
				</section>

				<section id="about" className="w-full flex  justify-center mt-14">
					<div className="w-[80%] ml-14">
						<p className="text-gray-400 flex items-center">
							I am Moncef, currently a student of Industrial Engineering,
							specialized in Data Science and Artificial Intelligence at the
							National Polytechnic School of Algiers. I am a technology lover who
							works on different AI, video game and web app projects.
						</p>
					</div>
				</section>

				<section
					id="education"
					className="w-full flex flex-col items-center mt-14"
				>
					<div className="flex flex-col mt-5 w-[80%]  ml-14">
						<h1 className="text-4xl font-bold border-b-4 py-3">Education</h1>
						<div className="flex flex-col gap-5 mt-10">
							<PresentationCard
								title={"Master's Degree in  Industrial Engineering"}
								text={"2020-2023\nNational Polytechnic School"}
							/>

							<PresentationCard
								title={"Engineering Degree in Data Science and AI"}
								text={"2020-2023\nNational Polytechnic School"}
							/>
						</div>
					</div>
				</section>

				<section
					id="experiences"
					className="w-full flex flex-col items-center mt-14"
				>
					<div className="w-[80%] flex flex-col  ml-14">
						<h1 className="text-4xl font-bold border-b-4 py-3">
							Professional Experience
						</h1>
						<div className="flex flex-col items-center">
							<ExpericenceComponent
								period="November 2022 - Today"
								company="Ericsson"
								post="Data Scientist / AI Engineer intern"
								description="Internship where I worked on understanding how networking occurs in IOT systems,
							and how we can use deep learning techniques within them to boost efficiency and security."
							/>
							<ExpericenceComponent
								period="May 2022 - July 2022"
								company="BH Advisory"
								post="Jr Consultant / Data Analyst intern"
								description="Internship where the mission consisted of monitoring the construction materials market in Algeria, 
							study the price trends and quantities imported/exported over the last decade."
							/>
							<ExpericenceComponent
								period="December 2021 - Today"
								company="Innoprofits"
								post="Freelancer"
								description="Studies of startup projects and highlighting the complexity of the technical aspects in which they
				are trying to innovate."
							/>
							<ExpericenceComponent
								period="November 2021 - May 2022"
								company="AiTech"
								post="Data Scientist intern"
								description="Research on processing, cleaning, classifying and detecting outliers in data drawn from the company's ERP."
							/>
							<ExpericenceComponent
								period="February 2021 - March 2021"
								company="CasbahTech"
								post="Discovery intern"
								description="Initiation to work in a company, introduction to web development and teamwork with AGILE methodology."
							/>
						</div>
					</div>
				</section>

				<section id="skills" className="w-full flex flex-col items-center mt-10">
					<div className="w-[80%] ml-14">
						<h1 className="text-4xl font-bold border-b-4 py-3">
							Skills & Expertise
						</h1>
						<div className="flex flex-row gap-8 mt-5">
							<div className="w-1/2 h-[40rem] mt-3">
								<div
									className="border-[1px] h-full rounded-2xl overflow-hidden flex flex-col mm hover:bg-[rgb(97,132,214)]"
									style={{
										borderColor: "rgba(74, 100, 160, 1)",
										transition: "0.3s ease-in",
									}}
								>
									<img src="./images/laptop.svg" alt="sqdsqd" className=" ss z-0 opacity-70" />
									<h1 className="text-3xl mt-20 ml-14 font-bold z-10">
										Programming Languages
									</h1>
									<h1 className="text-sm text-gray-200 text-justify mt-5 ml-[4rem] w-[75%] z-10">
										Here are the main programming languages I use on a regular basis for my different projects, some I use 
										when working on data science projects, others in web development or game development:
									</h1>

									<div className="grid w-4/5 grid-cols-2 gap-3 mt-[3rem] mb-10 mx-auto">
										<div
											className="flex items-center border-[1px] rounded-xl  gap-x-3 py-2 px-2"
											style={{
												borderColor: "rgba(74, 100, 160, 1)",
												backgroundColor: "rgb(1, 11, 29)",
											}}
										>
											<img
												src="./images/logo/C.webp"
												alt="C"
												className="w-8 h-8"
											/>
											<h1>C</h1>
										</div>

										<div
											className="flex items-center border-[1px] rounded-xl  gap-x-3 py-2 px-2"
											style={{
												borderColor: "rgba(74, 100, 160, 1)",
												backgroundColor: "rgb(1, 11, 29)",
											}}
										>
											<img
												src="./images/logo/C++.webp"
												alt="C++"
												className="w-8 h-8"
											/>
											<h1>C++</h1>
										</div>

										<div
											className="flex items-center border-[1px] rounded-xl  gap-x-3 py-2 px-2"
											style={{
												borderColor: "rgba(74, 100, 160, 1)",
												backgroundColor: "rgb(1, 11, 29)",
											}}
										>
											<img
												src="./images/logo/C_sharp.webp"
												alt="C#"
												className="w-8 h-8"
											/>
											<h1>C#</h1>
										</div>

										<div
											className="flex items-center border-[1px] rounded-xl  gap-x-3 py-2 px-2"
											style={{
												borderColor: "rgba(74, 100, 160, 1)",
												backgroundColor: "rgb(1, 11, 29)",
											}}
										>
											<img
												src="./images/logo/python.webp"
												alt="python"
												className="w-8 h-8"
											/>
											<h1>Python</h1>
										</div>

										<div
											className="flex items-center border-[1px] rounded-xl gap-x-3 py-1 px-2"
											style={{
												borderColor: "rgba(74, 100, 160, 1)",
												backgroundColor: "rgb(1, 11, 29)",
											}}
										>
											<img
												src="./images/logo/java.webp"
												alt="java"
												className="w-8 h-10"
											/>
											<h1>Java</h1>
										</div>

										<div
											className="flex items-center border-[1px] rounded-xl gap-x-3 py-2 px-2"
											style={{
												borderColor: "rgba(74, 100, 160, 1)",
												backgroundColor: "rgb(1, 11, 29)",
											}}
										>
											<img
												src="./images/logo/js.webp"
												alt="javascript"
												className="w-8 h-8"
											/>
											<h1>JavaScript</h1>
										</div>

										<div
											className="flex items-center border-[1px] rounded-xl gap-x-3 py-2 px-2"
											style={{
												borderColor: "rgba(74, 100, 160, 1)",
												backgroundColor: "rgb(1, 11, 29)",
											}}
										>
											<img
												src="./images/logo/php.webp"
												alt="php"
												className="w-9 h-6"
											/>
											<h1>PHP</h1>
										</div>

										<div
											className="flex items-center border-[1px] rounded-xl gap-x-3 py-2 px-2"
											style={{
												borderColor: "rgba(74, 100, 160, 1)",
												backgroundColor: "rgb(1, 11, 29)",
											}}
										>
											<img
												src="./images/logo/laravel.webp"
												alt="laravel"
												className="w-8 h-8"
											/>
											<h1>Laravel</h1>
										</div>

										<div
											className="flex items-center border-[1px] rounded-xl gap-x-3 py-2 px-2"
											style={{
												borderColor: "rgba(74, 100, 160, 1)",
												backgroundColor: "rgb(1, 11, 29)",
											}}
										>
											<img
												src="./images/logo/vuejs.webp"
												alt="VueJS"
												className="w-8 h-8"
											/>
											<h1>VueJs</h1>
										</div>

										<div
											className="flex items-center border-[1px] rounded-xl gap-x-3 py-2 px-2"
											style={{
												borderColor: "rgba(74, 100, 160, 1)",
												backgroundColor: "rgb(1, 11, 29)",
											}}
										>
											<img
												src="./images/logo/react.webp"
												alt="ReactJS"
												className="w-8 h-8"
											/>
											<h1>ReactJs</h1>
										</div>
									</div>
								</div>
							</div>

							<div className="flex flex-col w-[48%] mt-3 ">
								<div
									className="border-b-[1px] border-t-[1px] rounded-t-lg gap-3 flex flex-col pt-4 pb-7 hover:bg-[rgb(97,132,214)] hover:pt-6 hover:pb-9 duration-300 ease-in-out"
									style={{ 
										borderColor: "rgba(74, 100, 160, 1)",
									}}
								>
									<h1 className="text-2xl font-bold ml-5 mr-5">
										Data analysis
									</h1>
									<p className="text-base text-gray-200 para ml-5 mr-5">
										I regularly have to do exploratory data analysis operations in my field of study.
									</p>
								</div>
								
								<div
									className="border-b-[1px] gap-3 flex flex-col pt-4 pb-7 hover:bg-[rgb(97,132,214)] hover:pt-6 hover:pb-9 duration-300 ease-in-out "
									style={{ 
										borderColor: "rgba(74, 100, 160, 1)",
									}}
								>
									<h1 className="text-2xl font-bold ml-5 mr-5 ">
										Machine Learning & Deep Learning
									</h1>
									<p className="text-base text-gray-200 para ml-5 mr-5 ">
										This is an essential part of what I usually do in my field, it includes 
										classification, computer vision, self-learning agents... etc.
									</p>
								</div>

								<div
									className="border-b-[1px] gap-3 flex flex-col pt-4 pb-7 hover:bg-[rgb(97,132,214)] hover:pt-6 hover:pb-9 duration-300 ease-in-out"
									style={{ 
										borderColor: "rgba(74, 100, 160, 1)",
									}}
								>
									<h1 className="text-2xl font-bold ml-5 mr-5 ">
										Web Development
									</h1>
									<p className="text-base text-gray-200 para ml-5 mr-5 ">
										I have written many web sites and web apps, including this one, which 
										I wrote using ReactJs and NextJs!
									</p>
								</div>

								<div
									className="border-b-[1px] gap-3 flex flex-col pt-4 pb-7 hover:bg-[rgb(97,132,214)] hover:pt-6 hover:pb-9 duration-300 ease-in-out"
									style={{ 
										borderColor: "rgba(74, 100, 160, 1)",
									}}
								>
									<h1 className="text-2xl font-bold ml-5 mr-5 ">
										Game Development
									</h1>
									<p className="text-base text-gray-200 para ml-5 mr-5 ">
										I have a huge passion for video games, which I tend to try and make some of on my free time.
									</p>
								</div>

								<div
									className="border-b-[1px] rounded-b-lg gap-3 flex flex-col pt-4 pb-7 hover:bg-[rgb(97,132,214)] hover:pt-6 hover:pb-9 duration-300 ease-in-out"
									style={{ 
										borderColor: "rgba(74, 100, 160, 1)",
									}}
								>
									<h1 className="text-2xl font-bold ml-5 mr-5 ">
										Problem Solving
									</h1>
									<p className="text-base text-gray-200 para ml-5 mr-5 ">
										My team and colleagues heavily rely on me when it comes to finding solutions and automations 
										for miscellaneous problems.
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section id="porfolio" className="w-full flex flex-col items-center mt-10">
					<div className="w-[80%] gap-5 ml-14">
						<h1 className="text-4xl font-bold border-b-4 py-3 mb-8">
							My projects
						</h1>
						<div className="grid grid-cols-3 gap-x-5 gap-y-16 mb-16">
							{items.map((el) =>

							(
								<ProjectCard2
									key={el.id}
									title={el.title}
									type={el.type}
									description={el.description}
									repo={el.repo}
									image={el.image}
									tech={el.tech}
									funct={() => {
										openModal(el);
									}}
								/>
							))}
						</div>
					</div>
				</section>

				<section id="contact" className="w-full flex flex-col items-center mb-16">
					<div className="w-[80%]  ml-14">
						<div className="flex w-full bg-white h-[3px] "></div>

						<div className="flex flex-row ">
							<div className="flex flex-col w-6/12">
								<h1 className="text-6xl font-extrabold mt-5 mb-16">
									Get in touch
								</h1>

								<div className="flex flex-row gap-4  border-[1px] border-portfolio-light rounded-xl">
									<div className="flex flex-col gap-7 p-6 ">
										<img
											src="./images/icons/email.svg"
											alt="mailbox"
											className=" w-10 h-10 "
										/>
										<h1 className="text-base border-b-[1px] border-b-portfolio-light pb-3">
											ahmed_moncef.bousselat@g.enp.edu.dz
										</h1>
										<h1 className="text-base border-b-[1px] border-b-portfolio-light pb-3">
											a.m.bousselat@gmail.com
										</h1>
									</div>
									<div className="flex flex-col gap-7 p-6">
										<img
											src="./images/icons/call.svg"
											alt="mailbox"
											className=" w-10 h-10 "
										/>
										<h1 className="text-base border-b-[1px] border-b-portfolio-light pb-3">
											+213 560 611 275
										</h1>
									</div>
								</div>
								<button
									style={{ transition: "0.3s ease-out" }}
									className="bg-white border-[1px] border-b-4 hover:translate-x-3 border-white hover:border-portfolio-light hover:bg-black hover:text-white text-black w-2/3 mt-12 rounded-lg py-3 flex items-center justify-between font-bold px-6"
								>
									Download Resume{" "}
									<span className="text-bold text-2xl">
										<BiArrowToBottom />
									</span>
								</button>
							</div>
							<div className="w-6/12 contact1">
								<img
									src="./images/contact.svg"
									alt="contact"
									className="contact2"
								/>
							</div>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
}

export default Home;
