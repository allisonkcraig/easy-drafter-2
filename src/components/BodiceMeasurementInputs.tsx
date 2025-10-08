import React, { useEffect } from 'react';
import '../style/BodiceMeasurementInputs.css';

type Measures = {
  fullLength: string;
  centerFront: string;
  frontShoulderSlope: string;
  strap: string;
  frontAcrossShoulder: string;
  acrossChest: string;
  bustDepth: string;
  shoulderLength: string;
  bustArc: string;
  bustSpan: string;
  waistArc: string;
  dartPlacement: string;
  sideLength: string;
};

const initialState: Measures = {
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

type BodiceMeasurementInputsProps = {
  setMeasures: (measures: Measures) => void;
};

const BodiceMeasurementInputs: React.FC<BodiceMeasurementInputsProps> = ({
  setMeasures,
}) => {
  const [inputs, setInputs] = React.useState(initialState);

  useEffect(() => {
    // TODO: on mount choose from base measurements to populate inputs
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setMeasures(inputs);
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
            value={inputs.fullLength}
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
            value={inputs.centerFront}
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
            value={inputs.frontShoulderSlope}
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
            value={inputs.strap}
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
            value={inputs.frontAcrossShoulder}
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
            value={inputs.acrossChest}
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
            value={inputs.bustDepth}
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
            value={inputs.shoulderLength}
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
            value={inputs.bustArc}
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
            value={inputs.bustSpan}
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
            value={inputs.waistArc}
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
            value={inputs.dartPlacement}
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
            value={inputs.sideLength}
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
