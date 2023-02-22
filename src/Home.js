import { Link, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import PostCard from "./components/PostCard";
import Footer from "./components/Footer";

function Home()
{
    return(
        <>
            <Header />
            <PostCard />
            <Footer />
        </>
    )
}
export default Home