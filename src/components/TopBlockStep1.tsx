import React from 'react';

const TopBlockStep1: React.FC = () => {
  return (
    <div>
      <h2>Enter Your Measurements</h2>
      <p>This will determine the base measurements used in the next step.</p>
      <form>
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="bust" style={{ marginRight: '0.5rem' }}>
            Bust:
          </label>
          <input type="number" id="bust" name="bust" required />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="waist" style={{ marginRight: '0.5rem' }}>
            Waist:
          </label>
          <input type="number" id="waist" name="waist" required />
        </div>
        {/* TODO: on submit move to next step */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default TopBlockStep1;
