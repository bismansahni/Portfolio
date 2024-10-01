import React from 'react';
import { FaTrophy, FaUsers, FaCodeBranch } from 'react-icons/fa'; // Icons for visual enhancement

const CodeCollabSection = () => {
  return (
    <section className="bg-white py-10">
      <div className="container mx-auto max-w-3xl px-6">
        {/* Section Title with Logo and Timeline */}
        <div className="flex items-center mb-6">
          {/* Club Logo */}
          <img
            src="https://i.imgur.com/knd6LYH.png" // Replace with your logo's path
            alt="CodeCollab Logo"
            className="w-16 h-16 object-cover mr-4"
          />
          <div>
            <h2 className="text-3xl font-semibold text-primary">CodeCollab Club - President</h2>
            {/* Timeline */}
            <p className="text-gray-600">January 2022 - May 2023</p> {/* Replace with the actual timeline */}
          </div>
        </div>

        {/* Timeline Content */}
        <div className="space-y-6">
          <div className="flex items-start">
            <FaTrophy className="text-primary w-8 h-8 mr-4" />
            <div>
              <h3 className="text-xl font-bold">Led the Club to Achieve New Heights</h3>
              <p className="text-gray-700">
                Increased club membership by 60% and organized 10+ coding workshops, hackathons, and speaker events.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <FaUsers className="text-primary w-8 h-8 mr-4" />
            <div>
              <h3 className="text-xl font-bold">Mentored a Team of Developers</h3>
              <p className="text-gray-700">
                Guided 20+ students through coding challenges, project collaborations, and open-source contributions.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <FaCodeBranch className="text-primary w-8 h-8 mr-4" />
            <div>
              <h3 className="text-xl font-bold">Established Partnerships</h3>
              <p className="text-gray-700">
                Formed collaborations with tech companies, leading to sponsorships and internship opportunities for members.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CodeCollabSection;
