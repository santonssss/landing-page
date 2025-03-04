export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  coverImage: string;
  date: string;
  readTime: string;
  tags: string[];
  categories: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Building a Modern React Application with TypeScript",
    excerpt:
      "Learn how to set up and structure a React application with TypeScript for better type safety and developer experience.",
    content: `
# Building a Modern React Application with TypeScript

React has established itself as one of the most popular JavaScript libraries for building user interfaces. When combined with TypeScript, it provides an even more powerful development experience with static type checking.

## Why TypeScript?

TypeScript adds static types to JavaScript, helping you catch errors early in development rather than at runtime. This is particularly valuable in large applications or when working in teams.

Key benefits include:

- **Early error detection**: Catch type-related errors during development
- **Better IDE support**: Enhanced autocompletion and documentation
- **Safer refactoring**: The compiler helps ensure you don't break existing code
- **Self-documenting code**: Types serve as documentation for how components and functions should be used

## Setting Up a React TypeScript Project

The easiest way to start a new React TypeScript project is using Create React App with the TypeScript template:

\`\`\`bash
npx create-react-app my-app --template typescript
# or with Vite
npm create vite@latest my-app -- --template react-ts
\`\`\`

## Typing Component Props

One of the most common uses of TypeScript in React is typing component props:

\`\`\`tsx
interface ButtonProps {
  text: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary' | 'danger';
  disabled?: boolean;
}

function Button({ text, onClick, variant = 'primary', disabled = false }: ButtonProps) {
  return (
    <button 
      className={\`button \${variant}\`}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
}
\`\`\`

## Conclusion

Adding TypeScript to your React projects requires some initial setup and learning, but the benefits far outweigh the costs. Your code becomes more robust, easier to maintain, and better documented.

In future posts, we'll explore more advanced TypeScript patterns in React applications.
    `,
    coverImage:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    date: "2023-09-15",
    readTime: "5 min read",
    tags: ["React", "TypeScript", "Web Development"],
    categories: ["Web Development", "React"],
  },
  {
    id: 2,
    title: "State Management in React: Redux Toolkit vs. Context API",
    excerpt:
      "Compare two popular state management approaches in React and learn which one to choose for your projects.",
    content: `
# State Management in React: Redux Toolkit vs. Context API

State management is a crucial aspect of building complex React applications. In this post, we'll compare two popular approaches: Redux Toolkit and React's built-in Context API.

## Redux Toolkit

Redux Toolkit is the official, opinionated, batteries-included toolset for efficient Redux development. It addresses three common concerns about Redux:

1. "Configuring Redux is too complicated"
2. "I have to add a lot of packages to use Redux"
3. "Redux requires too much boilerplate code"

### Key Features

- **CreateSlice API**: Simplifies creating Redux reducers and actions
- **Built-in Immer**: Write simpler immutable update logic
- **RTK Query**: Powerful data fetching and caching

## React Context API

The Context API is a built-in feature in React that allows you to share state across the component tree without prop drilling.

### Key Features

- **No additional dependencies**: Built into React
- **Simpler setup**: Less boilerplate compared to Redux
- **Component-centric**: Fits well with React's component model

## When to Use Each

### Choose Redux Toolkit when:

- Your application has complex state logic
- You need to share state across many components
- You want powerful debugging capabilities (time-travel debugging)
- Your app requires middleware for side effects
- You need predictable state management at scale

### Choose Context API when:

- Your application has simpler state needs
- You want to avoid additional dependencies
- Your state updates are infrequent
- You're building a smaller application
- You need a quick solution for prop drilling

## Example: Context API

\`\`\`tsx
// Create a context
const ThemeContext = React.createContext('light');

// Provider component
function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');
  
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Consumer component
function ThemedButton() {
  const { theme, setTheme } = useContext(ThemeContext);
  
  return (
    <button 
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      style={{ background: theme === 'light' ? '#fff' : '#333' }}
    >
      Toggle Theme
    </button>
  );
}
\`\`\`

## Conclusion

Both Redux Toolkit and Context API have their place in React development. The choice depends on your project's complexity, team familiarity, and specific requirements.

For simpler applications or components with shared state, Context API is often sufficient. For larger applications with complex state logic, Redux Toolkit provides a more structured and scalable solution.
    `,
    coverImage:
      "https://images.unsplash.com/photo-1556075798-4825dfaaf498?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2076&q=80",
    date: "2023-08-22",
    readTime: "7 min read",
    tags: ["React", "Redux", "State Management"],
    categories: ["State Management", "React"],
  },
  {
    id: 3,
    title: "Optimizing React Applications for Performance",
    excerpt:
      "Learn practical techniques to improve the performance of your React applications and provide a better user experience.",
    content: `
# Optimizing React Applications for Performance

Performance optimization is crucial for providing a smooth user experience in web applications. In this post, we'll explore several techniques to optimize React applications.

## Measuring Performance

Before optimizing, it's important to identify performance bottlenecks. React provides several tools:

- **React DevTools Profiler**: Visualize component rendering
- **Lighthouse**: Audit web app performance
- **Web Vitals**: Monitor key user-centric metrics

## Key Optimization Techniques

### 1. Memoization

Use React.memo, useMemo, and useCallback to prevent unnecessary re-renders:

\`\`\`tsx
// Prevent re-renders for expensive components
const MemoizedComponent = React.memo(ExpensiveComponent);

// Memoize expensive calculations
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);

// Memoize callbacks to prevent child re-renders
const memoizedCallback = useCallback(() => {
  doSomething(a, b);
}, [a, b]);
\`\`\`

### 2. Code Splitting

Split your bundle into smaller chunks that load on demand:

\`\`\`tsx
import { lazy, Suspense } from 'react';

// Lazy load components
const LazyComponent = lazy(() => import('./LazyComponent'));

function MyComponent() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </Suspense>
  );
}
\`\`\`

### 3. Virtualization

Render only visible items in long lists:

\`\`\`tsx
import { useVirtualizer } from '@tanstack/react-virtual';

function VirtualizedList({ items }) {
  const rowVirtualizer = useVirtualizer({
    count: items.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 35,
  });

  return (
    <div ref={parentRef} style={{ height: '500px', overflow: 'auto' }}>
      <div
        style={{
          height: \`\${rowVirtualizer.getTotalSize()}px\`,
          position: 'relative',
        }}
      >
        {rowVirtualizer.getVirtualItems().map((virtualRow) => (
          <div
            key={virtualRow.index}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: \`\${virtualRow.size}px\`,
              transform: \`translateY(\${virtualRow.start}px)\`,
            }}
          >
            {items[virtualRow.index]}
          </div>
        ))}
      </div>
    </div>
  );
}
\`\`\`

### 4. Optimizing Images

Use modern image formats, proper sizing, and lazy loading:

\`\`\`tsx
function LazyImage({ src, alt }) {
  return <img src={src} alt={alt} loading="lazy" />;
}
\`\`\`

### 5. Avoid Prop Drilling with Context

Use Context API wisely for data that many components need to access:

\`\`\`tsx
const UserContext = createContext();

function App() {
  const [user, setUser] = useState(null);
  
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <MainContent />
    </UserContext.Provider>
  );
}
\`\`\`

## Conclusion

Performance optimization is an ongoing process. Start with the low-hanging fruit like proper list rendering and image optimization, then move to more complex techniques like memoization and code splitting.

Remember to measure before and after optimizations to ensure your changes have the desired effect.
    `,
    coverImage:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
    date: "2023-07-10",
    readTime: "8 min read",
    tags: ["React", "Performance", "Web Development"],
    categories: ["Performance", "React"],
  },
  {
    id: 4,
    title: "Building Accessible Web Applications with React",
    excerpt:
      "Learn how to create inclusive React applications that can be used by everyone, including people with disabilities.",
    content: `
# Building Accessible Web Applications with React

Web accessibility (a11y) ensures that applications can be used by everyone, including people with disabilities. In this post, we'll explore how to build accessible React applications.

## Why Accessibility Matters

- **Inclusivity**: Ensures all users can access your content
- **Legal Requirements**: Many regions have laws requiring accessibility
- **SEO Benefits**: Many accessibility practices improve SEO
- **Better UX for Everyone**: Accessible design often leads to better UX for all users

## Key Accessibility Principles

### 1. Semantic HTML

Use HTML elements according to their intended purpose:

\`\`\`tsx
// Bad
<div onClick={handleClick}>Click me</div>

// Good
<button onClick={handleClick}>Click me</button>
\`\`\`

### 2. Keyboard Navigation

Ensure your application can be used with keyboard alone:

\`\`\`tsx
function AccessibleButton() {
  const [isActive, setIsActive] = useState(false);

  return (
    <button
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          setIsActive(true);
        }
      }}
      onClick={() => setIsActive(true)}
    >
      {isActive ? 'Activated' : 'Activate'}
    </button>
  );
}
\`\`\`

### 3. ARIA Attributes

Use ARIA when HTML semantics aren't sufficient:

\`\`\`tsx
function Accordion() {
  const [isExpanded, setIsExpanded] = useState(false);
  
  return (
    <div>
      <button
        aria-expanded={isExpanded}
        aria-controls="content-1"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        Toggle Section
      </button>
      <div 
        id="content-1" 
        hidden={!isExpanded}
      >
        Accordion content here
      </div>
    </div>
  );
}
\`\`\`

### 4. Focus Management

Manage focus for a better keyboard navigation experience:

\`\`\`tsx
function Modal({ isOpen, onClose, children }) {
  const modalRef = useRef(null);
  
  useEffect(() => {
    if (isOpen) {
      // Focus the modal when it opens
      modalRef.current?.focus();
    }
  }, [isOpen]);
  
  if (!isOpen) return null;
  
  return (
    <div 
      ref={modalRef}
      role="dialog"
      aria-modal="true"
      tabIndex={-1}
      // Trap focus inside modal
    >
      {children}
      <button onClick={onClose}>Close</button>
    </div>
  );
}
\`\`\`

### 5. Color and Contrast

Ensure sufficient color contrast for text and important elements:

\`\`\`tsx
// Consider using CSS variables for theming that maintains contrast
function AccessibleText() {
  return (
    <p className="text-high-contrast">
      This text has sufficient contrast with the background.
    </p>
  );
}
\`\`\`

## Testing Accessibility

### Automated Testing

Use tools like jest-axe for automated testing:

\`\`\`tsx
import { axe } from 'jest-axe';

it('should not have accessibility violations', async () => {
  const { container } = render(<MyComponent />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
\`\`\`

### Manual Testing

- Keyboard navigation testing
- Screen reader testing
- Browser extensions (like axe DevTools)

## Conclusion

Building accessible applications requires awareness and intention throughout the development process. By incorporating these practices, you can create React applications that are truly inclusive and provide a better experience for all users.

Remember: accessibility is not a feature, it's a requirement for good web development.
    `,
    coverImage:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    date: "2023-06-18",
    readTime: "6 min read",
    tags: ["React", "Accessibility", "Web Development"],
    categories: ["Accessibility", "React"],
  },
];

export const blogTags = Array.from(
  new Set(blogPosts.flatMap((post) => post.tags))
).sort();

export const blogCategories = Array.from(
  new Set(blogPosts.flatMap((post) => post.categories))
).sort();
