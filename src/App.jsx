import React from 'react'
import Navbar from './components/Navbar'
import Education from './components/Education'
import Skills from './components/Skills'
import Social from './components/Social'
import Project from './components/Project'
import About from './components/About'
import Resume from './components/Resume'
import Experience from './components/Experience' // ✅ ADD THIS

const App = () => {
  return (
    <div
      style={{
        backgroundImage:
          "radial-gradient(circle, rgba(0,0,0,0.15) 1px,transparent 1px)",
        backgroundSize: "16px 16px",
      }}
    >

      {/* 🔥 ADD NAVBAR (you forgot this too 👀) */}
      <Navbar />

      <About></About>
      <Resume></Resume>

      <div id="projects">
        <Project />
      </div>

      

      <div id="experience">
        <Experience />
      </div>

      <div id="education">
        <Education />
      </div>

      <div id="skills">
        <Skills />
      </div>

      <div id="socials">
        <Social />
      </div>

    </div>
  )
}

export default App