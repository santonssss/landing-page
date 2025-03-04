export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  date: string;
  details?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Modern E-commerce Platform",
    description:
      "A full-stack e-commerce application with product filtering, cart functionality, and secure checkout.",
    image:
      "https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2089&q=80",
    tags: ["React", "TypeScript", "Tailwind CSS", "Supabase"],
    technologies: ["React", "TypeScript", "Tailwind CSS", "Supabase"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
    date: "2023-09-01",
    details:
      "This project demonstrates my ability to create a complete e-commerce solution with modern technologies. I implemented features like user authentication, product filtering, cart management, and checkout integration with Stripe.",
  },
  {
    id: 2,
    title: "Task Management Dashboard",
    description:
      "A responsive dashboard for project and task management with real-time updates.",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    tags: ["React", "Redux Toolkit", "TypeScript", "Tailwind CSS"],
    technologies: ["React", "Redux Toolkit", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
    date: "2023-06-15",
    details:
      "This dashboard provides a comprehensive solution for managing projects and tasks. It features drag-and-drop functionality, team collaboration tools, and advanced filtering options, all while maintaining a clean and intuitive interface.",
  },
  {
    id: 3,
    title: "Personal Finance Tracker",
    description:
      "An application to track expenses, create budgets, and visualize spending patterns.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80",
    tags: ["React", "TypeScript", "Recharts", "Supabase"],
    technologies: ["React", "TypeScript", "Recharts", "Supabase"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: false,
    date: "2023-03-22",
    details:
      "This application helps users track their finances through intuitive visualizations. Users can create budgets, track expenses, and gain insights through interactive charts. The app securely stores financial data using Supabase.",
  },
  {
    id: 4,
    title: "Weather Forecasting App",
    description:
      "A weather application with location-based forecasts, alerts, and hourly predictions.",
    image:
      "https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    tags: ["React", "Redux Toolkit", "Tailwind CSS"],
    technologies: ["React", "Redux Toolkit", "Tailwind CSS"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: false,
    date: "2023-01-10",
    details:
      "This weather app provides real-time forecasts using a third-party weather API. It features location-based forecasts, severe weather alerts, and hourly predictions with beautiful visualizations and animations.",
  },
  {
    id: 5,
    title: "Content Management System",
    description:
      "A custom CMS for managing website content with user roles and permissions.",
    image:
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    tags: ["React", "TypeScript", "Supabase", "Tailwind CSS"],
    technologies: ["React", "TypeScript", "Supabase", "Tailwind CSS"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
    date: "2022-11-05",
    details:
      "This custom CMS enables content creators to manage their website content efficiently. It includes features like user role management, content scheduling, and a visual editor for creating engaging posts.",
  },
  {
    id: 6,
    title: "Social Media Dashboard",
    description:
      "A dashboard to track and analyze social media metrics across multiple platforms.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    tags: ["React", "Redux Toolkit", "Recharts", "Tailwind CSS"],
    technologies: ["React", "Redux Toolkit", "Recharts", "Tailwind CSS"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: false,
    date: "2022-08-20",
    details:
      "This dashboard integrates with multiple social media platforms to track and analyze engagement metrics. It provides valuable insights through customizable reports and interactive visualizations.",
  },
];

export const tags = Array.from(
  new Set(projects.flatMap((project) => project.tags))
).sort();

export const technologies = Array.from(
  new Set(projects.flatMap((project) => project.technologies))
).sort();
