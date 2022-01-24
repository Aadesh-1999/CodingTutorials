import React from 'react';
import './styles/JavaSidebar.css';
import {
    NavLink, Outlet
} from "react-router-dom";
export const JavaSidebar = () => {

    // const w3_open=()=> {
    //     console.log("Clicked");
    //   document.getElementById("mySidebar").style.display = "block";
    // }

    // const w3_close=()=> {
    //   document.getElementById("mySidebar").style.display = "none";
    // }
    return (
        <div className='container row sidebar'>
            <div className="w3-sidebar py-5 col-2 row w3-bar-block w3-border-right d-flex align-content-top bg-danger" id="mySidebar">
                <ul>
                    <li className='my-5 w3-button'>
                    <NavLink to='/courses/java/intro' className="w3-bar-item ">Intro</NavLink>
                    </li>
                    <li className='my-5 w3-button'>
                    <NavLink to='/courses/java/syntax' className="w3-bar-item " >Syntax</NavLink>
                    </li>
                </ul>
                {/* <button  className="w3-bar-item w3-large">Close &times;</button> */}
            </div>

            <div className="w3-teal col-10">
                {/* <button className="w3-button w3-teal w3-xlarge" >☰</button> */}
                <div className="w3-container">

                    <Outlet />
                </div>
            </div>
        </div>);
};
