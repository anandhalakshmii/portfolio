import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies, mobileTech } from "../constants";

const Tech = () => {
  return (
    <>
      <div className='hidden md:flex lg:flex xl:flex flex-row flex-wrap justify-center gap-10'>
        {technologies.map((technology) => (
          <div className='w-28 h-28' key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
      <div className='flex flex-row flex-wrap justify-center gap-10 block sm:block md:hidden lg:hidden xl:hidden'>
      {mobileTech.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
   </>
  );
};

export default SectionWrapper(Tech, "");