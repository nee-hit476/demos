'use client';

import { useState } from 'react';
import AnimatedSection from './AnimatedSection';
import LazyImage from './LazyImage';
import { ExternalLink } from 'lucide-react';

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Modern Penthouse',
      category: 'residential',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'Luxury penthouse with panoramic city views',
    },
    {
      id: 2,
      title: 'Boutique Hotel Lobby',
      category: 'commercial',
      image: 'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'Elegant hotel lobby design with contemporary flair',
    },
    {
      id: 3,
      title: 'Family Villa',
      category: 'residential',
      image: 'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'Warm and inviting family home interior',
    },
    {
      id: 4,
      title: 'Executive Office',
      category: 'commercial',
      image: 'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'Sophisticated office space for corporate executives',
    },
    {
      id: 5,
      title: 'Coastal Retreat',
      category: 'residential',
      image: 'https://images.pexels.com/photos/1571467/pexels-photo-1571467.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'Serene coastal home with natural materials',
    },
    {
      id: 6,
      title: 'Restaurant Interior',
      category: 'commercial',
      image: 'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'Upscale restaurant with intimate dining atmosphere',
    },
  ];

  const filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'residential', label: 'Residential' },
    { key: 'commercial', label: 'Commercial' },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fadeInUp">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-light mb-6 text-gray-900">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore a curated selection of our most celebrated interior design projects, 
              each telling a unique story of transformation and elegance.
            </p>
          </div>
        </AnimatedSection>

        {/* Filter Buttons */}
        <AnimatedSection animation="fadeInUp" delay={200}>
          <div className="flex justify-center mb-12">
            <div className="flex space-x-4 bg-gray-100 p-2 rounded-lg">
              {filters.map((filter) => (
                <button
                  key={filter.key}
                  onClick={() => setActiveFilter(filter.key)}
                  className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:scale-105 transform ${
                    activeFilter === filter.key
                      ? 'bg-white text-gray-900 shadow-sm'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <AnimatedSection
              key={project.id}
              animation="fadeInUp"
              delay={project.id * 100}
            >
              <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 transform">
                <div className="aspect-[4/3] overflow-hidden">
                  <LazyImage
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-xl font-serif font-semibold mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm opacity-90 mb-4">
                      {project.description}
                    </p>
                    <button className="flex items-center space-x-2 text-sm font-medium hover:underline">
                      <span>View Project</span>
                      <ExternalLink size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}