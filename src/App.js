import Header from "./Header";
import PostCard from "./PostCard";
import { Routes,Route,Link } from "react-router-dom";
import Home from "./Home";
import PostPage from './PostPage'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path=':id' element ={<PostPage />}/>
      </Routes>
    </div>
  );
}

export default App;
