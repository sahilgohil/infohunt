
import React from "react"
import Navbar from "./Navbar"
import { ThemeProvider } from "./ThemeContext"

function Header(props)
{
    let today = new Date()
     today =  today.toDateString().toUpperCase()
    const {theme} = React.useContext(ThemeProvider)
     const [isSearching,setIsSearching] = React.useState(false)

    function handleHeaderTitle()
    {
        setIsSearching(true)
        setTimeout(()=>{
            setIsSearching(false)
        },4000)
    }
    return(
            <header>
                <Navbar className='box-shadow' isWide = {props.isWide} handleHeaderTitle={handleHeaderTitle} />
                <section className={theme === 'light' ? 'header-image-container':'header-image-container header-image-container-dark'}>
                    <div> 
                        <p className={theme === 'light' ? "date" : "date dark" }>{today}</p>
                        <h1 className={theme === 'light' ? "image-title" : "image-title dark" }>{isSearching ? `Fetching your content . . .🛸 📡`  : `Breaking News Now`}</h1>
                        <p className={theme === 'light' ? "image-body" : "image-body dark" }>{isSearching ? <i class="fa-solid fa-spinner fa-spin-pulse fa-xl"></i> : `we understand the importance of staying informed in today's fast-paced world. That's why we strive to provide you with the most accurate information.`}</p>
                    </div>
                </section>
            </header>
    )
}

export default Header