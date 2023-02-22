
import React from "react"
import Navbar from "./Navbar"

function Header(props)
{
    let today = new Date()
     today =  today.toDateString().toUpperCase()
    
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
                <section className="header-image-container">
                    <div> 
                        <p className="date">{today}</p>
                        <h1 className="image-title">{isSearching ? `Fetching your content . . .🛸 📡`  : `Breaking News Now`}</h1>
                        <p className="image-body">{isSearching ? <i class="fa-solid fa-spinner fa-spin-pulse fa-xl"></i> : `we understand the importance of staying informed in today's fast-paced world. That's why we strive to provide you with the most accurate information.`}</p>
                    </div>
                </section>
            </header>
    )
}

export default Header