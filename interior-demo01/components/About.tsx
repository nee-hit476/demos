import AnimatedSection from './AnimatedSection';
import LazyImage from './LazyImage';
import { Award, Users, Home, Star } from 'lucide-react';

export default function About() {
  const stats = [
    { icon: Home, number: '150+', label: 'Projects Completed' },
    { icon: Users, number: '120+', label: 'Happy Clients' },
    { icon: Award, number: '15+', label: 'Design Awards' },
    { icon: Star, number: '12+', label: 'Years Experience' },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <AnimatedSection animation="fadeInLeft">
            <div className="relative">
              <LazyImage
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop"
                alt="Elena Rodriguez - Interior Designer"
                className="w-full h-[600px] rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300">
                <p className="text-2xl font-serif font-bold text-gray-900">Elena Rodriguez</p>
                <p className="text-gray-600">Principal Designer</p>
              </div>
            </div>
          </AnimatedSection>

          {/* Content */}
          <div>
            <AnimatedSection animation="fadeInRight" delay={200}>
              <h2 className="text-4xl md:text-5xl font-serif font-light mb-6 text-gray-900">
                Creating Timeless
                <span className="block font-normal">Interiors</span>
              </h2>
            </AnimatedSection>
            <AnimatedSection animation="fadeInRight" delay={400}>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                With over a decade of experience in luxury interior design, I specialize in creating 
                sophisticated spaces that reflect my clients' personalities while maintaining timeless elegance.
              </p>
            </AnimatedSection>
            <AnimatedSection animation="fadeInRight" delay={600}>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                My approach combines classical design principles with contemporary functionality, 
                ensuring each space is both beautiful and livable. From residential homes to commercial 
                spaces, I bring a meticulous attention to detail and a passion for excellence to every project.
              </p>
            </AnimatedSection>

            {/* Stats */}
            <AnimatedSection animation="fadeInUp" delay={800}>
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center group hover:scale-105 transition-transform duration-300">
                    <div className="flex justify-center mb-2">
                      <stat.icon className="w-8 h-8 text-gray-700 group-hover:text-gray-900 transition-colors duration-300" />
                    </div>
                    <div className="text-3xl font-serif font-bold text-gray-900 mb-1">
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-600 font-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}