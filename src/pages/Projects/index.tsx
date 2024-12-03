import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from '../../components/ProjectCard';

// Sample project data - replace with your actual projects
const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce platform with React, Node.js, and MongoDB',
    image: '/project-1.jpg',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/example',
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates',
    image: '/project-2.jpg',
    technologies: ['React', 'Firebase', 'Tailwind CSS', 'TypeScript'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/example',
  },
  {
    id: 3,
    title: 'AI Image Generator',
    description: 'An AI-powered image generation tool using DALL-E API',
    image: '/project-3.jpg',
    technologies: ['Next.js', 'OpenAI', 'Prisma', 'PostgreSQL'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/example',
  },
];

// Get unique technologies from all projects
const allTechnologies = Array.from(
  new Set(projects.flatMap((project) => project.technologies))
).sort();

const Projects = () => {
  const [selectedTech, setSelectedTech] = useState<string | null>(null);

  const filteredProjects = selectedTech
    ? projects.filter((project) =>
        project.technologies.includes(selectedTech)
      )
    : projects;

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Projects</h1>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          A collection of my recent work and side projects. Each project is a unique
          piece of development that showcases my skills and passion for building
          exceptional digital experiences.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-2 py-4">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setSelectedTech(null)}
          className={`px-4 py-2 rounded-full ${
            !selectedTech
              ? 'bg-primary text-white'
              : 'bg-light-200 dark:bg-dark-200 text-gray-600 dark:text-gray-300'
          }`}
        >
          All
        </motion.button>
        {allTechnologies.map((tech) => (
          <motion.button
            key={tech}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedTech(tech)}
            className={`px-4 py-2 rounded-full ${
              selectedTech === tech
                ? 'bg-primary text-white'
                : 'bg-light-200 dark:bg-dark-200 text-gray-600 dark:text-gray-300'
            }`}
          >
            {tech}
          </motion.button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              layout
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Projects;
