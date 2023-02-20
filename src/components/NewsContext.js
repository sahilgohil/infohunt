import React from "react";
import { useEffect } from "react";

const NewsContext = React.createContext()


function NewsContextProvider(props)
{   
    const [newsArray,setNewsArray] = React.useState([])
    const [topic, setTopic] = React.useState('microsoft')
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

    useEffect(()=>{
        
        const options = {
            method: 'GET',
            headers: {
            'X-Api-Key': '7b5391f0b30c443786924b2a5038dff6',
            }
        };
    
        fetch(`https://newsapi.org/v2/everything?q=${topic}&pageSize=10`, options)
            .then(response => response.json())
            .then(data => setNewsArray(data.articles))

    },[topic])
    

     
        
    return(
        <NewsContext.Provider value={{newsArray,getNewSearchItem}}>
            {props.children}
        </NewsContext.Provider>
    )

}
export {NewsContextProvider, NewsContext}