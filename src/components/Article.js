import React from 'react'
import SERVER_URL from "./url"

function Article(data) {

    return (
        <div>
            <h1>{data.title}</h1>
            <p> {data.content} </p>
            <img src={SERVER_URL + data.postimage} alt="postImage"/>
        </div>
    )
}

export default Article
