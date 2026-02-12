import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiBriefcase, FiMapPin, FiCalendar, FiTrendingUp } from 'react-icons/fi';

const Experience = ({ id }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const experiences = [
    {
      company: "GlobalTech Solutions",
      position: "VP of Human Resources",
      period: "2020 - Present",
      location: "San Francisco, CA",
      achievements: [
        "Led HR transformation for 2000+ employee tech organization",
        "Reduced voluntary turnover by 35% through engagement initiatives",
        "Implemented AI-driven recruitment system improving efficiency by 40%",
        "Designed leadership development program for 150+ managers",
        "Increased diversity in leadership by 45% through targeted programs"
      ],
      color: "bg-gradient-to-r from-blue-500 to-cyan-500"
    },
    {
      company: "InnovateCorp",
      position: "HR Business Partner Director",
      period: "2017 - 2020",
      location: "New York, NY",
      achievements: [
        "Supported 500+ employee business unit with strategic HR partnership",
        "Designed and launched mentorship program with 95% participation",
        "Reduced time-to-fill by 25% through process optimization",
        "Implemented flexible work arrangements increasing satisfaction by 30%",
        "Led cultural integration during major acquisition"
      ],
      color: "bg-gradient-to-r from-purple-500 to-pink-500"
    },
    {
      company: "PeopleFirst Inc",
      position: "Talent Acquisition Manager",
      period: "2014 - 2017",
      location: "Chicago, IL",
      achievements: [
        "Managed full-cycle recruitment for 200+ positions annually",
        "Built employer brand strategy increasing applications by 60%",
        "Implemented ATS reducing administrative time by 50%",
        "Developed campus recruitment program hiring 50+ graduates",
        "Achieved 95% offer acceptance rate through candidate experience improvements"
      ],
      color: "bg-gradient-to-r from-green-500 to-emerald-500"
    }
  ];

  return (
    <section id={id} className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-blue-600 font-semibold mb-4 block">PROFESSIONAL JOURNEY</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Career <span className="text-blue-600">Timeline</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A progressive career dedicated to advancing HR practices and driving 
            organizational excellence through people leadership
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-green-500" />

          {/* Timeline items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 z-10">
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className={`w-8 h-8 rounded-full ${exp.color} shadow-lg flex items-center justify-center cursor-pointer ${
                      activeIndex === index ? 'ring-4 ring-blue-200' : ''
                    }`}
                    onClick={() => setActiveIndex(index)}
                  >
                    <FiBriefcase className="text-white" size={16} />
                  </motion.div>
                </div>

                {/* Content */}
                <div className={`ml-16 md:ml-0 md:w-5/12 ${
                  index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'
                }`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className={`bg-white rounded-xl shadow-lg p-6 border-l-4 ${exp.color.replace('bg-gradient-to-r', 'border')}`}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-gray-900">{exp.position}</h3>
                      <FiTrendingUp className="text-gray-400" />
                    </div>
                    
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center gap-2 text-blue-600 font-semibold">
                        <FiBriefcase />
                        {exp.company}
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <FiCalendar />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <FiMapPin />
                        {exp.location}
                      </div>
                    </div>

                    <div className="space-y-3">
                      {exp.achievements.slice(0, 3).map((achievement, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                          <p className="text-gray-700">{achievement}</p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Active Experience Details */}
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-16 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 shadow-xl"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className={`p-3 rounded-lg ${experiences[activeIndex].color}`}>
              <FiBriefcase className="text-white" size={24} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900">
                {experiences[activeIndex].position} at {experiences[activeIndex].company}
              </h3>
              <p className="text-gray-600">{experiences[activeIndex].period}</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Achievements</h4>
              <div className="space-y-4">
                {experiences[activeIndex].achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3 p-4 bg-white/50 rounded-lg"
                  >
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <span className="text-blue-600 font-bold">{index + 1}</span>
                    </div>
                    <p className="text-gray-700">{achievement}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Skills Applied</h4>
              <div className="flex flex-wrap gap-2 mb-8">
                {[
                  'Strategic HR Planning', 'Change Management', 
                  'Talent Development', 'Organizational Design',
                  'Data Analytics', 'Employee Relations', 
                  'Compensation Strategy', 'HR Technology'
                ].map((skill, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                    className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 shadow-sm"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>

              <div className="p-6 bg-white rounded-xl">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Business Impact</h4>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm text-gray-600 mb-1">
                      <span>Employee Engagement</span>
                      <span className="font-semibold">+92%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: '92%' }}
                        transition={{ duration: 1 }}
                        className="h-full rounded-full bg-gradient-to-r from-green-500 to-emerald-500"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm text-gray-600 mb-1">
                      <span>Turnover Reduction</span>
                      <span className="font-semibold">-35%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: '35%' }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="h-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-500"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;