import Navbar from "./Navbar"
import { useParams } from "react-router-dom"
import blogData from "./blogData"
import Footer from "./Footer"
import { NewsContext } from "./NewsContext"
import { useContext } from "react"
function PostPage()
{
    const{newsArray} = useContext(NewsContext)
    const {id} = useParams()
    const post = newsArray.find(data => data.id === id)
   
    
    return (
        <div className="dummy">
            <Navbar className = 'box-shadow'/>
            <div className="outer-post"> 
                <div className="post-container">
                    <div className="upper-main">
                        <div className="main">
                            <h1 className="pp-title">{post.title}</h1>
                            <p className="pp-date">{post.publishedAt}</p>
                            <div className="pp-img-container">
                                <img className="pp-img" src={post.urlToImage} />
                            </div>
                            <p className="pp-description">{post.content} <a href={post.url} target='_blank' className='external-link'>Read More Here</a> </p>
                            <h1 className="pp-heading">What is a Front-End Developer?</h1>
                            <p className="heading-body">Web development falls into two categories: front-end development and back-end development. Front-end development focuses on the visual aspects of a website. It is the part that users interact with and see. On the other hand, back-end development refers to a website’s structure, logic, data, and system. Both front-end and back-end go hand-in-hand to create an interactive and visually appealing website.</p>
                        </div>
                    </div>
                    <div className="sidebar">
                        <h2 className="s-title">Recent Posts</h2>
                        <h3 className="s-p-title">What is Mobile App Marketing and How it Drives Growth for a Brand</h3>
                        <p className="s-p-date">February 16, 2023</p>
                    </div>
                    
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default PostPage