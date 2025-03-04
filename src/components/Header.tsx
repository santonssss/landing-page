import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { ThemeToggle } from "./ThemeToggle";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/Button";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 py-4 px-4 md:px-8 transition-all duration-300 ${
        scrolled ? "glass glass-dark shadow-sm py-2" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between">
        <Link
          to="/"
          className="font-display font-bold text-xl sm:text-2xl hover:text-accent transition-colors"
        >
          Portfolio
        </Link>

        <nav className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`relative px-3 py-2 rounded-md text-sm font-medium transition-colors hover:text-accent ${
                location.pathname === item.path
                  ? "text-accent"
                  : "text-foreground/80"
              }`}
            >
              {location.pathname === item.path && (
                <motion.span
                  layoutId="bubble"
                  className="absolute inset-0 bg-accent/10 rounded-md z-[-1]"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              {item.name}
            </Link>
          ))}
          <div className="ml-2">
            <ThemeToggle />
          </div>
        </nav>

        <div className="flex items-center md:hidden">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            className="ml-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          className="glass glass-dark shadow-lg absolute top-full left-0 right-0 pb-4 px-4 md:hidden"
        >
          <nav className="flex flex-col space-y-2 pt-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 rounded-md text-base font-medium transition-colors ${
                  location.pathname === item.path
                    ? "bg-accent/10 text-accent"
                    : "text-foreground hover:bg-secondary"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </motion.div>
      )}
    </header>
  );
}
