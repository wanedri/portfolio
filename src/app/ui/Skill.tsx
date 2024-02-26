'use client';

import { BallCanvas } from "../components/canvas";
import { technologies } from "../constants";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const Skills = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText} mb-4`}>Skills.</h2>
      </motion.div>
      <div className='flex flex-row flex-wrap justify-center gap-10'>
        {technologies.map((technology) => (
          <div className='w-28 h-28' key={technology.name}>
            <BallCanvas icon={technology.icon} />
            <p className='text-center'>{technology.name}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default SectionWrapper(Skills, "")