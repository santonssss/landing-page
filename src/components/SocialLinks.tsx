import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

interface SocialLinksProps {
  className?: string;
  iconSize?: number;
}

export function SocialLinks({
  className = "",
  iconSize = 20,
}: SocialLinksProps) {
  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/santonssss",
      icon: Github,
      label: "GitHub Profile",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/sarvar-kalmuratov-445655304/",
      icon: Linkedin,
      label: "LinkedIn Profile",
    },
    {
      name: "Twitter",
      url: "https://twitter.com",
      icon: Twitter,
      label: "Twitter Profile",
    },
    {
      name: "Email",
      url: "mailto:sarvarkalmuratov370@gmail.com",
      icon: Mail,
      label: "Send Email",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1 },
  };

  return (
    <motion.div
      className={`flex items-center gap-4 ${className}`}
      variants={container}
      initial="hidden"
      animate="show"
    >
      {socialLinks.map((link) => (
        <motion.a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.label}
          className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-secondary hover:bg-accent/10 hover:text-accent transition-all duration-300"
          variants={item}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <link.icon size={iconSize} />
        </motion.a>
      ))}
    </motion.div>
  );
}
