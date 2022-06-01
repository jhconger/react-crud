import React from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
    Outlet,
} from "react-router-dom";
import Navbar from './Navbar'
import Users from './Users'
import UserCreate from './UserCreate'
import UserUpdate from "./UserUpdate";

export default function App() {
    return (
        <BrowserRouter>
            <div>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Users/>} />
                    <Route path='/create' element={<UserCreate/>} />
                    <Route exact path='/update/:id' element={<UserUpdate/>} />
                </Routes>
            </div>
        </BrowserRouter>

    );
}