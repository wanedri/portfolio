'use client'

import { contacts } from "../constants";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import Link from "next/link";

const Contact = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionSubText} my-4`}>Contact Me.</h2>
      </motion.div>
      <div className='flex flex-row flex-wrap justify-center gap-10'>
        {contacts.map((contact) => (
          <Link href={contact.link} key={contact.name}>
            {contact.icon}
            <p className='text-center'>{contact.name}</p>
          </Link>
        ))}
      </div>
    </>
  )
}

export default Contact;