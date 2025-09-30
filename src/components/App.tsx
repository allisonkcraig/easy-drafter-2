import React, { useState } from 'react';
import '../style/App.css';
import NavBar from './NavBar';
import Home from './Home';

function App() {
  const [currentView, setCurrentView] = useState('home');

  return (
    <body className="App">
      <NavBar />
      <div className="App-content">{currentView === 'home' && <Home />}</div>
    </body>
  );
}
export default App;
