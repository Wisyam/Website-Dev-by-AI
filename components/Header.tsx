'use client';

import React, { useState } from 'react';
import Button from './common/Button';

const Logo: React.FC = () => (
  <div className="flex items-center space-x-2">
    <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path></svg>
    <span className="text-2xl font-black text-dark">Stellar</span>
  </div>
);

const NavLinks: React.FC<{ className?: string }> = ({ className }) => (
  <nav className={className}>
    <a href="#features" className="text-dark-light hover:text-primary transition-colors duration-200">Features</a>
    <a href="#testimonials" className="text-dark-light hover:text-primary transition-colors duration-200">Testimonials</a>
    <a href="#pricing" className="text-dark-light hover:text-primary transition-colors duration-200">Pricing</a>
    <a href="#about" className="text-dark-light hover:text-primary transition-colors duration-200">About</a>
  </nav>
);

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 bg-light/80 backdrop-blur-lg z-50 shadow-sm">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Logo />
        <div className="hidden md:flex items-center space-x-8">
          <NavLinks className="flex items-center space-x-8" />
          <Button variant="primary">Get Started</Button>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Open menu">
            <svg className="w-6 h-6 text-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden animate-fade-in-down bg-light shadow-lg">
          <div className="px-6 pb-4">
            <NavLinks className="flex flex-col items-center space-y-4 pt-4" />
            <div className="mt-6 flex justify-center">
              <Button variant="primary">Get Started</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;