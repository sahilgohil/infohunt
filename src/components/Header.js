
import Navbar from "./Navbar"

function Header()
{
    return(
            <header>
                <Navbar />
                <section className="header-image-container">
                    <div className="try"> 
                        <p className="date">FEBRUARY 22, 2023</p>
                        <h1 className="image-title">Top resources for learning frontend development</h1>
                        <p className="image-body">from very basic HTML to the advanced full stack development guide</p>
                    </div>
                </section>
            </header>
    )
}

export default Header