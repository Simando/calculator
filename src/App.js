import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Calculators from './components/Calculators';
import Calendar from './components/Calendar';
import DaysAndWeeks from './components/DaysAndWeeks';

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
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/calculators" element={<Calculators />} />
          <Route path="/daysAndWeeks" element={<DaysAndWeeks />} />
        </Routes>
        <AppWrapper>
          <Calendar />
        </AppWrapper>
      </Router>
    </>
  );
};

export default App;
