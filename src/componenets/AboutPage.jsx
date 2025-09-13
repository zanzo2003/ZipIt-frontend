import React from 'react'
import { FaLink, FaChartLine, FaShare } from 'react-icons/fa';
import { MdOutlineSecurity } from "react-icons/md";


function AboutPage() {
    const features = [
        {
            icon: FaLink,
            color: "text-blue-500",
            hoverColor: "group-hover:text-blue-600",
            bgColor: "bg-blue-50",
            hoverBgColor: "group-hover:bg-blue-100",
            title: "Simple URL Shortening",
            description: "Experience the ease of creating short, memorable URLs in just a few clicks. Our intuitive interface and quick setup process ensure you can start shortening URLs without any hassle."
        },
        {
            icon: FaChartLine,
            color: "text-green-500",
            hoverColor: "group-hover:text-green-600",
            bgColor: "bg-green-50",
            hoverBgColor: "group-hover:bg-green-100",
            title: "Powerful Analytics",
            description: "Gain insights into your link performance with our comprehensive analytics dashboard. Track clicks, geographical data, and referral sources to optimize your marketing strategies."
        },
        {
            icon: MdOutlineSecurity,
            color: "text-purple-500",
            hoverColor: "group-hover:text-purple-600",
            bgColor: "bg-purple-50",
            hoverBgColor: "group-hover:bg-purple-100",
            title: "Enhanced Security",
            description: "Rest assured with our robust security measures. All shortened URLs are protected with advanced encryption, ensuring your data remains safe and secure."
        },
        {
            icon: FaShare,
            color: "text-red-500",
            hoverColor: "group-hover:text-red-600",
            bgColor: "bg-red-50",
            hoverBgColor: "group-hover:bg-red-100",
            title: "Fast and Reliable",
            description: "Enjoy lightning-fast redirects and high uptime with our reliable infrastructure. Your shortened URLs will always be available and responsive, ensuring a seamless experience for your users."
        }
    ];

    return (
        <div className="lg:px-14 sm:px-8 px-5 min-h-[calc(100vh-64px)] pt-2 bg-gradient-to-br from-slate-50 to-blue-50/30">
            <div className="w-full sm:py-10 py-8">
                {/* Header Section with Animation */}
                <div className="mb-12 animate-fade-in">
                    <h1 className="sm:text-5xl text-4xl font-bold bg-gradient-to-r from-slate-800 via-blue-600 to-purple-600 bg-clip-text text-transparent mb-6 animate-slide-up">
                        About ZipIt
                    </h1>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-6 animate-slide-right"></div>
                    <p className="text-slate-600 text-lg leading-relaxed xl:w-[80%] lg:w-[80%] sm:w-[85%] w-full animate-slide-up delay-100 mx-auto">
                        ZipIt simplifies URL shortening for efficient sharing. Our platform combines powerful analytics, enhanced security, and lightning-fast performance to deliver the ultimate link management experience. 
                        Transform your long URLs into memorable, trackable links that drive engagement and provide valuable insights.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 xl:w-[80%] lg:w-[85%] sm:w-[90%] w-full mx-auto">
                    {features.map((feature, index) => {
                        const IconComponent = feature.icon;
                        return (
                            <div 
                                key={index}
                                className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 ease-out transform hover:-translate-y-2 border border-white/20 animate-slide-up"
                                style={{
                                    animationDelay: `${index * 150}ms`
                                }}
                            >
                                {/* Gradient Background on Hover */}
                                <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-slate-50/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                
                                {/* Content */}
                                <div className="relative z-10 flex items-start space-x-6">
                                    {/* Icon Container */}
                                    <div className={`flex-shrink-0 w-16 h-16 rounded-xl ${feature.bgColor} ${feature.hoverBgColor} flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                                        <IconComponent className={`text-2xl ${feature.color} ${feature.hoverColor} transition-colors duration-300`} />
                                    </div>
                                    
                                    {/* Text Content */}
                                    <div className="flex-1 min-w-0">
                                        <h2 className="text-2xl font-bold text-slate-800 mb-3 group-hover:text-slate-900 transition-colors duration-300">
                                            {feature.title}
                                        </h2>
                                        <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors duration-300">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Hover Effect Border */}
                                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                            </div>
                        );
                    })}
                </div>

    
                
            </div>
        </div>
    )
}

export default AboutPage