import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BlogPost from "../../components/BlogPost";

// Sample blog posts - replace with actual content
const blogPosts = [
  {
    id: 1,
    title: "Building Scalable Microservices with Node.js",
    date: "2024-02-15",
    excerpt:
      "Learn how to design and implement scalable microservices architecture using Node.js and Docker.",
    content: `
# Building Scalable Microservices with Node.js

In this post, we'll explore how to build scalable microservices using Node.js and modern DevOps practices.

## Key Topics Covered

1. Microservices Architecture
2. Docker Containerization
3. Service Discovery
4. Load Balancing
5. API Gateway Implementation

### Code Example

\`\`\`typescript
// API Gateway implementation
import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';

const app = express();

// Service routes
const routes = {
  auth: 'http://auth-service:3001',
  users: 'http://user-service:3002',
  products: 'http://product-service:3003'
};

// Configure routes
Object.entries(routes).forEach(([path, target]) => {
  app.use(\`/api/\${path}\`, createProxyMiddleware({
    target,
    changeOrigin: true,
    pathRewrite: {
      [\`^/api/\${path}\`]: '',
    },
  }));
});

app.listen(3000, () => {
  console.log('API Gateway running on port 3000');
});
\`\`\`

## Benefits of Microservices

1. **Scalability**: Each service can be scaled independently
2. **Flexibility**: Use different technologies for different services
3. **Resilience**: Failure in one service doesn't affect others
4. **Maintainability**: Smaller, focused codebases are easier to maintain

Stay tuned for more in-depth tutorials on modern web development!
    `,
    tags: ["Node.js", "Microservices", "Docker", "DevOps"],
    slug: "building-scalable-microservices",
  },
  {
    id: 2,
    title: "Advanced React Patterns and Best Practices",
    date: "2024-02-10",
    excerpt:
      "Discover advanced React patterns and best practices for building maintainable applications.",
    content: `
# Advanced React Patterns and Best Practices

Let's explore some advanced React patterns that can help you write better code.

## Compound Components Pattern

\`\`\`tsx
// Example of Compound Components Pattern
interface TabsProps {
  children: React.ReactNode;
  defaultTab?: string;
}

const TabsContext = React.createContext<{
  activeTab: string;
  setActiveTab: (tab: string) => void;
} | null>(null);

const Tabs = ({ children, defaultTab }: TabsProps) => {
  const [activeTab, setActiveTab] = useState(defaultTab);

  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      <div className="tabs">{children}</div>
    </TabsContext.Provider>
  );
};

const TabList = ({ children }: { children: React.ReactNode }) => {
  return <div className="tab-list">{children}</div>;
};

const Tab = ({ children, value }: { children: React.ReactNode; value: string }) => {
  const context = useContext(TabsContext);
  if (!context) throw new Error('Tab must be used within Tabs');

  return (
    <button
      className={\`tab \${context.activeTab === value ? 'active' : ''}\`}
      onClick={() => context.setActiveTab(value)}
    >
      {children}
    </button>
  );
};

// Usage
<Tabs defaultTab="tab1">
  <TabList>
    <Tab value="tab1">Tab 1</Tab>
    <Tab value="tab2">Tab 2</Tab>
  </TabList>
  <TabContent value="tab1">Content 1</TabContent>
  <TabContent value="tab2">Content 2</TabContent>
</Tabs>
\`\`\`

## Key Takeaways

1. Use TypeScript for better type safety
2. Implement proper component composition
3. Follow React best practices
4. Write maintainable and reusable code
    `,
    tags: ["React", "TypeScript", "Frontend", "Best Practices"],
    slug: "advanced-react-patterns",
  },
];

const Blog = () => {
  const [expandedPost, setExpandedPost] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = blogPosts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase()),
      ),
  );

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Blog</h1>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Technical articles, tutorials, and insights about web development,
          DevOps, and software engineering best practices.
        </p>
      </div>

      <div className="max-w-md mx-auto">
        <input
          type="text"
          placeholder="Search posts by title or tag..."
          className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-dark focus:ring-2 focus:ring-primary"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <AnimatePresence mode="wait">
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredPosts.map((post) => (
            <BlogPost
              key={post.id}
              title={post.title}
              date={post.date}
              excerpt={post.excerpt}
              content={post.content}
              tags={post.tags}
              slug={post.slug}
              isExpanded={expandedPost === post.id}
              onClick={() =>
                setExpandedPost(expandedPost === post.id ? null : post.id)
              }
            />
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Blog;
