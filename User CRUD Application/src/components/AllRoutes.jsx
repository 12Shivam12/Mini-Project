import React from "react";
import User from "./User";
import Help from "./Help";
import Contact from "./Contact";
import Details from "./Details";
import Edit from "./Edit";
import Create from "./Create";
import { Route, Routes } from "react-router-dom";
function AllRoutes() {
    return (
        <div>
            <Routes>
                <Route path="/help/" element={<Help/>}/>
                <Route path="/contact/" element={<Contact/>}/>
                <Route path="/user" element={<User />} />
                {/* <Route path="/deleteuser/:id" element={<Delete/>}/> */}
                <Route path="/user/edit/:id" element={<Edit/>}/>
                <Route path='/userdetails/:id' element={<Details/>}/>
                <Route path="/user/create/" element={<Create/>}/>
            </Routes>
        </div>
    )
}
export default AllRoutes;