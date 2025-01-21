"use client";

import React, { useState, useEffect } from 'react';
import { ChevronDown, Github, Linkedin, Mail, ExternalLink, Calendar, MapPin } from 'lucide-react';

interface Experience {
  title: string;
  company: string;
  period: string;
  points: string[];
}

interface Project {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
}

interface Publication {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
}

const Portfolio: React.FC = () => {
  const [scrollPosition, setScrollPosition] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const experiences: Experience[] = [
    {
      title: "Senior Software Engineer",
      company: "Lendingkart",
      period: "APR 2022 - JUL 2024",
      points: [
        "Designed and developed a self-serve onboarding platform using Spring Boot, MySQL, and Kafka",
        "Built multi-tenant dashboards with Logstash, Redis, and Elasticsearch",
        "Improved system efficiency by 80% through optimization",
        "Developed reusable custom onboarding features increasing disbursal capacity to ₹3000M per month"
      ]
    },
    {
      title: "Software Engineer",
      company: "Lendingkart",
      period: "OCT 2020 - MAR 2022",
      points: [
        "Developed a loan-selling framework scaling co-lending disbursements from ₹200M to ₹1000M per month",
        "Led development of a customisable Java rule engine for credit rules",
        "Automated customer transaction settlements reducing manual effort by 1.5 man-days per week"
      ]
    }
  ];

  const projects: Project[] = [
    {
      title: "IPL Match Simulation",
      description: "Ball-by-ball prediction system for IPL matches using machine learning",
      technologies: ["Hadoop", "Spark", "Python"],
      link: "#"
    }
  ];

  const publications: Publication[] = [
    {
      title: "A Framework to Capture the Shift in Dynamics of a Multi-phase Protest",
      description: "Analyzed Hong Kong protests using Twitter data to map sentiment evolution and participant growth",
      technologies: ["Python", "NLTK", "Gephi"],
      link: "#"
    }
  ];

  const scrollToSection = (sectionId: string): void => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section with Particle Background */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <svg className="w-full h-full opacity-20">
            <pattern 
              id="pattern-hex" 
              x="0" 
              y="0" 
              width="20" 
              height="20" 
              patternUnits="userSpaceOnUse"
            >
              <path 
                d="M10 1l8.66 5v10L10 21l-8.66-5V6L10 1z" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="0.5"
              />
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

      {/* Navigation Bar - Appears after scroll */}
      <nav className={`fixed top-0 w-full z-50 transition-opacity duration-300 ${
        scrollPosition > 100 ? 'opacity-100' : 'opacity-0'
      }`}>
        <div className="bg-gray-900 bg-opacity-90 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
              <span className="text-xl font-light">Aditya V. Marada</span>
              <div className="flex space-x-6">
                <button onClick={() => scrollToSection('about')} className="hover:text-red-400">About</button>
                <button onClick={() => scrollToSection('work')} className="hover:text-red-400">Work</button>
                <button onClick={() => scrollToSection('publications')} className="hover:text-red-400">Publications</button>
                <button onClick={() => scrollToSection('projects')} className="hover:text-red-400">Projects</button>
              </div>
            </div>
          </div>
        </div>
      </nav>

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
                Senior Software Engineer with expertise in building scalable applications using Spring Boot, 
                Kafka, and microservices architecture. Currently pursuing a Master's in Computer Science 
                at the University of Amsterdam.
              </p>
            </div>
            
            <div className="grid grid-cols-3 gap-4">
              {['Spring Boot', 'Kafka', 'Kubernetes', 'Redis', 'ElasticSearch', 'Java', 'Python', 'SQL']
                .map((tech) => (
                  <div 
                    key={tech} 
                    className="p-4 border border-gray-700 rounded-lg bg-gray-800 hover:border-red-400 transition-colors"
                  >
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
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className="bg-gray-800 p-8 rounded-lg transform hover:scale-105 transition-transform"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">{exp.title}</h3>
                    <p className="text-red-400">{exp.company}</p>
                  </div>
                  <span className="text-gray-400">{exp.period}</span>
                </div>
                <ul className="space-y-2 text-gray-300">
                  {exp.points.map((point, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="mr-2">•</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
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
            {publications.map((pub, index) => (
              <div 
                key={index}
                className="bg-gray-800 p-8 rounded-lg hover:border-red-400 border border-gray-700 transition-colors"
              >
                <h3 className="text-xl font-semibold mb-4">{pub.title}</h3>
                <p className="text-gray-300 mb-4">{pub.description}</p>
                <div className="flex gap-2">
                  {pub.technologies.map((tech, idx) => (
                    <span key={idx} className="px-3 py-1 bg-gray-700 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
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
            {projects.map((project, index) => (
              <div key={index} className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-75 group-hover:opacity-100 transition-opacity rounded-lg"></div>
                <div className="relative p-6 flex flex-col justify-end min-h-[300px]">
                  <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-200 mb-4">{project.description}</p>
                  <div className="flex gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span 
                        key={idx} 
                        className="px-3 py-1 bg-black bg-opacity-50 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="flex justify-center space-x-6">
            <a href="mailto:a.v.marada@student.vu.nl" className="text-gray-400 hover:text-red-400">
              <Mail className="w-6 h-6" />
            </a>
            <a href="https://github.com" className="text-gray-400 hover:text-red-400">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com" className="text-gray-400 hover:text-red-400">
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
          <p className="text-center text-gray-500 mt-4">
            © {new Date().getFullYear()} Aditya Venkatesh Marada. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;