import '../App.css';
import React, { Component, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// Import Different Projects 
import QuoteMachine from '../containers/QuoteMachine';
import MarkdownPreviewer from '../containers/MarkdownPreviewer';
import DrumMachine from '../containers/DrumMachine';
import Calculator from '../containers/Calculator';
import Clock from '../containers/Clock';

// const QuoteMachine = React.lazy(() => import('../containers/QuoteMachine'));
// const MarkdownPreviewer = React.lazy(() => import('../containers/MarkdownPreviewer'));
// const DrumMachine = React.lazy(() => import('../containers/DrumMachine'));
// const Calculator = React.lazy(() => import('../containers/Calculator'));
// const Clock = React.lazy(() => import('../containers/Clock'));

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <nav>  
          <ul>
            <li><Link to="/frontendev-freecodecamp/QuoteMachine">Quotes</Link></li>
            <li><Link to="/frontendev-freecodecamp/MarkdownPreviewer">MarkdownPreviewer</Link></li>
            <li><Link to="/frontendev-freecodecamp/DrumMachine">DrumMachine</Link></li>
            <li><Link to="/frontendev-freecodecamp/Calculator">Calculator</Link></li>
            <li><Link to="/frontendev-freecodecamp/Clock">Clock</Link></li>
          </ul>  
        </nav>
        <Routes>
          <Route path="/frontendev-freecodecamp/QuoteMachine" element={<QuoteMachine />}></Route>
          <Route path="/frontendev-freecodecamp/MarkdownPreviewer" element={<MarkdownPreviewer />}></Route>
          <Route path="/frontendev-freecodecamp/DrumMachine" element={<DrumMachine />}></Route>
          <Route path="/frontendev-freecodecamp/Calculator" element={<Calculator />}></Route>
          <Route path="/frontendev-freecodecamp/Clock" element={<Clock />}></Route>
        </Routes>
      </BrowserRouter> 
      

    </div>
  );
}

export default App;
