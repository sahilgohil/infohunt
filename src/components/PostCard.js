
import blogData from './blogData'
import BlogCard from './BlogCard'
import React from "react"
import { NewsContext } from './NewsContext'

function PostCard()
{
    const [counter,setCounter] = React.useState(3)
    const [isMorePosts,setIsMorePosts] = React.useState(true)
    let blogs = blogData.slice(0,counter) 
  
    // const blogElements = blogs.map(post => {
    //     return (<BlogCard key={post.id} post = {post}/>)
    // })
    React.useEffect (()=>{
        if(blogData.length<=counter)
        {
            setIsMorePosts(false)
        }
    },[counter])
    function increaseCounter()
    {
        setCounter(preCounter => preCounter+3)
    }
    const {newsArray} = React.useContext(NewsContext)
    
    const newsElements  = newsArray.map(({urlToImage
        ,title,publishedAt,content})=>{
        return (<BlogCard post={{urlToImage
            ,title,publishedAt,content}} />)
    })
    

    return(
        <div >
            
            <main className="main-container" >
                {/* {blogElements}
                 */}
                 {newsElements}
            </main>
            {isMorePosts ?
            <div className="view-more-container"><button onClick={increaseCounter} className="view-more-link">View More</button></div> :
            <h2 className='nomore'>No more posts</h2>}
        </div>
    )
}
export default PostCard