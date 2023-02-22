
import Navbar from "./Navbar"

function Header()
{
    let today = new Date()
     today =  today.toDateString().toUpperCase()
    return(
            <header>
                <Navbar className='box-shadow' />
                <section className="header-image-container">
                    <div> 
                        <p className="date">{today}</p>
                        <h1 className="image-title">Breaking News Now</h1>
                        <p className="image-body">we understand the importance of staying informed in today's fast-paced world. That's why we strive to provide you with the most accurate information.</p>
                    </div>
                </section>
            </header>
    )
}

export default Header