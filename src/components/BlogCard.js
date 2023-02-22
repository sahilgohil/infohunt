import { Link } from "react-router-dom"
import { ThemeProvider } from "./ThemeContext"
import { useContext } from "react"

function BlogCard(props)
{   
    const date = props.post.publishedAt.slice(0,10)
    const {theme} = useContext(ThemeProvider)
    return(

        <section className="main-post">
                    
        <img className="main-image" src={props.post.urlToImage} alt="blog1" />
        <p className="main-date">{date}</p>
        <Link to={props.post.id} className='title-link' ><h2 className={theme === 'light' ? 'main-heading':'main-heading main-heading-dark'}>{props.post.title}</h2></Link>
        <p className={theme === 'light' ? 'main-body':'main-body main-body-dark'}>{props.post.content}</p>
        
        </section>
        
    )
}
export default BlogCard