import { Component, createEffect } from 'solid-js';

import './styles/portfolio.css';

import Navbar from './components/Navbar';
import Title from './components/Title';
import Bio from './components/Bio';
import Skills from './components/Skills';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App: Component = () => {
  createEffect(() => {
    import('../node_modules/bootstrap/dist/js/bootstrap.min.js' as any);
    import('../node_modules/bootstrap/dist/css/bootstrap.min.css' as any);
  });

  return (
    <div class="portfolio-font">
      <Navbar />
      <Title />
      <Bio />
      <Skills />
      <Resume />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;
