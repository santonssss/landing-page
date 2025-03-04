import { motion } from "framer-motion";
import { pageTransition } from "@utils/animations";

interface AnimatedTransitionProps {
  children: React.ReactNode;
  className?: string;
}

export function AnimatedTransition({
  children,
  className = "",
}: AnimatedTransitionProps) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={pageTransition}
      className={`min-h-screen w-full ${className}`}
    >
      {children}
    </motion.div>
  );
}
