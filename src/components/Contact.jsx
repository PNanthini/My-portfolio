import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSend, FiLinkedin, FiCalendar } from 'react-icons/fi';

const Contact = ({ id }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <FiMail />,
      title: 'Email',
      info: 'sarah.rodriguez@hrpro.com',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <FiPhone />,
      title: 'Phone',
      info: '+1 (555) 123-4567',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <FiMapPin />,
      title: 'Location',
      info: 'San Francisco, CA',
      color: 'from-green-500 to-emerald-500'
    }
  ];

  const availability = [
    { day: 'Monday - Thursday', time: '9:00 AM - 5:00 PM' },
    { day: 'Friday', time: '9:00 AM - 3:00 PM' },
    { day: 'Weekends', time: 'Available for urgent matters' }
  ];

  return (
    <section id={id} className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-blue-600 font-semibold mb-4 block">GET IN TOUCH</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Let's <span className="text-blue-600">Connect</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Interested in discussing HR opportunities, consulting projects, 
            or just want to connect? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center gap-6 bg-white rounded-2xl p-6 shadow-lg"
                >
                  <div className={`p-4 rounded-xl bg-gradient-to-br ${item.color}`}>
                    <div className="text-white text-2xl">{item.icon}</div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-gray-600">{item.info}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Availability */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-8 bg-gradient-to-br from-white to-blue-50 rounded-2xl p-8 shadow-lg"
            >
              <div className="flex items-center gap-3 mb-6">
                <FiCalendar className="text-blue-600 text-xl" />
                <h3 className="text-xl font-bold text-gray-900">Availability</h3>
              </div>
              <div className="space-y-4">
                {availability.map((slot, index) => (
                  <div key={index} className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="font-medium text-gray-900">{slot.day}</span>
                    <span className="text-blue-600 font-semibold">{slot.time}</span>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-sm text-gray-600">
                * Response time within 24 hours during business days
              </p>
            </motion.div>

            {/* LinkedIn Profile */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl p-8 text-white shadow-lg"
            >
              <div className="flex items-center gap-4 mb-4">
                <FiLinkedin className="text-3xl" />
                <div>
                  <h3 className="text-xl font-bold">LinkedIn Profile</h3>
                  <p className="text-blue-100">Connect for professional networking</p>
                </div>
              </div>
          <a
  href="https://www.linkedin.com/in/YOUR-LINKEDIN-USERNAME"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
>
  Visit Profile
</a>

            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-xl p-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send a Message</h3>
            
            {submitStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg"
              >
                <p className="text-green-700 font-medium">
                  ✅ Message sent successfully! I'll get back to you within 24 hours.
                </p>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    placeholder="John Smith"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Subject *
                </label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                >
                  <option value="">Select a topic</option>
                  <option value="hr-consulting">HR Consulting</option>
                  <option value="job-opportunity">Job Opportunity</option>
                  <option value="speaking-engagement">Speaking Engagement</option>
                  <option value="networking">Professional Networking</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all resize-none"
                  placeholder="Tell me about your HR needs or opportunity..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold py-4 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <FiSend />
                    Send Message
                  </>
                )}
              </motion.button>

              <p className="text-sm text-gray-500 text-center">
                I typically respond within 24 hours on business days
              </p>
            </form>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-12 text-white shadow-2xl">
            <h3 className="text-3xl font-bold mb-4">Ready to Transform Your HR Strategy?</h3>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how strategic HR can drive your organization's success
            </p>
          <motion.a
  href="mailto:sarah.rodriguez@hrpro.com"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  className="inline-block bg-white text-blue-600 font-bold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all"
>
  Schedule a Free Consultation
</motion.a>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;