import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      position: 'CEO, TechStart Inc.',
      company: 'TechStart Inc.',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300',
      content: 'Urja Web Services transformed our digital presence completely. Their team delivered a stunning website that increased our conversions by 150%. Professional, reliable, and innovative!',
      rating: 5
    },
    {
      name: 'Michael Chen',
      position: 'Founder, EcoSolutions',
      company: 'EcoSolutions',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300',
      content: 'The mobile app they developed for us exceeded all expectations. The user experience is phenomenal, and our customers love it. Highly recommend their services!',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      position: 'Marketing Director, FashionForward',
      company: 'FashionForward',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300',
      content: 'Working with Urja was a game-changer for our e-commerce platform. They delivered on time, within budget, and the results speak for themselves. Outstanding work!',
      rating: 5
    },
    {
      name: 'David Thompson',
      position: 'CTO, HealthTech Solutions',
      company: 'HealthTech Solutions',
      image: 'https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=300',
      content: 'Their technical expertise and attention to detail is impressive. The healthcare platform they built for us is robust, secure, and user-friendly. Excellent partnership!',
      rating: 5
    },
    {
      name: 'Lisa Wang',
      position: 'Owner, Local Bistro Chain',
      company: 'Local Bistro Chain',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300',
      content: 'The restaurant website and online ordering system they created boosted our online orders by 200%. Their team is creative, professional, and delivers results.',
      rating: 5
    },
    {
      name: 'James Miller',
      position: 'Director, Educational Institute',
      company: 'Educational Institute',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=300',
      content: 'The learning management system they developed has revolutionized how we deliver education. Students and teachers love the intuitive interface and powerful features.',
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about 
            their experience working with Urja Web Services.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 text-sky-200 dark:text-sky-600">
                <Quote className="w-8 h-8" />
              </div>

              {/* Rating */}
              <div className="flex space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Testimonial Content */}
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Client Info */}
              <div className="flex items-center space-x-3">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.position}</p>
                  <p className="text-sm text-sky-600 dark:text-sky-400 font-medium">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-gradient-to-r from-sky-500 to-blue-600 rounded-2xl p-8 sm:p-12 text-white">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl sm:text-4xl font-bold mb-2">98%</div>
              <div className="text-sky-100">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold mb-2">150+</div>
              <div className="text-sky-100">Projects Delivered</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold mb-2">24/7</div>
              <div className="text-sky-100">Support Available</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold mb-2">5★</div>
              <div className="text-sky-100">Average Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;