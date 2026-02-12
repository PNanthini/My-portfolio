import React from 'react';
import { motion } from 'framer-motion';
import { 
  FiHome, FiUser, FiAward, FiBriefcase, 
  FiFileText, FiTool, FiMail 
} from 'react-icons/fi';

const Navigation = ({ activeSection }) => {
  const navItems = [
    { id: 'home', label: 'Home', icon: <FiHome /> },
    { id: 'about', label: 'About', icon: <FiUser /> },
    { id: 'expertise', label: 'Expertise', icon: <FiAward /> },
    { id: 'experience', label: 'Experience', icon: <FiBriefcase /> },
    { id: 'skills', label: 'Skills', icon: <FiTool /> },
    { id: 'contact', label: 'Contact', icon: <FiMail /> },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-center py-3">
          {/* Navigation Items */}
          <div className="flex items-center gap-1 md:gap-2">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="relative px-3 md:px-5 py-2.5 rounded-lg transition-all duration-300 group"
              >
                {activeSection === item.id && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg shadow-md"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
                  />
                )}
                <div className="relative flex items-center gap-2 z-10">
                  <span className={`text-lg md:text-xl ${
                    activeSection === item.id 
                      ? 'text-white' 
                      : 'text-gray-600 group-hover:text-blue-600 transition-colors'
                  }`}>
                    {item.icon}
                  </span>
                  <span className={`text-sm font-medium hidden md:inline ${
                    activeSection === item.id 
                      ? 'text-white' 
                      : 'text-gray-700 group-hover:text-blue-600 transition-colors'
                  }`}>
                    {item.label}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;