import React from "react";
import bgImage from '../assets/images/AboutBg.png'
import aboutImg from '../assets/images/AboutImage.png'

export default function About() {
  return (
    <div id='about' className="bg-cover bg-center bg-no-repeat"
         style={{
           backgroundImage: `url(${bgImage})`,
         }}>
      <div className="max-w-7xl mx-auto mt-[64px] md:mt-[15dvh] px-6 py-[128px] gap-[5vw] flex flex-col md:flex-row">
        <div className="w-full">
          <h2 className="w-fit border border-accent rounded-tl-[40px] rounded-br-[40px] text-[32px] py-4 px-8">
            About Me
          </h2>
          <div className="mt-4 bg-mainDark py-4 px-6 rounded-[40px]">
            <span className="block text-accent font-IBMPlex text-[14px] leading-normal py-4">{`<p>`}</span>
            <p className="text-4 inline-block leading-normal font-IBMPlex">
                <h3 className="text-accent text-[24px]">Hello</h3>
                <span className="block ">
                  My name is Sinan and I specialize in web developement that utilizes HTML, CSS, JS, and REACT etc.
                  I am a highly motivated individual and eternal optimist dedicated to writing clear, concise, robust code that works. Striving to never stop learning and improving.
                  When I'm not coding, I am writing bolgs, reading, or picking up some new hands-on art project like photography.
                  I like to have my perspective and belief systems challenged so that I see the world through new eyes.
                </span>
            </p>
            <span className="inline-block text-accent font-IBMPlex text-[14px] py-4">{`</p>`}</span>
          </div>
        </div>
        <img src={aboutImg} width="450" height="555" className="w-auto h-auto object-contain"/>
      </div>
    </div>
  )
}