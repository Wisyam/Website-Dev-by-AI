import React from 'react';
import Card from './common/Card';

const FeatureIcon: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="w-16 h-16 bg-primary-light text-primary rounded-full flex items-center justify-center mb-6">
        {children}
    </div>
);

const featuresData = [
    {
        icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>,
        title: 'Fully Responsive',
        description: 'Our components look stunning on any device, from mobile phones to widescreen desktops.'
    },
    {
        icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>,
        title: 'Clean Code',
        description: 'Built with TypeScript and React, our codebase is easy to understand, extend, and maintain.'
    },
    {
        icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path></svg>,
        title: 'Easily Customizable',
        description: 'Leverage Tailwind CSS to effortlessly customize colors, fonts, and layouts to match your brand.'
    },
];

const Features: React.FC = () => {
    return (
        <section id="features" className="py-20">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-4xl font-bold text-dark mb-4">Everything you need to ship your app</h2>
                    <p className="text-lg text-dark-light">
                        Focus on your business logic. We handle the UI. Our component library is designed for developer productivity and beautiful results.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {featuresData.map((feature, index) => (
                        <Card key={index} className="text-center flex flex-col items-center">
                            <FeatureIcon>{feature.icon}</FeatureIcon>
                            <h3 className="text-2xl font-bold text-dark mb-3">{feature.title}</h3>
                            <p className="text-dark-light">{feature.description}</p>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
