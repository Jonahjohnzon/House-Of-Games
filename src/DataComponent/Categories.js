import React, { useState } from 'react'
import Firstpagedata from './Firstpagedata'
import Gameinfo from './gameinfo'
import Tabbody from './Tabbody'
import Footer from '../FOOTER/Footer'
import "../FOOTER/Footer.css"
import { useNavigate } from 'react-router-dom'
function Categories ({data,frontgames}) {
  const navigate=useNavigate()

   const[tabgame,setTabgame]=useState([23,123])
   const change=()=>{
     setTabgame([23,123])
   }
   const change1=()=>{
    setTabgame([124,287])
  }
  const change2=()=>{
    setTabgame([284,345])
  }
  const change3=()=>{
    setTabgame([4,90])
  }
  const change4=()=>{
    setTabgame([349,72])
  }
  const change5=()=>{
    setTabgame([16,17])
  }
  const cart=()=>{
    navigate("cart")
  }
  return (
    <><div>
    <div className='mainImage'>
      <div className='mydisplay'>
      {frontgames}
      <div className="mainpage">
        <div><h2>BEST <span>GAMES</span> PLAYING TODAY</h2></div>
        <h3><span>Dive</span> into the world of adventures...Are you ready</h3>
        </div>
        
        </div>
    <button onClick={cart}>Get Gaming</button>
     <div className="contact">
            <a href=''><img src='/IMAGES/fb.png' /></a>
            <a href=''><img src='/IMAGES/insta.png' /></a>
          </div>
    </div>
    <div className='FrontOptions'>
   
    <h2 className='popular'><div  className='line2'></div><span>Popular</span>   Games<div  className='line'></div></h2>
    <div className='FrontImage'><Firstpagedata data={data}  no={4} bno={0}/></div>
    <div className='Latest'>
    <h2 className='popular'><div  className='line2'></div><span>Latest</span>   Games<div  className='line'></div></h2>
    <div className='FrontImage'><Firstpagedata data={data}  no={8} bno={4}/></div>
    <div className='Tabbed'>
    <h2 className='popular'><div  className='line2'></div><span>Tabbed</span>   Games<div  className='line'></div></h2>
    <div className='tab'>
      <div className='main'>
      <ul className='tabmenu'>
      <li className='li' onClick={change}>Shooter</li>
      <li className='li' onClick={change1}>OpenWorld</li>
      <li className='li' onClick={change2}>Strategy</li>
      <li className='li' onClick={change3}>Racing</li>
      <li className='li' onClick={change4}>Sport</li>
      </ul>
      <li className='li' onClick={change5}>Social</li>
      <div className='allbody'>
      <Tabbody data={data} no={tabgame[0]}/>
      <div className='divide'/>
      <Tabbody data={data} no={tabgame[1]}/>
      </div>
      </div>
      
       <div className='infotab'>
       <section><h2>Game Info</h2><div></div></section>
       <Gameinfo no={45} data={data}/>
       <Gameinfo no={42} data={data}/>
       <Gameinfo no={147} data={data}/>
       </div>
    </div>
   
    </div>
    </div>
  </div>
  <Footer  data={data}  />
  </div></>
  )
}

export default Categories