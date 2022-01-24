import React from 'react';
import './styles/Courses.css'
export const Courses = () => {
  return (
  <div className='coursesElement'>
  <div className='p-5 text-start content'>
      <h3>Welcome to Coding Tutes</h3>
      <h4>You can select your course from navbar</h4>
      <h5>Happy Learning!!</h5>
      <br /><br /><hr />
      <h5>You Can Follow Me on <a href="https://www.twitter.com/aadesh_codes">Twitter</a> </h5>
      {/* <Route path='/courses/:id' exact element={<JavaIntro/>} /> */}
  </div>
  </div>
  );
};
