import React, { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import './Edit.css'
function Edit() {

    useEffect(() => { getData(id) }, [])

    const navigate = useNavigate();

    const [first_name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [image, setImage] = useState("");
    const BackToUser = () => {
        Navigate("/user");
    }

    var userData = {}
    const handleSubmit = () => {
        // e.preventDefault();
         userData = {first_name,email,image}
        console.log(userData)
        UpdateData();
    }

    const UpdateData = async() =>{
        const response = await fetch(`http://localhost:3000/posts/${id}`,{
            method:"PUT",
            headers:{"content-type":"application/json"},
            body:JSON.stringify(userData)
        })
        const data = await response.json();
        alert("Edit Succesfully");
        navigate('/user')

    }

    const getData = async (id) => {
        const response = await fetch(`http://localhost:3000/posts/${id}`)
        const data = await response.json();
        // console.log(data.first_name);
        setName(data.first_name)
        setEmail(data.email)
        setImage(data.image)
    }
    const { id } = useParams();
    return (
        <div className="ParentDivNewuser">
            <div><h2>Enter New User Details</h2></div>
            <div className="ChildDiv">
                <input value={first_name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Enter Your Name" />
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter Your E-mail" />
                <input value={image} onChange={(e) => setImage(e.target.value)} type="url" placeholder="Enter Image URL" />
            </div>
            <div className="ButtonDiv">
                <button onClick={handleSubmit} style={{ backgroundColor: "green", }}>Save</button>&nbsp;&nbsp;
                <button onClick={BackToUser} style={{ backgroundColor: "red" }}>Back</button>&nbsp;&nbsp;
            </div>
        </div>
    )
}
export default Edit;