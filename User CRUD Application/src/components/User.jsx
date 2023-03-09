import React from "react";
import { useEffect } from "react";
import { useState } from "react"
import Pagination from "./Pagination";
import '../user.css'
import { GoTrashcan } from "react-icons/go";
import { BiShow } from "react-icons/bi";
import { FiEdit } from "react-icons/fi";
import { NavLink, useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
function User() {
    const [state, setState] = useState([]);
    const [currentPage, setCurrentPage] = useState(2);
    const [postsPerPage, setPostsPerPage] = useState(10);

    const navigate = useNavigate();

    useEffect(() => { getData() }, [])

    const getData = async () => {
        const response = await fetch('http://localhost:3000/posts')
        const data = await response.json();
        console.log(data);
        setState(data)
    }

    const EditFunction = (id) => {
        navigate("/user/edit/" + id);
    }

    const DeleteFunction = async (id) => {
        if (window.confirm("Do you want to remove this item..?") == true) {
            const response = await fetch(`http://localhost:3000/posts/${id}`, {
                method: "DELETE"
            })
            const data = await response.json();
            window.location.reload();
        }
    }

    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage
    const currentPosts = state.slice(firstPostIndex, lastPostIndex)

    return (
        <div>
            <div><NavLink to={'/user/create/'} className="AddNewUser">Add New User</NavLink></div>
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>S.No</th>
                            <th>IMAGE</th>
                            <th>NAME</th>
                            <th>E-MAIL</th>
                            <th>ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            currentPosts.map((ele, i) => {
                                return (
                                    <tr key={i}>
                                        <td>{ele.id}</td>
                                        <td><img src={ele.image} width='70px' height='70px' /></td>
                                        <td>{ele.first_name}</td>
                                        <td>{ele.email}</td>
                                        <td>
                                            <div>
                                                <button className="GoTrashcan" type="button" style={{ alignSelf: "flex-start",color:"white" }} onClick={() => { DeleteFunction(ele.id) }}>Delete</button>

                                                <NavLink className="BiShow" style={{ alignSelf: "flex-start",color:"white" }} to={`/userdetails/${ele.id}`}>Details</NavLink>

                                                <button style={{ alignSelf: "flex-start" ,color:"white"}} className="FiEdit " type="button" onClick={() => { EditFunction(ele.id) }}>Edit</button>

                                            </div>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
                <Pagination
                    totalPosts={state.length}
                    postsPerPage={postsPerPage}
                    setCurrentPage={setCurrentPage}
                // currentPage={currentPage}
                />
            </div>
        </div>
    )
}
export default User;