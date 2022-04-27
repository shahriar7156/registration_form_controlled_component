import React, { useState } from 'react';
import style from './form.module.css';


export default function Form() {
    const [name,setName]= useState("");
const [email,setEmail]= useState("");
const [password,setPassWord]= useState("");

const handleNameChange =(e) =>{
    setName(e.target.value);
};
const handleEmailChange =(e) =>{
    setEmail(e.target.value);
};

const handlePasswordChange =(e) =>{
    setPassWord(e.target.value);
};
const handleSubmit =(e)=>{
    console.log("form is submitted");
    let userInfo ={
        name:name,
        email: email,
        password:password,
    };
    console.log(userInfo);
    e.preventDefault();
};
  return (
    <div>
      <h1>Registration</h1>
    <form action= "" onSubmit={handleSubmit}> 
    <div className={style.formGroup}>
    <label htmlFor="name">Name:</label>
    <input type= "text" name="name" id="name" value={name} onChange={handleNameChange} required/>
    </div>
    
  <div className={style.formGroup} >
  <label htmlFor="email">email:</label>
  <input type="text" name="email" id="email" value={email} onChange ={handleEmailChange} />
  </div>
  <div className={style.formGroup}>
  <label htmlFor="password">password:</label>
  <input type="text" name="password" id="password" value={password} onChange={handlePasswordChange} />
  </div>
    
    <button type="submit">Register</button>
    


    </form>

    </div>
  )
}
