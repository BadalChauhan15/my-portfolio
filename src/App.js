import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import ProjectCarousel from './components/ProjectCarousel';
import Certificate from './components/Certificate';
// import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Education />
      <Skills />
      <ProjectCarousel />
      <Certificate />
      {/* <Contact /> */}
      <Footer />
    </div>
  );
}

export default App;