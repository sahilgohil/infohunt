import React from "react";

function Sidebar(props)
{const date = new Date(props.data.publishedAt).toDateString()
    return(
        <div>
            
            <h3 className="s-p-title">{props.data.title}</h3>
            <p className="s-p-date">{date}</p>
            <hr/>
        </div>
    )
}
export default Sidebar