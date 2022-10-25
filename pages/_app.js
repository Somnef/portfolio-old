import '../styles/globals.css';
import Navbar from './components/Navbar';
import ParticlesJs from "./components/snow";
import SocialMedia from "./components/socialMedia";
import { GrFacebookOption, GrGithub, GrInstagram, GrLinkedinOption } from "react-icons/gr";
import { SiDiscord } from "react-icons/si";

function MyApp({ Component, pageProps }) {
  return (
    <div className="container-fluid m-0 p-0 vh-100">
      <header>
        {" "}
        <Navbar />
      </header>
      <ParticlesJs />

      <div className=" text-white sm:flex flex-col justify-center h-full absolute hidden ">
        <h1 className="Name font-[700] sm:top-[25%] top-[30%] ml-10">Kimouche Rayane</h1>
        <div className="text-xl flex flex-col mt-10 md:mt-0 sm:gap-4 gap-6 fixed top-[47%] ml-7">
        <SocialMedia Component={GrLinkedinOption} url='https://www.google.dz/'/>
          <SocialMedia Component={GrGithub} url='https://www.google.dz/' />
          <SocialMedia Component={GrInstagram}  url='https://www.google.dz/'/>
          <SocialMedia Component={SiDiscord} url='https://www.google.dz/'/>
          <SocialMedia Component={GrFacebookOption} url='https://www.google.dz/'/>
        </div>
      </div>

      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
