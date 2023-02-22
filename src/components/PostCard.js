
import BlogCard from './BlogCard'
import React from "react"
import { NewsContext } from './NewsContext'

function PostCard()
{


    const {newsArray,viewMoreResults} = React.useContext(NewsContext)
    
    const newsElements  = newsArray.map(({urlToImage
        ,title,publishedAt,content,id})=>{
        return (<BlogCard post={{urlToImage
            ,title,publishedAt,content,id}} />)
    })
    

    return(
        <div className='hero-container'>
            <div className='top-headline'>
                <h2>Today's Top headlines of Australia</h2>
            </div>
            <main className="main-container" >
                 {newsElements}
            </main>
            <div className="view-more-container"><button onClick={viewMoreResults} className="view-more-link">View More</button></div>
        </div>
    )
}
export default PostCard