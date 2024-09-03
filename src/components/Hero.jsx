import React from 'react'
import { motion } from 'framer-motion'
import { styles } from '../style'
import { ComputersCanvas } from './canvas'

const Hero = () => {
  return (
    <>
    <section className={`relative w-full h-screen mx-auto hidden sm:block`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h2 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Anandhalakshmi</span>
          </h2>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I'm a full stack developer <br className='sm:block hidden' />
            with a passion for creating seamless, user centric tech solutions.
          </p>
        </div>
      </div>
      <ComputersCanvas />
      
    </section>
    <section className={`relative w-full h-[17rem] mx-auto block sm:block md:hidden lg:hidden xl:hidden`}>
    <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
    <div className='flex flex-col justify-center items-center mt-3'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h4 style = {{fontSize: '30px'}} className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Anandhalakshmi</span>
          </h4>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I'm a full stack developer <br className='sm:block hidden' />
            with a passion for creating seamless, user centric tech solutions.
          </p>
        </div>
      </div>
    </section>
    </>
  );
};

export default Hero