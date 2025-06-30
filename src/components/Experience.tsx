import React from 'react';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Senior Frontend Engineer',
      company: 'Walaplus',
      location: 'Riyadh | Remote',
      period: 'Mar 2024 - Present',
      current: true,
      description: 'Leading frontend development initiatives and technical hiring processes.',
      achievements: [
        'Mastered Vue.js & Composition API, delivering multiple production apps with TypeScript & Pinia',
        'Led technical hiring process, establishing Git workflows and code review standards',
        'Architected client-facing applications from requirements to production deployment'
      ],
      technologies: ['Vue.js', 'TypeScript', 'Pinia', 'React', 'JavaScript']
    },
    {
      title: 'Frontend Engineer',
      company: 'Vezeeta',
      location: 'Cairo | Hybrid',
      period: 'Jan 2021 - Mar 2024',
      description: 'Healthcare applications serving millions across the Middle East.',
      achievements: [
        'Built responsive healthcare apps with React, Redux, and Next.js',
        'Collaborated with engineers and product owners on strategic initiatives',
        'Created reusable component libraries with Storybook, reducing development time'
      ],
      technologies: ['React', 'Redux', 'Next.js', 'Styled Components', 'Storybook']
    },
    {
      title: 'Frontend Developer',
      company: 'SWISO Software Development',
      location: 'Alexandria | Remote',
      period: 'Feb 2020 - Jan 2021',
      description: 'Analytics dashboards and form builder solutions.',
      achievements: [
        'Developed comprehensive analytics dashboard with Chart.js and query builder',
        'Built dynamic no-code form builder with integrated workflow system'
      ],
      technologies: ['React', 'Chart.js', 'JavaScript', 'CSS3']
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Work Experience
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200 hidden md:block"></div>

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="relative">
                  {/* Timeline Dot */}
                  <div className="absolute left-6 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-md hidden md:block"></div>
                  
                  <div className="md:ml-16 bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                      <div className="mb-4 lg:mb-0">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="text-2xl font-bold text-gray-900">
                            {exp.title}
                          </h3>
                          {exp.current && (
                            <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                              Current
                            </span>
                          )}
                        </div>
                        <h4 className="text-xl text-blue-600 font-semibold mb-2">
                          {exp.company}
                        </h4>
                        <p className="text-gray-600 italic">
                          {exp.description}
                        </p>
                      </div>
                      
                      <div className="text-right space-y-2">
                        <div className="flex items-center text-gray-500 lg:justify-end">
                          <Calendar size={16} className="mr-2" />
                          <span className="text-sm">{exp.period}</span>
                        </div>
                        <div className="flex items-center text-gray-500 lg:justify-end">
                          <MapPin size={16} className="mr-2" />
                          <span className="text-sm">{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3 mb-6">
                      {exp.achievements.map((achievement, idx) => (
                        <div key={idx} className="flex items-start space-x-3">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-gray-700 leading-relaxed">
                            {achievement}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium border border-blue-100"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;