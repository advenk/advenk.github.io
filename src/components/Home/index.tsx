import { Github, Linkedin, Mail } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="flex-1 flex items-center justify-center">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h1 className="text-6xl font-light mb-6">
            Hello, I'm <span className="neon-text">Aditya</span>
          </h1>
          <p className="text-2xl text-[var(--text-secondary)] mb-8">
            Senior Software Engineer building scalable systems and exploring ML
          </p>
          <div className="flex justify-center space-x-6">
            <a href="mailto:a.v.marada@student.vu.nl" className="hover-neon">
              <Mail className="w-6 h-6" />
            </a>
            <a href="https://github.com" className="hover-neon">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com" className="hover-neon">
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-[var(--text-secondary)]">
        <p>© {new Date().getFullYear()} Aditya Venkatesh Marada</p>
      </footer>
    </div>
  );
};

export default Home; 