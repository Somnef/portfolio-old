import React, { useEffect } from "react";
import PresentationCard from "./components/PresentationCard";
import ProjectCard from "./components/ProjectCard";
import { BiArrowToBottom } from "react-icons/bi";
import ExpericenceComponent from "./components/expericenceComponent";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import SocialMedia from "./components/socialMedia";
import { GrFacebookOption, GrGithub, GrInstagram, GrLinkedinOption } from "react-icons/gr";
import { SiDiscord } from "react-icons/si";

function Home(props) {
  useEffect(() => {
    AOS.init({
      duration: 500,
      easing: "ease-out-quart",
    });
  }, []);

  return (
    <div>
      <section className="w-full flex justify-center">
        <div className="container flex flex-col items-center sm:items-start gap-10 mt-52 w-[80%]  md:ml-14 sm:ml-24 text-center md:text-left">
          <h1 className="md:text-8xl text-7xl text-white font-extrabold">
            Hey, I&apos;m Moncef{" "}
            <span style={{ color: "rgba(74, 100, 160, 1)" }}>!</span>
          </h1>
          <h2 className=" sm:text-4xl text-3xl text-[#999999]">
            {"Data Science & AI student, Web  developper"}
          </h2>
          <div className="text-xl  sm:hidden flex justify-center mt-10  gap-6 ">
          <SocialMedia Component={GrLinkedinOption} url='https://www.google.dz/'/>
          <SocialMedia Component={GrGithub} url='https://www.google.dz/' />
          <SocialMedia Component={GrInstagram}  url='https://www.google.dz/'/>
          <SocialMedia Component={SiDiscord} url='https://www.google.dz/'/>
          <SocialMedia Component={GrFacebookOption} url='https://www.google.dz/'/>
        </div>
        </div>
      </section>

      <section id="about" className="w-full flex  justify-center sm:mt-48 mt-24">
        <div className="flex flex-col md:flex-row gap-10 md:w-[80%] w-full  md:ml-14 sm:ml-20 items-center">
          <div className="rounded-full  md:w-1/5 w-3/5 aspect-square">
            <Image
              width={500}
              height={500}
              src="/images/dev.jpg"
              className="rounded-full "
              alt="qsdsq"
            />
          </div>

          <p className="text-gray-400 flex items-center md:w-3/5 w-4/5 text-xl">
            Lorem ipsum . Nunc imperdiet quam vestibulum dolor blandit. Sed ut
            finibus mi, in pulvinar leo. Praesent tristique sapien libero, id
            consequat mauris fringilla non. Proin ornare felis dui, mattis
            vehicula ante ultrices facilisis. Nam consectetur euismod ultrices.
            Mauris faucibus fermentum mauris sit amet tempus. Donec tincidunt
            dignissim risus. Mauris eget quam id neque dapibus auctor quis in
            quam. Nunc dapibus lacinia molestie. Maecenas
          </p>
        </div>
      </section>

      <section id="education" className="w-full flex flex-col items-center">
        <div className="flex flex-col mt-5 w-[80%]  md:ml-14 sm:ml-20">
          <div className="mt-28 flex md:flex-row flex-col md:items-start items-center">
            <div className="flex text-white text-4xl font-bold mt-6 w-2/5 my-16 md:my-0">
              <h1 className=" h-max ">Education</h1>
            </div>
            <div className="grid grid-cols-2 md:w-3/5 w-11/12  gap-14">
              <PresentationCard
                title={"Master's degree in  Industrial Engineering"}
                text={"2020-2023\nNational Polytechnic School"}
              />

              <PresentationCard
                title={"Engineering degree in Data Science and AI"}
                text={"2020-2023\nNational Polytechnic School"}
              />

              <PresentationCard
                title={"Master's degree in Industrial Engineering"}
                text={"2020-2023\nNational Polytechnic School"}
              />

              <PresentationCard
                title={"Engineering degree in Data Science and AI"}
                text={"2020-2023\nNational Polytechnic School"}
              />
            </div>
          </div>

          {/* <div className="mt-28 mb-28 flex flex-col gap-10 w-4/5">
              <h1 className="flex text-white text-3xl font-bold mt-6 py-3 border-teal-500 border-b-4">
                Projects
              </h1>
  
              <ProjectCard2
                title={"This is a title"}
                text={
                  "This is a text that is 22222 supposed to explain how the project works and puts it into example and says where and why it was realised"
                }
              />
  
              <div className="grid grid-cols-2 gap-10">
                <ProjectCard
                  title={"This is a title"}
                  text={
                    "This is a text that is supposed to explain how the projecxplain how the project works and puts it into example and says where and why it was realisedxplain how the project works and puts it into example and says where and why it was realisedxplain how the project works and puts it into example and says where and why it was realisedxplain how the project works and puts it into example and says where and why it was realisedxplain how the project works and puts it into example and says where and why it was realisedt works and puts it into example and says where and why it was realised"
                  }
                  Image_src={"images/snake2.webp"}
                  article_link={"aaa"}
                  code_link={"aaa"}
                />
  
                <ProjectCard
                  title={"This is a title 2"}
                  text={
                    "This is a text that is 22222 supposed to explain how the project works and puts it into example and says where and why it was realised"
                  }
                  Image_src={"images/snake.webp"}
                  article_link={""}
                  code_link={""}
                />
  
                <ProjectCard
                  title={"This is a title 2"}
                  text={
                    "This is a text that is 22222 supposed to explain how the project works and puts it into example and says where and why it was realisedxplain how the project works and puts it into example and says where and why it was realisedxplain how the project works and puts it into example and says where and why it was realisedxplain how the project works and puts it into example and says where and why it was realised"
                  }
                  Image_src={"images/snake.webp"}
                  article_link={""}
                  code_link={""}
                />
  
                <ProjectCard
                  title={"This is a title"}
                  text={
                    "This is a text that is supposed to explain how the project works and puts it into example and says where and why it was realised"
                  }
                  Image_src={"images/snake2.webp"}
                  article_link={""}
                  code_link={"aaa"}
                />
              </div> */}
        </div>
      </section>

      <section id="experiences" className="w-full flex flex-col items-center mt-16 md:mt-0">
        <div className="w-[80%] flex flex-col  md:ml-14 sm:ml-20">
          <h1 className="text-4xl font-bold md:border-b-4 md:py-3 py-6 text-center md:text-left">experiences</h1>
          <div className="flex flex-col items-center">
            <ExpericenceComponent
              period="Avr2022-Jui2022"
              company="BH Advisory"
              post="Data Analyst"
              description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam incidunt natus illo adipisci recusandae ducimus? Tempore aspernatur natus, explicabo debitis enim error aut! Atque praesentium, aliquam ratione exercitationem itaque velit.
            "
            />
            <ExpericenceComponent
              period="Avr2022-Jui2022"
              company="BH Advisory"
              post="Data Analyst"
              description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam incidunt natus illo adipisci recusandae ducimus? Tempore aspernatur natus, explicabo debitis enim error aut! Atque praesentium, aliquam ratione exercitationem itaque velit.
            "
            />
          </div>
        </div>
      </section>

      <section id="skills" className="w-full flex flex-col items-center mt-10">
        <div className="w-[80%] md:ml-14 sm:ml-20 ">
          <h1 className="text-4xl font-bold md:border-b-4 md:py-3 py-5 text-center md:text-left">
            skills & expertise
          </h1>
          <div className="flex md:flex-row flex-col gap-8 mt-5">
            <div className="flex flex-col md:w-[48%] w-full px-6 md:px-0 overflow-x-hidden">
              <div
                className="border-b-[1px] gap-3 flex flex-col py-7 trans"
                style={{ borderColor: "rgba(74, 100, 160, 1)" }}
              >
                <h1 className="text-2xl font-bold ">
                  Object
                  <br /> Programming
                </h1>
                <p className="text-base para">
                  Scripting Servers management and protocols, Automation
                  ,Secure, protects information through encapsulation
                </p>
              </div>
              <div
                className="border-b-[1px] py-7 gap-3 flex flex-col trans"
                style={{ borderColor: "rgba(74, 100, 160, 1)" }}
              >
                <h1 className="text-2xl font-bold">
                  Concevoir
                  <br />
                  Intégration
                </h1>
                <p className="text-base">
                  Scripting Servers management and protocols, Automation
                  ,Secure, protects information through encapsulation
                </p>
              </div>
              <div
                className="border-b-[1px] py-7 gap-3 flex flex-col trans"
                style={{ borderColor: "rgba(74, 100, 160, 1)" }}
              >
                <h1 className="text-2xl font-bold">
                  Développement
                  <br />
                  Cadres
                </h1>
                <p className="text-base">
                  Scripting Servers management and protocols, Automation
                  ,Secure, protects information through encapsulation
                </p>
              </div>
              <div
                className="border-b-[1px] py-7 gap-3 flex flex-col trans "
                style={{ borderColor: "rgba(74, 100, 160, 1)" }}
              >
                <h1 className="text-2xl font-bold">
                  Object
                  <br /> Programming
                </h1>
                <p className="text-base">
                  Scripting Servers management and protocols, Automation
                  ,Secure, protects information through encapsulation
                </p>
              </div>
            </div>
            <div className="md:w-1/2 w-full p-6 ">
              <div
                className="border-[1px] h-full pb-10 md:pb-0 rounded-2xl overflow-hidden flex flex-col  mm hover:bg-[rgb(97,132,214)]"
                style={{
                  borderColor: "rgba(74, 100, 160, 1)",
                  transition: "0.3s ease-in",
                }}
              >
                <div className=" ss">
                  <Image
                    width={500}
                    height={500}
                    src="/images/laptop.svg"
                    alt="sqdsqd"
                  />
                </div>

                <h1 className="text-2xl mt-16 ml-14 font-bold">
                  Programming
                  <br /> Language
                </h1>

                <div className="grid w-4/5 grid-cols-2 gap-3  mt-40 mx-auto">
                  <div
                    className="flex items-center border-[1px] rounded-xl  gap-x-3 py-2 px-2"
                    style={{
                      borderColor: "rgba(74, 100, 160, 1)",
                      backgroundColor: "rgb(1, 11, 29)",
                    }}
                  >
                    <div className="w-8 h-8">
                      <Image
                        width={500}
                        height={500}
                        src="/images/logo/python.webp"
                        alt="python"
                        layout="responsive"
                      />{" "}
                    </div>
                    <h1>Python</h1>
                  </div>
                  <div
                    className="flex items-center border-[1px] rounded-xl gap-x-3 py-2 px-2"
                    style={{
                      borderColor: "rgba(74, 100, 160, 1)",
                      backgroundColor: "rgb(1, 11, 29)",
                    }}
                  >
                    <div className="w-8 h-8">
                      <Image
                        width={500}
                        height={500}
                        src="/images/logo/js.webp"
                        alt="python"
                        layout="responsive"
                      />{" "}
                    </div>

                    <h1>JavaScript</h1>
                  </div>
                  <div
                    className="flex items-center border-[1px] rounded-xl gap-x-3 py-2 px-2"
                    style={{
                      borderColor: "rgba(74, 100, 160, 1)",
                      backgroundColor: "rgb(1, 11, 29)",
                    }}
                  >
                    <div className="w-8 h-8">
                      <Image
                        width={500}
                        height={500}
                        src="/images/logo/react.webp"
                        alt="python"
                        layout="responsive"
                      />{" "}
                    </div>
                    <h1>ReactJs</h1>
                  </div>
                  <div
                    className="flex items-center border-[1px] rounded-xl gap-x-3 py-2 px-2"
                    style={{
                      borderColor: "rgba(74, 100, 160, 1)",
                      backgroundColor: "rgb(1, 11, 29)",
                    }}
                  >
                    <div className="w-8 h-8">
                      <Image
                        width={500}
                        height={500}
                        src="/images/logo/react.webp"
                        alt="python"
                        layout="responsive"
                      />{" "}
                    </div>
                    <h1>ReactJs</h1>
                  </div>
                  <div
                    className="flex items-center border-[1px] rounded-xl gap-x-3 py-2 px-2"
                    style={{
                      borderColor: "rgba(74, 100, 160, 1)",
                      backgroundColor: "rgb(1, 11, 29)",
                    }}
                  >
                    <div className="w-8 h-8">
                      <Image
                        width={500}
                        height={500}
                        src="/images/logo/react.webp"
                        alt="python"
                        layout="responsive"
                      />{" "}
                    </div>
                    <h1>ReactJs</h1>
                  </div>
                  <div
                    className="flex items-center border-[1px] rounded-xl gap-x-3 py-2 px-2"
                    style={{
                      borderColor: "rgba(74, 100, 160, 1)",
                      backgroundColor: "rgb(1, 11, 29)",
                    }}
                  >
                    <div className="w-8 h-8">
                      <Image
                        width={500}
                        height={500}
                        src="/images/logo/react.webp"
                        alt="python"
                        layout="responsive"
                      />{" "}
                    </div>
                    <h1>ReactJs</h1>
                  </div>
                  <div
                    className="flex items-center border-[1px] rounded-xl gap-x-3 py-2 px-2"
                    style={{
                      borderColor: "rgba(74, 100, 160, 1)",
                      backgroundColor: "rgb(1, 11, 29)",
                    }}
                  >
                    <div className="w-8 h-8">
                      <Image
                        width={500}
                        height={500}
                        src="/images/logo/react.webp"
                        alt="python"
                        layout="responsive"
                      />{" "}
                    </div>
                    <h1>ReactJs</h1>
                  </div>
                  <div
                    className="flex items-center border-[1px] rounded-xl gap-x-3 py-2 px-2"
                    style={{
                      borderColor: "rgba(74, 100, 160, 1)",
                      backgroundColor: "rgb(1, 11, 29)",
                    }}
                  >
                    <div className="w-8 h-8">
                      <Image
                        width={500}
                        height={500}
                        src="/images/logo/react.webp"
                        alt="python"
                        layout="responsive"
                      />{" "}
                    </div>
                    <h1>ReactJs</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="porfolio"
        className="w-full flex flex-col items-center mt-10"
      >
        <div className="w-[80%]  md:ml-14 sm:ml-20">
          <h1 className="text-4xl font-bold md:border-b-4 md:py-3 py-6 mb-8 text-center md:text-left">
            My portfolio
          </h1>
          <div className="w-11/12 md:w-full mx-auto md:mx-0 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
            <ProjectCard title="Machine Learning" repo="" details="" />
            <ProjectCard title="Machine Learning" repo="" details="" />
            <ProjectCard title="Machine Learning" repo="" details="" />
      
            <ProjectCard title="Machine Learning" repo="" details="" />
            <ProjectCard title="Machine Learning" repo="" details="" />
            <ProjectCard title="Machine Learning" repo="" details="" />
          </div>
          <div className="w-full flex justify-center items-center my-12">
            <button
              href="ze"
              className="bg-white text-portfolio-dark rounded-lg px-6 py-3 text-2xl font-bold hover:bg-black border-[1px] border-b-4  hover:border-portfolio-light border-white hover:text-white"
              style={{
                transition: "0.3s ease-out",
              }}
            >
              <Link href='projects'>Show more</Link>
              
            </button>
          </div>
        </div>
      </section>

      <section id="contact" className="w-full flex flex-col items-center mb-16">
        <div className="w-[80%]  ml-14 flex flex-col items-center md:items-start">
          <div className="flex md:w-full w-11/12 my-4 md:my-0 bg-white h-[3px] "></div>

          <div className="flex flex-row w-11/12 sm:w-full">
            <div className="flex flex-col md:w-6/12 w-full items-center sm:items-start">
              <h1 className="text-6xl font-extrabold mt-5 mb-16 text-center sm:text-left">
                Get in touch
              </h1>

              <div className="flex flex-row gap-4  border-[1px] border-portfolio-light rounded-xl">
                <div className="flex flex-col  gap-7 p-6 ">
                  <div className=" w-10 h-10 ">
                    <Image
                      width={500}
                      height={500}
                      src="/images/icons/email.svg"
                      alt="mailbox"
                    />
                  </div>
                  <h1 className="text-base border-b-[1px] border-b-portfolio-light pb-3">
                    rayane.kimouche@g.enp.edu.dz
                  </h1>
                  <h1 className="text-base border-b-[1px] border-b-portfolio-light pb-3">
                    rayane.kim.rk@gmail.com
                  </h1>
                </div>
                <div className="flex flex-col gap-7 p-6">
                  <div className=" w-10 h-10 ">
                    <Image
                      width={500}
                      height={500}
                      src="/images/icons/call.svg"
                      alt="mailbox"
                    />
                  </div>

                  <h1 className="text-base border-b-[1px] border-b-portfolio-light pb-3">
                    0561207461
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
            <div className="md:w-6/12 sm:contact1 hidden sm:flex">
              <Image
                width={500}
                height={500}
                src="/images/contact.svg"
                alt="contact"
                className="contact2"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
