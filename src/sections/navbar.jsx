import React from "react";
import { useState } from "react";
import { navLinks } from "../constants/index";

const Navitem = ({ toggleMenu }) => {
  return (
    <ul className="nav-ul">
      {navLinks.map(({id, href, name}) => (
        <li key={id} className="nav-li">
          <a 
            href={href} 
            className="nav-li_a" 
            onClick={toggleMenu} 
          >
            {name}
          </a>
        </li>
      ))}
    </ul>
  )
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(prevIsOpen => !prevIsOpen);
  
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm"> 
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center py-5 mx-auto c-space">
          <a 
            href="/"
            className="text-white font-bold text-xl wakile hover:text-gray-300 transition-colors"
          >
            Mohit
          </a>
          
          {/* Desktop Navigation */}
          <nav className="sm:flex hidden">
            <Navitem />
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu} 
            className="text-white hover:text-gray-300 focus:outline-none sm:hidden flex" 
            aria-label="Toggle Menu"
          >
            <img 
              src={isOpen ? "assets/close.svg" : "assets/menu.svg"} 
              alt="toggle" 
              className="w-6 h-6"
            />
          </button>
        </div>
        
        {/* Mobile Navigation */}
        <div className={`nav-sidebar ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
          <nav className="p-5">
            <Navitem toggleMenu={toggleMenu} />
          </nav>
        </div>
      </div>
      <div className = {`nav-sidebar ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
        <nav className = "p-5">
          <Navitem/>
        </nav>

      </div>
    </header>
  )
}
export default Navbar;
