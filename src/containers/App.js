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
            <li><Link to="/QuoteMachine">Quotes</Link></li>
            <li><Link to="/MarkdownPreviewer">MarkdownPreviewer</Link></li>
            <li><Link to="/DrumMachine">DrumMachine</Link></li>
            <li><Link to="/Calculator">Calculator</Link></li>
            <li><Link to="/Clock">Clock</Link></li>
          </ul>  
        </nav>
        <Routes>
          <Route path="/QuoteMachine" element={<QuoteMachine />}></Route>
          <Route path="/MarkdownPreviewer" element={<MarkdownPreviewer />}></Route>
          <Route path="/DrumMachine" element={<DrumMachine />}></Route>
          <Route path="/Calculator" element={<Calculator />}></Route>
          <Route path="/Clock" element={<Clock />}></Route>
        </Routes>
      </BrowserRouter> 
      

    </div>
  );
}

export default App;
