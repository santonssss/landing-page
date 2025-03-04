import { Project } from "src/data/project";
import { motion } from "framer-motion";
import { Badge } from "./ui/Badge";
import { Github, ExternalLink, ArrowUpRight } from "lucide-react";
import { ButtonCustom } from "./ui/ButtonCustom";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/Dialog";

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const tagColors: Record<string, string> = {
    React: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300",
    TypeScript:
      "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300",
    "Tailwind CSS":
      "bg-teal-100 text-teal-800 dark:bg-teal-900/30 dark:text-teal-300",
    Supabase:
      "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300",
    "Redux Toolkit":
      "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300",
    Recharts:
      "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <Dialog>
        <DialogTrigger asChild>
          <motion.div
            className="overflow-hidden rounded-xl border border-border bg-card hover:shadow-lg transition-all duration-300 cursor-pointer h-full flex flex-col"
            whileHover={{ y: -5 }}
          >
            <div className="relative overflow-hidden aspect-video">
              <img
                src={project.image}
                alt={project.title}
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
              />
              {project.featured && (
                <span className="absolute top-2 right-2 bg-accent/90 text-white text-xs px-2 py-1 rounded-full">
                  Featured
                </span>
              )}
            </div>
            <div className="p-5 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-muted-foreground text-sm mb-4 flex-grow">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.slice(0, 3).map((tag) => (
                  <Badge
                    key={tag}
                    variant="outline"
                    className={tagColors[tag] || ""}
                  >
                    {tag}
                  </Badge>
                ))}
                {project.tags.length > 3 && (
                  <Badge variant="outline">+{project.tags.length - 3}</Badge>
                )}
              </div>
              <div className="flex items-center justify-between mt-4 text-sm text-muted-foreground">
                <span>{project.date}</span>
                <motion.span
                  className="text-accent flex items-center"
                  initial={{ x: 0 }}
                  whileHover={{ x: 3 }}
                >
                  View Details <ArrowUpRight className="ml-1 h-3 w-3" />
                </motion.span>
              </div>
            </div>
          </motion.div>
        </DialogTrigger>

        <DialogContent className="sm:max-w-3xl">
          <DialogHeader>
            <DialogTitle className="text-2xl">{project.title}</DialogTitle>
            <DialogDescription className="text-muted-foreground">
              {project.date}
            </DialogDescription>
          </DialogHeader>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mt-4">
            <div className="md:col-span-3">
              <img
                src={project.image}
                alt={project.title}
                className="rounded-lg w-full h-auto object-cover"
              />
            </div>
            <div className="md:col-span-2 flex flex-col">
              <div className="mb-4">
                <h4 className="text-sm font-medium text-muted-foreground mb-2">
                  Technologies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className={tagColors[tag] || ""}
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
              <div className="mb-6 flex-grow">
                <h4 className="text-sm font-medium text-muted-foreground mb-2">
                  Description
                </h4>
                <p className="text-sm text-foreground">
                  {project.details || project.description}
                </p>
              </div>
              <div className="flex space-x-3 mt-auto">
                {project.githubUrl && (
                  <ButtonCustom variant="outline" size="sm" asChild>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      GitHub
                    </a>
                  </ButtonCustom>
                )}
                {project.liveUrl && (
                  <ButtonCustom variant="accent" size="sm" asChild>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  </ButtonCustom>
                )}
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </motion.div>
  );
}
