import React, { useState } from 'react';
import styled from 'styled-components';

const CalculatorWrapper = styled.div`
  width: 400px;
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
    font-family: 'Roboto', sans-serif;
  }

  button {
    width: 100%;
    padding: 10px;
    margin-top: 15px;
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

const GradeInputWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  input {
    width: 50px;
  }
`;

const AverageValueCalculator = () => {
  const [grades, setGrades] = useState([]);
  const [weights, setWeights] = useState([]);
  const [average, setAverage] = useState('');

  const handleGradeChange = (index, value) => {
    const updatedGrades = [...grades];
    updatedGrades[index] = parseFloat(value);
    setGrades(updatedGrades);
  };

  const handleWeightChange = (index, value) => {
    const updatedWeights = [...weights];
    updatedWeights[index] = parseFloat(value);
    setWeights(updatedWeights);
  };

  const addInputField = () => {
    setGrades([...grades, 0]);
    setWeights([...weights, 1]);
  };

  const removeInputField = (index) => {
    const updatedGrades = [...grades];
    updatedGrades.splice(index, 1);
    setGrades(updatedGrades);

    const updatedWeights = [...weights];
    updatedWeights.splice(index, 1);
    setWeights(updatedWeights);
  };

  const calculateAverage = () => {
    const totalWeight = weights.reduce((acc, weight) => acc + weight, 0);
    const weightedSum = grades.reduce(
      (acc, grade, index) => acc + grade * (weights[index] || 0),
      0
    );

    const averageValue = (weightedSum / totalWeight).toFixed(2);
    setAverage(averageValue);
  };

  return (
    <CalculatorWrapper>
      <h2>Výpočet Aritmetického Průměru</h2>
      {grades.map((grade, index) => (
        <GradeInputWrapper key={index}>
          <label>Číslo {index + 1}:</label>
          <input
            type="number"
            value={grade}
            onChange={(e) => handleGradeChange(index, e.target.value)}
          />
          <label>Váha:</label>
          <input
            type="number"
            value={weights[index] || ''}
            onChange={(e) => handleWeightChange(index, e.target.value)}
          />
          <button onClick={() => removeInputField(index)}>Odstranit</button>
        </GradeInputWrapper>
      ))}
      <button onClick={addInputField}>Přidat číslo</button>
      <button onClick={calculateAverage}>Spočítej</button>
      {average && <p>Average: {average}</p>}
    </CalculatorWrapper>
  );
};

export default AverageValueCalculator;
