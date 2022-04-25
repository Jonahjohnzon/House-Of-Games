import React from 'react'
import Menudisplay from './Menudisplay'
import Footer from  "../FOOTER/Footer"

function Menudata({Menudata,data}) {
 const games=Menudata.map((game)=>{
   return(
     <div key={game.id}>
      <Menudisplay data={game}/>
     </div>
   )
 })
 
  return (
    <div className='menuflex'>
  <div className='head'></div>
  <div className='body'>
  <h1>C<span>a</span>ta<span>l</span>og</h1>
  <div className='position'>
  <div className='totalgames'>{games}</div>
  </div>
  <div>
  </div>
  <Footer data={data}/>
  </div>
  </div>
  )
}

export default Menudata