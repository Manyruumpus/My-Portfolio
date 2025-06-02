import React, { useRef } from 'react';
import Navbar from './sections/navbar.jsx';
import Hero from './sections/hero.jsx';
import About from './sections/about.jsx';
import Projects from './sections/project.jsx';
import Client from './sections/clients.jsx';
import Contact from './sections/contacts.jsx';
// import Hobbies from './sections/hobbies.jsx';
import Footer from './sections/footer.jsx';
import WorkExperience from './sections/Experience.jsx';

const App = () => {
  return (
    <main className="max-w-7xl mx-auto relative">
      <Navbar />
      <Hero />
      <About/>
      <Projects/>
      <WorkExperience/>
      <Client/>
      {/* <Hobbies/> */}
      <Contact/>
      <Footer/>
    </main>
  )
}

export default App;
