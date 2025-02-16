import React, { Component } from 'react'

import './Navbar.css'

import { NavLink } from 'react-router-dom'; 

// Import icons
import { LuHouse } from "react-icons/lu";
import { FaRegFolder } from "react-icons/fa6";
import { AiOutlineTool } from "react-icons/ai";
import { FaRegFilePdf } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";


export class Navbar extends Component {
  render() {
    return (
        
      <div className="container">        
      <nav className='container-navbar'>
        <NavLink className='link' to='/' end>
          <LuHouse />
        </NavLink>
        <NavLink className='link' to='/about'>
          <FaRegFolder />
        </NavLink>
        <NavLink className='link' to='/skills'>
          <AiOutlineTool />
        </NavLink>
        <NavLink className='link' to='/email'>
          <MdOutlineEmail />
        </NavLink>
      </nav>
    </div>

    )
  }
}

export default Navbar
