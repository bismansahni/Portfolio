import React, { useState } from 'react';

const WorkExperience = () => {
  // Add work experiences from your resume, including image URLs
  const [experiences, setExperiences] = useState([
    {
      title: 'Research Intern - Human In Mind Engineering Lab',
      description: 'Developed an AR application for cognitive training, leading to a 35% increase in user engagement and adoption rates.',
      imageUrl: 'https://i.imgur.com/rTaod8G.jpeg', // Placeholder image URL
      isOpen: false
    },
    {
      title: 'Software Developer - EPICS, ASU',
      description: 'Led the software development of the Jirani Digital Library, securing a $3,000 grant to expand digital literacy in Kenya, helping over 500 students gain access to remote education resources.',
      imageUrl: 'https://i.imgur.com/20fAWdX.jpeg', // Placeholder image URL
      isOpen: false
    }
  ]);

  // Function to toggle each experience's description
  const toggleExperience = (index) => {
    setExperiences(experiences.map((exp, i) => (
      i === index ? { ...exp, isOpen: !exp.isOpen } : exp
    )));
  };

  return (
    <section className="bg-white py-10">
      <div className="container mx-auto max-w-3xl px-6">
        {/* Section Title */}
        <h2 className="text-3xl font-semibold mb-6 text-primary">Work Experience</h2>
        <div className="space-y-4">
          {experiences.map((experience, index) => (
            <div key={index} className="border-b-2 border-gray-200 pb-4">
              {/* Experience Header */}
              <div className="flex justify-between items-center py-4 cursor-pointer" onClick={() => toggleExperience(index)}>
                <div className="flex items-center">
                  {/* Experience Image */}
                  <img
                    src={experience.imageUrl}
                    alt={`${experience.title} Image`}
                    className="w-12 h-12 object-contain rounded mr-4"
                  />
                  <h3 className="text-xl font-bold text-primary">{experience.title}</h3>
                </div>
                {/* Toggle Icon */}
                <span className="text-xl">{experience.isOpen ? '▲' : '▼'}</span>
              </div>

              {/* Description (conditionally rendered) */}
              {experience.isOpen && (
                <div className="pl-16 text-gray-700">
                  <p>{experience.description}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
