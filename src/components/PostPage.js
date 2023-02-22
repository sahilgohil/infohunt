import Navbar from "./Navbar"
import { useParams } from "react-router-dom"
import Footer from "./Footer"
import { NewsContext } from "./NewsContext"
import { useContext } from "react"
import Sidebar from "./Sidebar"
function PostPage()
{
    const{newsArray, recentTechNews} = useContext(NewsContext)
    const {id} = useParams()
    const post = [...newsArray,...recentTechNews].find(data => data.id === id)
   

    const sideHtml = recentTechNews.map(item =>{
        return (<Sidebar data = {item} />)
    })
   
    
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
                            
                        </div>
                    </div>
                    <div className="sidebar">
                        <h2 className="s-title">Recent Posts</h2>
                        {sideHtml}
                    </div>
                    
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default PostPage