import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import '../style/TopBlockStep2.css';
import BodiceDrafter from './BodiceDrafter';
import BodiceMeasurementInputs from './BodiceMeasurementInputs';

const initialState = {
  fullLength: 0,
  centerFront: 0,
  frontShoulderSlope: 0,
  strap: 0,
  frontAcrossShoulder: 0,
  acrossChest: 0,
  bustDepth: 0,
  shoulderLength: 0,
  bustArc: 0,
  bustSpan: 0,
  waistArc: 0,
  dartPlacement: 0,
  sideLength: 0,
};

const TopBlockStep2: React.FC = () => {
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const bust = params.get('bust');
  const waist = params.get('waist');
  const [measures, setMeasures] = React.useState(initialState);

  return (
    <div>
      <h2>Top Block Draft</h2>
      <div>
        <strong>Bust:</strong> {bust || 'N/A'}
      </div>
      <div>
        <strong>Waist:</strong> {waist || 'N/A'}
      </div>
      <div className="TopBlockStep2-container">
        <BodiceDrafter measures={measures} />
        <BodiceMeasurementInputs setMeasures={setMeasures} />
      </div>
    </div>
  );
};

export default TopBlockStep2;
