'use client';

import { TypeAnimation } from 'react-type-animation';
import { Canvas } from '@react-three/fiber';
import Avatar from '../components/models/Avatar';
import { Suspense, useState,useEffect,useMemo } from 'react';
import { SectionWrapper } from '../hoc';
import { OrbitControls } from '@react-three/drei';
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";
import Contact from './Contact';
import CanvasLoader from '../components/Loader'
import {StarsCanvas} from '../components/canvas';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import {
    type Container,
    type ISourceOptions,
    MoveDirection,
    OutMode,
  } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

const About = () => {
    const [wave, setWave] = useState(false);
    const [index, setIndex] = useState(0);
    const [init, setInit] = useState(false);

      // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      await loadSlim(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };

  const options: ISourceOptions = useMemo(
    () => ({
      background: {
        color: {
          value: "#000000",
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#ffffff",
        },
        links: {
          color: "#ffffff",
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 3,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 80,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 5 },
        },
      },
      detectRetina: true,
    }),
    [],
  );


    return (
        <section className='flex min-h-screen sm:flex-row flex-col'>
            {/* <StarsCanvas/> */}
            {
                init && (
                    <Particles
                        id="tsparticles"
                        particlesLoaded={particlesLoaded}
                        options={options}
                    />
                )
            }
            <Canvas
                className={`w-100 h-screen bg-transparent`}
                style={{ height: '100vh'}}
                camera={{  position: [0,0.5, 3] }}
            >
                {/* <OrbitControls /> */}
                <directionalLight
                    position={[10, 20, 10]}
                    intensity={1.4}
                />
                <ambientLight
                    intensity={0.3}
                />
                <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity={1} />
                <Suspense fallback={<CanvasLoader/>}>
                    <Avatar
                        wave={wave}
                        setWave={setWave}
                        index={index}
                        setIndex={setIndex}
                        onClick={() => {
                            setWave(true)
                            setIndex((index + 1)% 2)
                        } }
                        scale={[2, 2, 2]}
                        position={[0, -1.9, -0.5]}
                    />
                </Suspense>
            </Canvas>
            <div className='flex flex-col justify-center content-center text-center sm:text-start z-10'>
                <p className={`${styles.sectionSubText} `}>About Me</p>
                <TypeAnimation
                    sequence={[
                        'I am Web Developer.',
                        1000,
                        'I am Software Engineer.',
                        1000
                    ]}
                    wrapper="span"
                    speed={50}
                    style={{ fontSize: '2em', display: 'inline-block' }}
                    repeat={Infinity}
                />
                <motion.p
                    variants={fadeIn("", "", 0.1, 1)}
                    className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px] z-1'
                >
                    Hello there, my name is Adri and I'm a software developer with a passion for creating and learning. I have 3+ years experience in software development. I'm always looking for new challenges and opportunities to grow.
                </motion.p>
                <Contact />
            </div>
        </section>
    );
}

export default SectionWrapper(About, "")