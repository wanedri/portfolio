'use client';

import { TypeAnimation } from 'react-type-animation';
import { Canvas } from '@react-three/fiber';
import Avatar from '../components/models/Avatar';
import { Suspense, useState } from 'react';
import { SectionWrapper } from '../hoc';
import { OrbitControls } from '@react-three/drei';
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";
import Contact from './Contact';
import CanvasLoader from '../components/Loader'

const About = () => {
    const [wave, setWave] = useState(0);

    return (
        <section className='flex min-h-screen sm:flex-row flex-col'>
            <Canvas
                className={`w-100 h-screen bg-transparent`}
                style={{ height: '100vh' }}
                camera={{ near: 5, far: 1000, position: [0, 4, 8] }}
                onClick={() => setWave(1)}
            >
                {/* <OrbitControls /> */}
                <directionalLight
                    position={[10, 20, 10]}
                    intensity={1.8}
                />
                <ambientLight
                    // intensity={0.5}
                    intensity={0.3}
                />
                <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity={1} />
                <Suspense fallback={<CanvasLoader/>}>
                    <Avatar
                        wave={wave}
                        setWave={setWave}
                        scale={[6, 6, 6]}
                        position={[0, -6.5, -2]}
                    />
                </Suspense>
            </Canvas>
            <div className='flex flex-col justify-center content-center text-center sm:text-start'>
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
                    className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
                >
                    Hello there, my name is Adri and I'm a software developer with a passion for creating and learning. I have 3+ years experience in software development. I'm always looking for new challenges and opportunities to grow.
                </motion.p>
                <Contact />
            </div>
        </section>
    );
}

export default SectionWrapper(About, "")