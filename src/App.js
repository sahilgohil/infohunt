
import { Routes,Route} from "react-router-dom";
import Home from "./Home";
import PostPage from './components/PostPage'
import About from "./components/About";
import { useEffect,useState } from "react";
import { useLocation } from "react-router-dom";
import React from "react";



function App() {

  const location = useLocation()
  useEffect(()=>{
    goTop()
  },[location])
  //newsapi.org
// api key= 7b5391f0b30c443786924b2a5038dff6

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isWide,setIsWide] = useState(false)
  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
      if(windowWidth > 632)
      {
        setIsWide(true)
      }
      else if(windowWidth <632){
        setIsWide(false)
      }
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [windowWidth]);

  function goTop()
  {
    window.scrollTo(10,10)
  }



  return (
    <div className="App" >
      {isWide && <div className="go-top" onClick={goTop}><i class="fa-solid fa-arrow-up fa-xl"></i></div>}
      <Routes>
        <Route path="/" element={<Home isWide = {isWide}/>}/>
        <Route path=':id' element ={<PostPage />}/>
        <Route path="about" element={<About/>} />
      </Routes>
    </div>
  )
}

export default App;
