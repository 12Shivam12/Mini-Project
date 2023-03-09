import React from "react";
import './Create.css'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
function Create() {
    const navigate = useNavigate();

    const[first_name,setName] = useState("");
    const[email,setEmail] = useState("");
    const[image,setImage] = useState("");
    const BackToUser = () => {
        navigate("/user");
    }
    var userData = {}
    const handleSubmit = () => {
        // e.preventDefault();
         userData = {first_name,email,image}
        console.log(userData)
        AddData();
    }

    const AddData = async() =>{
        const response = await fetch(`http://localhost:3000/posts`,{
            method:"POST",
            headers:{"content-type":"application/json"},
            body:JSON.stringify(userData)
        })
        const data = await response.json();
        alert("Saved Succesfully");
        navigate('/user')

    }

    return (
        <div className="ParentDivNewuser">
            <div><h2>Enter New User Details</h2></div>
            <div className="ChildDiv">
                <input value={first_name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Enter Your Name" />
                <input value={email} onChange={(e) =>setEmail(e.target.value)} type="email" placeholder="Enter Your E-mail" />
                <input value={image} onChange={(e) => setImage(e.target.value)} type="url" placeholder="Enter Image URL" />
            </div>
            <div className="ButtonDiv">
                <button onClick={handleSubmit} style={{backgroundColor:"green",}}>Save</button>&nbsp;&nbsp;
                <button onClick={BackToUser} style={{backgroundColor:"red"}}>Back</button>&nbsp;&nbsp;
            </div>
        </div>
    )
}
export default Create;