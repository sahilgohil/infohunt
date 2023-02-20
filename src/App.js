
import { Routes,Route,Link } from "react-router-dom";
import Home from "./Home";
import PostPage from './components/PostPage'
import About from "./components/About";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path=':id' element ={<PostPage />}/>
        <Route path="about" element={<About/>} />
      </Routes>
    </div>
  );
}

export default App;
