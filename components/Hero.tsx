import React from 'react';
import Button from './common/Button';

const Hero: React.FC = () => {
  return (
    <section className="py-20 md:py-32 bg-primary-light">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-black text-dark mb-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Build Your Next Project Faster Than Ever
          </h1>
          <p className="text-lg md:text-xl text-dark-light mb-8 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            Stellar provides you with cutting-edge components and a stunning design system to ship beautiful websites in record time.
          </p>
          <div className="flex justify-center space-x-4 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <Button variant="primary" className="px-8 py-4 text-lg">
              Start Building
            </Button>
            <Button variant="light" className="px-8 py-4 text-lg">
              Learn More
            </Button>
          </div>
        </div>
        <div className="mt-16 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <img 
            src="https://picsum.photos/seed/tech/1200/600" 
            alt="Product showcase" 
            className="rounded-lg shadow-2xl mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
