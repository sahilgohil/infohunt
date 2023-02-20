import Navbar from "./Navbar"
import { useParams } from "react-router-dom"
import blogData from "./blogData"
import Footer from "./Footer"
function PostPage()
{
    const {id} = useParams()
    const post = blogData.find(data => data.id === id)
   
    
    return (
        <div className="dummy">
            <Navbar className = 'box-shadow'/>
            <div className="outer-post"> 
                <div className="post-container">
                    <div className="upper-main">
                        <div className="main">
                            <h1 className="pp-title">How to Become a Front-End Developer in 2022: A Comprehensive Guide</h1>
                            <p className="pp-date">23 September 2022</p>
                            <div className="pp-img-container">
                                <img className="pp-img" src="https://s35764.pcdn.co/wp-content/uploads/2022/09/Featured-Image-51-768x402.jpg" />
                            </div>
                            <p className="pp-description">
                            The internet has become embedded in every aspect of our day-to-day lives. It has opened our world to limitless possibilities. Currently, 63.1% of the world’s population is connected to the web. The growth of the internet has also resulted in the growth of the web development industry, providing excellent job opportunities, and also making front-end development a highly lucrative and coveted career. If you are not sure where to start in your journey to become a front-end developer, we have created a simple roadmap for you to follow. If you explore this comprehensive guide, you will have a basic understanding of how to become a front-end developer. 
                            </p>
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