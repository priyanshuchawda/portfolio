import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import type { Components } from 'react-markdown';

interface BlogPostProps {
  title: string;
  date: string;
  excerpt: string;
  content: string;
  tags: string[];
  slug: string;
  isExpanded?: boolean;
  onClick?: () => void;
}

const BlogPost = ({
  title,
  date,
  excerpt,
  content,
  tags,
  isExpanded = false,
  onClick,
}: BlogPostProps) => {
  const components: Components = {
    code({ className, children, ...props }) {
      const match = /language-(\w+)/.exec(className || '');
      return match ? (
        <SyntaxHighlighter
          {...props}
          style={vscDarkPlus}
          language={match[1]}
          PreTag="div"
        >
          {String(children).replace(/\n$/, '')}
        </SyntaxHighlighter>
      ) : (
        <code className={className} {...props}>
          {children}
        </code>
      );
    },
  };

  return (
    <motion.article
      layout
      className={`card cursor-pointer ${
        isExpanded ? 'col-span-full' : ''
      }`}
      onClick={onClick}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
    >
      <div className="space-y-4">
        <div>
          <motion.h2 className="text-2xl font-bold mb-2">{title}</motion.h2>
          <time className="text-sm text-gray-500 dark:text-gray-400">{date}</time>
        </div>

        {isExpanded ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="prose dark:prose-invert max-w-none"
          >
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={components}
            >
              {content}
            </ReactMarkdown>
          </motion.div>
        ) : (
          <p className="text-gray-600 dark:text-gray-300">{excerpt}</p>
        )}

        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-sm bg-primary/10 text-primary rounded"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
};

export default BlogPost;
