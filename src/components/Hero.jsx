import React, { useState, useEffect } from "react";

const languages = [
  { text: "Web Designer & Developer", lang: "English" },
  { text: "Diseñador y Desarrollador Web", lang: "Spanish" },
  { text: "مطور ومصمم ويب", lang: "Arabic" },
  { text: "网页设计师和开发者", lang: "Chinese" },
  { text: "웹 디자이너 및 개발자", lang: "Korean" },
  { text: "Pereka & Pembangun Web", lang: "Bahasa Melayu" }
];

// "Hi" translations
const hiLanguages = [
  { text: "Hi", lang: "English" },
  { text: "Hola", lang: "Spanish" },
  { text: "السلام عليكم", lang: "Arabic" },
  { text: "你好", lang: "Chinese" },
  { text: "안녕", lang: "Korean" },
  { text: "Apa Khabar", lang: "Bahasa Melayu" }
];

const Hero = () => {
  const [currentLanguage, setCurrentLanguage] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  
  // New state for "Hi" flip animation
  const [currentHiLanguage, setCurrentHiLanguage] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);

  useEffect(() => {
    const currentText = languages[currentLanguage].text;
    let timeout;

    if (isTyping) {
      if (displayedText.length < currentText.length) {
        timeout = setTimeout(() => {
          setDisplayedText(currentText.slice(0, displayedText.length + 1));
        }, 100);
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
      }
    } else {
      if (displayedText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1));
        }, 50);
      } else {
        timeout = setTimeout(() => {
          setCurrentLanguage((prev) => (prev + 1) % languages.length);
          setIsTyping(true);
        }, 500);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isTyping, currentLanguage]);

  // New useEffect for "Hi" flip animation
  useEffect(() => {
    const interval = setInterval(() => {
      setIsFlipping(true);
      
      setTimeout(() => {
        setCurrentHiLanguage((prev) => (prev + 1) % hiLanguages.length);
        setIsFlipping(false);
      }, 300); // Half of the flip duration
      
    }, 2000); // Change every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden">
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              {/* Welcome Text */}
              <p className="text-lg md:text-xl text-gray-600 mb-4 animate-fade-in">
                Welcome to my portfolio
              </p>
              
              {/* Animated Hi Greeting with Flip Animation */}
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2 animate-slide-up h-12 flex items-center justify-center lg:justify-start">
                <div className="relative perspective-1000">
                  <div 
                    className={`transform transition-transform duration-600 ${
                      isFlipping ? 'rotate-y-180' : 'rotate-y-0'
                    }`}
                    style={{
                      transformStyle: 'preserve-3d',
                      transform: isFlipping ? 'rotateY(180deg)' : 'rotateY(0deg)',
                      transition: 'transform 0.6s ease-in-out'
                    }}
                  >
                    <span className="block">
                      {hiLanguages[currentHiLanguage].text}
                    </span>
                  </div>
                </div>
              </div>
              
              {/* Main Heading */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 animate-slide-up">
                I'm <span className="text-blue-600">Khairul Yasser</span>
              </h1>
              
              {/* Animated Subtitle with Typing Effect */}
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-8 animate-slide-up-delay-1 h-12 flex items-center justify-center lg:justify-start">
                <span className="relative">
                  {displayedText}
                  <span className="animate-pulse text-blue-600 ml-1">|</span>
                </span>
              </h2>
              
              {/* Description */}
              <p className="text-lg md:text-xl text-gray-600 mb-12 leading-relaxed animate-slide-up-delay-2">
                I bridge the gap between design and code, transforming ideas into responsive, 
                accessible, and user-friendly interfaces.
              </p>
              
              {/* Call-to-Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center animate-slide-up-delay-3">
                <a
                  href="#projects"
                  className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2H5a2 2 0 00-2 2v2M7 7h10" />
                  </svg>
                  View My Work
                </a>
                
                <a
                  href="mailto:khairulyasser@gmail.com"
                  className="inline-flex items-center px-8 py-4 bg-transparent hover:bg-blue-600 text-blue-600 hover:text-white font-semibold border-2 border-blue-600 rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Let's Connect
                </a>
              </div>

              {/* Find Me Section */}
              <div className="mt-12 animate-slide-up-delay-4">
                <p className="text-gray-600 mb-4">Find me on</p>
                <div className="flex justify-center lg:justify-start items-center space-x-6">
                  <a
                    href="https://linkedin.com/in/khairulyasser"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-blue-600 transition-colors duration-300 transform hover:scale-110"
                    aria-label="LinkedIn"
                  >
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>

                  <a
                    href="https://twitter.com/khairulyasser"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-blue-400 transition-colors duration-300 transform hover:scale-110"
                    aria-label="Twitter/X"
                  >
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Content - Computer Illustration */}
            <div className="hidden md:flex justify-center lg:justify-end animate-slide-up-delay-2">
              <div className="relative">
                {/* Computer SVG */}
                <svg className="w-80 h-80 md:w-96 md:h-96" viewBox="0 0 400 400" fill="none">
                  {/* Monitor */}
                  <rect x="50" y="80" width="300" height="200" rx="10" fill="#1f2937" stroke="#374151" strokeWidth="4"/>
                  <rect x="70" y="100" width="260" height="160" rx="5" fill="#111827"/>
                  
                  {/* Screen Content */}
                  <rect x="90" y="120" width="220" height="8" rx="4" fill="#3b82f6"/>
                  <rect x="90" y="140" width="180" height="6" rx="3" fill="#6b7280"/>
                  <rect x="90" y="155" width="200" height="6" rx="3" fill="#6b7280"/>
                  <rect x="90" y="170" width="160" height="6" rx="3" fill="#6b7280"/>
                  
                  {/* Code Blocks */}
                  <rect x="90" y="190" width="40" height="40" rx="5" fill="#10b981"/>
                  <rect x="140" y="190" width="60" height="40" rx="5" fill="#f59e0b"/>
                  <rect x="210" y="190" width="50" height="40" rx="5" fill="#ef4444"/>
                  
                  {/* Monitor Stand */}
                  <rect x="180" y="280" width="40" height="30" fill="#374151"/>
                  <rect x="160" y="310" width="80" height="10" rx="5" fill="#4b5563"/>
                  
                  {/* Floating Elements */}
                  <circle cx="320" cy="60" r="8" fill="#3b82f6" opacity="0.7">
                    <animate attributeName="cy" values="60;50;60" dur="3s" repeatCount="indefinite"/>
                  </circle>
                  <circle cx="80" cy="50" r="6" fill="#10b981" opacity="0.7">
                    <animate attributeName="cy" values="50;40;50" dur="4s" repeatCount="indefinite"/>
                  </circle>
                  <rect x="340" y="200" width="12" height="12" rx="2" fill="#f59e0b" opacity="0.7">
                    <animateTransform attributeName="transform" type="rotate" values="0 346 206;360 346 206" dur="6s" repeatCount="indefinite"/>
                  </rect>
                </svg>
                
                {/* Decorative Circles */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-purple-200 rounded-full opacity-20 animate-pulse" style={{animationDelay: '1s'}}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

