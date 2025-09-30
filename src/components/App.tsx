import React, { useState } from 'react';
import '../style/App.css';
import NavBar from './NavBar';
import Home from './Home';

function App() {
  // this will eventually be used to track which view the user is on
  const [currentView, setCurrentView] = useState('home');

  return (
    <div className="App">
      <NavBar />
      <div className="App-content">{currentView === 'home' && <Home />}</div>
    </div>
  );
}
export default App;
