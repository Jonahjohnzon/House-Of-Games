import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import  "./Navbar.css"
import "../DataComponent/menu.css"



function Navbar({set,setBottom}) {
  const [linkStyle,setLinkStyle]=useState(true)
  const [linkStyle1,setLinkStyle1]=useState(true)
  const [linkStyle2,setLinkStyle2]=useState(true)
  const [linkStyle3,setLinkStyle3]=useState(true)
  const Show=()=>{
   set(true)
  }
  const Hide=()=>{
    set(false)
  }

  return (
       
      <div className='Nav'>
      <img src='/IMAGES/logo.png' width="70vw"/>
      <ul>   
      <li><Link   to="/" style={linkStyle?{
        textDecoration: "none",
        color:"white",
        fontSize:20,
    }:{
        textDecoration: "none",
        color:"red",
        fontSize:20,
     }} onMouseEnter={()=>{setLinkStyle(false)}}  onMouseLeave={()=>setLinkStyle(!linkStyle)} >Home</Link></li>
        
        
        <li onMouseEnter={Show} onMouseLeave={Hide}><Link to="cart"  style={linkStyle1?{
        textDecoration: "none",
        color:"white",
        fontSize:20,
    }:{
        textDecoration: "none",
        color:"red",
        fontSize:20,
     }} onMouseEnter={()=>{setLinkStyle1(false)}}  onMouseLeave={()=>setLinkStyle1(!linkStyle1)} >Categories</Link></li>
       
       
        <li><Link to="About"  style={linkStyle2?{
        textDecoration: "none",
        color:"white",
        fontSize:20,
    }:{
        textDecoration: "none",
        color:"red",
        fontSize:20,
     }} onMouseEnter={()=>{setLinkStyle2(false)}}  onMouseLeave={()=>setLinkStyle2(!linkStyle2)}>About</Link></li>
        
        
        <li><Link to="/"  style={linkStyle3?{
        textDecoration: "none",
        color:"white",
        fontSize:20,
    }:{
        textDecoration: "none",
        color:"red",
        fontSize:20,
     }} onMouseEnter={()=>{setLinkStyle3(false)}}  onMouseLeave={()=>setLinkStyle3(!linkStyle3)} onClick={()=>{setBottom()}}>Contact</Link></li>
       
     </ul>
    
     </div>
    )
}

export default Navbar