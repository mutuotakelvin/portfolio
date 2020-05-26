import React from 'react';
import Home from '../src/contents/Home';
import About from '../src/contents/About';
import Education from './contents/Education';
import Skills from './contents/Skills';
import Contact from './contents/Contact';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import Navbar from './components/Navbar';
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route path="/education">
          <Education />
        </Route>
        <Route path="/skills">
          <Skills />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </div>
    </Router>
  )
}
export default App;