import React from 'react'
import "./Error.css"
function Error() {
    const reload=()=>{
        window.location.reload()
    }
  return (
    <div className='errorbody'>
      <div className='body'>
        <div className='design'>
        <img src="/IMAGES/sorry.png"/>
        <h3 className='p'>Oops... Something Went Wrong</h3>
        </div>
      </div>
      <button onClick={reload}>Refresh</button>
      </div>
  )
}

export default Error