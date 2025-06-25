import React from 'react';
import { ArrowRight, Code, Smartphone, Palette, TrendingUp } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-sky-800 dark:from-gray-950 dark:via-blue-950 dark:to-sky-900">
        <div className="absolute inset-0 bg-black/40 dark:bg-black/60"></div>
      </div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-20 h-20 bg-sky-400/20 dark:bg-sky-400/30 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-blue-400/20 dark:bg-blue-400/30 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-cyan-400/20 dark:bg-cyan-400/30 rounded-full blur-xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 animate-fade-in">
            Powering Your
            <span className="block bg-gradient-to-r from-sky-400 to-blue-400 bg-clip-text text-transparent">
              Digital Future
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl sm:text-2xl text-gray-200 dark:text-gray-300 mb-8 max-w-3xl mx-auto animate-fade-in-delay">
            Transform your business with cutting-edge web development, mobile apps, stunning UI/UX design, 
            and powerful digital solutions that drive growth.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in-delay-2">
            <button
              onClick={() => scrollToSection('services')}
              className="bg-gradient-to-r from-sky-500 to-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-sky-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-2 shadow-lg"
            >
              <span>Explore Services</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-200 transform hover:scale-105"
            >
              Get Free Consultation
            </button>
          </div>

          {/* Service Icons */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto animate-fade-in-delay-3">
            <div className="flex flex-col items-center space-y-2 text-white/80 hover:text-white transition-colors cursor-pointer">
              <div className="w-12 h-12 bg-white/10 dark:bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                <Code className="w-6 h-6" />
              </div>
              <span className="text-sm font-medium">Web Dev</span>
            </div>
            <div className="flex flex-col items-center space-y-2 text-white/80 hover:text-white transition-colors cursor-pointer">
              <div className="w-12 h-12 bg-white/10 dark:bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                <Smartphone className="w-6 h-6" />
              </div>
              <span className="text-sm font-medium">Mobile Apps</span>
            </div>
            <div className="flex flex-col items-center space-y-2 text-white/80 hover:text-white transition-colors cursor-pointer">
              <div className="w-12 h-12 bg-white/10 dark:bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                <Palette className="w-6 h-6" />
              </div>
              <span className="text-sm font-medium">UI/UX Design</span>
            </div>
            <div className="flex flex-col items-center space-y-2 text-white/80 hover:text-white transition-colors cursor-pointer">
              <div className="w-12 h-12 bg-white/10 dark:bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                <TrendingUp className="w-6 h-6" />
              </div>
              <span className="text-sm font-medium">SEO & Digital</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;