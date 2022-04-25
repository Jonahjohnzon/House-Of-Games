import React from 'react'
import "./Aboutus.css"
import { data } from '../DATA/About'
function Aboutus() {
 
  return (
    <>
    <div className='About'>
      <div className='head'></div>
      <div>
        <div className='background'></div>
        <div className='aboutbody'>
          <div className='img'></div>
          <div className='wording'>
            <div className='header'>A<span>b</span>out-U<span>s</span></div>
            <div className='p'>{data}</div>
          </div>
        </div>
      </div>
      <div className='foot'></div>
    </div>
    </>
  )
}

export default Aboutus