import { Code2, Zap, Target } from 'lucide-react';

const About = () => {
  
  const highlights = [
    {
      icon: <Code2 size={20} />,
      title: 'Technical Excellence',
      description: 'Expert in React.js, Vue.js, and modern frontend technologies'
    },
    {
      icon: <Zap size={20} />,
      title: 'Performance Focus',
      description: 'Building scalable applications with optimal user experience'
    },
    {
      icon: <Target size={20} />,
      title: 'Results Driven',
      description: 'Delivering solutions from concept to production'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              About Me
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>
          </div>

          <div className="">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-600 leading-relaxed">
                  Senior Frontend Engineer with 5+ years of experience specializing in React and Vue.js frameworks. 
                  Proven ability to architect complex applications, lead technical hiring processes, and deliver scalable solutions including analytics dashboards and workflow systems.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Successfully led technical hiring initiatives, recruiting and onboarding engineers while establishing development standards. 
                  Demonstrated expertise in full project lifecycle management, from requirements gathering to production deployment.
                </p>
              </div>

              {/* Highlights Grid */}
              <div className="grid md:grid-cols-3 gap-6">
                {highlights.map((highlight, index) => (
                  <div
                    key={index}
                    className="p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="p-2 bg-blue-100 text-blue-600 rounded-lg">
                        {highlight.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">
                          {highlight.title}
                        </h3>
                        <p className="text-gray-600 text-sm">
                          {highlight.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;