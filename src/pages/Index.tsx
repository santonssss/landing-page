import { SocialLinks } from "@components/SocialLinks";
import { AnimatedTransition } from "@components/AnimatedTransition";
import { projects } from "src/data/project";
import { ProjectCard } from "@components/ProjectCard";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, DownloadIcon } from "lucide-react";
import { ButtonCustom } from "@components/ui/ButtonCustom";

const Index = () => {
  const featuredProjects = projects
    .filter((project) => project.featured)
    .slice(0, 3);

  return (
    <AnimatedTransition>
      <section className="min-h-[90vh] flex items-center justify-center bg-gradient-to-b from-background to-secondary/20 px-4 sm:px-6 lg:px-8 pt-20">
        <div className="container mx-auto max-w-4xl">
          <div className="flex flex-col items-center text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-medium mb-4">
                Full-Stack Developer
              </span>
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl font-display font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Creating{" "}
              <span className="text-gradient">digital experiences</span> that
              inspire
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              I'm a passionate full-stack developer specializing in building
              exceptional digital experiences. Currently focused on building
              accessible, human-centered products.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <ButtonCustom variant="accent" asChild>
                <Link to="/projects" className="flex items-center">
                  View Projects <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </ButtonCustom>
              <ButtonCustom variant="outline" asChild>
                <a href="#" download className="flex items-center">
                  Download Resume <DownloadIcon className="ml-2 h-4 w-4" />
                </a>
              </ButtonCustom>
            </motion.div>

            <SocialLinks />
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12">
            <div>
              <motion.span
                className="inline-block bg-secondary text-foreground px-3 py-1 rounded-full text-sm font-medium mb-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                My Work
              </motion.span>
              <motion.h2
                className="text-3xl md:text-4xl font-display font-bold"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Featured Projects
              </motion.h2>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <ButtonCustom variant="outline" asChild>
                <Link to="/projects" className="flex items-center">
                  View All Projects <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </ButtonCustom>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 glass glass-dark">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-display font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Have a project in mind?
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Let's work together to create something amazing. I'm currently
            available for freelance work and open to new opportunities.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <ButtonCustom variant="accent" asChild>
              <Link
                to="/contact"
                className="flex items-center mx-auto justify-center"
              >
                Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </ButtonCustom>
          </motion.div>
        </div>
      </section>
    </AnimatedTransition>
  );
};

export default Index;
