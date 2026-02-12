import React from 'react';
import { motion } from 'framer-motion';
import { FiTarget, FiUsers, FiTrendingUp, FiShield, FiBook } from 'react-icons/fi';

const About = ({ id }) => {
  const coreValues = [
    {
      icon: <FiTarget />,
      title: 'Strategic Alignment',
      description: 'Bridging HR initiatives with business goals',
      color: 'from-blue-500 to-purple-500'
    },
    {
      icon: <FiUsers />,
      title: 'People Centric',
      description: 'Employee-first approach to HR management',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <FiTrendingUp />,
      title: 'Growth Focus',
      description: 'Developing talent and organizational capacity',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <FiShield />,
      title: 'Ethical Practice',
      description: 'Upholding integrity in all HR processes',
      color: 'from-purple-500 to-blue-500'
    }
  ];

  const skills = [
    { name: 'Talent Acquisition', level: 95 },
    { name: 'Payroll Management', level: 90 },
    { name: 'Employee Relations', level: 92 },
    { name: 'HR Compliance', level: 88 },
    { name: 'Training & Development', level: 85 },
    { name: 'Performance Management', level: 90 }
  ];

  return (
    <section id={id} className="py-20 px-4 relative overflow-hidden">
      {/* Background with brand colors */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-white to-purple-50/30"></div>
      
      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-tr from-purple-400/10 to-pink-400/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block mb-6"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-600 rounded-full text-sm font-semibold">
              <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
              ABOUT ME
            </span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Professional <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">HR Journey</span>
          </h2>
          
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '100px' }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"
          />
          
        
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-20">
          {/* Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative group"
          >
            {/* Animated border effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl opacity-0 group-hover:opacity-30 blur transition duration-500"></div>
            
            <div className="relative bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-8">
                <div className="relative">
                  <div className="w-28 h-28 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <span className="text-white text-3xl font-bold">SR</span>
                  </div>
                  {/* Certification badge */}
                 
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Sneha Raghunathan</h3>
                  <p className="text-lg text-blue-600 font-semibold mb-1">HR Executive</p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">Payroll Expert</span>
                    <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium">Talent Acquisition</span>
                    <span className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-xs font-medium">Employee Relations</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <FiBook className="text-blue-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Education</h4>
                    <p className="text-gray-600">MBA in Human Resources & Marketing</p>
                    <p className="text-sm text-gray-500">Periyar University</p>
                  </div>
                </div>
                
             
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-100">
                <p className="text-gray-700 leading-relaxed">
                 An Organized and people-focused HR Executive with experience in end-to-end HR operations,including recruitment,onboarding,employee
                  engagement,payroll coordination,and compliance.Skilled in maintaining HR records,supporting performance management processes,and 
                  ensuring smooth employee lifecycle management.Committed to building a positive workplace culture and supporting organizational goals
                   through effective HR practices. a proven track record in talent acquisition, employee relations, and strategic HR initiatives.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Core Values */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 relative overflow-hidden">
                  {/* Background gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                  
                  <div className="relative z-10">
                    <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${value.color} mb-4`}>
                      <div className="text-white text-xl">{value.icon}</div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-xl p-8 mb-12"
        >
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-gray-900">Core HR Competencies</h3>
            <div className="text-sm text-blue-600 font-medium">Proficiency Level</div>
          </div>
          
          <div className="space-y-6">
            {skills.map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium text-gray-900">{skill.name}</span>
                  <span className="font-semibold text-blue-600">{skill.level}%</span>
                </div>
                <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 1 }}
                    className="h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Quote Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 md:p-12 border border-blue-100">
            <div className="text-center max-w-3xl mx-auto">
              <div className="text-5xl text-blue-200 mb-6">"</div>
              <blockquote className="text-2xl font-medium text-gray-800 mb-6 leading-relaxed">
                Effective HR is about creating systems where people feel valued, 
                businesses grow sustainably, and workplace harmony becomes the foundation for success.
              </blockquote>
              <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>
                <p className="text-gray-600 font-semibold">Sneha Raghunathan</p>
                <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-blue-500"></div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute top-4 left-4 w-8 h-8 border-2 border-blue-200 rounded-lg"></div>
            <div className="absolute bottom-4 right-4 w-6 h-6 border-2 border-purple-200 rounded-full"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;