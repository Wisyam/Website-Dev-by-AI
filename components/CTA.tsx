import React from 'react';
import Button from './common/Button';

const CTA: React.FC = () => {
  return (
    <section id="cta" className="py-24 bg-primary text-white">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            Ready to Dive In?
          </h2>
          <p className="text-lg md:text-xl opacity-80 mb-10">
            Start building your next big idea with Stellar today. Join thousands of happy developers and create something amazing.
          </p>
          <Button variant="light" className="px-10 py-4 text-xl">
            Get Started for Free
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
