import { useState } from "react";
import { AnimatedTransition } from "@components/AnimatedTransition";
import { ProjectCard } from "@components/ProjectCard";
import { projects, technologies } from "@data/project";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) =>
          project.technologies.includes(activeFilter)
        );

  return (
    <AnimatedTransition className="pt-24 pb-16">
      <div className="container px-4 mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold font-display mb-6">
          My Projects
        </h1>
        <p className="text-lg text-muted-foreground mb-10 max-w-2xl">
          Explore my recent work and personal projects. Each project showcases
          different skills and technologies I've worked with.
        </p>

        <div className="mb-10 overflow-x-auto pb-2">
          <div className="flex gap-2 min-w-max">
            <button
              onClick={() => setActiveFilter("all")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeFilter === "all"
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary hover:bg-secondary/80"
              }`}
            >
              All Projects
            </button>
            {technologies.map((tech) => (
              <button
                key={tech}
                onClick={() => setActiveFilter(tech)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeFilter === tech
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary hover:bg-secondary/80"
                }`}
              >
                {tech}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </AnimatedTransition>
  );
};

export default Projects;
