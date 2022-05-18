import React from 'react'
import './App.css';
import Home from './Home';
import About from './About';
import New from './New';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
     <h1>React hgnbkgkj</h1>
     <Router>
       <Routes>
       <Route path = "/new" element = {<About/>}/>
       <Route path = "/about" element = {<About/>}/>
       <Route path = "/" element = {<Home/>}/>
       </Routes>
     </Router>


    </div>
  );
}

export default App;
