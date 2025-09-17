import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Users, Award, Clock, Heart } from 'lucide-react';

const About = () => {
  const sectionRef = useRef(null);
  const statsRef = useRef(null);

  useEffect(() => {
    // Animate section on scroll
    gsap.fromTo('.about-content',
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    // Animate stats counters
    gsap.fromTo('.stat-number',
      { innerText: 0 },
      {
        innerText: (i, target) => target.getAttribute('data-count'),
        duration: 2,
        ease: 'power2.out',
        snap: { innerText: 1 },
        scrollTrigger: {
          trigger: statsRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      }
    );
  }, []);

  const stats = [
    { icon: Users, number: 150, label: 'Happy Clients', suffix: '+' },
    { icon: Award, number: 25, label: 'Awards Won', suffix: '+' },
    { icon: Clock, number: 8, label: 'Years Experience', suffix: '' },
    { icon: Heart, number: 200, label: 'Projects Completed', suffix: '+' }
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="about-content">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              About <span className="text-amber-600">LuxeInteriors</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We are a team of passionate interior designers dedicated to creating spaces 
              that inspire and delight. With years of experience and a keen eye for detail, 
              we transform ordinary spaces into extraordinary environments.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-900">Our Philosophy</h3>
              <p className="text-gray-600 leading-relaxed">
                We believe that great design goes beyond aesthetics. It's about creating 
                functional, comfortable spaces that reflect your unique personality and 
                enhance your daily life. Every project is a collaboration between our 
                expertise and your vision.
              </p>
              <p className="text-gray-600 leading-relaxed">
                From luxurious residential homes to sophisticated commercial spaces, 
                we approach each project with creativity, attention to detail, and 
                unwavering commitment to excellence.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-4">
                {['Residential Design', 'Commercial Spaces', 'Luxury Interiors', 'Space Planning'].map((service) => (
                  <span key={service} className="bg-white px-4 py-2 rounded-full text-gray-700 border border-gray-200 text-sm font-medium">
                    {service}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Design Process"
                className="w-full h-96 object-cover rounded-2xl shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-amber-600/20 to-transparent rounded-2xl"></div>
            </div>
          </div>

          {/* Stats Section */}
          <div ref={statsRef} className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-4">
                  <stat.icon className="w-8 h-8 text-amber-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  <span className="stat-number" data-count={stat.number}>0</span>
                  <span>{stat.suffix}</span>
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;