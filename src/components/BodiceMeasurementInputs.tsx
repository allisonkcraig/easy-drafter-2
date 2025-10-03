import React, { useEffect } from 'react';
import '../style/BodiceMeasurementInputs.css';

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

const BodiceMeasurementInputs: React.FC = () => {
  const [measures, setMeasures] = React.useState(initialState);

  useEffect(() => {
    // TODO: on mount choose from base measurements to populate inputs
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setMeasures((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: pass measurements up to be used in drafter
    console.log([measures]);
  };

  return (
    <div>
      <form id="BodiceMeasurementInputs-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="fullLength">Full Length</label>
          <input
            type="number"
            step="0.01"
            name="fullLength"
            placeholder="Full Length"
            value={measures.fullLength}
            onChange={handleChange}
            min="1"
          />
        </div>

        <div>
          <label htmlFor="centerFront">Center Front</label>
          <input
            type="number"
            step="0.01"
            name="centerFront"
            placeholder="Center Front"
            value={measures.centerFront}
            onChange={handleChange}
            min="1"
          />
        </div>

        <div>
          <label htmlFor="frontShoulderSlope">Shoulder Slope</label>
          <input
            type="number"
            step="0.01"
            name="frontShoulderSlope"
            placeholder="Shoulder Slope"
            value={measures.frontShoulderSlope}
            onChange={handleChange}
            min="1"
          />
        </div>

        <div>
          <label htmlFor="strap">Strap</label>
          <input
            type="number"
            step="0.01"
            name="strap"
            placeholder="Strap"
            value={measures.strap}
            onChange={handleChange}
            min="1"
          />
        </div>

        <div>
          <label htmlFor="frontAcrossShoulder">Across Shoulder</label>
          <input
            type="number"
            step="0.01"
            name="frontAcrossShoulder"
            placeholder="Across Shoulder"
            value={measures.frontAcrossShoulder}
            onChange={handleChange}
            min="1"
          />
        </div>

        <div>
          <label htmlFor="acrossChest">Across Chest</label>
          <input
            type="number"
            step="0.01"
            name="acrossChest"
            placeholder="Across Chest"
            value={measures.acrossChest}
            onChange={handleChange}
            min="1"
          />
        </div>

        <div>
          <label htmlFor="bustDepth">Bust Depth</label>
          <input
            type="number"
            step="0.01"
            name="bustDepth"
            placeholder="Bust Depth"
            value={measures.bustDepth}
            onChange={handleChange}
            min="1"
          />
        </div>

        <div>
          <label htmlFor="shoulderLength">Shoulder Length</label>
          <input
            type="number"
            step="0.01"
            name="shoulderLength"
            placeholder="Shoulder Length"
            value={measures.shoulderLength}
            onChange={handleChange}
            min="1"
          />
        </div>

        <div>
          <label htmlFor="bustArc">Bust Arc</label>
          <input
            type="number"
            step="0.01"
            name="bustArc"
            placeholder="Bust Arc"
            value={measures.bustArc}
            onChange={handleChange}
            min="1"
          />
        </div>

        <div>
          <label htmlFor="bustSpan">Bust Span</label>
          <input
            type="number"
            step="0.01"
            name="bustSpan"
            placeholder="Bust Span"
            value={measures.bustSpan}
            onChange={handleChange}
            min="1"
          />
        </div>

        <div>
          <label htmlFor="waistArc">Waist Arc</label>
          <input
            type="number"
            step="0.01"
            name="waistArc"
            placeholder="Waist Arc"
            value={measures.waistArc}
            onChange={handleChange}
            min="1"
          />
        </div>

        <div>
          <label htmlFor="dartPlacement">Dart Placement</label>
          <input
            type="number"
            step="0.01"
            name="dartPlacement"
            placeholder="Dart Placement"
            value={measures.dartPlacement}
            onChange={handleChange}
            min="1"
          />
        </div>

        <div>
          <label htmlFor="sideLength">Side Length</label>
          <input
            type="number"
            step="0.01"
            name="sideLength"
            placeholder="Side Length"
            value={measures.sideLength}
            onChange={handleChange}
            min="1"
          />
        </div>

        <div>
          <button type="submit">NEXT</button>
        </div>
      </form>
    </div>
  );
};

export default BodiceMeasurementInputs;
