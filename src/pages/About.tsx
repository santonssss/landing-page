import { AnimatedTransition } from "@components/AnimatedTransition";
import { SocialLinks } from "@components/SocialLinks";
import { ButtonCustom } from "@components/ui/ButtonCustom";
import { motion } from "framer-motion";
import { ArrowRight, Download, CheckCircle2, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const skills = [
    {
      category: "Frontend",
      items: [
        "React",
        "TypeScript",
        "Next.js",
        "Tailwind CSS",
        "Framer Motion",
      ],
    },
    {
      category: "Backend",
      items: ["Node.js", "Supabase", "Firebase", "Express", "RESTful APIs"],
    },
    {
      category: "Other",
      items: [
        "Git",
        "Figma",
        "UI/UX Design",
        "Testing",
        "Performance Optimization",
      ],
    },
  ];

  const experiences = [
    {
      title: "Senior Frontend Developer",
      company: "Tech Innovations Inc.",
      period: "2022 - Present",
      description:
        "Lead developer for multiple web applications, focusing on React and TypeScript. Improved performance by 40% through code optimizations and modern rendering techniques.",
    },
    {
      title: "Full Stack Developer",
      company: "Digital Solutions Ltd.",
      period: "2019 - 2022",
      description:
        "Developed and maintained multiple client projects using React, Node.js, and Supabase. Implemented CI/CD pipelines that reduced deployment times by 60%.",
    },
    {
      title: "Web Developer",
      company: "Creative Agency",
      period: "2017 - 2019",
      description:
        "Created responsive websites for various clients across different industries. Worked closely with designers to implement pixel-perfect layouts.",
    },
  ];

  return (
    <AnimatedTransition>
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 pt-32">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <motion.div
                className="mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <span className="inline-block bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-medium mb-4">
                  About Me
                </span>
                <h1 className="text-3xl font-display font-bold mb-4">
                  Sarvar Kalmuratov
                </h1>
                <p className="text-muted-foreground">
                  Full-stack developer with 2+ years of experience building
                  modern web applications.
                </p>
              </motion.div>

              <motion.div
                className="mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <h2 className="text-lg font-semibold mb-3">Contact</h2>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center text-muted-foreground">
                    <span className="font-medium mr-2">Email:</span>
                    <a
                      href="mailto:sarvarkalmuratov370@gmail.com"
                      className="hover:text-accent transition-colors"
                    >
                      sarvarkalmuratov370@gmail.com
                    </a>
                  </li>
                  <li className="flex items-center text-muted-foreground">
                    <span className="font-medium mr-2">Location:</span>
                    <span>San Francisco, CA</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                className="mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h2 className="text-lg font-semibold mb-3">Connect</h2>
                <SocialLinks className="justify-start" iconSize={18} />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <ButtonCustom variant="outline" className="w-full mb-3" asChild>
                  <a
                    href="#"
                    download
                    className="flex items-center justify-center"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Download Resume
                  </a>
                </ButtonCustom>

                <ButtonCustom variant="accent" className="w-full" asChild>
                  <Link
                    to="/contact"
                    className="flex items-center justify-center"
                  >
                    Contact Me
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </ButtonCustom>
              </motion.div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <motion.section
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-2xl font-display font-bold mb-4">
                Biography
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  I'm a full-stack developer with a passion for creating
                  exceptional digital experiences. With over 2 years of
                  professional experience, I specialize in building modern web
                  applications using cutting-edge technologies.
                </p>
                <p>
                  My approach to development is centered around creating clean,
                  efficient, and maintainable code. I believe in the power of
                  well-designed user interfaces and smooth interactions to
                  enhance the overall user experience.
                </p>
                <p>
                  When I'm not coding, I enjoy contributing to open-source
                  projects, writing technical articles, and exploring new
                  technologies. I'm constantly learning and evolving my skill
                  set to stay at the forefront of web development.
                </p>
              </div>
            </motion.section>

            <motion.section
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h2 className="text-2xl font-display font-bold mb-6">
                Experience
              </h2>
              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    className="relative pl-8 border-l border-border"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  >
                    <div className="absolute top-0 left-0 w-4 h-4 rounded-full bg-accent/20 border-2 border-accent transform -translate-x-2.5"></div>
                    <div className="mb-1">
                      <h3 className="text-lg font-semibold">{exp.title}</h3>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span>{exp.company}</span>
                        <span className="w-1 h-1 rounded-full bg-muted-foreground"></span>
                        <span>{exp.period}</span>
                      </div>
                    </div>
                    <p className="text-muted-foreground mt-2">
                      {exp.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-display font-bold">
                  Skills & Technologies
                </h2>
                <Link
                  to="/projects"
                  className="text-sm text-accent flex items-center hover:underline"
                >
                  See projects <ArrowUpRight className="ml-1 h-3 w-3" />
                </Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {skills.map((skillGroup, groupIndex) => (
                  <motion.div
                    key={groupIndex}
                    className="rounded-xl border border-border p-5"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.4 + groupIndex * 0.1,
                    }}
                  >
                    <h3 className="text-lg font-semibold mb-3">
                      {skillGroup.category}
                    </h3>
                    <ul className="space-y-2">
                      {skillGroup.items.map((skill, skillIndex) => (
                        <li
                          key={skillIndex}
                          className="flex items-center text-muted-foreground"
                        >
                          <CheckCircle2 className="mr-2 h-4 w-4 text-accent" />
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          </div>
        </div>
      </div>
    </AnimatedTransition>
  );
};

export default About;
