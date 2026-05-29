import * as React from "react"
import "../styles/index.css"
import Header from "../componets/Header"
import Hero from '../sections/Hero'
import { graphql } from 'gatsby';
import About from "../sections/About";
import Skills from "../sections/Skills";
import Works from "../sections/Works";
import Contact from "../sections/Contact";

const docLink = {
  text: "Documentation",
  url: "https://www.gatsbyjs.com/docs/",
}

const IndexPage = ({ data }) => {
  return (
    <>
      <Header />
      <main className="page">
        {/*<h1 className="mt-0 mb-[64px] max-w-[320px]">*/}
        {/*  Hello, my name is {data.sanityTitle.name}*/}
        {/*  <span className="block">{data.sanityTitle.title}</span>*/}
        {/*</h1>*/}

        {/*<div>*/}
        {/*  <h2>{data.sanityAboutMe.title}</h2>*/}
        {/*  <p dangerouslySetInnerHTML={{ __html: data.sanityAboutMe.description }} />*/}
        {/*</div>*/}

        <Hero />
      </main>
      <About />
      <Skills />
      <Works />
      <Contact />
    </>
  )
}

export default IndexPage

export const query = graphql`
    
  query data {
      sanityTitle {
          name
          title
      }
      sanityAboutMe {
          title
          description
      }
  }
`;

export const Head = () => <title>Home Page</title>