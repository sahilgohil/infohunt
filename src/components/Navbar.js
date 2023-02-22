import { Link } from "react-router-dom"
import { useState,useContext } from "react"
import { NewsContext } from "./NewsContext"
import {ThemeProvider} from './ThemeContext'
import { useNavigate } from "react-router-dom"
import { useLocation } from "react-router-dom"

function Navbar(props)
{
    const [searchedItem, setSearchedItem] = useState('')
    const {theme,toggleTheme} = useContext(ThemeProvider)
    const iconUrl = theme === 'light' ? 
                    'https://cdn-icons-png.flaticon.com/512/2490/2490255.png':
                    'https://cdn-icons-png.flaticon.com/512/2490/2490148.png'
    const message = theme === 'light' ? 'light mode': 'dark mode'
    const navigate = useNavigate()
    const location =  useLocation()
    
 
    function handleChange(event)
    {   
        const {value} = event.target
        setSearchedItem(value)
    }
    function handleCLick()
    {
        console.log(location.pathname)
        navigate('/')
        if(location.pathname === '/')
        {
            props.handleHeaderTitle()
            getNewSearchItem(searchedItem)
        }
        else 
        {
            let searched = searchedItem
            
            setTimeout(()=>{
                getNewSearchItem(searched)
                props.handleHeaderTitle()
            },3000)
        }

        
    }
    const {getNewSearchItem} = useContext(NewsContext)
    

    return(
        <section className={`container ${props.className ? props.className : ''}`}>
                <section className="logo-title-container">
                   {/* Put icon here */}
                    {/* <Link to='/'><i class="fa-regular fa-newspaper fa-2xl icon"></i></Link> */}
                    <Link to='/' className="h-link"><h1 className="heading">BNN</h1></Link>
                    <div onClick={toggleTheme} className="mode">
                        <img className="lightmode-icon" src={iconUrl} alt="lightmode icon"/>
                        <p>{message}</p>
                    </div>
                </section>
                <ul>
                <li>
                    <i class="search fa-solid fa-magnifying-glass"></i></li>
                    <li><input onChange={handleChange} placeholder="search topic eg.crypto" type='text' name="search" className="search-input"/></li>
                    <li className="search search-btn" onClick={handleCLick}>Search</li>
                    {props.isWide && <li><Link to='/' title="home page" className="nav"> Home </Link></li>}
                    {/* {props.isWide && <li><Link to='about' title="about me page" className="nav"> About Me </Link></li>} */}
                </ul>
            </section>
    )
}
export default Navbar