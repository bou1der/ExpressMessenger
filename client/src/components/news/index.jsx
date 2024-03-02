import React from "react";
import './news.css';
import Post from "./components/post";
// src

// src
const NewsPage = ({}) => {
    const arr = [0,1,2,3,4,5,6,7]
    return(
        <>
            <div className="mainBlock">
                {
                    arr.map(el =>{
                        return(
                            <>
                                <Post key={el}/>
                                <div className="Separator"></div>
                            </>
                        )
                    })
                }
            </div>
        </>
    )
}
export default NewsPage;