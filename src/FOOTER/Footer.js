import React from 'react'
import  "./Footer.css"

function Footer({data}) {
  return (
    <footer>
        <div>
        <div className='contact'>
            <form  action='/' method='/' >
            <h2>Contact With Us</h2>
            <input type="email" placeholder='Email *' />
            <textarea  rows="4" column="10" className='input' placeholder='Message *'/>
            <input type="submit"/>
            </form>
        </div>
        <div className='Ads'>
       <h2>Lastest Post</h2>
        <div>
          <div className='section'> <div className='img'  style={{backgroundImage:`url(${data[15].thumbnail})`}}>
         </div> 
           <span>
             <div>{data[15].title}</div>
            <div>{data[15].release_date}</div>
            </span>
           </div>
           <div className='section'> <div className='img'  style={{backgroundImage:`url(${data[16].thumbnail})`}}>
         </div> 
           <span>
             <div>{data[16].title}</div>
            <div>{data[16].release_date}</div>
            </span>
           </div>
       </div>
       <h2>Twitter</h2>
       <h4>Luzebox<span>@Luzebox . 2022 Apr 19</span></h4>
       <h5>holla me!! ...if you are interested in making amazing websites <span>#Frontend Dev</span></h5>
        </div>
        </div>
        <section>
          <h5>Copyright &copy; <span>Luzebox</span></h5>
          <div>
            <a href=''><img src='/IMAGES/fb.png' /></a>
            <a href=''><img src='/IMAGES/insta.png' /></a>
          </div>
        </section>
    </footer>
  )
}

export default Footer