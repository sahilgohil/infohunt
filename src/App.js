
import { Routes,Route} from "react-router-dom";
import Home from "./Home";
import PostPage from './components/PostPage'
import About from "./components/About";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";


function App() {

  const location = useLocation()
  useEffect(()=>{
    goTop()
  },[location])
  //newsapi.org
// api key= 7b5391f0b30c443786924b2a5038dff6

  function goTop()
  {
    window.scrollTo(10,10)
  }


  return (
    <div className="App" >
      <div className="go-top" onClick={goTop}><i class="fa-solid fa-arrow-up fa-xl"></i></div>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path=':id' element ={<PostPage />}/>
        <Route path="about" element={<About/>} />
      </Routes>
    </div>
  )
}

export default App;
