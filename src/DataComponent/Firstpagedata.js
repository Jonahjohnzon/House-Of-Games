import React from 'react'
import "./Firstpagedata.css"

function Firstpagedata({data,no,bno}) {
  const Gamedata=data.map((Game)=>{
    if(Game.id<no && Game.id>bno){
      return(
        <div  key={Game.id} className="gamebody">
       <a href={Game.game_url}><div  style={{backgroundImage:`url(${Game.thumbnail})`}} className="img">
        </div></a>
        <h3 className='populargame'>{Game.title}</h3> 
        <h5>{Game.short_description}</h5>
        </div>
      )
    }
  })

  return (
    < >
     {Gamedata}
    </>
  )
}

export default Firstpagedata