import React, { useState, useEffect } from "react";
import { FaCode,FaRocket } from 'react-icons/fa';
import { BiPalette } from 'react-icons/bi';
const higghlight=[
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
const About = () => {
    return (
        <section id="about" className="min-h-screen flex items-center justify-center bg-linear-65 from-blue-300  to-purple-300 relative overflow-hidden">
            <div className="container mx-auto px-4 py-8 relative z-10">
                <div className="max-w-6xl mx-auto">
                    <h3 className="text-4xl md:text-5xl mb-4 text-white font-bold text-center">
                        About <span className="text-blue-600">Me</span>
                    </h3>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-800 mx-auto  rounded  mb-16"></div>
                </div>
                <div className="grid lg:grid-cols-2 gap-12 items-center ">
                    <div className="bg-white p-8 mt-2 rounded-lg shadow-lg">
                        <p className="text-slate-600 leading-relaxed mb-4 text-justify">
                        I'm a passionate Web Designer and Front-End Developer with 3 years of experience
                        in creating digital experiences that are not only visually appealing but also
                        highly functional and user-centric.
                        </p>
                        <p className="text-slate-600 leading-relaxed mb-4 text-justify">
                        My journey in web development has been driven by curiosity and a love for learning.
                        I'm constantly exploring new technologies, frameworks, and design trends to stay
                        ahead in this ever-evolving field. Whether it's mastering a new JavaScript
                        framework or experimenting with the latest design tools, I'm always eager to
                        expand my skill set.
                        </p>
                        <p className="text-slate-600 leading-relaxed text-justify">
                        What sets me apart is my ability to seamlessly blend design thinking with technical
                        expertise. I don't just build websites—I craft experiences that resonate with users
                        and drive results for businesses.
                        </p>
                    </div>
                    <div className="space-y-6">
                        { higghlight.map((item, index) => (
                            <div key={index} className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                                <div className="text-blue-600 text-4xl self-center">
                                    <item.icon />
                                </div>
                                <div>
                                    <h3 className="mb-2">{item.title}</h3>
                                    <p className="text-slate-600">{item.description}</p>
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