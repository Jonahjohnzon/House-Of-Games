
import { useState } from 'react';
import { useEffect } from 'react';
import Loading from './LOADINGFILE/Loading';
import "./Index.css"
import Frontdata from './DataComponent/Frontdata';
import Categories from './DataComponent/Categories';
import Menudata from './MENUDISPLAY/Menudata';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import  "./Navbar/Navbar.css"
import Navbar from './Navbar/Navbar';
import Menu from './DataComponent/menu';
import Aboutus from './ABOUTUS/Aboutus';
import Error from './ERROR/Error';
import Menuicon from './Navbar/menuicon';
function App() {
  const[show,setShow]=useState(false)
  const [dropdown,setDropdown]=useState(false)
  const[loading,setLoading]=useState([true])
  const[loadings,setLoadings]=useState([true])
  const[data,setData]=useState([])
  const [cart,setCart]=useState("shooter")
  const[menudata,setMenudata]=useState([])
 const[background,setBackground]=useState({backgroundColor:"rgb(24,28,35)",height:"100%",width:"100vw",position:"relative"})
 const [frontgames,setFrontgames]=useState([])
 const[error,setError]=useState(false);
 const[error1,setError1]=useState(false);
 const[checkdd,setCheckdd]=useState(false)

  const Games=()=>{
    setLoading(true)
    fetch("https://free-to-play-games-database.p.rapidapi.com/api/games", {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
        "x-rapidapi-key": "65217d46famsh752564dc48c9febp11127ejsnb5c21b7dccdf"
      }
    })
   .then(rsp=>rsp.json())
   .then(data=>{
     setData(data)
     setLoading(false)
     setFrontgames(()=>{ 
     return(
       <Frontdata data={data}/>
     )})
    
   }).catch((err)=>{
     setError(true)
   })
}
 
const Menugames=()=>{
  setShow(false)
  setLoadings(true)
  fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${cart}`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
		"x-rapidapi-key": "65217d46famsh752564dc48c9febp11127ejsnb5c21b7dccdf"
	}
}).then(rsp=>rsp.json())
.then(data=>{
  setMenudata(data)
  setLoadings(false)
  window.scrollTo({
    top:1,
    behavior:"smooth"
  })
}).catch(()=>{
  setError1(true)
 
})

}


useEffect(()=>{
Games()
Menugames()
},[])
function contact() {
 
 window.scrollTo({
   top:1000000,
   behavior:"smooth"
 })
}
const dropmenu=()=>{
  setDropdown(!dropdown)
  setCheckdd(false)
}



  return (
    <div className="App"  style={background}>
     {error1||error? <Error/> : <Router>
      <div >
         {loading||<Navbar set={show=>setShow(show)} setBottom={contact}/>}
         {(checkdd||show) && <Menu set={show=>setShow(show)} setCart={cart=>setCart(cart)} functionn={Menugames} drop={(dropdown)=>setDropdown(dropdown) } check={checkdd=>setCheckdd(checkdd)}/>}
         <img src='/IMAGES/icon.png' className='menuicon' onClick={dropmenu}/>
         {dropdown&&<Menuicon show={checkdd=>setCheckdd(checkdd)} set={checkdd} drop={dropdown=>setDropdown(dropdown)}/>}
         </div>
              <Routes>
                 <Route path="/"  element={<>{ loading?<Loading/>:<Categories data={data} frontgames={frontgames} />}</>}/> 
               <>{<Route path='cart' element={loadings?<Loading/>:<Menudata   Menudata={menudata} data={data}  />}/>} </>
              <Route path='About' element={<Aboutus/>}  data={data}/>
              </Routes>
     </Router>}
    </div>
  );
}

export default App;
