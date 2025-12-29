import styles from './Projects.module.css'
import ProjectCard from '@/components/ProjectCard'

export default function ProjectsPage() {
  return (
    <main className="container">
      <h1 className="pageTitle">Projects</h1>

      <section className="section">
        <h2 className="sectionTitle">Programs & Hackathons</h2>
        <p>Projects built through hackathons and selective technical programs.</p>
        <div className="projectGrid">
          <ProjectCard
            image="/project-1.jpg"
            title="WebSpatial"
            description="Program Description: Built spatial applications for visionOS, designing mixed 2D-and-3D interfaces that live in a shared mixed-reality environment using Apple's spatial computing architecture."
          />
          <ProjectCard
            image="/project-2.jpg"
            title="AWS x INRIX"
            description="1–2 sentence description."
          />
        </div>
      </section>

      <section className="section">
        <h2 className="sectionTitle">Research</h2>
        <div className="projectGrid">
          <ProjectCard 
            image="/project-3.jpg" 
            title="Human-AI" 
            description="..." />
          <ProjectCard 
            image="/project-4.jpg" 
            title="Body Pos" 
            description="..." />
          <ProjectCard 
            image="/project-5.jpg" 
            title="Gaussian Splatting" 
            description="..." />
        </div>
      </section>

      <section className="section">
        <h2 className="sectionTitle">Personal</h2>
        <div className="projectGrid">
          <ProjectCard image="/project-6.jpg" title="Other 1" description="..." />
          <ProjectCard image="/project-7.jpg" title="Other 2" description="..." />
          <ProjectCard image="/project-8.jpg" title="Other 3" description="..." />
        </div>
      </section>
    </main>
  )
}
