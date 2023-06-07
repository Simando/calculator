import React, { useState } from 'react';
import styled from 'styled-components';

const PrimeNumberWrapper = styled.div`
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

  .input-container {
    display: flex;
    gap: 10px;
    margin-bottom: 10px;
  }

  .input-container input {
    flex-grow: 1;
    padding: 5px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 3px;
  }

  .button-container {
    display: flex;
    justify-content: center;
  }

  button {
    padding: 8px 16px;
    background-color: #4caf50;
    color: #fff;
    border: none;
    border-radius: 3px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #45a049;
    }
  }

  .result {
    margin-top: 10px;
    font-size: 18px;
    text-align: center;
  }
`;

const PrimeNumberCalculator = () => {
  const [number, setNumber] = useState('');
  const [result, setResult] = useState('');

  const handleInputChange = (event) => {
    setNumber(event.target.value);
  };

  const handleCalculateClick = () => {
    const num = parseInt(number);

    if (isNaN(num) || num <= 1) {
      setResult('Neplatný vstup. zadejte číslo větší než 1.');
    } else if (isPrime(num)) {
      setResult(`${num} je prvočíslo`);
    } else {
      setResult(`${num} není prvočíslo`);
    }
  };

  const isPrime = (num) => {
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  };

  return (
    <PrimeNumberWrapper>
      <h2>Ověřovač Prvočísel</h2>
      <div className="input-container">
        <input
          type="number"
          value={number}
          onChange={handleInputChange}
          placeholder="Zadej číslo"
        />
      </div>
      <div className="button-container">
        <button onClick={handleCalculateClick}>Spočítej</button>
      </div>
      <div className="result">{result}</div>
    </PrimeNumberWrapper>
  );
};

export default PrimeNumberCalculator;
