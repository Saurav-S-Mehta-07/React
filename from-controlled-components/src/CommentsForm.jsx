import React, { useState } from 'react'
import Comments from './Comments';
import CommentFrom from './CommetForm';

const CommentsForm = () => {
  let [formData, setFormData] = useState({username:"",comment : "", rating:5});
  let [comments, setComments] = useState([]);

  let handleInputChange = (event)=>{
     setFormData((prevData)=>{
        return ({...prevData, [event.target.name]: event.target.value});
     })
  }

  let handleSubmit = (event)=>{
    event.preventDefault();
    setComments((prevComments)=>{
         return ([...prevComments,formData]);
    });
    setFormData(()=>{
        return ({username:"",comment : "", rating:5});
    });
  }
  

  return (
    <div >
        <h4>Give a Comment</h4>
        <hr /><hr />
        <CommentFrom handleInputChange={handleInputChange} handleSubmit={handleSubmit} formData={formData}/>
        <hr />
        {
            comments.length>0
            &&
           <Comments comments={comments}/>
        }
        
    </div>
  )
}

export default CommentsForm