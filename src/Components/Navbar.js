
import React, {useState} from 'react'; 
import {Link} from 'react-router-dom'
import {FaBars,FaTimes,GiCrystalBars} from 'react-icons/fa'
import {MdFingerprint} from 'react-icons/md'


function Navbar() {
    
    const [click, setClick] = useState(false)

    const handleClick = ()=> setClick(!click)
    
    return (
       <>
       <div className= 'navbar'>
            <div className = "navbar-container container ">
             <Link to='/' className= "navbar-logo">
                 <MdFingerprint className = 'navbar-icon' />
                IH
            </Link>
              <div className = "menu-icon" onClick={handleClick}> 
              {click ? <FaTimes /> : <FaBars />}
              </div>
            </div> 
       </div>
       </>

    )
}

export default Navbar

// react hooks below putting useState as false makes the click

// start off as false in the terinary operator which makes the FaBars show up first.

// using the handleClick functon and setting it to "not click (!)" basically allows it to toggle.

// using "onClick={handleClick}" in the menue icon calls the handleClick funtion that has the react hooks of click and setclick

// the handleClick will change from the menu bars to the X which is faTimes