import React from "react";
import { useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';

const NewsContext = React.createContext()



function NewsContextProvider(props)
{   
    const [newsArray,setNewsArray] = React.useState([])
    const [topic, setTopic] = React.useState('ai')
    const [pageSize,setPageSize] = React.useState(9)
    const [searching,setSearching] = React.useState(false)
    const [recentTechNews, setRecentTechNews] = React.useState([])
    const options = {
        method: 'GET',
        headers: {
        'X-Api-Key': '7b5391f0b30c443786924b2a5038dff6',
        }
    };
    let url = searching ? `https://newsapi.org/v2/everything?q=${topic}&pageSize=${pageSize}` :
                            `https://newsapi.org/v2/top-headlines?country=au`
    

    function getNewSearchItem(searchedItem)
    {
        
        
        if(searchedItem)
        {
            setTopic(searchedItem)
            setSearching(true)
        }
        else{
            alert('Please enter your topic in search')
        }
        
    }
    function viewMoreResults()
    {
        setPageSize(pre => pre + 6)
        setSearching(true)
    }
    useEffect(()=>{
        fetch (url, options)
                .then(response => response.json())
                .then(data => setNewsArray(data.articles.map(x=> 
                    ({id:uuidv4(),...x}))))
        fetch('https://newsapi.org/v2/everything?domains=techcrunch.com,thenextweb.com&pageSize=6',options)
                .then(res => res.json())
                .then(data => setRecentTechNews(data.articles.map(x=> 
                    ({id:uuidv4(),...x}))))
    },[])
   
    useEffect(()=>{
        if(searching)
        {
            fetch (url, options)
                .then(response => response.json())
                .then(data => setNewsArray(data.articles.map(x=> 
                    ({id:uuidv4(),...x}))))
        }

            setSearching(false)
    },[searching])
    
     console.log(newsArray)
        
    return(
        <NewsContext.Provider value={{newsArray,getNewSearchItem,viewMoreResults,recentTechNews}}>
            {props.children}
        </NewsContext.Provider>
    )

}
export {NewsContextProvider, NewsContext}