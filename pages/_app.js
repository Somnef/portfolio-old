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

      <div className=" text-white flex flex-col justify-center h-full absolute">
        <h1 className="Name top-[25%] ml-10">Kimouche Rayane</h1>
        <div className="text-xl flex flex-col gap-4 fixed top-[47%] ml-7">
          <SocialMedia Component={GrLinkedinOption} />
          <SocialMedia Component={GrGithub} />
          <SocialMedia Component={GrInstagram} />
          <SocialMedia Component={SiDiscord} />
          <SocialMedia Component={GrFacebookOption} />
        </div>
      </div>

      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
