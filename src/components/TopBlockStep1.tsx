import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const TopBlockStep1: React.FC = () => {
  const [bust, setBust] = useState('');
  const [waist, setWaist] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(
      `/top/draft?bust=${encodeURIComponent(bust)}&waist=${encodeURIComponent(waist)}`
    );
  };

  return (
    <div>
      <h2>Enter Your Measurements</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="bust" style={{ marginRight: '0.5rem' }}>
            Bust:
          </label>
          <input
            type="number"
            id="bust"
            name="bust"
            required
            value={bust}
            onChange={(e) => setBust(e.target.value)}
          />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="waist" style={{ marginRight: '0.5rem' }}>
            Waist:
          </label>
          <input
            type="number"
            id="waist"
            name="waist"
            required
            value={waist}
            onChange={(e) => setWaist(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default TopBlockStep1;
