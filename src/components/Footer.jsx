import React from "react";
import Logo from "../utils/Logo";

const Footer = () => {
    return(
        <footer className="bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center">
                <Logo/>
                <div className="flex justify-center space-x-8 text-gray-400">
                <a href="#" className="hover:text-white transition-colors">About</a>
                <a href="#" className="hover:text-white transition-colors">Contact</a>
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                </div>
            </div>
            </div>
        </footer>
    )
};

export default Footer;