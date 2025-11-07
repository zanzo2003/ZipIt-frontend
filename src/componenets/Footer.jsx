import React, { useContext } from 'react'
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';
import { AuthContext} from '../contexts/AuthContext.jsx';

function Footer() {

    const {token} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleGetStartted = () =>{

        token? navigate('/dashboard') : navigate('/login');
    }

    return (
        <div className=" text-center animate-slide-up delay-700">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600  p-8 text-white shadow-2xl hover:shadow-3xl transition-shadow duration-300">
                <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
                <p className="text-blue-100 mb-6">Join thousands of users who trust ZipIt for their URL shortening needs.</p>
                <button className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-xl hover:bg-blue-50 hover:scale-105 transform transition-all duration-300 shadow-lg"
                onClick={handleGetStartted}
                >
                    Start Shortening URLs
                </button>
                <p className="text-blue-100 mt-6">2025 ZipIt. All rights reserved</p>
                <div className="flex justify-evenly max-w-32 mx-auto my-3">
                    <a href="https://x.com/ShashwathBhask1" className="hover:text-gray-200">
                        <FaTwitter size={24} />
                    </a>
                    <a href="https://github.com/zanzo2003/" className="hover:text-gray-200">
                        <FaGithub size={24} />
                    </a>
                    <a href="https://www.linkedin.com/in/shashwath-bhaskar-a56597213/" className="hover:text-gray-200">
                        <FaLinkedin size={24} />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer