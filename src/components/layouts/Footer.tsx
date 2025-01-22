import Link from 'next/link';
import { Instagram, Github, Linkedin } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { name: 'GitHub', icon: <Github size={20} />, url: 'https://github.com/yourusername' },
    { name: 'LinkedIn', icon: <Linkedin size={20} />, url: 'https://linkedin.com/in/yourusername' },
    { name: 'Instagram', icon: <Instagram size={20} />, url: 'https://instagram.com/yourusername' },
  ];

  return (
    <footer className="bg-[#1A0B2E]/50 mt-20">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="text-2xl font-bold">
              ℥
            </Link>
          </div>

          <div className="flex space-x-6">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors"
                aria-label={link.name}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 text-center text-white/50 text-sm">
          <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;