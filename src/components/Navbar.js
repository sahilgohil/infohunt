import { Link } from "react-router-dom"
import { useState,useContext } from "react"
import { NewsContext } from "./NewsContext"

function Navbar(props)
{
    const [searchedItem, setSearchedItem] = useState('')



    function handleChange(event)
    {   
        const {value} = event.target
        setSearchedItem(value)
    }
    function handleCLick()
    {
        
        getNewSearchItem(searchedItem)
    }
    const {getNewSearchItem} = useContext(NewsContext)
    

    return(
        <section className={`container ${props.className ? props.className : ''}`}>
                <section className="logo-title-container">
                   {/* Put icon here */}
                    <Link to='/'><i class="fa-solid fa-lightbulb fa-2xl icon"></i></Link>
                    <Link to='/' className="h-link"><h1 className="heading">InfoHunt</h1></Link>
                </section>
                <ul>
                <li>
                    <i class="search fa-solid fa-magnifying-glass"></i></li>
                    <li><input onChange={handleChange} placeholder="search topic eg.crypto" type='text' name="search" className="search-input"/></li>
                    <li className="search search-btn" onClick={handleCLick}>Search</li>
                    <li><Link to='/' title="home page" className="nav"> Home </Link></li>
                    <li><Link to='about' title="about me page" className="nav"> About Me </Link></li>
                </ul>
            </section>
    )
}
export default Navbar