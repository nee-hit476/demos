import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Home, Building2, Palette, Lightbulb, Sofa, Layout } from 'lucide-react';

const Services = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.fromTo('.service-card',
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      }
    );
  }, []);

  const services = [
    {
      icon: Home,
      title: 'Residential Design',
      description: 'Complete home makeovers from concept to completion, creating personalized living spaces that reflect your lifestyle.',
      features: ['Living Rooms', 'Bedrooms', 'Kitchens', 'Bathrooms']
    },
    {
      icon: Building2,
      title: 'Commercial Spaces',
      description: 'Professional office and retail space design that enhances productivity and creates lasting impressions.',
      features: ['Office Design', 'Retail Spaces', 'Restaurants', 'Hotels']
    },
    {
      icon: Palette,
      title: 'Color Consultation',
      description: 'Expert color selection and coordination to create harmonious and impactful color schemes throughout your space.',
      features: ['Color Schemes', 'Paint Selection', 'Material Matching', 'Mood Creation']
    },
    {
      icon: Lightbulb,
      title: 'Lighting Design',
      description: 'Strategic lighting solutions that enhance ambiance, functionality, and highlight your space\'s best features.',
      features: ['Ambient Lighting', 'Task Lighting', 'Accent Lighting', 'Smart Controls']
    },
    {
      icon: Sofa,
      title: 'Furniture Selection',
      description: 'Carefully curated furniture pieces that combine style, comfort, and functionality for your unique space.',
      features: ['Custom Furniture', 'Space Planning', 'Style Coordination', 'Budget Optimization']
    },
    {
      icon: Layout,
      title: 'Space Planning',
      description: 'Optimal space utilization and flow design to maximize functionality while maintaining aesthetic appeal.',
      features: ['Floor Plans', 'Traffic Flow', 'Storage Solutions', '3D Visualization']
    }
  ];

  return (
    <section id="services" ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-amber-600">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We offer comprehensive interior design services tailored to your specific needs, 
            from initial consultation to final installation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="service-card bg-gray-50 p-8 rounded-xl hover:bg-white hover:shadow-xl transition-all duration-300 group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-6 group-hover:bg-amber-600 group-hover:text-white transition-all duration-300">
                <service.icon className="w-8 h-8 text-amber-600 group-hover:text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              
              <div className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-amber-600 rounded-full mr-3"></div>
                    {feature}
                  </div>
                ))}
              </div>
              
              <button className="mt-6 text-amber-600 font-semibold hover:text-amber-700 transition-colors duration-300 inline-flex items-center">
                Learn More
                <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;