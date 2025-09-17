import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink, X } from 'lucide-react';

const Portfolio = () => {
  const sectionRef = useRef(null);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    gsap.fromTo('.portfolio-item',
      { y: 60, opacity: 0, scale: 0.9 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.6,
        stagger: 0.15,
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

  const projects = [
    {
      id: 1,
      title: 'Modern Penthouse',
      category: 'residential',
      image: 'https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'A luxurious penthouse featuring contemporary design with panoramic city views and high-end finishes.',
      details: 'This stunning penthouse combines modern luxury with functional living. The open-plan design maximizes natural light while creating distinct zones for entertaining and relaxation.'
    },
    {
      id: 2,
      title: 'Cozy Family Home',
      category: 'residential',
      image: 'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Warm and inviting family home with comfortable furnishings and child-friendly design elements.',
      details: 'Designed with family life in mind, this home features durable materials, smart storage solutions, and spaces that adapt to growing children\'s needs.'
    },
    {
      id: 3,
      title: 'Executive Office',
      category: 'commercial',
      image: 'https://images.pexels.com/photos/2177482/pexels-photo-2177482.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Sophisticated executive office design promoting productivity and professional image.',
      details: 'This executive office balances professionalism with comfort, featuring ergonomic furniture, strategic lighting, and technology integration.'
    },
    {
      id: 4,
      title: 'Boutique Restaurant',
      category: 'commercial',
      image: 'https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Intimate restaurant design creating memorable dining experiences through thoughtful space planning.',
      details: 'The design creates an intimate atmosphere while maximizing seating capacity and ensuring smooth service flow throughout the space.'
    },
    {
      id: 5,
      title: 'Minimalist Loft',
      category: 'residential',
      image: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Clean, minimalist loft design emphasizing space, light, and carefully selected statement pieces.',
      details: 'This loft embraces minimalism without sacrificing warmth, using natural materials and strategic lighting to create a serene urban retreat.'
    },
    {
      id: 6,
      title: 'Luxury Hotel Suite',
      category: 'commercial',
      image: 'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Elegant hotel suite combining comfort with luxury for an unforgettable guest experience.',
      details: 'Every detail was considered to create a five-star experience, from custom millwork to carefully curated artwork and premium textiles.'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'residential', label: 'Residential' },
    { id: 'commercial', label: 'Commercial' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="portfolio" ref={sectionRef} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-amber-600">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Explore our diverse collection of interior design projects, each uniquely crafted 
            to meet our clients' specific needs and lifestyle preferences.
          </p>

          {/* Filter Buttons */}
          <div className="flex justify-center flex-wrap gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  filter === category.id
                    ? 'bg-amber-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id} 
              className="portfolio-item bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer"
              onClick={() => setSelectedProject(project.id)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <button className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg font-medium inline-flex items-center">
                      View Details
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-amber-100 text-amber-600 text-xs font-medium px-3 py-1 rounded-full capitalize">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-amber-600 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4" onClick={() => setSelectedProject(null)}>
            <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
              {(() => {
                const project = projects.find(p => p.id === selectedProject);
                if (!project) return null;
                
                return (
                  <div className="relative">
                    <button 
                      onClick={() => setSelectedProject(null)}
                      className="absolute top-4 right-4 z-10 bg-white/90 p-2 rounded-full hover:bg-white transition-colors"
                    >
                      <X className="w-6 h-6" />
                    </button>
                    
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-96 object-cover rounded-t-2xl"
                    />
                    
                    <div className="p-8">
                      <div className="flex items-center gap-4 mb-4">
                        <span className="bg-amber-100 text-amber-600 text-sm font-medium px-4 py-2 rounded-full capitalize">
                          {project.category}
                        </span>
                      </div>
                      
                      <h3 className="text-3xl font-bold text-gray-900 mb-4">{project.title}</h3>
                      <p className="text-lg text-gray-600 leading-relaxed mb-6">{project.details}</p>
                      
                      <button 
                        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                        className="bg-amber-600 text-white px-8 py-3 rounded-lg hover:bg-amber-700 transition-colors duration-300 font-semibold"
                      >
                        Start Similar Project
                      </button>
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;