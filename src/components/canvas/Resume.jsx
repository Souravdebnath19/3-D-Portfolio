import React from "react";


import { SectionWrapper } from "../hoc";
import { resume } from "./canvas";
import { useHref } from "react-router-dom";
import { a } from "maath/dist/objectSpread2-284232a6.esm";
import { div } from "three/examples/jsm/nodes/nodes.js";

const Resumelink = () => {
    return (
      <div className='flex flex-row flex-wrap justify-center gap-10'>
        {resume.map((resume) => (
          <div className='w-28 h-28' key={nav.title}>
          
           <a href="https://drive.google.com/file/d/1LO7FZKcsR296xBuhk_EeqpMUI13-pAZZ/view?usp=drive_link">resume</a>
          </div>
        ))}
      </div>
    );
  };
  export default SectionWrapper(resume, "resume");
