import React, { useState, useRef } from 'react';
import { FaLink, FaShareAlt, FaEdit, FaChartLine, FaArrowRight, FaStar, FaHeart } from 'react-icons/fa';

const Card = ({ 
  icon: Icon = FaLink, 
  title = "Card Title", 
  subtitle = "Card Subtitle",
  description = "This is a modern 3D card component with smooth animations and hover effects.",
  color = "blue",
  stats = [],
  action = "Learn More",
  onAction = () => {},
  gradient = true,
  glow = false
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const cardRef = useRef(null);

  const colorThemes = {
    blue: {
      primary: "text-blue-500",
      bg: "from-blue-50 to-blue-100/50",
      border: "border-blue-200",
      button: "bg-blue-500 hover:bg-blue-600",
      glow: "shadow-blue-500/25"
    },
    green: {
      primary: "text-green-500",
      bg: "from-green-50 to-green-100/50",
      border: "border-green-200",
      button: "bg-green-500 hover:bg-green-600",
      glow: "shadow-green-500/25"
    },
    purple: {
      primary: "text-purple-500",
      bg: "from-purple-50 to-purple-100/50",
      border: "border-purple-200",
      button: "bg-purple-500 hover:bg-purple-600",
      glow: "shadow-purple-500/25"
    },
    red: {
      primary: "text-red-500",
      bg: "from-red-50 to-red-100/50",
      border: "border-red-200",
      button: "bg-red-500 hover:bg-red-600",
      glow: "shadow-red-500/25"
    }
  };

  const theme = colorThemes[color] || colorThemes.blue;

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const rotateX = (e.clientY - centerY) / 10;
    const rotateY = (centerX - e.clientX) / 10;
    
    setMousePos({ x: rotateY, y: rotateX });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <div className="w-full max-w-xs mx-auto perspective-1000">
      <div
        ref={cardRef}
        className={`
          relative h-96 w-full cursor-pointer transition-all duration-700 ease-out transform-gpu rounded-2xl
          ${isHovered ? 'scale-105' : 'scale-100'}
          ${glow && isHovered ? `shadow-2xl ${theme.glow}` : 'shadow-lg'}
        `}
        style={{
          transform: isHovered 
            ? `rotateX(${mousePos.y}deg) rotateY(${mousePos.x}deg) translateZ(20px)`
            : 'rotateX(0deg) rotateY(0deg) translateZ(0px)',
          transformStyle: 'preserve-3d'
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Main Card */}
        <div className={`
          relative h-full w-full rounded-2xl border backdrop-blur-sm overflow-hidden
          ${gradient ? `bg-gradient-to-br ${theme.bg}` : 'bg-white/90'}
          ${theme.border}
        `}>
          {/* Animated Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className={`
              absolute inset-0 bg-gradient-to-br ${theme.primary.replace('text-', 'from-')} to-transparent
              ${isHovered ? 'scale-110 rotate-12' : 'scale-100 rotate-0'}
              transition-all duration-700 ease-out
            `}></div>
          </div>

          {/* Floating Elements */}
          <div className="absolute top-4 right-4 space-y-2">
            <div className={`
              w-2 h-2 rounded-full ${theme.primary.replace('text-', 'bg-')}
              ${isHovered ? 'animate-pulse scale-150' : 'scale-100'}
              transition-all duration-300
            `}></div>
            <div className={`
              w-1 h-1 rounded-full ${theme.primary.replace('text-', 'bg-')}/60
              ${isHovered ? 'animate-bounce' : ''}
              transition-all duration-300 delay-100
            `}></div>
          </div>

          {/* Content */}
          <div className="relative z-10 h-full p-8 flex flex-col">
            {/* Icon */}
            <div className={`
              relative mb-6 transform transition-all duration-500
              ${isHovered ? 'scale-110 -translate-y-2' : 'scale-100'}
            `}>
              <div className={`
                w-16 h-16 rounded-2xl bg-gradient-to-br ${theme.bg} border ${theme.border}
                flex items-center justify-center backdrop-blur-sm
                ${isHovered ? 'rotate-12 shadow-lg' : 'rotate-0'}
                transition-all duration-500
              `}>
                <Icon className={`text-2xl ${theme.primary} transition-all duration-300`} />
              </div>
              {/* Icon Glow Effect */}
              <div className={`
                absolute inset-0 w-16 h-16 rounded-2xl ${theme.primary.replace('text-', 'bg-')}/10
                ${isHovered ? 'scale-150 opacity-100' : 'scale-100 opacity-0'}
                transition-all duration-500 -z-10
              `}></div>
            </div>

            {/* Text Content */}
            <div className="flex-1">
              <h3 className={`
                text-xl font-bold text-slate-800 mb-2 transform transition-all duration-300
                ${isHovered ? 'translate-x-2' : 'translate-x-0'}
              `}>
                {title}
              </h3>
              
              {subtitle && (
                <p className={`
                  text-sm font-medium ${theme.primary} mb-4 transform transition-all duration-300 delay-75
                  ${isHovered ? 'translate-x-2' : 'translate-x-0'}
                `}>
                  {subtitle}
                </p>
              )}
              
              <p className={`
                text-slate-600 text-sm leading-relaxed mb-6 transform transition-all duration-300 delay-100
                ${isHovered ? 'translate-x-2' : 'translate-x-0'}
              `}>
                {description}
              </p>

              {/* Stats */}
              {stats.length > 0 && (
                <div className={`
                  flex space-x-4 mb-6 transform transition-all duration-300 delay-150
                  ${isHovered ? 'translate-x-2' : 'translate-x-0'}
                `}>
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-lg font-bold text-slate-800">{stat.value}</div>
                      <div className="text-xs text-slate-500">{stat.label}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Action Button */}
            <button
              onClick={onAction}
              className={`
                w-full ${theme.button} text-white font-semibold py-3 px-6 rounded-xl
                flex items-center justify-center space-x-2
                transform transition-all duration-300 hover:scale-105
                ${isHovered ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-90'}
                group relative overflow-hidden
              `}
            >
              {/* Button Background Animation */}
              <div className="absolute inset-0 bg-white/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              
              <span className="relative z-10">{action}</span>
              <FaArrowRight className={`
                text-sm transition-all duration-300 relative z-10
                ${isHovered ? 'translate-x-1' : 'translate-x-0'}
              `} />
            </button>
          </div>

          {/* Edge Highlight */}
          <div className={`
            absolute inset-0 rounded-2xl bg-gradient-to-br from-white/20 to-transparent
            ${isHovered ? 'opacity-100' : 'opacity-0'}
            transition-opacity duration-500 pointer-events-none
          `}></div>
        </div>

        {/* Shadow/Reflection */}
        <div className={`
          absolute top-full left-1/2 transform -translate-x-1/2 mt-4
          w-3/4 h-8 bg-gradient-to-r ${theme.primary.replace('text-', 'from-')}/10 to-transparent
          rounded-full blur-xl
          ${isHovered ? 'opacity-50 scale-110' : 'opacity-20 scale-100'}
          transition-all duration-700
        `}></div>
      </div>
    </div>
  );
};

export default Card