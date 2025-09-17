import AnimatedSection from './AnimatedSection';
import LazyImage from './LazyImage';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <LazyImage
          src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
          alt="Luxury interior design"
          className="w-full h-full"
          priority={true}
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <AnimatedSection animation="fadeInUp" delay={300}>
          <h1 className="text-5xl md:text-7xl font-serif font-light mb-6 leading-tight">
            Crafting Spaces
            <span className="block font-normal">That Inspire</span>
          </h1>
        </AnimatedSection>
        <AnimatedSection animation="fadeInUp" delay={600}>
          <p className="text-xl md:text-2xl mb-8 font-light max-w-2xl mx-auto leading-relaxed">
            Award-winning interior designer creating sophisticated spaces that blend luxury with functionality
          </p>
        </AnimatedSection>
        <AnimatedSection animation="fadeInUp" delay={900}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#portfolio"
              className="bg-white text-gray-900 px-8 py-3 text-lg font-medium hover:bg-gray-100 hover:scale-105 transition-all duration-300 transform"
            >
              View Portfolio
            </a>
            <a
              href="#contact"
              className="border-2 border-white text-white px-8 py-3 text-lg font-medium hover:bg-white hover:text-gray-900 hover:scale-105 transition-all duration-300 transform"
            >
              Get In Touch
            </a>
          </div>
        </AnimatedSection>
      </div>

      {/* Scroll Indicator */}
      <AnimatedSection animation="fadeIn" delay={1200}>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <ArrowDown size={24} />
        </div>
      </AnimatedSection>
    </section>
  );
}