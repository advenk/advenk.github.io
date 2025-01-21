import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const Portfolio = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section with Particle Background */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <svg className="w-full h-full opacity-20">
            <pattern id="pattern-hex" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M10 1l8.66 5v10L10 21l-8.66-5V6L10 1z" fill="none" stroke="currentColor" strokeWidth="0.5"/>
            </pattern>
            <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-hex)"/>
          </svg>
        </div>
        
        <div className="z-10 text-center">
          <h1 className="text-6xl font-light mb-4">
            Hello, I'm <span className="text-red-400">Aditya</span>
          </h1>
          <p className="text-4xl font-light mb-12">I'm a Senior Software Engineer.</p>
          <button 
            onClick={() => scrollToSection('work')}
            className="group relative inline-flex items-center px-8 py-3 border border-red-400 text-red-400 hover:bg-red-400 hover:text-white transition-colors"
          >
            View my work
            <ChevronDown className="ml-2 animate-bounce" />
          </button>
        </div>
      </div>

      {/* About Section */}
      <section id="about" className="min-h-screen bg-gray-900 py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-light mb-16 relative">
            About
            <span className="absolute bottom-0 left-0 w-20 h-1 bg-red-400"></span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <p className="text-lg text-gray-300">
                Senior Software Engineer with expertise in building scalable applications using Spring Boot, Kafka, and microservices architecture. Currently pursuing a Master's in Computer Science at the University of Amsterdam.
              </p>
            </div>
            
            <div className="grid grid-cols-3 gap-4">
              {['Spring Boot', 'Kafka', 'Kubernetes', 'Redis', 'ElasticSearch', 'Java', 'Python', 'SQL'].map((tech) => (
                <div key={tech} className="p-4 border border-gray-700 rounded-lg bg-gray-800 hover:border-red-400 transition-colors">
                  <span className="text-sm">{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Work Experience Section */}
      <section id="work" className="min-h-screen bg-gray-900 py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-light mb-16 relative">
            Work Experience
            <span className="absolute bottom-0 left-0 w-20 h-1 bg-red-400"></span>
          </h2>

          <div className="space-y-12">
            <div className="bg-gray-800 p-8 rounded-lg transform hover:scale-105 transition-transform">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold">Senior Software Engineer</h3>
                  <p className="text-red-400">Lendingkart</p>
                </div>
                <span className="text-gray-400">APR 2022 - JUL 2024</span>
              </div>
              <ul className="space-y-2 text-gray-300">
                <li>• Designed and developed a self-serve onboarding platform using Spring Boot, MySQL, and Kafka</li>
                <li>• Built multi-tenant dashboards with Logstash, Redis, and Elasticsearch</li>
                <li>• Improved system efficiency by 80% through optimization</li>
              </ul>
            </div>
            
            {/* Add more work experience items */}
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section id="publications" className="min-h-screen bg-gray-900 py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-light mb-16 relative">
            Publications
            <span className="absolute bottom-0 left-0 w-20 h-1 bg-red-400"></span>
          </h2>

          <div className="grid grid-cols-1 gap-8">
            <div className="bg-gray-800 p-8 rounded-lg hover:border-red-400 border border-gray-700 transition-colors">
              <h3 className="text-xl font-semibold mb-4">
                A Framework to Capture the Shift in Dynamics of a Multi-phase Protest
              </h3>
              <p className="text-gray-300 mb-4">
                Analyzed Hong Kong protests using Twitter data to map sentiment evolution and participant growth.
              </p>
              <div className="flex gap-2">
                <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">Python</span>
                <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">NLTK</span>
                <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">Gephi</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen bg-gray-900 py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-light mb-16 relative">
            Projects
            <span className="absolute bottom-0 left-0 w-20 h-1 bg-red-400"></span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-75 group-hover:opacity-100 transition-opacity rounded-lg"></div>
              <img src="/api/placeholder/600/400" alt="Project preview" className="rounded-lg" />
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <h3 className="text-2xl font-semibold mb-2">IPL Match Simulation</h3>
                <p className="text-gray-200 mb-4">Ball-by-ball prediction system using machine learning</p>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-black bg-opacity-50 rounded-full text-sm">Hadoop</span>
                  <span className="px-3 py-1 bg-black bg-opacity-50 rounded-full text-sm">Spark</span>
                  <span className="px-3 py-1 bg-black bg-opacity-50 rounded-full text-sm">Python</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;