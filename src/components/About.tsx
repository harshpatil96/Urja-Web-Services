import React from 'react';
import { Target, Eye, Users, Award } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To empower businesses with innovative digital solutions that drive growth, enhance user experience, and create lasting impact in the digital landscape.'
    },
    {
      icon: Eye,
      title: 'Our Vision',
      description: 'To be the leading digital transformation partner, helping companies worldwide achieve their full potential through cutting-edge technology and creative excellence.'
    },
    {
      icon: Users,
      title: 'Our Team',
      description: 'A passionate group of developers, designers, and digital strategists committed to delivering exceptional results and building long-term partnerships.'
    },
    {
      icon: Award,
      title: 'Our Values',
      description: 'Innovation, integrity, and excellence in everything we do. We believe in transparent communication and delivering solutions that exceed expectations.'
    }
  ];

  const stats = [
    { number: '150+', label: 'Projects Completed' },
    { number: '50+', label: 'Happy Clients' },
    { number: '5+', label: 'Years Experience' },
    { number: '24/7', label: 'Support Available' }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Urja Web Services
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We're a dynamic team of digital innovators dedicated to transforming your ideas into 
            powerful digital experiences that drive business growth and success.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-sky-600 dark:text-sky-400 mb-2">{stat.number}</div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-sky-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-200">
                  <value.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{value.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{value.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Company Story */}
        <div className="mt-20 bg-white dark:bg-gray-700 rounded-2xl p-8 sm:p-12 shadow-lg">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Our Story
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              Founded with a vision to bridge the gap between innovative technology and business success, 
              Urja Web Services has grown from a small team of passionate developers to a comprehensive 
              digital solutions provider. We've helped businesses across various industries establish 
              their digital presence and achieve remarkable growth.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Our name "Urja" means energy in Sanskrit, reflecting our commitment to energizing your 
              business with powerful digital solutions that drive results and create lasting impact.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;