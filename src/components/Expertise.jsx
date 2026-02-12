import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FiSearch, FiHeart, FiTrendingUp, FiBookOpen, 
  FiShield, FiGlobe, FiCheckCircle 
} from 'react-icons/fi';

const Expertise = ({ id }) => {
  const [activeExpertise, setActiveExpertise] = useState(0);

  const expertiseAreas = [
    {
      title: 'Talent Acquisition',
      icon: <FiSearch />,
      description: 'End-to-end recruitment strategy and employer branding',
      details: [
        'Strategic workforce planning',
        'Employer value proposition development',
        'Candidate experience optimization',
        'Diversity sourcing strategies',
        'Recruitment marketing',
        'Assessment center design'
      ],
      color: 'from-blue-500 to-cyan-500',
      metrics: { filled: 95, time: 30, quality: 92 }
    },
    {
      title: 'Employee Engagement',
      icon: <FiHeart />,
      description: 'Building cultures where people love to work',
      details: [
        'Engagement survey design & analysis',
        'Recognition program development',
        'Wellness initiatives',
        'Team building strategies',
        'Feedback culture implementation',
        'Work-life integration'
      ],
      color: 'from-purple-500 to-pink-500',
      metrics: { engagement: 92, retention: 88, satisfaction: 90 }
    },
    {
      title: 'Performance Management',
      icon: <FiTrendingUp />,
      description: 'Driving organizational excellence through performance',
      details: [
        'OKR/KPI framework design',
        'Performance calibration',
        '360-degree feedback systems',
        'Succession planning',
        'Career pathing',
        'Competency modeling'
      ],
      color: 'from-green-500 to-emerald-500',
      metrics: { productivity: 25, promotions: 40, alignment: 95 }
    }
  ];

  return (
    <section id={id} className="py-20 px-4 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-blue-600 font-semibold mb-4 block">CORE EXPERTISE</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            HR <span className="text-blue-600">Specializations</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Deep expertise across the employee lifecycle with proven results in 
            talent optimization and organizational development
          </p>
        </motion.div>

        {/* Expertise Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {expertiseAreas.map((area, index) => (
            <motion.button
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setActiveExpertise(index)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                activeExpertise === index
                  ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md'
              }`}
            >
              <div className="flex items-center gap-2">
                {area.icon}
                {area.title}
              </div>
            </motion.button>
          ))}
        </div>

        {/* Active Expertise Details */}
        <motion.div
          key={activeExpertise}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-white rounded-2xl shadow-xl overflow-hidden"
        >
          <div className={`h-2 bg-gradient-to-r ${expertiseAreas[activeExpertise].color}`} />
          
          <div className="p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className={`p-3 rounded-xl bg-gradient-to-br ${expertiseAreas[activeExpertise].color}`}>
                <div className="text-white text-2xl">
                  {expertiseAreas[activeExpertise].icon}
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">
                  {expertiseAreas[activeExpertise].title}
                </h3>
                <p className="text-gray-600">
                  {expertiseAreas[activeExpertise].description}
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Details */}
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Focus Areas</h4>
                <div className="space-y-3">
                  {expertiseAreas[activeExpertise].details.map((detail, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="flex items-center gap-3"
                    >
                      <FiCheckCircle className="text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{detail}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Metrics Visualization */}
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Impact Metrics</h4>
                <div className="space-y-6">
                  {Object.entries(expertiseAreas[activeExpertise].metrics).map(([key, value], index) => (
                    <div key={key}>
                      <div className="flex justify-between text-sm text-gray-600 mb-1">
                        <span className="capitalize">{key.replace(/([A-Z])/g, ' $1')}</span>
                        <span className="font-semibold">{value}%</span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${value}%` }}
                          transition={{ delay: index * 0.1 + 0.3, duration: 1 }}
                          className={`h-full rounded-full bg-gradient-to-r ${expertiseAreas[activeExpertise].color}`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Additional Expertise Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {[
            {
              title: 'Learning & Development',
              icon: <FiBookOpen />,
              description: 'Building capabilities for future success',
              color: 'from-orange-500 to-red-500'
            },
            {
              title: 'HR Compliance',
              icon: <FiShield />,
              description: 'Navigating regulatory landscapes',
              color: 'from-indigo-500 to-blue-500'
            },
            {
              title: 'Diversity & Inclusion',
              icon: <FiGlobe />,
              description: 'Creating inclusive workplaces',
              color: 'from-teal-500 to-green-500'
            }
          ].map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
            >
              <div className={`inline-block p-3 rounded-lg bg-gradient-to-br ${area.color} mb-4`}>
                <div className="text-white text-2xl">{area.icon}</div>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">{area.title}</h4>
              <p className="text-gray-600">{area.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;