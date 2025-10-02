import React from 'react';
import '../style/App.css';
import NavBar from './NavBar';
import Home from './Home';
import TopBlockStep1 from './TopBlockStep1';
import TopBlockStep2 from './TopBlockStep2';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="App-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/top" element={<TopBlockStep1 />} />
            <Route path="/top/draft" element={<TopBlockStep2 />} />
            {/* Add more routes here as needed */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
