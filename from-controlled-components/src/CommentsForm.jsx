import React, { useState } from 'react'
import Comments from './Comments';
import { useFormik} from 'formik';


const CommentsForm = () => {
  // let [formData, setFormData] = useState({username:"",comment : "", rating:5});
  const  validate = (values) =>{
      const errors = {};
      if(!values.username){
        errors.username = "username can't be empty"
      }
      return errors
  }
  let [comments, setComments] = useState([{username:"saurav",comment:"this is good place", rating : 5}]);

     const formik = useFormik({
     initialValues: {
       username: '',
       comment: '',
       rating: 5,
     },
     validate,
     onSubmit: (values, formikHelpers) => {
       setComments((prevComments) => {
         return [...prevComments, values];
       });
   
       formikHelpers.resetForm(); 
     },
    });

  

  return (
    <div >
        <h4>Give a Comment</h4>
        <hr /><hr />
        <form action="" onSubmit={formik.handleSubmit}>
            <label htmlFor="username">Username : </label>
            <input  type="text" id='username' placeholder='enter name' name='username'value={formik.values.username} onChange={formik.handleChange}/><br />
            {formik.errors.username && <p style={{color:"red"}}>{formik.errors.username}</p>}
            <hr />
            <label htmlFor="comment">Comment : </label>
            <textarea  name="comment" id="comment" rows={5} cols={20} value={formik.values.comment} placeholder='add some comment' onChange={formik.handleChange}></textarea><br /><hr />
            
            <label htmlFor="rating">Rating : </label>
            <input  type="number" id='rating' name='rating' placeholder='enter rating'  min={1} max={5} value={formik.values.rating} onChange={formik.handleChange}/><br /><hr />
            <button type='submit'>Submit</button><br /><hr />
        </form>
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