import React from 'react'
import { Link } from 'react-router-dom'
import  "./Navbar.css"
const Menuicon = ({show,set,drop}) => {
  return (
    <div className="dropdown" >
         <div className='ul'>
          <li onClick={()=>drop(false)}> <Link to="/"  style={{color:'white',textDecoration:'none'}}>Home</Link></li> 
              <li onClick={()=>show(!set)}>Categories</li>
              <li onClick={()=>drop(false)}> <Link to="About"  style={{color:'white',textDecoration:'none'}}>  About</Link></li> 
            <li onClick={()=>drop(false)}> <Link to="/"  style={{color:'white',textDecoration:'none'}}> Contact</Link></li> 
        </div>
    </div>
  )
}

export default Menuicon