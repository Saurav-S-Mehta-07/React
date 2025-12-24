import { useState } from "react"

export default function Form(){
 let [formData, setFormData] = useState({
    username : "", fullName : "", password : ""
 });


 let handleInput = (event)=>{
    let fieldName = event.target.name;
    let fieldValue = event.target.value;
     setFormData((prevData)=>{
        prevData[fieldName] = fieldValue;
        return ({...prevData});
     })
 }
 

 let handleSubmit = (event)=>{
       event.preventDefault();
       setFormData({username : "", fullName : "", password : ""});
 }


  return (
    <div>
        <form action="" onSubmit={handleSubmit}>
            <h1>{formData.fullName}</h1>

             <label htmlFor="usename">UserName : </label>
            <input type="text" id="usename" placeholder="enter your username"
                   value={formData.username} onChange={handleInput} name="username"
            />

            <hr /> <br />

            <label htmlFor="name">Name : </label>
            <input type="text" id="name" placeholder="enter your name"
                   value={formData.fullName} onChange={handleInput} name="fullName"
            />

            &nbsp;
            <br />
            <br />
            <hr />

            <label htmlFor="password">Password : </label>
            <input type="password" id="password"
                   value={formData.password} onChange={handleInput}
                    placeholder="enter password" name="password"
            />

            <br /><hr />
            <button>Submit</button>
        </form>
    </div>
  )
}
