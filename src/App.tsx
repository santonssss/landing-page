import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Index from "@pages/Index";
import About from "@pages/About";
import Projects from "@pages/Project";
import Blog from "@pages/Blog";
import BlogPost from "@pages/BlogPost";
import Contact from "@pages/Contact";
import NotFound from "@pages/NotFound";
import { Header } from "@components/Header";
import { ThemeProvider } from "@contexts/ThemeContext";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <BrowserRouter>
        <Header />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
      </BrowserRouter>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
