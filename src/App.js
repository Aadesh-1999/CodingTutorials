import './App.css';
import React from 'react';
import { Header } from './Components/Header';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { Footer } from './Components/Footer';
// import { CoursesHeader } from './Components/CoursesHeader';
import { About } from './Pages/About';
import { Contacts } from './Pages/Contacts';
import { Courses } from './Components/Courses';
import { JavaIntro } from './Pages/Courses/java/introduction';
import { PythonIntro } from './Pages/Courses/python/introduction';
import { PythonSyntax } from './Pages/Courses/python/syntax';
import { JavaSyntax } from './Pages/Courses/java/syntax';
import { JavascriptIntro } from './Pages/Courses/javascript/introduction';
import { JavascriptSyntax } from './Pages/Courses/javascript/syntax';
import { CplusplusIntro } from './Pages/Courses/cplusplus/introduction';
import { CplusplusSyntax } from './Pages/Courses/cplusplus/syntax';
import { CIntro } from './Pages/Courses/c/introduction';
import { CSyntax } from './Pages/Courses/c/syntax';
import { Sidebar } from './Components/Sidebar';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
        <Route path='/' exact element={<><Courses /></>} />
          <Route path='/courses' exact element={<><Courses /></>} />
          <Route path='/about' exact element={<About />} />
          <Route path='/contacts' exact element={<Contacts />} />
          <Route path='/courses' >
            <Route path='java' element={<><Sidebar name="java"/></>}>
              <Route path='intro' element={<JavaIntro />} />
              <Route path='syntax' element={<JavaSyntax />} />
            </Route>
            <Route path='python' element={<><Sidebar name="python"/></>}>
              <Route path='intro' element={<PythonIntro />} />
              <Route path='syntax' element={<PythonSyntax />} />
            </Route>
            <Route path='javascript' element={<><Sidebar name="javascript"/></>}>
              <Route path='intro' element={<JavascriptIntro />} />
              <Route path='syntax' element={<JavascriptSyntax />} />
            </Route>
            <Route path='cplusplus' element={<><Sidebar name="cplusplus"/></>}>
              <Route path='intro' element={<CplusplusIntro />} />
              <Route path='syntax' element={<CplusplusSyntax />} />
            </Route>
            <Route path='c' element={<><Sidebar name="c"/></>}>
              <Route path='intro' element={<CIntro />} />
              <Route path='syntax' element={<CSyntax/> } />
            </Route>
          </Route>
          
          <Route path='*' exact element={<><h1>404 Page Not Found</h1></>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
