import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from "react-router-dom";
export const CoursesHeader = (props) => {
    return (
        <div className='sticky-top'>
            <div className="courseHeader mb-3">
                <nav className="navbar navbar-expand-lg navbar-light bg-light shadow">
                    <div className="container-fluid">
                        <NavLink className="navbar-brand titleHeader" to="/courses">{props.name}</NavLink>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent1" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent1">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <NavLink className="nav-link px-5" aria-current="page" to="/courses/java">Java</NavLink>
                                </li>
                                <li className="nav-item px-5">
                                    <NavLink className="nav-link" to="/courses/python">Python</NavLink>
                                </li>
                                <li className="nav-item px-5">
                                    <NavLink className="nav-link" to="/courses/javascript">JavaScript</NavLink>
                                </li>
                                <li className="nav-item px-5">
                                    <NavLink className="nav-link" to="/courses/cplusplus">C++</NavLink>
                                </li>
                                <li className="nav-item px-5">
                                    <NavLink className="nav-link" to="/courses/clang">C</NavLink>
                                </li>
                            </ul>
                            {props.searchBar ?
                                <form className="d-flex">
                                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                    <button className="btn btn-outline-success" type="submit">Search</button>
                                </form> : ""}
                        </div>
                    </div>
                </nav>
            </div>
        </div>);
};
CoursesHeader.defaultProps = {
    name: "Courses",
    searchBar: false
}
CoursesHeader.propTypes = {
    name: PropTypes.string,
    searchBar: PropTypes.bool.isRequired
}