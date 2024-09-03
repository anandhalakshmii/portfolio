import React from "react";
import {Tilt} from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../style";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import {profile} from "../assets"
import { fadeIn, textVariant, slideIn } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
    
      <div className={`hidden md:flex lg:flex xl:flex gap-10 flex-1 sm:block`} >
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
         Here's more about myself!<br/>I pursued my UG at Thiagarajar College of Engineering, Madurai in B.Tech IT.
         As a passionate full stack web developer with hands-on experience in Python, MERN Stack, Spring Boot and NextJs, 
         I am constantly seeking new challenges and opportunities to expand my skillset. I am a quick learner 
         and thrive in fast-paced collaborative environments where I can apply my problem-solving skills to create efficient and effective 
         solutions, contributing to the benefit of the society.
        </motion.p>
        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className='xl:h-auto md:h-[550px] h-[350px]'
        >
          <div className="relative w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 xl:w-56 xl:h-56">
        <img
          className="h-full w-full drop-shadow-md rounded-full"
          src={profile}
          alt="Profile"
        />
        <div className="absolute inset-0 rounded-full border-4 border-transparent animate-border-spin border-t-blue-500 border-r-blue-500"></div>
       <div className="absolute inset-0 rounded-full border-4 border-transparent animate-border-pulse border-t-blue-500 border-r-blue-500"></div>
      
      </div>
        </motion.div>
      </div>

      <div className={`flex flex-col items-center gap-10 overflow-hidden  block sm:block md:hidden lg:hidden xl:hidden`}>

      <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className='xl:flex-1 xl:h-auto md:h-[550px] h-[100px] mt-2'
        >
          <div className="relative w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 xl:w-56 xl:h-56">
        <img
          className="h-full w-full drop-shadow-md rounded-full"
          src={profile}
          alt="Profile"
        />
        <div className="absolute inset-0 rounded-full border-4 border-transparent animate-border-spin border-t-blue-500 border-r-blue-500"></div>
       <div className="absolute inset-0 rounded-full border-4 border-transparent animate-border-pulse border-t-blue-500 border-r-blue-500"></div>
      
      </div>
        </motion.div>

        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          style={{textAlign:'center'}}
          className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
         Here's more about myself!<br/>I pursued my UG at Thiagarajar College of Engineering, Madurai in B.Tech IT.
         As a passionate full stack web developer with hands-on experience in Python, MERN Stack, Spring Boot and NextJs, 
         I am constantly seeking new challenges and opportunities to expand my skillset. I am a quick learner 
         and thrive in fast-paced collaborative environments where I can apply my problem-solving skills to create efficient and effective 
         solutions, contributing to the benefit of the society.
        </motion.p>
        
      </div>
          

      <div className='mt-20 flex flex-wrap justify-center gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");