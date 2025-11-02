import React from 'react';

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

export default AnimatedPatterns;