import { useParams, Link } from "react-router-dom";
import { AnimatedTransition } from "@components/AnimatedTransition";
import { blogPosts } from "@data/blog-posts";
import { Button } from "@components/ui/Button";
import { ArrowLeft, Calendar, Tag } from "lucide-react";
import { format } from "date-fns";

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const post = blogPosts.find((post) => post.id === Number(id));

  if (!post) {
    return (
      <AnimatedTransition className="pt-24 pb-16">
        <div className="container px-4 mx-auto text-center">
          <h1 className="text-3xl font-bold mb-4">Post Not Found</h1>
          <p className="text-muted-foreground mb-6">
            The blog post you're looking for doesn't exist.
          </p>
          <Button asChild>
            <Link to="/blog">Back to Blog</Link>
          </Button>
        </div>
      </AnimatedTransition>
    );
  }

  return (
    <AnimatedTransition className="pt-24 pb-16">
      <article className="container px-4 mx-auto">
        <Button variant="ghost" size="sm" className="mb-8" asChild>
          <Link to="/blog">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>
        </Button>

        <div className="mb-10">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display mb-6">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center">
              <Calendar className="mr-2 h-4 w-4" />
              {format(new Date(post.date), "MMMM d, yyyy")}
            </div>

            <div className="flex items-center flex-wrap gap-2">
              <Tag className="h-4 w-4" />
              {post.categories.map((category, index) => (
                <span
                  key={index}
                  className="inline-block bg-secondary rounded-full px-3 py-1 text-xs"
                >
                  {category}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="lead">{post.excerpt}</p>
          <div
            dangerouslySetInnerHTML={{
              __html: post.content || "<p>Full content coming soon...</p>",
            }}
          />
        </div>
      </article>
    </AnimatedTransition>
  );
};

export default BlogPost;
