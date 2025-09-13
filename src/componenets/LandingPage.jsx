import React from 'react'
import Card from './Card'
import { FaLink, FaChartLine, FaShieldAlt, FaBolt } from "react-icons/fa";


const LandingPage = () => {

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
            stats: [{ value: "50+", label: "lol" }, { value: "100%", label: "Real-time" }]
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


    const desc = 'Generate short, memorable URLs in seconds with ZipIt. Track performance with powerful analytics. Secure and reliable link management for all your sharing needs.'
    return (
        <div className="min-h-[calc(1--vh-64px)] lg:px-14 sm:px-8 px-4">
            <div className="lg:flex-row flex-col    lg:py-5   pt-16   lg:gap-10 gap-8 flex justify-between items-center">
                <div className="flex-1">
                    <h1 className='font-bold font-roboto text-slate-800 md:text-5xl sm:text-4xl text-3xl   md:leading-[55px] sm:leading-[45px] leading-10 lg:w-full md:w-[70%] w-full'>
                        ZipIt Simplifies URL Shortening for Efficient Sharing
                    </h1>
                    <p className='text-slate-500 text-sm my-5'>
                        ZipIt streamlines the process of shortening URL's, making sharing links effortless and efficient. Our platform combines powerful analytics, enhanced security, and lightning-fast performance to deliver the ultimate link management experience.
                        <span className='font-bold block'>Snip It, Share It, Track It</span>
                    </p>


                    <div className="flex items-center gap-3">
                        <button className="bg-custom-gradient w-40 text-white rounded-md py-2">
                            Mange Links
                        </button>
                        <button className='border-btnColor border w-40 text-btnColor rounded-md py-2'>
                            Create Short Links
                        </button>
                    </div>
                </div>
                <div className="flex-1 flex justify-center w-full">
                    <img
                        className='sm:w-[480px] w-400 object-cover rounded-md'
                        src="../../public/images/img2.png" alt="project logo" />
                </div>
            </div>

            <div className="sm:pt-2 pt-7">
                <p className="text-slate-800 font-roboto font-bold lg:w-[60%]  md:w-[70%] sm:w-[80%] mx-auto text-2xl text-center">
                    Trusted by Individuals and Teams perfroming at the hightest levels
                </p>
                <div className="grid gap-8 my-10 
                grid-cols-1   /* default: 1 card per row (mobile/small) */
                sm:grid-cols-1
                md:grid-cols-2  /* medium: 2 cards per row */
                lg:grid-cols-4">

                    {cardData.map((data, index) => (
                        <Card
                            key={index}
                            icon={data.icon}
                            title={data.title}
                            subtitle={data.subtitle}
                            description={data.description}
                            color={data.color}
                            stats={data.stats}
                            glow={data.glow}
                            onAction={() => alert(`Action clicked for ${data.title}`)}
                        />
                    ))}

                </div>

            </div>
        </div>
    )
}

export default LandingPage;