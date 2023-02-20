import { Link, Route, Routes } from "react-router-dom";
import Header from "./Header";
import PostCard from "./PostCard";

function Home()
{
    return(
        <div>
            <Header />
            <PostCard />
        </div>
    )
}
export default Home