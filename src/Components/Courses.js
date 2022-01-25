import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles/Courses.css';

export const Courses = () => {
  return (
    <div className='coursesElement'>
      <div className='px-5 py-4 text-start content'>
        <h3>Welcome to Coding Tutes</h3>
        <h5>Happy Learning!!</h5>
        <hr />
        <h5>You Can Follow Me on <a href="https://www.twitter.com/aadesh_codes">Twitter</a> </h5>
        {/* <Route path='/courses/:id' exact element={<JavaIntro/>} /> */}
      </div>
      <div className="row m-5 d-flex justify-content-center">
        <div className="col-12 m-5">
          <h2 id="projectby" className='display-3'>Offered Courses</h2>
        </div>
        <div className="col-12 col-sm-6 col-md">
          <NavLink className="nav-link" to="/courses/c/intro">
            <div className="card">
              <img src={require('../images/clogo.png')} alt="C Language" className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">C Language</h5>
              </div>
            </div>
          </NavLink>
        </div>
        <div className="col-12 col-sm-6 col-md">
          <NavLink className="nav-link" to="/courses/cplusplus/intro">
            <div className="card">
              <img src={require('../images/cpluspluslogo.png')} alt="C++" className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">C++</h5>
              </div>
            </div></NavLink>
        </div>
        <div className="col-12 col-sm-6 col-md">
          <NavLink className="nav-link" to="/courses/java/intro">
            <div className="card">
              <img src={require('../images/javalogo.png')} alt="Java" className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">Java</h5>
              </div>
            </div></NavLink>
        </div>
        <div className="col-12 col-sm-6 col-md">
          <NavLink className="nav-link" to="/courses/python/intro">
            <div className="card">
              <img src={require('../images/pythonlogo.png')} alt="Python" className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">Python</h5>
              </div>
            </div></NavLink>
        </div>
        <div className="col-12 col-sm-6 col-md">
          <NavLink className="nav-link" to="/courses/javascript/intro">
            <div className="card">
              <img src={require('../images/javascriptlogo.png')} alt="JavaScript" className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">JavaScript</h5>
              </div>
            </div></NavLink>
        </div>
      </div>
    </div>

  );
};
