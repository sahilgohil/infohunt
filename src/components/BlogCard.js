import { Link } from "react-router-dom"


function BlogCard(props)
{   
    const date = props.post.publishedAt.slice(0,10)
    return(
        // <section className="main-post">
                    
        //             <img className="main-image" src={props.post.url} alt="blog1" />
        //             <p className="main-date">{props.post.date}</p>
        //             <Link to={props.post.id}  className='title-link' ><h2 className="main-heading">{props.post.title}</h2></Link>
        //             <p className="main-body">{props.post.description}</p>
                    
        // </section>
        <section className="main-post">
                    
        <img className="main-image" src={props.post.urlToImage
} alt="blog1" />
        <p className="main-date">{date}</p>
        <Link to={props.post.id} className='title-link' ><h2 className="main-heading">{props.post.title}</h2></Link>
        <p className="main-body">{props.post.content}</p>
        
        </section>
        
    )
}
export default BlogCard