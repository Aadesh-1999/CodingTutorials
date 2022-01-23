import './App.css';
import React from 'react';
import { Header } from './Components/Header';


import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { Footer } from './Components/Footer';
// import { Main } from './Components/Main';
import { CoursesHeader } from './Components/CoursesHeader';
import { About } from './Pages/About';
import { Contacts } from './Pages/Contacts';
import { Courses } from './Components/Courses';
import { JavaIntro } from './Pages/Courses/java/introduction';
import { PythonIntro } from './Pages/Courses/python/introduction';
import { PythonSyntax } from './Pages/Courses/python/syntax';
import { JavaSyntax } from './Pages/Courses/java/syntax';
import { JavascriptIntro } from './Pages/Courses/javascript/introduction';
import { CplusplusIntro } from './Pages/Courses/cplusplus/introduction';
import { CIntro } from './Pages/Courses/c/introduction';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/courses' exact element={<><CoursesHeader/><Courses /></>} />
          <Route path='/about' exact element={<About />} />
          <Route path='/contacts' exact element={<Contacts />} />
          <Route path='/courses' >
            <Route path='java' element={<><CoursesHeader/><JavaIntro/><JavaSyntax/> </>}/>
            <Route path='python' element={<><CoursesHeader/><PythonIntro/><PythonSyntax/></>}/>
            <Route path='javascript' element={<><CoursesHeader/><JavascriptIntro/></>}/>
            <Route path='cplusplus' element={<><CoursesHeader/><CplusplusIntro/> </>}/>
            <Route path='clang' element={<><CoursesHeader/><CIntro/></>}/>
          </Route>
          <Route path='/' exact element={<><CoursesHeader/><Courses /></>} />
          <Route path='*' exact element={<><h1>404 Page Not Found</h1></>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
