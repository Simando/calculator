import React from 'react';
import styled from 'styled-components';
import BMICalculator from './BMICalculator';
import AverageValueCalculator from './AverageValueCalculator';
import PercentageCalculator from './PercentageCalculator';
import Percentage from './Percentage';
import Calculator from './Calculator';
import PrimeNumbers from './PrimeNumbers';

const AppWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  font-family: 'Roboto', sans-serif;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }

  @media (min-width: 769px) {
    & > * {
      flex-basis: calc(25% - 40px);
    }
  }
`;

const App = () => {
  return (
    <AppWrapper>
      <BMICalculator />
      <AverageValueCalculator />
      <PercentageCalculator />
      <Percentage />
      <Calculator />
      <PrimeNumbers />
    </AppWrapper>
  );
};

export default App;
