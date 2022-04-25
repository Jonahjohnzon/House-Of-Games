import React from 'react'
import "../Navbar/Navbar.css";

function Frontdata({data}) {

  return (
    <div className='frontimages'>
    <section>
  <div className='img1'>
  <div className='div'>

 <div style={{backgroundImage:`url(${data[57].thumbnail})`}} className='img'></div>

 </div>
  </div>
  <div className='img2'>
  <div className='div'>
 <div style={{backgroundImage:`url(${data[211].thumbnail})`}} className='img'></div>

 </div>
  </div>
  <div className='img3'>
  <div className='div'>
 <div style={{backgroundImage:`url(${data[27].thumbnail})`}} className='img'></div>

 </div>
  </div>
 </section>
 </div>
  )
}

export default Frontdata