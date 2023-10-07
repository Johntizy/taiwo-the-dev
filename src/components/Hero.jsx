import React from "react";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#ff4d00]'></div>
          <div className='w-1 sm:h80 h-40 violet-gradient'></div>
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} flex gap-5`}>
            Hi, I'm{" "} <span className='text-[#ff4d00]'>
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString("Taiwo John")
                    .deleteAll()
                    .typeString("A Frontend Developer")
                    .start();
                }}
              />
            </span>
          </h1>

          <p className={`${styles.heroSubText} text-white-100`}>
            {" "}
            I develop web applications, <br className='sm:block hidden' /> User
            Interfaces and mobile applications
          </p>
        </div>
      </div>

      <ComputersCanvas />

      <div className='absolute xs:bottom-0 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl flex border-4 border-secondary justify-center items-start p-2'>
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
