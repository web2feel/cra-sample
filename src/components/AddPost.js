import React, { useState } from "react";
import axios from "axios";

function AddPost() {

  const [article,setArticle] = useState({
      title:"",
      postimage:"",
      content:""
  })

  const handleSubmit = (e) => {
    e.preventDefault();   
    const formData = new FormData();
    formData.append("title", article.title);
    formData.append("content", article.content);
    formData.append("postimage",article.postimage)
    axios.post('http://localhost:5000/articles/add',formData)
        .then( res => {
            //console.log(res)
            console.log(res.data)
            setArticle({
                title:"",
                postimage:"",
                content:""
            })
            
        })
  };

  const handleTitle = (e) => {
        let title = e.target.value 
        setArticle({...article, title:title})
  }
  const handleImage = (e) => {
      let image = e.target.files[0]
      setArticle({...article, postimage:image })
  }
  const handleContent = (e) => {
      let content = e.target.value       
      setArticle({...article,content:content})
  }
  console.log(article)
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          Title
          <input type="text" name="title" onChange={handleTitle}  value={article.title} />
        </div>
        <div>
          Image
          <input type="file" name="postimage" id="postimage" onChange={handleImage}/>
        </div>
        <div>
          content
          <textarea name="content" id="content" cols="30" rows="10" value={article.content} onChange={handleContent}></textarea>
        </div>
        <div>
          <button type="submit">Submit Post</button>
        </div>
      </form>
    </div>
  );
}

export default AddPost;
