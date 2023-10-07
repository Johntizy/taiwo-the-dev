import React from "react";
import {Tilt} from "react-tilt";
import { motion } from "framer-motion";

import { github } from "../assets";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";


const PortfolioCard = ({ index, name, description, tags, image, source_code_link }) => (
  <motion.div variants={ fadeIn("up", 'spring', index * 0.5, 0.75)}>
    <Tilt options={{max: 45, scale: 1, speed: 450}} className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'>
      <div className="relative w-full h-[230px]">
        <img src={image} alt={name}  className="w-full h-full object-cover rounded-2xl"/>
        <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
          <div onClick={() => window.open(source_code_link, '_blank')} className="bg-[#ff4d00] w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
            <img src={github} alt="github" className="w-1/2 h-1/2 object-contain" />
          </div>
        </div>
      </div>

      <div className="mt-5">
        <h3 className="text-white font-bold text-[24px]">{name}</h3>
        <p className="mt-2 text-secondary text-[14px]">{description}</p>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <p className={`text-[14px] ${tag.color}`}>#{tag.name}</p>
        ))}
      </div>
    </Tilt>
  </motion.div>
);

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant}>
        <p className={styles.sectionSubText}>My projects so far</p>
        <h2 className={styles.heroHeadText}>My Portfolio</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p variants={fadeIn('', '', 0.1, 1)} className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
        Explore a selection of my latest web development projects, showcasing a diverse range of skills and technologies. <span className="lg:inline hidden">Each project is a testament to my passion for crafting beautiful, functional, and user-friendly websites that deliver exceptional digital experiences. From responsive designs to custom web applications, my portfolio reflects my commitment to excellence in the world of web development.</span>
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <PortfolioCard key={index} index={index} {...project} />
        ))}
      </div>


    </>
  );
};

export default SectionWrapper(Works, "works");
