import React from 'react';
import '../style/NavBar.css';

const Home: React.FC = () => {
  return (
    <div>
      <h1>Welcome to Easy Drafter 2.0</h1>
      <p>Please select which block you would like to draft:</p>
      {/* TODO: add images of pattern blocks that navigate users to the beginning stages of block creation */}
    </div>
  );
};

export default Home;
