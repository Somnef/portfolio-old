import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";
// import { loadFull } from "tsparticles";
import { useCallback, useMemo } from "react";

const ParticlesJs = () => {
  const options = useMemo(() => {
    //an empty object will load the default options which are static
    return {
      fpsLimit : 120,
      background: { color: "#00050f" },
      fullScreen: { enable: true, zIndex: -1 },
      particles: {
        move: {
          directions: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 0.1,
          straight: false,
        },
        size: { value: {min:0.5, max:2} },
        opacity: { value: { min: 0.1, max: 0.7 }, animation:{enable: true, speed : 1} },
        roll : {enlighten : {enable :true, speed: 11, backColor: '#fff'}},
        detectRetina: true,
        shape: {
          type: "circle",
        },

      },
    };
  }, []);

  const particlesInit = useCallback((engine) => {
    loadSlim(engine);
  }, []);

  return <Particles init={particlesInit} options={options} />;
};

export default ParticlesJs;
