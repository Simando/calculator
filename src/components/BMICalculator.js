import React, { useState } from 'react';
import styled from 'styled-components';

const CalculatorWrapper = styled.div`
width: 300px;
  margin-bottom: 30px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  font-family: 'Roboto', sans-serif;

  h2 {
    margin-top: 0;
  }

  label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
    font-family: 'Roboto', sans-serif;
  }

  input {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 3px;
    margin-bottom: 10px;
    box-sizing: border-box;
  }

  button {
    width: 100%;
    padding: 10px;
    background-color: #4caf50;
    color: #fff;
    border: none;
    border-radius: 3px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    font-family: 'Roboto', sans-serif;

    &:hover {
      background-color: #45a049;
    }
  }

  p {
    margin-top: 10px;
  }
`;

const BMICalculator = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBMI] = useState('');

  const calculateBMI = () => {
    if (weight && height) {
      const bmiValue = (weight / ((height / 100) ** 2)).toFixed(2);
      setBMI(bmiValue);
    }
  };

  return (
    <CalculatorWrapper>
      <h2>BMI Kalkulačka</h2>
      <label>Váha (kg):</label>
      <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} />
      <label>Výška (cm):</label>
      <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} />
      <button onClick={calculateBMI}>Spočítat</button>
      {bmi && <p>Vaše BMI: {bmi}</p>}
    </CalculatorWrapper>
  );
};

export default BMICalculator;
