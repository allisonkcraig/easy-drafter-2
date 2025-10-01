import React, { useState } from 'react';
import '../style/Home.css';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const [hover, setHover] = useState(false);
  return (
    <div>
      <h1>Welcome to Easy Drafter 2.0</h1>
      <p>Please select which block you would like to draft:</p>
      <Link to="/top">
        <img
          className="Home-block"
          src={hover ? 'top-p.png' : 'top.png'}
          alt="image of a pattern block for a blouse"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        />
      </Link>
      {/* TODO: add image of skirt pattern blocks that navigate users to the beginning stages of block creation */}
    </div>
  );
};

export default Home;
