interface ProjectCardProps {
  image: string
  title: string
  description: string
}

export default function ProjectCard({
  image,
  title,
  description,
}: ProjectCardProps) {
  return (
    <div className="projectCard">
      <img
        src={image}
        alt={title}
        className="projectImage"
      />
      <h3 className="projectTitle">{title}</h3>
      <p className="projectDescription">{description}</p>
    </div>
  )
}
