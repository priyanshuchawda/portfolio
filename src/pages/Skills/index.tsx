import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Skill {
  name: string;
  category: string;
  proficiency: number;
}

const skills: Skill[] = [
  // Programming Languages
  { name: "TypeScript", category: "Programming Languages", proficiency: 90 },
  { name: "JavaScript", category: "Programming Languages", proficiency: 95 },
  { name: "Python", category: "Programming Languages", proficiency: 85 },
  { name: "Go", category: "Programming Languages", proficiency: 80 },
  { name: "C++", category: "Programming Languages", proficiency: 85 },
  { name: "Solidity", category: "Programming Languages", proficiency: 75 },
  { name: "Dart", category: "Programming Languages", proficiency: 80 },

  // Frontend Development
  { name: "React", category: "Frontend", proficiency: 95 },
  { name: "Next.js", category: "Frontend", proficiency: 90 },
  { name: "Vue.js", category: "Frontend", proficiency: 85 },
  { name: "Svelte", category: "Frontend", proficiency: 80 },
  { name: "Tailwind CSS", category: "Frontend", proficiency: 95 },
  { name: "GraphQL", category: "Frontend", proficiency: 85 },
  { name: "WebAssembly", category: "Frontend", proficiency: 75 },

  // Backend Development
  { name: "Node.js", category: "Backend", proficiency: 95 },
  { name: "Express.js", category: "Backend", proficiency: 90 },
  { name: "PostgreSQL", category: "Backend", proficiency: 90 },
  { name: "Redis", category: "Backend", proficiency: 85 },
  { name: "Firebase", category: "Backend", proficiency: 90 },
  { name: "MongoDB", category: "Backend", proficiency: 85 },

  // DevOps & Cloud
  { name: "Docker", category: "DevOps", proficiency: 90 },
  { name: "Kubernetes", category: "DevOps", proficiency: 85 },
  { name: "GitHub CI/CD", category: "DevOps", proficiency: 90 },
  { name: "Jenkins", category: "DevOps", proficiency: 85 },
  { name: "Terraform", category: "DevOps", proficiency: 80 },
  { name: "Ansible", category: "DevOps", proficiency: 80 },

  // Data Science & ML
  { name: "TensorFlow", category: "Data Science", proficiency: 80 },
  { name: "PyTorch", category: "Data Science", proficiency: 75 },
  { name: "Pandas", category: "Data Science", proficiency: 85 },
  { name: "Numpy", category: "Data Science", proficiency: 85 },
  { name: "Scikit-learn", category: "Data Science", proficiency: 80 },

  // Blockchain & Web3
  { name: "Web3.js", category: "Blockchain", proficiency: 85 },
  { name: "Ethers.js", category: "Blockchain", proficiency: 85 },
  { name: "IPFS", category: "Blockchain", proficiency: 80 },
  { name: "Truffle Suite", category: "Blockchain", proficiency: 80 },
];

const categories = [
  {
    name: "Programming Languages",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
        />
      </svg>
    ),
  },
  {
    name: "Frontend",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    name: "Backend",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
        />
      </svg>
    ),
  },
  {
    name: "DevOps",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
        />
      </svg>
    ),
  },
  {
    name: "Data Science",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      </svg>
    ),
  },
  {
    name: "Blockchain",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
        />
      </svg>
    ),
  },
];

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const filteredSkills = selectedCategory
    ? skills.filter((skill) => skill.category === selectedCategory)
    : skills;

  return (
    <div className="space-y-12">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Skills & Expertise</h1>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          A comprehensive overview of my technical skills and proficiency levels
          across various domains of software development and technology.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-4">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setSelectedCategory(null)}
          className={`px-4 py-2 rounded-full flex items-center space-x-2 ${
            !selectedCategory
              ? "bg-primary text-white"
              : "bg-light-200 dark:bg-dark-200 text-gray-600 dark:text-gray-300"
          }`}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          <span>All</span>
        </motion.button>
        {categories.map((category) => (
          <motion.button
            key={category.name}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedCategory(category.name)}
            className={`px-4 py-2 rounded-full flex items-center space-x-2 ${
              selectedCategory === category.name
                ? "bg-primary text-white"
                : "bg-light-200 dark:bg-dark-200 text-gray-600 dark:text-gray-300"
            }`}
          >
            {category.icon}
            <span>{category.name}</span>
          </motion.button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ delay: index * 0.1 }}
              className="card group relative overflow-hidden"
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                  {skill.name}
                </h3>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {skill.proficiency}%
                </span>
              </div>
              <div className="h-2 bg-light-200 dark:bg-dark-200 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-primary to-primary-dark"
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.proficiency}%` }}
                  transition={{
                    duration: 1,
                    ease: "easeOut",
                    delay: index * 0.1,
                  }}
                />
              </div>
              {hoveredSkill === skill.name && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  className="absolute inset-0 bg-gradient-to-br from-primary/90 to-primary-dark/90 rounded-xl p-6 flex items-center justify-center text-white backdrop-blur-sm"
                >
                  <div className="text-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 200,
                        damping: 10,
                      }}
                      className="w-20 h-20 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center"
                    >
                      <span className="text-3xl font-bold">
                        {skill.proficiency}%
                      </span>
                    </motion.div>
                    <h3 className="text-xl font-bold mb-2">{skill.name}</h3>
                    <p className="text-sm opacity-90">{skill.category}</p>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Skills;
