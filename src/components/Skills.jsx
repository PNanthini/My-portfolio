import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FiTool, FiUsers, 
  FiTarget, FiBookOpen 
} from 'react-icons/fi';

const Skills = ({ id }) => {
  const [activeCategory, setActiveCategory] = useState('technical');

  const skillsData = {
    technical: {
      title: 'HR Technical Skills',
      icon: <FiTool />,
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'Talent Management', level: 95 },
        { name: 'Compensation Design', level: 88 },
        { name: 'HR Analytics', level: 92 },
        { name: 'Compliance & Legal', level: 90 },
        { name: 'HRIS Implementation', level: 87 },
        { name: 'Succession Planning', level: 93 }
      ]
    },
    leadership: {
      title: 'Leadership & Strategy',
      icon: <FiTarget />,
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'Strategic Planning', level: 96 },
        { name: 'Change Management', level: 91 },
        { name: 'Team Leadership', level: 94 },
        { name: 'Stakeholder Management', level: 89 },
        { name: 'Business Acumen', level: 92 },
        { name: 'Decision Making', level: 90 }
      ]
    },
    soft: {
      title: 'Interpersonal Skills',
      icon: <FiUsers />,
      color: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'Communication', level: 97 },
        { name: 'Empathy & EQ', level: 95 },
        { name: 'Conflict Resolution', level: 90 },
        { name: 'Negotiation', level: 88 },
        { name: 'Coaching', level: 93 },
        { name: 'Influence', level: 91 }
      ]
    },
    specialized: {
      title: 'Specialized Expertise',
      icon: <FiBookOpen />,
      color: 'from-orange-500 to-red-500',
      skills: [
        { name: 'Diversity & Inclusion', level: 94 },
        { name: 'Learning & Development', level: 92 },
        { name: 'Employer Branding', level: 89 },
        { name: 'Workforce Planning', level: 91 },
        { name: 'Employee Experience', level: 93 },
        { name: 'Culture Transformation', level: 90 }
      ]
    }
  };

  const certifications = [
    {
      name: 'SHRM-SCP',
      issuer: 'Society for HR Management',
      year: '2020',
      validity: '2025'
    },
    {
      name: 'PHR',
      issuer: 'HR Certification Institute',
      year: '2018',
      validity: '2024'
    },
    {
      name: 'Certified Diversity Professional',
      issuer: 'Institute for Diversity',
      year: '2021',
      validity: '2026'
    },
    {
      name: 'HR Analytics Specialist',
      issuer: 'HR Analytics Institute',
      year: '2022',
      validity: '2025'
    }
  ];

  const tools = [
    { name: 'Workday', proficiency: 'Expert', icon: '💼' },
    { name: 'SAP SuccessFactors', proficiency: 'Advanced', icon: '📊' },
    { name: 'LinkedIn Recruiter', proficiency: 'Expert', icon: '🔍' },
    { name: 'Tableau', proficiency: 'Intermediate', icon: '📈' },
    { name: 'Culture Amp', proficiency: 'Advanced', icon: '❤️' },
    { name: 'Greenhouse', proficiency: 'Expert', icon: '🌱' },
    { name: 'Slack/Teams', proficiency: 'Expert', icon: '💬' },
    { name: 'Google Workspace', proficiency: 'Expert', icon: '⚡' }
  ];

  return (
    <section id={id} className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-blue-600 font-semibold mb-4 block">PROFESSIONAL CAPABILITIES</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Skills & <span className="text-blue-600">Competencies</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive skill set combining technical HR expertise with 
            strategic leadership and interpersonal capabilities
          </p>
        </motion.div>

        {/* Skill Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {Object.entries(skillsData).map(([key, category]) => (
            <motion.button
              key={key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              onClick={() => setActiveCategory(key)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-5 py-3 rounded-full font-medium transition-all flex items-center gap-2 ${
                activeCategory === key
                  ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                  : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md'
              }`}
            >
              {category.icon}
              {category.title}
            </motion.button>
          ))}
        </div>

        {/* Skills Visualization */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Skill Bars */}
          <div className="space-y-6">
            {skillsData[activeCategory].skills.map((skill, index) => (
              <div key={index}>
                <div className="flex justify-between mb-2">
                  <span className="font-medium text-gray-900">{skill.name}</span>
                  <span className="font-semibold text-blue-600">{skill.level}%</span>
                </div>
                <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 1 }}
                    className={`h-full rounded-full bg-gradient-to-r ${skillsData[activeCategory].color}`}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Radar Chart Visualization */}
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Skill Profile: {skillsData[activeCategory].title}
            </h3>
            <div className="relative h-64 flex items-center justify-center">
              <svg width="100%" height="100%" viewBox="0 0 300 300">
                {/* Radar grid */}
                {[0.2, 0.4, 0.6, 0.8, 1].map((scale, i) => (
                  <polygon
                    key={i}
                    points={skillsData[activeCategory].skills.map((_, j) => {
                      const angle = (j * 2 * Math.PI) / skillsData[activeCategory].skills.length;
                      const x = 150 + 120 * scale * Math.cos(angle - Math.PI / 2);
                      const y = 150 + 120 * scale * Math.sin(angle - Math.PI / 2);
                      return `${x},${y}`;
                    }).join(' ')}
                    fill="none"
                    stroke="#e5e7eb"
                    strokeWidth="1"
                  />
                ))}

                {/* Skill points */}
                <polygon
                  points={skillsData[activeCategory].skills.map((skill, j) => {
                    const level = skill.level / 100;
                    const angle = (j * 2 * Math.PI) / skillsData[activeCategory].skills.length;
                    const x = 150 + 120 * level * Math.cos(angle - Math.PI / 2);
                    const y = 150 + 120 * level * Math.sin(angle - Math.PI / 2);
                    return `${x},${y}`;
                  }).join(' ')}
                  fill={`url(#gradient-${activeCategory})`}
                  fillOpacity="0.3"
                  stroke={`url(#gradient-${activeCategory})`}
                  strokeWidth="2"
                />

                <defs>
                  <linearGradient id={`gradient-${activeCategory}`}>
                    <stop offset="0%" stopColor={skillsData[activeCategory].color.split(' ')[1]} />
                    <stop offset="100%" stopColor={skillsData[activeCategory].color.split(' ')[3]} />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>

        {/* Certifications & Tools */}
        <div className="grid md:grid-cols-2 gap-8 mt-16">
          {/* Certifications */}
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <FiBookOpen className="text-blue-600" />
              Professional Certifications
            </h3>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl"
                >
                  <div>
                    <h4 className="font-bold text-gray-900">{cert.name}</h4>
                    <p className="text-sm text-gray-600">{cert.issuer}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-900 font-semibold">Valid until {cert.validity}</div>
                    <div className="text-xs text-gray-500">Issued {cert.year}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* HR Tools */}
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <FiTool className="text-purple-600" />
              HR Tools & Technologies
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {tools.map((tool, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                  className="flex flex-col items-center justify-center p-4 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-200"
                >
                  <span className="text-2xl mb-2">{tool.icon}</span>
                  <div className="text-center">
                    <div className="font-medium text-gray-900">{tool.name}</div>
                    <div className={`text-sm font-semibold ${
                      tool.proficiency === 'Expert' ? 'text-green-600' :
                      tool.proficiency === 'Advanced' ? 'text-blue-600' :
                      'text-purple-600'
                    }`}>
                      {tool.proficiency}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;