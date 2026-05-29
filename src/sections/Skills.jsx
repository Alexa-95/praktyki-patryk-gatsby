import React from "react";
import backgroundImage from '../assets/images/Skills.png'
import HTMLLogo from '../assets/images/HTML.svg'
import cssLogo from '../assets/images/CSS.svg'
import jsLogo from '../assets/images/JS.svg'
import reactLogo from '../assets/images/React.svg'

export default function Skills() {
  return (
    <div id="skills"
         className="bg-cover bg-center bg-no-repeat"
         style={{
           backgroundImage: `url(${backgroundImage})`,
         }}
    >
      <div className="max-w-7xl px-6 py-[128px] gap-[5vw] flex flex-col md:flex-row mx-auto">
        <div className="w-full max-w-lg mx-auto">
          <h2 className="text-center text-accent font-IBMPlex text-[32px] underline">Skills</h2>
          <p className="text-center font-IBMPlex text-[14px] py-4">
            I am striving to never stop learning and improving
          </p>
          <div className="mt-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-16">
              <div className="flex flex-col justify--center gap-4 text-center transition duration-300 hover:grayscale">
                <img src={HTMLLogo}/>
                <span className="font-light tracking-widest">HTML</span>
              </div>
              <div className="flex flex-col justify--center gap-4 text-center transition duration-300 hover:grayscale">
                <img src={cssLogo}/>
                <span className="font-light tracking-widest">CSS</span>
              </div>
              <div className="flex flex-col justify--center gap-4 text-center transition duration-300 hover:grayscale">
                <img src={jsLogo}/>
                <span className="font-light tracking-widest">JavaScript</span>
              </div>
              <div className="flex flex-col justify--center gap-4 text-center transition duration-300 hover:grayscale">
                <img src={reactLogo}/>
                <span className="font-light tracking-widest">React</span>
              </div>
            </div>
          </div>
        </div>
    </div>
    </div>
  )
}