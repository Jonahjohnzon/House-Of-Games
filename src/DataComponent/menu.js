import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./menu.css"
function Menu({set,setCart,functionn,drop,check}) {
    const design={
        color:"white",
        textDecoration:"none",
        fontSize:15
    }
    const show=()=>{
     set(true)
    }
    const hide=()=>{
        set(false)
    }
    const mainmenu=()=>{
      drop(false)
      check(false)
    }
  return (
    <div className='navmenu' onMouseEnter={show} onMouseLeave={hide} onClick={mainmenu}>
        <ul>
        <Link to="cart" style={design}><li onMouseEnter={()=>setCart("third-Person")} onClick={()=>{functionn()}}>Third-Person</li></Link>
        <Link to="cart" style={design}><li onMouseEnter={()=>setCart("shooter")} onClick={()=>{functionn()}}>Shooter</li></Link>
        <Link to="cart" style={design}><li onMouseEnter={()=>setCart("zombie")} onClick={()=>{functionn()}}>Zombie</li></Link>
        <Link to="cart" style={design}><li onMouseEnter={()=>setCart("3d")} onClick={()=>{functionn()}}>3d</li></Link>
        <Link to="cart" style={design}><li onMouseEnter={()=>setCart("2d")} onClick={()=>{functionn()}}>2d</li></Link>
        <Link to="cart" style={design}><li onMouseEnter={()=>setCart("anime")} onClick={()=>{functionn()}}>Anime</li></Link>
        <Link to="cart" style={design}><li onMouseEnter={()=>setCart("sci-fi")} onClick={()=>{functionn()}}>Sci-fi</li></Link>
        <Link to="cart" style={design}><li onMouseEnter={()=>setCart("sandbox")} onClick={()=>{functionn()}}>Sandbox</li></Link>
        <Link to="cart" style={design}><li onMouseEnter={()=>setCart("sports")} onClick={()=>{functionn()}}>Sport</li></Link>
        <Link to="cart" style={design}><li onMouseEnter={()=>setCart("superhero")} onClick={()=>{functionn()}}>Superhero</li></Link>
        <Link to="cart" style={design}><li onMouseEnter={()=>setCart("martial-arts")} onClick={()=>{functionn()}}>Martial-arts</li></Link>
        <Link to="cart" style={design}><li onMouseEnter={()=>setCart("fighting")} onClick={()=>{functionn()}}>Fighting</li></Link>
        <Link to="cart" style={design}> <li onMouseEnter={()=>setCart("military")} onClick={()=>{functionn()}}>Military</li></Link>
        <Link to="cart" style={design}><li onMouseEnter={()=>setCart("racing")} onClick={()=>{functionn()}}>Racing</li></Link>
        <Link to="cart" style={design}> <li onMouseEnter={()=>setCart("open-world")} onClick={()=>{functionn()}}>Open-World</li></Link>
        <Link to="cart" style={design}> <li onMouseEnter={()=>setCart("card")} onClick={()=>{functionn()}}>Card</li></Link>
        <Link to="cart" style={design}>  <li onMouseEnter={()=>setCart("sailing")} onClick={()=>{functionn()}}>Sailing</li></Link>
        <Link to="cart" style={design}><li onMouseEnter={()=>setCart("battle-royale")} onClick={()=>{functionn()}}>Battle-Royale</li></Link>
        <Link to="cart" style={design}> <li onMouseEnter={()=>setCart("pixel")} onClick={()=>{functionn()}}>Pixel</li></Link>
        </ul>
        </div>
  )
}

export default Menu