import Image from "next/image";
import { Children } from "react";
import Hero from '@/components/Hero'
import ProjectCard from '@/components/ProjectCard'


export default function Home() {
  return (
    <>
      <Hero/>

      <section className="section" id="intro">
        <div className="container">
          <h2 className="sectionTitle">Introduction</h2>
          <p className="sectionText">
            I'm a blah blah blah.
          </p>
        </div>
      </section>

      <section className="section" id="intro">
        <div className="container">
          <h2 className="sectionTitle">Work Experience</h2>
          <p className="sectionText">
            Stuff I have done so far
          </p>
        </div>
      </section>

      <section className="section" id="projects">
        <div className="container">
          <h2 className="sectionTitle">Projects</h2>
          <p className="sectionText">
            Here are a few things I've worked on.
          </p>

          <div className="projectGrid">
            <ProjectCard
              image="/project-1.jpg"
              title="Project One"
              description="Short description of what this project is about."
            />
            <ProjectCard
              image="/project-2.jpg"
              title="Project Two"
              description="Another short description."
            />
            <ProjectCard
              image="/project-3.jpg"
              title="Project Three"
              description="Another short description."
            />
          </div>
        </div>
      </section>

      
    </>
    
  );
}
