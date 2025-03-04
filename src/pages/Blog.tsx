import { useState } from "react";
import { AnimatedTransition } from "@components/AnimatedTransition";
import { BlogCard } from "@components/BlogCard";
import { blogPosts } from "@data/blog-posts";
import { Input } from "@components/ui/Input";
import { Search } from "lucide-react";

const highlightText = (text: string, query: string) => {
  if (!query) return text;

  const parts = text.split(new RegExp(`(${query})`, "gi"));

  return parts.map((part, index) =>
    part.toLowerCase() === query.toLowerCase() ? (
      <mark key={index} className="bg-yellow-300 text-black font-semibold">
        {part}
      </mark>
    ) : (
      part
    )
  );
};

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = blogPosts.filter((post) =>
    [post.title, post.excerpt, ...post.tags, ...post.categories].some((field) =>
      field.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  return (
    <AnimatedTransition className="pt-24 pb-16">
      <div className="container px-4 mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold font-display mb-6">
          Blog
        </h1>
        <p className="text-lg text-muted-foreground mb-10 max-w-2xl">
          Thoughts, insights, and tutorials about web development, design, and
          technology.
        </p>
        <div className="relative mb-10 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            type="text"
            placeholder="Search articles..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <BlogCard
                key={post.id}
                post={post}
                index={index}
                title={highlightText(post.title, searchQuery)}
                excerpt={highlightText(post.excerpt, searchQuery)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-lg font-medium mb-2">No results found</h3>
            <p className="text-muted-foreground">
              Try adjusting your search query to find what you're looking for.
            </p>
          </div>
        )}
      </div>
    </AnimatedTransition>
  );
};

export default Blog;
