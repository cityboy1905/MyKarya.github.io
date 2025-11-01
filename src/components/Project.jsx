import React from "react";

const Project = ({ 
  title = "My Projects", 
  subtitle = "A showcase of my work and accomplishments." 
}) => {
    return (
        <section id="projects" className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-800">{title}</h2>
                    <p className="text-gray-600 mt-4">{subtitle}</p>
                </div>
                {/* Project items would go here */}
            </div>
        </section>
    );
};

export default Project;