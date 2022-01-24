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
import { JavaHome } from './Pages/Courses/java/JavaHome';
import { JavascriptIntro } from './Pages/Courses/javascript/introduction';
import { CplusplusIntro } from './Pages/Courses/cplusplus/introduction';
import { CIntro } from './Pages/Courses/c/introduction';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/courses' exact element={<><CoursesHeader /><Courses /></>} />
          <Route path='/about' exact element={<About />} />
          <Route path='/contacts' exact element={<Contacts />} />
          <Route path='/courses' >
            <Route path='java' element={<><CoursesHeader /><JavaHome /></>}>
              <Route path='intro' element={<JavaIntro />} />
              <Route path='syntax' element={<JavaSyntax />} />
            </Route>
            <Route path='python' element={<><CoursesHeader /><JavaHome /></>}>
              <Route path='intro' element={<PythonIntro />} />
              <Route path='syntax' element={<PythonSyntax />} />
            </Route>
            <Route path='javascript' element={<><CoursesHeader /><JavaHome /></>}>
              <Route path='intro' element={<JavascriptIntro />} />
              {/* <Route path='syntax' element={<PythonSyntax />} /> */}
            </Route>
            <Route path='cplusplus' element={<><CoursesHeader /><JavaHome /></>}>
              <Route path='intro' element={<CplusplusIntro />} />
              {/* <Route path='syntax' element={<PythonSyntax />} /> */}
            </Route>
            <Route path='clang' element={<><CoursesHeader /><JavaHome /></>}>
              <Route path='intro' element={<CIntro />} />
              {/* <Route path='syntax' element={<PythonSyntax />} /> */}
            </Route>
          </Route>
          <Route path='/' exact element={<><CoursesHeader /><Courses /></>} />
          <Route path='*' exact element={<><h1>404 Page Not Found</h1></>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
