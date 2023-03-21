import '../styles/globals.css';
import Navbar from '../components/Navbar';
import ParticlesJs from "../components/snow";
import SocialMedia from "../components/socialMedia";
import { GrFacebookOption, GrGithub, GrInstagram, GrLinkedinOption } from "react-icons/gr";
import { SiDiscord } from "react-icons/si";
import { Analytics } from '@vercel/analytics/react';

function MyApp({ Component, pageProps }) {
  return (
    <div className="container-fluid m-0 p-0 vh-100">
      <header>
        {" "}
        <Navbar />
      </header>
      <ParticlesJs />

      <div className=" text-white flex flex-col justify-center h-full absolute">
        <h1 className="Name top-[32%] ml-10">Bousselat Ahmed Moncef</h1>
        <div className="text-xl flex flex-col gap-4 fixed top-[54%] ml-7">
          <SocialMedia Component={GrLinkedinOption} link="https://www.linkedin.com/in/ahmedmoncefbousselat/" />
          <SocialMedia Component={GrGithub} link="https://github.com/Somnef"/>
          <SocialMedia Component={SiDiscord} link="https://discordapp.com/users/somnef#2299"/>
        </div>
      </div>

      <Component {...pageProps} />
      
      <Analytics />
    </div>
  )
}

export default MyApp
