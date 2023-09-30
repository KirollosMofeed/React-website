import React from 'react'
import { useState } from 'react';
import Logo from '../asset/react-bootstrap.png'
import { Link } from 'react-router-dom'
import { IconBaselineDensityMedium } from '@tabler/icons-react';
import Collapse from 'react-bootstrap/Collapse';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <div className='navbar'>
      <div className='nav'>
      <div className='Brand'>
        <img src={Logo} alt=''/>
      </div>
      <div className='links'>
        <Link to='/'>Home</Link>
        <Link to='/menu'>Menu</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>
        <IconBaselineDensityMedium color='white' opacity={0.5} size={35}
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}/>
      </div>
      </div>
      <Collapse in={open}>
        <div id="example-collapse-text" className='coll-apse'>
        <Link to='/'>Home</Link>
        <Link to='/menu'>Menu</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>
        </div>
      </Collapse>
    </div>
  )
}

export default Navbar