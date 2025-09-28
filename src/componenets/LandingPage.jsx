import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import Card from './Card'
import { FaLink, FaChartLine, FaShieldAlt, FaBolt } from "react-icons/fa";
import { motion } from "framer-motion";
import { AuthContext } from '../contexts/AuthContext';

const LandingPage = () => {
    const { token } = useContext(AuthContext);
    console.log("Token in landing page : ", token)
    const navigate = useNavigate();

    const dashboardNavigateHandler = () => { }

    const cardData = [
        {
            icon: FaLink,
            title: "Simple URL Shortening",
            subtitle: "Quick & Easy",
            description: "Experience the ease of creating short, memorable URLs in just a few clicks. Our intuitive interface and quick setup process ensure you can start shortening URLs without any hassle.",
            color: "blue",
            stats: [{ value: "2s", label: "Setup" }, { value: "∞", label: "URLs" }],
            glow: true
        },
        {
            icon: FaChartLine,
            title: "Powerful Analytics",
            subtitle: "Data-Driven Insights",
            description: "Gain insights into your link performance with our comprehensive analytics dashboard. Track clicks, geographical data, and referral sources to optimize your marketing strategies.",
            color: "green",
            stats: [{ value: "50+", label: "Metrics" }, { value: "100%", label: "Real-time" }]
        },
        {
            icon: FaShieldAlt,
            title: "Enhanced Security",
            subtitle: "Protected & Safe",
            description: "Rest assured with our robust security measures. All shortened URLs are protected and only visible to you, ensuring your data remains safe and secure.",
            color: "red",
            stats: [{ value: "Auth", label: "Secure" }, { value: "JWT", label: "Username & Password" }],
            glow: true
        },
        {
            icon: FaBolt,
            title: "Fast and Reliable",
            subtitle: "Always Available",
            description: "Enjoy lightning-fast redirects and high uptime with our reliable infrastructure. Your shortened URLs will always be available and responsive, ensuring a seamless experience for your users.",
            color: "yellow",
            stats: [{ value: "99.9%", label: "Uptime" }, { value: "ms", label: "Latency" }]
        }
    ]

    return (
        <div className="min-h-[calc(100vh-64px)] lg:px-14 sm:px-8 px-4">

            {/* Hero Section */}
            <div className="lg:flex-row flex-col lg:py-5 pt-16 lg:gap-10 gap-8 flex justify-between items-center">
                <div className="flex-1 animate-fade-in">
                    <h1 className="font-bold font-roboto text-slate-800 md:text-5xl sm:text-4xl text-3xl md:leading-[55px] sm:leading-[45px] leading-10 lg:w-full md:w-[70%] w-full animate-slide-right">
                        ZipIt Simplifies URL Shortening for Efficient Sharing
                    </h1>
                    <p className="text-slate-500 text-sm my-5 animate-slide-up delay-100">
                        ZipIt streamlines the process of shortening URLs, making sharing links effortless and efficient. Our platform combines powerful analytics, enhanced security, and lightning-fast performance to deliver the ultimate link management experience.
                        <span className="font-bold block">Snip It, Share It, Track It</span>
                    </p>

                    <div className="flex items-center gap-3 animate-slide-up delay-200">
                        <motion.button
              initial={{ opacity: 0, y: 80 }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              onClick={dashboardNavigateHandler}
              className="bg-custom-gradient  w-40 text-white rounded-md  py-2"
            >
              Manage Links
            </motion.button>
            <motion.button
              initial={{ opacity: 0, y: 80 }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              onClick={dashboardNavigateHandler}
              className="border-btnColor border w-40 text-btnColor rounded-md  py-2 "
            >
              Create Short Link
            </motion.button>
                    </div>
                </div>

                {/* Hero Image */}
                <div className="flex-1 flex justify-center w-full animate-slide-left">
                    <motion.img
                        initial={{ opacity: 0 }}
                        whileInView={{
                            opacity: 1,
                        }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="sm:w-[480px] w-[400px] object-cover rounded-md"
                        src="/images/img2.png"
                        alt=""
                    />
                </div>
            </div>

            {/* Features Section */}
            <div className="sm:pt-2 pt-7">
                <p className="text-slate-800 font-roboto font-bold lg:w-[60%] md:w-[70%] sm:w-[80%] mx-auto text-2xl text-center animate-fade-in">
                    Trusted by Individuals and Teams performing at the highest levels
                </p>

                <div className="grid gap-8 my-10 
                    grid-cols-1 
                    sm:grid-cols-1
                    md:grid-cols-2 
                    lg:grid-cols-4">

                    {cardData.map((data, index) => (
                        <div
                            key={index}
                            className="animate-slide-up"
                            style={{ animationDelay: `${index * 150}ms` }}
                        >
                            <Card
                                icon={data.icon}
                                title={data.title}
                                subtitle={data.subtitle}
                                description={data.description}
                                color={data.color}
                                stats={data.stats}
                                glow={data.glow}
                                onAction={() => alert(`Action clicked for ${data.title}`)}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default LandingPage;
