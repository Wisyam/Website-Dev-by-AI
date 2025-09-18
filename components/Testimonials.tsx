import React from 'react';
import Card from './common/Card';

const testimonialsData = [
  {
    quote: "Stellar has saved us countless hours of development time. The components are intuitive and the design is top-notch. Highly recommended!",
    author: "Jane Doe",
    title: "CEO, TechCorp",
    imgSrc: "https://picsum.photos/seed/person1/100/100"
  },
  {
    quote: "As a freelance developer, this is my go-to toolkit for every new project. It allows me to deliver beautiful, professional websites faster than ever.",
    author: "John Smith",
    title: "Freelance Developer",
    imgSrc: "https://picsum.photos/seed/person2/100/100"
  },
  {
    quote: "The best part about Stellar is the clean code and customizability. We were able to match our brand perfectly with minimal effort.",
    author: "Emily White",
    title: "Head of Design, Creative Co.",
    imgSrc: "https://picsum.photos/seed/person3/100/100"
  },
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-primary-light">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-dark mb-4">What Our Users Say</h2>
          <p className="text-lg text-dark-light">
            We're trusted by thousands of developers and designers at leading companies worldwide.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial, index) => (
            <Card key={index} className="flex flex-col">
              <p className="text-dark-light mb-6 flex-grow">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <img src={testimonial.imgSrc} alt={testimonial.author} className="w-14 h-14 rounded-full mr-4" />
                <div>
                  <h4 className="font-bold text-dark">{testimonial.author}</h4>
                  <p className="text-sm text-dark-light">{testimonial.title}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
