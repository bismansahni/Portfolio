import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaGlobe } from 'react-icons/fa'; // Import the location icon

const Header = () => {
  return (
    <header className="bg-white shadow-sm py-10">
      <div className="container mx-auto max-w-3xl text-center">
        
        {/* Name */}
        <h1 className="text-4xl font-bold mb-2">Bisman Sahni</h1>

        {/* Location */}
        <div className="flex justify-center items-center text-gray-600 mb-4">
          <FaGlobe className="mr-2" size={16} /> {/* Location icon */}
          <span>Tempe, AZ</span>
        </div>
        
        {/* GitHub, LinkedIn, Email */}
        <div className="flex justify-center space-x-6">
          <a href="https://github.com/bismansahni" className="text-xl hover:underline">
            <FaGithub size={28} />
          </a>
          <a href="https://linkedin.com/in/bismansahni" className="text-xl hover:underline">
            <FaLinkedin size={28} />
          </a>
          <a href="mailto:bismansahni@outlook.com" className="text-xl hover:underline">
            <FaEnvelope size={28} />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
