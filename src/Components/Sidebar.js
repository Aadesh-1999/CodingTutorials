import React from 'react';
import './styles/Sidebar.css';
import {
    NavLink, Outlet
} from "react-router-dom";
import PropTypes from 'prop-types';
export const Sidebar = (props) => {

    return (
        <div className='container row sidebar'>
            <div className="w3-sidebar py-5 col-4 row w3-bar-block w3-border-right d-flex align-content-top bg-danger" id="mySidebar">
                <ul>
                    <li className='my-5 w3-button'>
                    <NavLink to={'/courses/'+props.name+'/intro'} className="w3-bar-item ">Intro</NavLink>
                    </li>
                    <li className='my-5 w3-button'>
                    <NavLink to={'/courses/'+props.name+'/syntax'} className="w3-bar-item " >Syntax</NavLink>
                    </li>
                </ul>
                {/* <button  className="w3-bar-item w3-large">Close &times;</button> */}
            </div>

            <div className="w3-teal col-8">
                {/* <button className="w3-button w3-teal w3-xlarge" >☰</button> */}
                <div className="w3-container">
                    <Outlet />
                </div>
            </div>
        </div>);
};
Sidebar.defaultProps = {
    name: "java"
}
Sidebar.propTypes = {
    name: PropTypes.string
}
