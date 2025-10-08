import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import '../style/TopBlockStep2.css';
import BodiceDrafter from './BodiceDrafter';
import BodiceMeasurementInputs from './BodiceMeasurementInputs';

const initialState = {
  fullLength: '',
  centerFront: '',
  frontShoulderSlope: '',
  strap: '',
  frontAcrossShoulder: '',
  acrossChest: '',
  bustDepth: '',
  shoulderLength: '',
  bustArc: '',
  bustSpan: '',
  waistArc: '',
  dartPlacement: '',
  sideLength: '',
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
        <BodiceDrafter />
        <BodiceMeasurementInputs setMeasures={setMeasures} />
      </div>
    </div>
  );
};

export default TopBlockStep2;
