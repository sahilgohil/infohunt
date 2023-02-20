import { Link } from "react-router-dom"
function Navbar(props)
{
    return(
        <section className={`container ${props.className ? props.className : ''}`}>
                <section className="logo-title-container">
                   {/* Put icon here */}
                    <i className="fa-solid fa-code icon fa-xl "></i>
                    <h1 className="heading">Front end Dev - journal</h1>
                </section>
                <ul>
                    <li><Link to='/' title="home page" className="nav"> Home </Link></li>
                    <li><Link to='about' title="about me page" className="nav"> About Me </Link></li>
                </ul>
            </section>
    )
}
export default Navbar