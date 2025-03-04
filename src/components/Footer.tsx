import { Link } from "react-router-dom";
import { SocialLinks } from "./SocialLinks";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full py-8 border-t border-border bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link to="/" className="text-xl font-display font-bold">
              Portfolio
            </Link>
            <p className="text-sm text-muted-foreground mt-1">
              Full-stack developer creating beautiful, functional web
              experiences
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-4">
            <SocialLinks iconSize={16} />
            <p className="text-sm text-muted-foreground">
              © {year} All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
