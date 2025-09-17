import AnimatedSection from './AnimatedSection';
import { Palette, Home, Lightbulb, Sofa, Building, Ruler } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Home,
      title: 'Residential Design',
      description: 'Complete home interior design from concept to completion, creating personalized living spaces.',
    },
    {
      icon: Building,
      title: 'Commercial Design',
      description: 'Professional office and retail space design that enhances productivity and brand identity.',
    },
    {
      icon: Palette,
      title: 'Color Consultation',
      description: 'Expert color palette selection to create the perfect mood and atmosphere for your space.',
    },
    {
      icon: Sofa,
      title: 'Furniture Selection',
      description: 'Curated furniture and decor selection that perfectly complements your design vision.',
    },
    {
      icon: Lightbulb,
      title: 'Lighting Design',
      description: 'Strategic lighting solutions that enhance ambiance and functionality throughout your space.',
    },
    {
      icon: Ruler,
      title: 'Space Planning',
      description: 'Optimal space utilization and flow planning to maximize both beauty and functionality.',
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fadeInUp">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-light mb-6 text-gray-900">
              Design Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From initial concept to final installation, we offer comprehensive interior design 
              services tailored to your unique vision and lifestyle.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <AnimatedSection
              key={index}
              animation="fadeInUp"
              delay={index * 100}
            >
              <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300 group">
                <div className="flex items-center justify-center w-16 h-16 bg-gray-100 rounded-lg mb-6 group-hover:bg-gray-900 transition-colors duration-300">
                  <service.icon className="w-8 h-8 text-gray-700 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-serif font-semibold mb-4 text-gray-900">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Process Section */}
        <div className="mt-20">
          <AnimatedSection animation="fadeInUp">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-serif font-light mb-4 text-gray-900">
                Our Design Process
              </h3>
              <p className="text-lg text-gray-600">
                A streamlined approach that ensures your vision becomes reality
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Consultation', description: 'Initial meeting to understand your vision and requirements' },
              { step: '02', title: 'Concept', description: 'Develop design concepts and mood boards for your approval' },
              { step: '03', title: 'Design', description: 'Create detailed plans, 3D renderings, and material selections' },
              { step: '04', title: 'Implementation', description: 'Oversee installation and styling to bring your space to life' },
            ].map((phase, index) => (
              <AnimatedSection key={index} animation="fadeInUp" delay={index * 200}>
                <div className="text-center group hover:scale-105 transition-transform duration-300">
                  <div className="text-4xl font-serif font-light text-gray-300 mb-4 group-hover:text-gray-400 transition-colors duration-300">
                    {phase.step}
                  </div>
                  <h4 className="text-lg font-semibold mb-2 text-gray-900">
                    {phase.title}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {phase.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}