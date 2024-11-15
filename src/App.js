import React from 'react';
import Header from './components/Header';
import About from './components/About';
import AboutDetails from './components/AboutDetails';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      {/* Add corresponding ids to each section */}
      <section id="about">
        <About />
        <AboutDetails />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="contact">
        {/* Contact section */}
      </section>
      <Footer />
    </div>
  );
}

export default App;
