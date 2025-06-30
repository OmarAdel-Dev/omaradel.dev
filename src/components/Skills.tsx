import { Monitor, Paintbrush, Settings } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: <Monitor size={24} />,
      title: 'Frontend Technologies',
      skills: ['React.js', 'Vue.js', 'Next.js', 'Redux', 'Pinia', 'JavaScript (ES6+)', 'TypeScript']
    },
    {
      icon: <Paintbrush size={24} />,
      title: 'Styling & UI',
      skills: ['HTML5', 'CSS3', 'SASS', 'Styled Components', 'Tailwind CSS', 'Bootstrap']
    },
    {
      icon: <Settings size={24} />,
      title: 'Tools & Testing',
      skills: ['Git', 'Vite', 'npm/yarn', 'Jest', 'React Testing Library', 'ESLint', 'Prettier']
    },
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Technical Skills
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-8 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="p-3 bg-blue-100 text-blue-600 rounded-lg">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 bg-white text-gray-700 rounded-lg text-sm font-medium border border-gray-200 hover:border-blue-300 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;