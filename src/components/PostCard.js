
import BlogCard from './BlogCard'
import React, { useContext } from "react"
import { NewsContext } from './NewsContext'
import { ThemeProvider } from './ThemeContext'
import { NasaContext } from './NasaContext'

function PostCard()
{

    const {theme} = React.useContext(ThemeProvider)
    const {newsArray,viewMoreResults} = React.useContext(NewsContext)
    const nasaData = useContext(NasaContext)
    
    
    // const newsElements  = newsArray.map(({urlToImage
    //     ,title,publishedAt,content,id})=>{
    //     return (<BlogCard post={{urlToImage
    //         ,title,publishedAt,content,id}} />)
    // })
    
    const nasaElements = nasaData.map(item=>{
        return(<BlogCard post={item}/>)
    })
    

    return(
        <div className='hero-container'>
            <div className={theme === 'light' ? 'top-headline': 'top-headline top-headline-dark'}>
                <h2>Today's Top Picks</h2>
            </div>
            <main className="main-container" >
                 {/* {newsElements} */}
                 {nasaElements}
            </main>
            <div className="view-more-container"><button onClick={viewMoreResults} className={theme === 'light' ? 'view-more-link':'view-more-link view-more-link-dark'}>View More</button></div>
        </div>
    )
}
export default PostCard