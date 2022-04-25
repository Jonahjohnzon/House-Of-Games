import React from 'react'

function Tabbody({no,data}) {
  return (
    <>   <div className='alltabbody'>
    <a href={data[no].game_url} className="tablink"><div style={{backgroundImage:`url(${data[no].thumbnail})`}} className="tabimg">
   </div></a>
   <a href={data[no].game_url} className="tabtitle"><h4>{data[no].title}</h4>
   <h6><span>Platform : </span>{data[no].platform}</h6>
   <div className='p'><h6>Description : </h6>{data[no].short_description}</div>
   <h6><span>Release-Data : </span>{data[no].release_date}</h6>
   </a>
    </div></>
  )
}

export default Tabbody