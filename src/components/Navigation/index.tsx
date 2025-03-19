import Link from 'next/link';
import { Download } from 'lucide-react';

const Navigation = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-xl neon-text">
            AV
          </Link>
          <div className="flex items-center space-x-8">
            <Link href="/" className="nav-link">
              Home
            </Link>
            <Link href="/projects" className="nav-link">
              Projects
            </Link>
            <Link href="/blog" className="nav-link">
              Blog
            </Link>
            <a
              href="/Aditya_Resume.pdf"
              download
              className="flex items-center space-x-1 border border-[var(--neon-primary)] px-4 py-2 rounded hover-neon"
            >
              <span>Resume</span>
              <Download className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation; 