import { BlogPost } from "@data/blog-posts";
import { motion } from "framer-motion";
import { Badge } from "lucide-react";
import { Link } from "react-router-dom";
import { Calendar, Clock } from "lucide-react";
import React from "react";
interface BlogCardProps {
  post: BlogPost;
  index?: number;
  title?: React.ReactNode | string;
  excerpt?: React.ReactNode | string;
}

export function BlogCard({ post, index = 0, title, excerpt }: BlogCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group h-full"
    >
      <Link to={`/blog/${post.id}`} className="block h-full">
        <motion.div
          className="overflow-hidden rounded-xl border border-border bg-card hover:shadow-lg transition-all duration-300 h-full flex flex-col"
          whileHover={{ y: -5 }}
        >
          <div className="relative overflow-hidden aspect-video">
            <img
              src={post.coverImage}
              alt={post.title}
              className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="p-5 flex flex-col flex-grow">
            <div className="flex flex-wrap gap-2 mb-3">
              {post.tags.slice(0, 2).map((tag) => (
                <Badge key={tag}>{tag}</Badge>
              ))}
            </div>
            <h3 className="text-xl font-semibold mb-2 group-hover:text-accent transition-colors">
              {title || post.title}
            </h3>
            <p className="text-muted-foreground text-sm mb-4 flex-grow">
              {excerpt || post.excerpt}
            </p>
            <div className="flex items-center text-xs text-muted-foreground mt-auto gap-4">
              <span className="flex items-center">
                <Calendar className="mr-1 h-3 w-3" />
                {post.date}
              </span>
              <span className="flex items-center">
                <Clock className="mr-1 h-3 w-3" />
                {post.readTime}
              </span>
            </div>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
}
