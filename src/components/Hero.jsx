import React from 'react';
import { motion } from 'framer-motion';
import { FiDownload, FiMail, FiBriefcase, FiUsers, FiTarget, FiAward } from 'react-icons/fi';

const Hero = ({ id }) => {
  return (
    <section id={id} className="min-h-screen relative overflow-hidden flex items-center px-2 md:px-8">
      {/* Simplified animated background */}
      <div className="absolute inset-0">
        {/* Soft gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50"></div>
        
        {/* Single animated gradient orb */}
        <motion.div
          className="absolute top-1/3 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-gradient-to-l from-purple-400/10 to-pink-400/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -30, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        
        {/* Minimal particles - fewer, softer */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0, 0.3, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
      
      {/* Very light overlay */}
      <div className="absolute inset-0 bg-white/5"></div>
      
      {/* Content */}
      <div className="max-w-6xl mx-auto w-full relative z-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Clean and simple */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Name - Clean typography */}
            <div className="space-y-2">
              <motion.h1 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900"
              >
                <span className="block">Sneha</span>
                <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Raghunathan
                </span>
              </motion.h1>
              
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '80px' }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
              />
              
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-xl text-gray-700"
              >
                <span className="font-semibold text-blue-600">HR Specialist</span> • Talent Acquisition • Payroll Management
              </motion.p>
            </div>
            
            {/* Description - Simple card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-gray-100"
            >
              <p className="text-gray-700 leading-relaxed">
                Creating harmonious workplaces through strategic HR initiatives, 
                expert talent management, and fostering positive employee relations 
                that drive both organizational success and individual growth.
              </p>
            </motion.div>
            
            {/* Skills - Simple tags */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap gap-3"
            >
              {[
                { icon: <FiUsers />, label: 'Team Building', color: 'bg-blue-100 text-blue-700' },
                { icon: <FiTarget />, label: 'Strategy', color: 'bg-purple-100 text-purple-700' },
                { icon: <FiAward />, label: 'Compliance', color: 'bg-pink-100 text-pink-700' },
                { icon: <FiBriefcase />, label: 'Recruitment', color: 'bg-cyan-100 text-cyan-700' },
              ].map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className={`flex items-center gap-2 px-4 py-2 ${skill.color} rounded-lg text-sm font-medium`}
                >
                  {skill.icon}
                  <span>{skill.label}</span>
                </motion.div>
              ))}
            </motion.div>
            
            {/* CTA Buttons - Clean design */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <span className="flex items-center gap-2">
                  <FiMail />
                  Let's Connect
                </span>
              </motion.a>
              
              <motion.a
                href="/resume.pdf"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-3 bg-white text-gray-700 font-medium rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200"
              >
                <span className="flex items-center gap-2">
                  <FiDownload />
                  Download CV
                </span>
              </motion.a>
            </motion.div>
          </motion.div>
          
          {/* Right Side - Simple Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            {/* Clean stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { 
                  title: 'HR Experience',
                  value: '2+ Years',
                  icon: <FiBriefcase />,
                  color: 'from-blue-500 to-cyan-500',
                  bgColor: 'bg-blue-50'
                },
                { 
                  title: 'Talent Hired',
                  value: '500+',
                  icon: <FiUsers />,
                  color: 'from-purple-500 to-pink-500',
                  bgColor: 'bg-purple-50'
                },
                { 
                  title: 'Retention Rate',
                  value: '95%',
                  icon: <FiTarget />,
                  color: 'from-green-500 to-emerald-500',
                  bgColor: 'bg-green-50'
                },
                { 
                  title: 'Process Efficiency',
                  value: '+40%',
                  icon: <FiAward />,
                  color: 'from-orange-500 to-red-500',
                  bgColor: 'bg-orange-50'
                }
              ].map((card, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className={`${card.bgColor} rounded-xl p-5 shadow-sm border border-white/50`}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className={`p-2.5 rounded-lg bg-gradient-to-r ${card.color} text-white shadow-sm`}>
                      <div className="text-lg">{card.icon}</div>
                    </div>
                    <span className="text-xl font-bold text-gray-900">{card.value}</span>
                  </div>
                  <h3 className="text-sm font-medium text-gray-700">{card.title}</h3>
                  
                  {/* Simple progress indicator */}
                  <div className="mt-3 h-1.5 w-full bg-white/50 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${index === 0 ? 40 : index === 1 ? 70 : index === 2 ? 95 : 80}%` }}
                      transition={{ delay: 0.8 + index * 0.1, duration: 0.8 }}
                      className={`h-full rounded-full bg-gradient-to-r ${card.color}`}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Simple certification badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-6 flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm border border-gray-100"
            >
              <div className="p-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg">
                <FiAward className="text-blue-600" />
              </div>
              <div>
                <div className="font-medium text-gray-900">SHRM Certified</div>
                <div className="text-xs text-gray-500">Professional HR Credential</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Minimal scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.8, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <div className="flex flex-col items-center">
          <div className="w-8 h-12 border border-gray-300 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-2 bg-gradient-to-b from-blue-400 to-purple-400 rounded-full mt-2"
            />
          </div>
          <span className="text-xs text-gray-500 mt-2">Scroll</span>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;