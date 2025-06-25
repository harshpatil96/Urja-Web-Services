import React from 'react';
import { Code, Smartphone, Palette, Search, Globe, BarChart } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies like React, Next.js, and Node.js.',
      features: ['Responsive Design', 'Fast Performance', 'SEO Optimized', 'Secure & Scalable'],
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android with exceptional user experience.',
      features: ['React Native', 'Flutter', 'Native iOS/Android', 'App Store Optimization'],
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive designs that enhance user experience and drive engagement.',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Visual Design'],
      gradient: 'from-green-500 to-teal-500'
    },
    {
      icon: Search,
      title: 'SEO Optimization',
      description: 'Comprehensive SEO strategies to improve your search engine rankings and drive organic traffic.',
      features: ['Keyword Research', 'On-Page SEO', 'Technical SEO', 'Content Strategy'],
      gradient: 'from-orange-500 to-red-500'
    },
    {
      icon: Globe,
      title: 'Digital Solutions',
      description: 'Complete digital transformation services including cloud solutions and system integration.',
      features: ['Cloud Migration', 'API Development', 'Database Design', 'System Integration'],
      gradient: 'from-indigo-500 to-purple-500'
    },
    {
      icon: BarChart,
      title: 'Digital Marketing',
      description: 'Data-driven marketing strategies to grow your online presence and boost conversions.',
      features: ['Social Media Marketing', 'PPC Advertising', 'Email Marketing', 'Analytics'],
      gradient: 'from-yellow-500 to-orange-500'
    }
  ];

  return (
    <section id="services" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We offer comprehensive digital solutions to help your business thrive in the digital age. 
            From concept to deployment, we've got you covered.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-700 hover:border-gray-200 dark:hover:border-gray-600"
            >
              {/* Card Header */}
              <div className={`bg-gradient-to-r ${service.gradient} p-6 text-white`}>
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                    <service.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                </div>
                <p className="text-white/90 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Card Body */}
              <div className="p-6">
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600 dark:text-gray-300">
                      <div className="w-2 h-2 bg-sky-500 rounded-full mr-3 flex-shrink-0"></div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className="mt-6 w-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 py-2 px-4 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200 font-medium text-sm group-hover:bg-sky-500 group-hover:text-white">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-sky-500 to-blue-600 rounded-2xl p-8 sm:p-12 text-white">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-xl text-sky-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help transform your business with our comprehensive digital solutions.
            </p>
            <button className="bg-white text-sky-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 transform hover:scale-105">
              Get Free Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;