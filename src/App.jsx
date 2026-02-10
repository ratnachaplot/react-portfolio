import {useState} from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './sections/About';
import Education from './sections/Education';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Contact from './sections/Contact'; 
import Footer from './components/Footer';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode}/>
      <Hero />
      <About />
      <Education />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  )
}

export default App;