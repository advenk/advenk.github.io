import { Github, Linkedin, Mail } from 'lucide-react';
import Image from 'next/image';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--background)]">
      {/* Hero Section */}
      <section className="flex-1 flex items-center justify-center py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Profile Image */}
            <div className="w-64 h-64 relative rounded-full overflow-hidden border-4 border-[var(--neon-primary)] shadow-lg shadow-[var(--neon-primary)]/20">
              <Image
                src="/AV.jpeg"
                alt="Aditya Venkatesh"
                fill
                style={{ objectFit: 'cover', objectPosition: 'top center' }}
                priority
              />
            </div>

            {/* Content */}
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-7xl font-extralight mb-8 tracking-tight">
                Hello, I'm <span className="neon-text font-light">Aditya</span>
              </h1>
              
              <div className="space-y-6 text-xl text-[var(--text-secondary)]">
                <p className="leading-relaxed">
                  Software engineer with experience in building distributed microservices 
                  using SpringBoot, Kafka, Elasticsearch, MySQL, Redis, and more.
                </p>
                
                <p className="leading-relaxed">
                  Currently pursuing a Master's in Computer Science at the University of Amsterdam and VU Amsterdam
                  <br />
                  <span className="text-[var(--text-primary)] font-medium">
                    Specialization: Computer Systems and Infrastructure
                  </span>
                </p>
              </div>

              <div className="flex justify-center md:justify-start space-x-8 mt-12">
                <a 
                  href="mailto:a.v.marada@student.vu.nl" 
                  className="hover-neon transition-transform hover:scale-110"
                  aria-label="Email"
                >
                  <Mail className="w-7 h-7" />
                </a>
                <a 
                  href="https://github.com/advenk" 
                  className="hover-neon transition-transform hover:scale-110"
                  aria-label="GitHub"
                >
                  <Github className="w-7 h-7" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/aditya-venkatesh-911b49169/" 
                  className="hover-neon transition-transform hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-7 h-7" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-[var(--text-secondary)] text-sm">
        <p>© {new Date().getFullYear()} Aditya Venkatesh Marada</p>
      </footer>
    </div>
  );
};

export default Home; 