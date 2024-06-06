import React from 'react'

const Navbar = () => {
  return (
    <>
      <div className="nav_bar " >
        <div className="left nav_items">Portfolio</div>
        <div className="right">
            <a href="#home" className="nav_items">Home</a>
            <a href="#skills" className="nav_items">Skills</a>
            <a href="#projects" className="nav_items">Project</a>
            <a href="#experience" className="nav_items">Experience</a>
            <a href="" className="nav_items">Contact</a>
           
        </div>
      </div>
    </>
  )
}

export default Navbar
