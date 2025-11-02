import React, { useState, useEffect } from "react";
import { FaExternalLinkAlt, FaCode, FaEye } from 'react-icons/fa';
import { BiBuildings, BiDesktop, BiBarChart } from 'react-icons/bi';

// Animated background patterns component for projects section
const ProjectsAnimatedPatterns = () => {
    return (
        <>
            {/* Floating geometric shapes - increased count */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(25)].map((_, i) => (
                    <div
                        key={`project-shape-${i}`}
                        className="absolute bg-blue-200/10 animate-float"
                        style={{
                            width: `${8 + Math.random() * 25}px`,
                            height: `${8 + Math.random() * 25}px`,
                            borderRadius: Math.random() > 0.5 ? '50%' : '0%',
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 8}s`,
                            animationDuration: `${3 + Math.random() * 4}s`
                        }}
                    />
                ))}
            </div>
            
            {/* Additional floating circles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(15)].map((_, i) => (
                    <div
                        key={`circle-${i}`}
                        className="absolute bg-purple-200/8 rounded-full animate-bubble"
                        style={{
                            width: `${12 + Math.random() * 30}px`,
                            height: `${12 + Math.random() * 30}px`,
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 10}s`,
                            animationDuration: `${6 + Math.random() * 5}s`
                        }}
                    />
                ))}
            </div>
            
            {/* Floating triangles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(10)].map((_, i) => (
                    <div
                        key={`triangle-${i}`}
                        className="absolute w-0 h-0 animate-float"
                        style={{
                            borderLeft: `${8 + Math.random() * 12}px solid transparent`,
                            borderRight: `${8 + Math.random() * 12}px solid transparent`,
                            borderBottom: `${10 + Math.random() * 15}px solid rgba(59, 130, 246, 0.08)`,
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 6}s`,
                            animationDuration: `${4 + Math.random() * 3}s`,
                            transform: `rotate(${Math.random() * 360}deg)`
                        }}
                    />
                ))}
            </div>
            
            {/* More decorative elements */}
            <div className="absolute top-16 left-16 w-8 h-8 border-2 border-blue-300/20 rotate-45 animate-pulse"></div>
            <div className="absolute top-32 right-20 w-6 h-6 bg-purple-300/15 rounded-full animate-bounce"></div>
            <div className="absolute bottom-24 left-20 w-10 h-10 border-2 border-blue-300/20 rounded-full animate-spin-slow"></div>
            <div className="absolute bottom-40 right-16 w-4 h-12 bg-purple-300/10 transform rotate-12 animate-pulse"></div>
            
            {/* Additional decorative elements */}
            <div className="absolute top-1/4 left-1/4 w-6 h-6 border-2 border-green-300/15 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
            <div className="absolute top-3/4 right-1/3 w-8 h-2 bg-blue-300/10 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
            <div className="absolute bottom-1/3 left-1/3 w-4 h-4 bg-purple-300/12 transform rotate-45 animate-spin-slow" style={{animationDelay: '0.5s'}}></div>
            <div className="absolute top-1/2 right-1/4 w-12 h-2 bg-gradient-to-r from-blue-300/10 to-purple-300/10 rounded-full animate-float" style={{animationDelay: '3s'}}></div>
            <div className="absolute bottom-1/4 right-1/2 w-3 h-8 bg-blue-300/8 rounded-full animate-pulse" style={{animationDelay: '1.5s'}}></div>
            
            {/* Floating lines */}
            <div className="absolute top-20 right-32 w-16 h-0.5 bg-gradient-to-r from-transparent via-blue-300/20 to-transparent animate-pulse" style={{animationDelay: '2.5s'}}></div>
            <div className="absolute bottom-32 left-32 w-20 h-0.5 bg-gradient-to-r from-transparent via-purple-300/15 to-transparent animate-pulse" style={{animationDelay: '4s'}}></div>
        </>
    );
};

const projectsData = [
    {
        id: 1,
        title: "Corporate Website Design",
        description: "Designed a modern, professional corporate website focused on brand identity. Ensured responsive layouts and seamless user experience across devices. Applied consistent typography, color schemes, and visual hierarchy.",
        icon: BiBuildings,
        technologies: ["UI/UX Design", "Responsive Design", "Brand Identity", "Typography"],
        category: "Web Design",
        color: "from-blue-500 to-purple-600",
        accentColor: "text-blue-600",
        bgColor: "bg-blue-50",
        href: "#corporate-website",
        features: [
            "Modern & Professional Design",
            "Responsive Across All Devices", 
            "Consistent Brand Identity",
            "Optimized User Experience"
        ]
    },
    {
        id: 2,
        title: "Web System Design",
        description: "Designed user flows and UI components for an interactive web-based system. Focused on usability, navigation efficiency, and clean interface design. Implemented structured layouts ready for front-end integration.",
        icon: BiDesktop,
        technologies: ["User Flow Design", "UI Components", "System Architecture", "Frontend Ready"],
        category: "System Design",
        color: "from-green-500 to-teal-600",
        accentColor: "text-green-600",
        bgColor: "bg-green-50",
        href: "#web-system",
        features: [
            "Interactive User Flows",
            "Efficient Navigation Design",
            "Clean Interface Components",
            "Integration-Ready Layouts"
        ]
    },
    {
        id: 3,
        title: "Dashboard Analytics Design",
        description: "Created data-driven dashboards with clear visual hierarchies. Focused on readability, responsive layouts, and real-time data visibility. Applied minimalist styling and iconography for professional presentation.",
        icon: BiBarChart,
        technologies: ["Data Visualization", "Dashboard UI", "Analytics", "Minimalist Design"],
        category: "Dashboard Design",
        color: "from-orange-500 to-red-600",
        accentColor: "text-orange-600",
        bgColor: "bg-orange-50",
        href: "#dashboard-analytics",
        features: [
            "Clear Data Visualization",
            "Real-time Data Display",
            "Minimalist Professional UI",
            "Responsive Dashboard Layout"
        ]
    }
];

const Project = ({ 
  title = "My Projects", 
  subtitle = "A showcase of my recent work and professional solutions." 
}) => {
    const [isVisible, setIsVisible] = useState(false);
    const [hoveredProject, setHoveredProject] = useState(null);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section id="projects" className="min-h-screen py-20 bg-gradient-to-br from-purple-100 via-white to-blue-100 relative overflow-hidden">
            {/* Animated background patterns */}
            <ProjectsAnimatedPatterns />
            
            <div className={`relative z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 animate-fade-in-up">
                            {title}
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded mb-6 animate-scale-in"></div>
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                            {subtitle}
                        </p>
                    </div>

                    {/* Projects Grid */}
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {projectsData.map((project, index) => (
                                <div 
                                    key={project.id}
                                    className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden animate-fade-in-up border border-gray-100 flex flex-col"
                                    style={{animationDelay: `${index * 0.2}s`}}
                                >
                                    {/* Simple Header */}
                                    <div className="p-6 flex-1 flex flex-col">
                                        <div className="flex items-center justify-between mb-4">
                                            <div className={`w-12 h-12 ${project.bgColor} rounded-xl flex items-center justify-center`}>
                                                <project.icon className={`text-xl ${project.accentColor}`} />
                                            </div>
                                            <span className={`text-xs px-3 py-1 ${project.bgColor} ${project.accentColor} rounded-full font-medium`}>
                                                {project.category}
                                            </span>
                                        </div>
                                        
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">
                                            {project.title}
                                        </h3>
                                        
                                        <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-1">
                                            {project.description}
                                        </p>

                                        {/* Simple Features */}
                                        <div className="space-y-2 mb-4">
                                            {project.features.slice(0, 3).map((feature, idx) => (
                                                <div key={idx} className="flex items-center text-xs text-gray-600">
                                                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                                                    {feature}
                                                </div>
                                            ))}
                                        </div>

                                        {/* Technologies */}
                                        <div className="flex flex-wrap gap-2 mb-6">
                                            {project.technologies.map((tech, idx) => (
                                                <span 
                                                    key={idx}
                                                    className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded-md"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Simple Button with fixed height and click effects */}
                                        <a 
                                            href={project.href}
                                            className={`w-full h-12 bg-gradient-to-r ${project.color} text-white font-medium rounded-xl hover:shadow-lg active:shadow-inner active:scale-95 transform transition-all duration-300 flex items-center justify-center mt-auto cursor-pointer`}
                                        >
                                            <FaEye className="mr-2" />
                                            View Project
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Project;