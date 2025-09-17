import AnimatedSection from './AnimatedSection';
import { Instagram, Facebook, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fadeInUp">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="md:col-span-2">
              <h3 className="text-2xl font-serif font-bold mb-4">Elena Rodriguez</h3>
              <p className="text-gray-300 mb-6 max-w-md">
                Creating sophisticated interior spaces that blend luxury with functionality. 
                Award-winning design studio based in New York.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-white hover:scale-110 transition-all duration-300 transform">
                  <Instagram size={20} />
                </a>
                <a href="#" className="text-gray-300 hover:text-white hover:scale-110 transition-all duration-300 transform">
                  <Facebook size={20} />
                </a>
                <a href="#" className="text-gray-300 hover:text-white hover:scale-110 transition-all duration-300 transform">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="text-gray-300 hover:text-white hover:scale-110 transition-all duration-300 transform">
                  <Mail size={20} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-300 transform inline-block">Home</a></li>
                <li><a href="#about" className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-300 transform inline-block">About</a></li>
                <li><a href="#portfolio" className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-300 transform inline-block">Portfolio</a></li>
                <li><a href="#services" className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-300 transform inline-block">Services</a></li>
                <li><a href="#contact" className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-300 transform inline-block">Contact</a></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                <li><span className="text-gray-300">Residential Design</span></li>
                <li><span className="text-gray-300">Commercial Design</span></li>
                <li><span className="text-gray-300">Color Consultation</span></li>
                <li><span className="text-gray-300">Space Planning</span></li>
                <li><span className="text-gray-300">Lighting Design</span></li>
              </ul>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="fadeInUp" delay={200}>
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">
              © 2024 Elena Rodriguez Interior Design. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">Terms of Service</a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </footer>
  );
}