import React, {useState, useEffect, FormEvent} from 'react';
import {Navigate} from 'react-router-dom';

interface formData {
    name: string;
    username: string;
    email: string;
    coverImageUrl: string;
    profileImageUrl: string;
}

function CreateUser(){

    const [formData, setFormData] = useState({
        name: "",
        username: "",
        email: "",
        coverImageUrl: "",
        profileImageUrl: ""
      })
      const [redirectTarget, setRedirectTarget] = useState<string | null>(null);
      if (redirectTarget) {
        return <Navigate to={redirectTarget}/>;
    }
      
      const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        fetch("http://localhost:3001/users/create",{
        method: 'POST',
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        },
         body: JSON.stringify(formData)
        }).then(res => res.json())
            .then(() => setRedirectTarget("/users"));
        
        // .then(data => setFormData(data))
       
        console.log(formData)
    
    }
    return(
    <>
        <form onSubmit = {handleSubmit}>
        <label>
        Name:
        <input value = {formData.name} 
        type="text" name="name" 
        onChange={(e) => setFormData({...formData, name: e.target.value})}
        required/>
        </label>
        
        <label>
        Username:
        <input value = {formData.username} 
        type="text" name="username" 
        onChange={(e) => setFormData({...formData, username: e.target.value})}
        required/>
        </label>
        <label>
        Email:
        <input value = {formData.email}
         type="email" name="email"
        onChange={(e) => setFormData({...formData, email: e.target.value})}
        required/>
    </label>
    <label>
        Profile Image:
        <input value = {formData.profileImageUrl} 
        type="text" name="profileImage" 
        onChange={(e) => setFormData({...formData, profileImageUrl: e.target.value})}
        required/>
    </label>
    <label>
        Cover Image:
        <input value = {formData.coverImageUrl} 
        type="text" name="coverImage" 
        onChange={(e) => setFormData({...formData, coverImageUrl: e.target.value})}
        required/>
    </label>
        <input type="submit" value ="Login" required/>
        </form>
    </>
    )
}
export default CreateUser;