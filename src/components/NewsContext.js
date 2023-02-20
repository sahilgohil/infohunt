import React from "react";
import { useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';

const NewsContext = React.createContext()


function NewsContextProvider(props)
{   
    const [newsArray,setNewsArray] = React.useState([])
    const [topic, setTopic] = React.useState('microsoft')
    const [pageSize,setPageSize] = React.useState(9)
    function getNewSearchItem(searchedItem)
    {
        if(searchedItem)
        {
            setTopic(searchedItem)
        }
        else{
            alert('Please enter your topic in search')
        }
        
    }
    function viewMoreResults()
    {
        setPageSize(pre => pre+6)
    }

    useEffect(()=>{
        
        const options = {
            method: 'GET',
            headers: {
            'X-Api-Key': '7b5391f0b30c443786924b2a5038dff6',
            }
        };
    
        fetch(`https://newsapi.org/v2/everything?q=${topic}&pageSize=${pageSize}`, options)
            .then(response => response.json())
            .then(data => setNewsArray(data.articles.map(x=> 
                ({id:uuidv4(),...x}))))

    },[topic,pageSize])
    
     console.log(newsArray)
        
    return(
        <NewsContext.Provider value={{newsArray,getNewSearchItem,viewMoreResults}}>
            {props.children}
        </NewsContext.Provider>
    )

}
export {NewsContextProvider, NewsContext}