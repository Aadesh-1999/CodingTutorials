import React from 'react';
import PropTypes from 'prop-types';
import { Link,NavLink } from "react-router-dom";

export const Header = (props) => {
  return (
    <div className="">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow">
        <div className="container-fluid">
          <NavLink className="navbar-brand titleHeader" to="/courses">{props.name}</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/courses">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contacts">Contacts</NavLink>
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
  );
};


Header.defaultProps={
  name:"CodingTutes",
  searchBar:false
}
Header.propTypes ={
  name : PropTypes.string,
  searchBar : PropTypes.bool.isRequired
}