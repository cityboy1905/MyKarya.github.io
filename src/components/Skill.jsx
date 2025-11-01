import React, { useState, useEffect } from "react";
import { FaHtml5, FaFigma, FaCss3Alt, FaReact, FaNodeJs, FaGitAlt, FaAngular } from 'react-icons/fa6';
import { BiLogoBootstrap, BiLogoJavascript, BiLogoTailwindCss, BiLogoTypescript } from 'react-icons/bi';  
import { SiNextdotjs, SiMongodb, SiExpress } from 'react-icons/si';

// Animated background patterns component for skills section
const SkillsAnimatedPatterns = () => {
    return (
        <>
            {/* Floating code symbols */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(15)].map((_, i) => (
                    <div
                        key={`code-${i}`}
                        className="absolute text-blue-200/20 text-2xl animate-float font-mono"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 5}s`,
                            animationDuration: `${4 + Math.random() * 3}s`
                        }}
                    >
                        {['</', '/>', '{}', '[]', '()', '&&', '||'][Math.floor(Math.random() * 7)]}
                    </div>
                ))}
            </div>
            
            {/* Floating geometric shapes */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(8)].map((_, i) => (
                    <div
                        key={`shape-${i}`}
                        className="absolute bg-blue-300/10 animate-bubble"
                        style={{
                            width: `${15 + Math.random() * 25}px`,
                            height: `${15 + Math.random() * 25}px`,
                            borderRadius: Math.random() > 0.5 ? '50%' : '0%',
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 8}s`,
                            animationDuration: `${6 + Math.random() * 4}s`
                        }}
                    />
                ))}
            </div>
            
            {/* Decorative elements */}
            <div className="absolute top-10 left-10 w-12 h-12 border-2 border-blue-300/30 rotate-45 animate-pulse"></div>
            <div className="absolute top-32 right-16 w-6 h-6 bg-blue-400/20 rounded-full animate-bounce"></div>
            <div className="absolute bottom-20 left-16 w-8 h-8 border-2 border-blue-300/25 rounded-full animate-spin-slow"></div>
            <div className="absolute bottom-32 right-20 w-4 h-16 bg-blue-300/15 transform rotate-12 animate-pulse"></div>
        </>
    );
};

const skillsSet = [
    {
        icon: FaHtml5,
        name: 'HTML5',
        level: 'Expert',
        percentage: 95,
        color: 'text-orange-500'
    },
    {
        icon: FaCss3Alt,
        name: 'CSS3',
        level: 'Expert',
        percentage: 90,
        color: 'text-blue-500'
    },
    {
        icon: BiLogoJavascript,
        name: 'JavaScript',
        level: 'Intermediate',
        percentage: 70,
        color: 'text-yellow-500'
    },
    {
        icon: FaReact,
        name: 'React',
        level: 'Intermediate',
        percentage: 70,
        color: 'text-cyan-500'
    },
        {
        icon: FaAngular,
        name: 'Angular',
        level: 'Intermediate',
        percentage: 70,
        color: 'text-cyan-500'
    },
    {
        icon: BiLogoBootstrap,
        name: 'Bootsrap 5 CSS',
        level: 'Expert',
        percentage: 85,
        color: 'text-blue-500'
    },    
    {
        icon: BiLogoTailwindCss,
        name: 'Tailwind CSS',
        level: 'Expert',
        percentage: 85,
        color: 'text-teal-500'
    },
    {
        icon: FaFigma,
        name: 'Figma',
        level: 'Intermediate',
        percentage: 75,
        color: 'text-purple-500'
    },
    {
        icon: FaGitAlt,
        name: 'Git',
        level: 'Intermediate',
        percentage: 75,
        color: 'text-red-500'
    }
];

const Skill = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [animatedPercentages, setAnimatedPercentages] = useState({});

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 100);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (isVisible) {
            const timers = skillsSet.map((skill, index) => 
                setTimeout(() => {
                    setAnimatedPercentages(prev => ({
                        ...prev,
                        [skill.name]: skill.percentage
                    }));
                }, index * 200)
            );
            
            return () => timers.forEach(clearTimeout);
        }
    }, [isVisible]);

    const getLevelColor = (level) => {
        switch(level) {
            case 'Expert': return 'text-green-600 bg-green-100';
            case 'Intermediate': return 'text-blue-600 bg-blue-100';
            case 'Beginner': return 'text-orange-600 bg-orange-100';
            default: return 'text-gray-600 bg-gray-100';
        }
    };

    return (
        <section id="skills" className="min-h-screen py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 relative overflow-hidden">
            {/* Animated background patterns */}
            <SkillsAnimatedPatterns />
            
            <div className={`relative z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="max-w-6xl mx-auto px-4">
                    <h3 className="text-4xl md:text-5xl mb-4 text-blue-800 font-bold text-center animate-fade-in-up">
                        My <span className="text-slate-700 animate-pulse">Skill Sets</span>
                    </h3>
                    <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto rounded mb-8 animate-scale-in"></div>
                    <p className="text-slate-600 max-w-2xl mx-auto text-center text-lg mb-16">
                        A diverse toolkit combining design sensibility with technical expertise
                    </p>
                </div>

                <div className="max-w-6xl mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {skillsSet.map((skill, index) => (
                            <div 
                                key={skill.name}
                                className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 animate-fade-in-up group border border-white/20"
                                style={{animationDelay: `${index * 0.1}s`}}
                            >
                                <div className="flex items-center mb-4">
                                    <div className={`text-4xl ${skill.color} group-hover:scale-110 transition-transform duration-300 mr-4`}>
                                        <skill.icon />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-semibold text-slate-800 group-hover:text-blue-700 transition-colors duration-300">
                                            {skill.name}
                                        </h4>
                                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${getLevelColor(skill.level)} transition-all duration-300`}>
                                            {skill.level}
                                        </span>
                                    </div>
                                </div>
                                
                                {/* Progress Bar */}
                                <div className="mb-2">
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="text-sm text-slate-600">Proficiency</span>
                                        <span className="text-sm font-semibold text-slate-700">
                                            {animatedPercentages[skill.name] || 0}%
                                        </span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                                        <div 
                                            className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-1000 ease-out"
                                            style={{
                                                width: `${animatedPercentages[skill.name] || 0}%`,
                                                transitionDelay: `${index * 0.1}s`
                                            }}
                                        ></div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Additional decorative section */}
                <div className="max-w-4xl mx-auto mt-16 px-4">
                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/30">
                        <h4 className="text-2xl font-bold text-center text-slate-800 mb-6">
                            Always Learning & Growing
                        </h4>
                        <p className="text-slate-600 text-center leading-relaxed">
                            Technology evolves rapidly, and so do I. I'm constantly exploring new frameworks, 
                            tools, and methodologies to stay at the forefront of web development and design. 
                            My passion for learning drives me to take on new challenges and deliver innovative solutions.
                        </p>
                        <div className="flex justify-center mt-6">
                            <div className="flex space-x-2">
                                {[...Array(5)].map((_, i) => (
                                    <div 
                                        key={i}
                                        className="w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full animate-bounce"
                                        style={{animationDelay: `${i * 0.1}s`}}
                                    ></div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skill;