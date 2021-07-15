import React from 'react'
import useFetch from "./useFetch"
import Article from "./Article"

function Articles() {

   
        const {data,loading} = useFetch("http://localhost:5000/articles/")

    
        
    return (
        <>
        {loading && <h1> Loading ....</h1> }
        
        {
            data && data.map( data => (
                <Article {...data} key={data._id}/>
            ))
        }
        </>
    )
}

export default Articles
