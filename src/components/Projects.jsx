import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <section id="projects" className="pt-24">
      <h2 className="font-bold text-5xl drop-shadow-md text-center mb-8">
        Meus projetos
      </h2>
      <div className="flex flex-wrap gap-6 justify-center lg:grid lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
