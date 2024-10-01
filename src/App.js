import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import WorkExperience from './components/work';
import CodeCollabSection from './components/club';

function App() {
  return (
    <div>
      <Header />
      <About />
      <Projects />
      <WorkExperience />
      <CodeCollabSection />
    </div>
  );
}

export default App;
