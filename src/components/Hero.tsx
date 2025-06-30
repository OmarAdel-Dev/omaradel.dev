import React from 'react';
import { Github, Linkedin, Mail, Phone, ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Main Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                👋 Available for new opportunities
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                I'm <span className="text-blue-600">Omar</span>,<br />
                Frontend Engineer
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                Crafting exceptional digital experiences with React & Vue.js. 
                5+ years turning ideas into scalable web applications.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="px-8 py-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors font-semibold shadow-lg hover:shadow-xl"
              >
                Let's Work Together
              </a>
              <a
                href="#experience"
                className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-xl hover:border-blue-600 hover:text-blue-600 transition-colors font-semibold"
              >
                View My Work
              </a>
            </div>
          </div>

          {/* Right Column - Contact Card */}
          <div className="lg:justify-self-end">
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 max-w-sm">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  OA
                </div>
                <h3 className="text-xl font-bold text-gray-900">Omar Adel</h3>
                <p className="text-gray-600">Senior Frontend Engineer</p>
              </div>

              <div className="space-y-4">
                <a
                  href="mailto:omaradel97@outlook.com"
                  className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                >
                  <div className="p-2 bg-blue-100 text-blue-600 rounded-lg group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <Mail size={18} />
                  </div>
                  <div className="text-sm">
                    <div className="text-gray-500">Email</div>
                    <div className="text-gray-900 font-medium">omaradel97@outlook.com</div>
                  </div>
                </a>

                <a
                  href="tel:+201026236822"
                  className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                >
                  <div className="p-2 bg-green-100 text-green-600 rounded-lg group-hover:bg-green-600 group-hover:text-white transition-colors">
                    <Phone size={18} />
                  </div>
                  <div className="text-sm">
                    <div className="text-gray-500">Phone</div>
                    <div className="text-gray-900 font-medium">+20 102 623 6822</div>
                  </div>
                </a>

                <div className="flex space-x-3 pt-4 border-t border-gray-100">
                  <a
                    href="https://linkedin.com/in/omaradel97"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center p-3 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a
                    href="https://github.com/omaradel97"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center p-3 bg-gray-50 text-gray-600 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown 
          size={24} 
          className="text-gray-400 cursor-pointer" 
          onClick={() => {
        const nextSection = document.querySelector('#about');
        nextSection?.scrollIntoView({ behavior: 'smooth' });
          }} 
        />
      </div>
    </section>
  );
};

export default Hero;