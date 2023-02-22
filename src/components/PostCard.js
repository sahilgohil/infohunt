
import BlogCard from './BlogCard'
import React from "react"
import { NewsContext } from './NewsContext'
import { ThemeProvider } from './ThemeContext'

function PostCard()
{

    const {theme} = React.useContext(ThemeProvider)
    const {newsArray,viewMoreResults} = React.useContext(NewsContext)
    
    const newsElements  = newsArray.map(({urlToImage
        ,title,publishedAt,content,id})=>{
        return (<BlogCard post={{urlToImage
            ,title,publishedAt,content,id}} />)
    })
    

    return(
        <div className='hero-container'>
            <div className={theme === 'light' ? 'top-headline': 'top-headline top-headline-dark'}>
                <h2>Today's Top headlines of Australia</h2>
            </div>
            <main className="main-container" >
                 {newsElements}
            </main>
            <div className="view-more-container"><button onClick={viewMoreResults} className={theme === 'light' ? 'view-more-link':'view-more-link view-more-link-dark'}>View More</button></div>
        </div>
    )
}
export default PostCard