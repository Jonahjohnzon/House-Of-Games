import React, { useEffect } from 'react'
import "./Menucart.css"

function Menudisplay({data}) {
  return (
    <div className='menubody'  >
    <a href={data.game_url} className="link"><div  style={{backgroundImage:`url(${data.thumbnail})`}} className="img">
   </div></a>
   <a href={data.game_url} className="title"><h4>{data.title}</h4>
   <h6><span>Platform : </span>{data.platform}</h6>
   <h6 className='rel'><span>Release-Data : </span>{data.release_date}</h6>
   <div className='p'><h6>Description :</h6>{data.short_description}</div>
   
   </a>
    </div>
  )
}

export default Menudisplay