import { Link } from "react-router-dom"


function BlogCard(props)
{   
    console.log(props.post.url)
    return(
        <section className="main-post">
                    
                    <img className="main-image" src={props.post.url} alt="blog1" />
                    <p className="main-date">{props.post.date}</p>
                    <Link to={props.post.id} ><h2 className="main-heading">{props.post.title}</h2></Link>
                    <p className="main-body">{props.post.description}</p>
                    
        </section>
        
    )
}
export default BlogCard