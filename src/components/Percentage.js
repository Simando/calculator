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

    &:hover {
      background-color: #45a049;
    }
  }

  p {
    margin-top: 10px;
  }
`;

const PercentageCalculator = () => {
  const [value, setValue] = useState('');
  const [percentage, setPercentage] = useState('');
  const [result, setResult] = useState('');

  const calculatePercentage = () => {
    if (value && percentage) {
      const resultValue = (value * (percentage / 100)).toFixed(2);
      setResult(resultValue);
    }
  };

  return (
    <CalculatorWrapper>
      <h2>Kolik je X% z Y </h2>
      <label>Y:</label>
      <input type="number" value={value} onChange={(e) => setValue(e.target.value)} />
      <label>%X:</label>
      <input type="number" value={percentage} onChange={(e) => setPercentage(e.target.value)} />
      <button onClick={calculatePercentage}>Spočítej</button>
      {result && <p>{percentage}% z {value} je {result}</p>}
    </CalculatorWrapper>
  );
};

export default PercentageCalculator;
