import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../hooks/useTheme';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? 'bg-light/80 dark:bg-dark/80 backdrop-blur-md shadow-lg' : ''
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <motion.a
            href="#home"
            className="text-2xl font-bold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            PC
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="#home" onClick={() => scrollToSection('home')}>
              Home
            </NavLink>
            <NavLink href="#skills" onClick={() => scrollToSection('skills')}>
              Skills
            </NavLink>
            <NavLink href="#blog" onClick={() => scrollToSection('blog')}>
              Blog
            </NavLink>
            <NavLink href="#contact" onClick={() => scrollToSection('contact')}>
              Contact
            </NavLink>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800"
            >
              {isDark ? <FiSun size={20} /> : <FiMoon size={20} />}
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 right-0 bg-light dark:bg-dark shadow-lg"
          >
            <div className="flex flex-col p-4 space-y-4">
              <MobileNavLink href="#home" onClick={() => scrollToSection('home')}>
                Home
              </MobileNavLink>
              <MobileNavLink href="#skills" onClick={() => scrollToSection('skills')}>
                Skills
              </MobileNavLink>
              <MobileNavLink href="#blog" onClick={() => scrollToSection('blog')}>
                Blog
              </MobileNavLink>
              <MobileNavLink href="#contact" onClick={() => scrollToSection('contact')}>
                Contact
              </MobileNavLink>
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 w-full flex items-center justify-center"
              >
                {isDark ? <FiSun size={20} /> : <FiMoon size={20} />}
              </motion.button>
            </div>
          </motion.div>
        )}
      </nav>
    </header>
  );
};

const NavLink = ({ href, onClick, children }: { href: string; onClick: () => void; children: React.ReactNode }) => (
  <motion.a
    href={href}
    onClick={onClick}
    className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    {children}
  </motion.a>
);

const MobileNavLink = ({ href, onClick, children }: { href: string; onClick: () => void; children: React.ReactNode }) => (
  <motion.a
    href={href}
    onClick={onClick}
    className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors text-center py-2"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    {children}
  </motion.a>
);

export default Header;
