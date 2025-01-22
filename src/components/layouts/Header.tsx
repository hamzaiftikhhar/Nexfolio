import Link from 'next/link';
import { useState } from 'react';
import { Menu } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#1A0B2E]/80 backdrop-blur-sm">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-white text-2xl font-bold">
            {/* You can replace this with your logo */}
            ℥
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-white hover:text-purple-400 transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-white hover:text-purple-400 transition-colors">
              About
            </Link>
            <Link href="/lab" className="text-white hover:text-purple-400 transition-colors">
              Lab
            </Link>
          </div>

          {/* Mobile Navigation Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu size={24} />
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                href="/"
                className="block px-3 py-2 text-white hover:text-purple-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="block px-3 py-2 text-white hover:text-purple-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                href="/lab"
                className="block px-3 py-2 text-white hover:text-purple-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Lab
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;