import React from 'react'

function Gameinfo({no,data}) {
  return (
    <> 
    <div className='body'>
    <a href={data[no].freetogame_profile_url}><div className='img'  style={{backgroundImage:`url(${data[no].thumbnail})`}}></div>
    <div><h5>Title : <span>{data[no].title}</span></h5>
    <h5>Publisher : <span>{data[no].publisher}</span></h5>
    <h5>Genre :<span>{data[no].genre}</span></h5></div></a>
    </div></>
  )
}

export default Gameinfo