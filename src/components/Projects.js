


import React, { useState } from 'react';

const Projects = () => {
  
  const [projects, setProjects] = useState([
    {
      title: 'Refer Me Platform',
      description: 'Referral-based networking platform with OAuth 2.0 authentication. Achieved 300+ signups in 4 days and secured $2500 in funding.',
      imageUrl: 'https://i.imgur.com/mOP5PpR.jpeg', // Placeholder image URL
      isOpen: false
    },
    {
      title: 'Disaster Management Platform',
      description: 'Real-time disaster prediction using AI/ML, trained on 8000+ occurrences with live alerts and visualization maps.',
      imageUrl: 'https://i.imgur.com/KYAhn6t.png', // Placeholder image URL
      isOpen: false
    },
    {
      title: 'HandsHeard',
      description: 'Sign language translation using a TensorFlow model. Awarded honorary mention at DubHacks\'23 for its innovation in accessibility.',
      imageUrl: 'https://i.imgur.com/mhfh5LN.gif', // Placeholder image URL
      isOpen: false
    },
    {
      title: 'SaveMyData',
      description: ' Client-side model to deter phishing attacks. Utilized a unique image protocol verified on the client side to prevent phishing attacks during logic processes.',
      imageUrl: 'https://i.imgur.com/HJcxFHe.png', // Placeholder image URL
      isOpen: false
    }
  ]);

  // Toggle project descriptions
  const toggleProject = (index) => {
    const updatedProjects = projects.map((project, i) => (
      i === index ? { ...project, isOpen: !project.isOpen } : project
    ));
    setProjects(updatedProjects);
  };

  return (
    <section className="bg-white py-10">
      <div className="container mx-auto max-w-3xl px-6">
        {/* Center the content and set a max width */}
        <h2 className="text-3xl font-semibold mb-6 text-primary">Projects</h2>
        <div className="space-y-4">
          {projects.map((project, index) => (
            <div key={index} className="border-b-2 border-gray-200 pb-4">
              {/* Project Header */}
              <div className="flex justify-between items-center py-4 cursor-pointer" onClick={() => toggleProject(index)}>
                <div className="flex items-center">
                  {/* Project Image */}
                  <img src={project.imageUrl} alt={`${project.title} Image`} className="w-12 h-12 object-cover rounded mr-4" />
                  <h3 className="text-xl font-bold text-primary">{project.title}</h3>
                </div>
                {/* Toggle Icon */}
                <span className="text-xl">{project.isOpen ? '▲' : '▼'}</span>
              </div>

              {/* Project Description */}
              {project.isOpen && (
                <div className="pl-16 text-gray-700">
                  <p>{project.description}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
