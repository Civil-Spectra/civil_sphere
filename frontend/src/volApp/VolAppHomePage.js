import React, { useState } from 'react';

// import './styles.css'; // Import the CSS file

const VolumeCalculator = () => {
  const [dimensions, setDimensions] = useState({ length: 0, breadth: 0, height: 0 });
  const [volume, setVolume] = useState(null);

  const handleChange = (e) => {
    setDimensions({ ...dimensions, [e.target.name]: e.target.value });
  };

  const calculateVolume = async () => {
    const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/volmain/calculate_volume/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(dimensions),
    });
    if (response.ok) {
      const result = await response.json();
      setVolume(result.volume);
    }
  };

  return (
    <div className="volume-calculator">  {/* Add class name for styling */}
      <h2>Volume Calculator</h2>  {/* Add heading */}
      <p>Calculate the volume of a box by entering its dimensions.</p>  {/* Add description */}
      <div className="input-container">  {/* Wrap inputs in a container */}
        <label htmlFor="length">Length:</label>
        <input type="number" id="length" name="length" placeholder="Length" onChange={handleChange} />
      </div>
      <div className="input-container">
        <label htmlFor="breadth">Breadth:</label>
        <input type="number" id="breadth" name="breadth" placeholder="Breadth" onChange={handleChange} />
      </div>
      <div className="input-container">
        <label htmlFor="height">Height:</label>
        <input type="number" id="height" name="height" placeholder="Height" onChange={handleChange} />
      </div>
      <button onClick={calculateVolume}>Calculate</button>
      {volume !== null && <div>Volume: {volume}</div>}
    </div>
  );
};

export default VolumeCalculator;
