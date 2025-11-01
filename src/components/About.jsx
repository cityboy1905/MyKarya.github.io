import React, { useState, useEffect } from "react";
import { FaCode,FaRocket } from 'react-icons/fa';
import { BiPalette } from 'react-icons/bi';

const highlight=[
    {
      icon: FaCode,
      title: 'Clean Code',
      description: 'Writing maintainable and scalable code following best practices',
    },
    {
      icon: BiPalette,
      title: 'Design Focus',
      description: 'Creating beautiful interfaces with attention to detail',
    },
    {
      icon: FaRocket,
      title: 'Fast Learner',
      description: 'Quickly adapting to new technologies and frameworks',
    },
]

// Animated background patterns component
const AnimatedPatterns = () => {
    return (
        <>
            {/* Floating dots */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(20)].map((_, i) => (
                    <div
                        key={`dot-${i}`}
                        className="absolute w-2 h-2 bg-white/20 rounded-full animate-float"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 5}s`,
                            animationDuration: `${3 + Math.random() * 4}s`
                        }}
                    />
                ))}
            </div>
            
            {/* Floating bubbles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(8)].map((_, i) => (
                    <div
                        key={`bubble-${i}`}
                        className="absolute bg-white/10 rounded-full animate-bubble"
                        style={{
                            width: `${20 + Math.random() * 40}px`,
                            height: `${20 + Math.random() * 40}px`,
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 10}s`,
                            animationDuration: `${8 + Math.random() * 6}s`
                        }}
                    />
                ))}
            </div>
            
            {/* Geometric shapes */}
            <div className="absolute top-20 left-10 w-16 h-16 border-2 border-white/20 rotate-45 animate-pulse"></div>
            <div className="absolute top-40 right-20 w-8 h-8 bg-white/10 rounded-full animate-bounce"></div>
            <div className="absolute bottom-32 left-20 w-12 h-12 border-2 border-white/15 rounded-full animate-spin-slow"></div>
            <div className="absolute bottom-20 right-16 w-6 h-20 bg-white/10 transform rotate-12 animate-pulse"></div>
        </>
    );
};
const About = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section id="about" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-400 via-purple-500 to-blue-600 relative overflow-hidden">
            {/* Animated background patterns */}
            <AnimatedPatterns />
            
            <div className={`container mx-auto px-4 py-8 relative z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="max-w-6xl mx-auto">
                    <h3 className="text-4xl md:text-5xl mb-4 text-white font-bold text-center animate-fade-in-up">
                        About <span className="text-blue-100 animate-pulse">Me</span>
                    </h3>
                    <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto rounded mb-16 animate-scale-in"></div>
                </div>
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="bg-white/95 backdrop-blur-sm p-8 mt-2 rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-300 animate-slide-in-left">
                        <p className="text-slate-700 leading-relaxed mb-4 text-justify">
                        I'm a passionate Web Designer and Front-End Developer with 3 years of experience
                        in creating digital experiences that are not only visually appealing but also
                        highly functional and user-centric.
                        </p>
                        <p className="text-slate-700 leading-relaxed mb-4 text-justify">
                        My journey in web development has been driven by curiosity and a love for learning.
                        I'm constantly exploring new technologies, frameworks, and design trends to stay
                        ahead in this ever-evolving field. Whether it's mastering a new JavaScript
                        framework or experimenting with the latest design tools, I'm always eager to
                        expand my skill set.
                        </p>
                        <p className="text-slate-700 leading-relaxed text-justify">
                        What sets me apart is my ability to seamlessly blend design thinking with technical
                        expertise. I don't just build websites—I craft experiences that resonate with users
                        and drive results for businesses.
                        </p>
                    </div>
                    <div className="space-y-6 animate-slide-in-right">
                        { highlight.map((item, index) => (
                            <div 
                                key={index} 
                                className="flex items-start space-x-4 p-6 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-2xl hover:bg-white transition-all duration-300 transform hover:scale-105 animate-fade-in-up group"
                                style={{animationDelay: `${index * 0.2}s`}}
                            >
                                <div className="text-blue-600 text-4xl self-center group-hover:text-purple-600 transition-colors duration-300 group-hover:animate-bounce">
                                    <item.icon />
                                </div>
                                <div>
                                    <h3 className="mb-2 font-semibold text-slate-800 group-hover:text-purple-700 transition-colors duration-300">{item.title}</h3>
                                    <p className="text-slate-600 group-hover:text-slate-700 transition-colors duration-300">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;