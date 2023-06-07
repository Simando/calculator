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

  .display {
    width: 100%;
    height: 60px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 3px;
    margin-bottom: 10px;
    box-sizing: border-box;
    text-align: right;
    font-size: 20px;
  }

  .number-pad {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;

  }

  .number-pad button {
    width: 100%;
    height: 50px;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 3px;
    cursor: pointer;
    font-size: 18px;
    transition: background-color 0.3s ease;
    font-family: 'Roboto', sans-serif;

    &:hover {
      background-color: #f5f5f5;
    }
  }

  .operations {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    gap: 10px;
    font-family: 'Roboto', sans-serif;
  }

  .operations button {
    flex-grow: 1;
    height: 40px;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 3px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s ease;
    font-family: 'Roboto', sans-serif;

    &:hover {
      background-color: #f5f5f5;
    }
  }

  .equals {
    background-color: #4caf50;
    color: #fff;
    height: 40px;
    width: 80px;
    padding: 10px;
    margin: 10px;
    border: 1px solid #ccc;
    border-radius: 3px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s ease;
    font-family: 'Roboto', sans-serif;


    &:hover {
      background-color: #45a049;
    }
  }
  

  .clear {
    background-color: #ff0000;
    color: #fff;
    height: 40px;
    width: 80px;
    padding: 10px;
    margin: 10px;
    margin-left: -0px;
    border: 1px solid #ccc;
    border-radius: 3px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s ease;
    font-family: 'Roboto', sans-serif;


    &:hover {
      background-color: #dd0000;
    }
  }
  .history {
    margin-top: 20px;
    font-size: 14px;
  }

  .clear-history {
    margin-top: 10px;

    button {
        background-color: #ff0000;
        color: #fff;
        height: 60px;
        width: 80px;
        padding: 10px;
        margin: 10px;
        margin-left: -0px;
        border: 1px solid #ccc;
        border-radius: 3px;
        cursor: pointer;
        font-size: 16px;
        transition: background-color 0.3s ease;
        font-family: 'Roboto', sans-serif;

      &:hover {
        background-color: #f5f5f5;
      }
    }
  }
`;

const Calculator = () => {
  const [displayValue, setDisplayValue] = useState('');
  const [currentValue, setCurrentValue] = useState('');
  const [operator, setOperator] = useState('');
  const [history, setHistory] = useState([]);

  const handleNumberClick = (number) => {
    setDisplayValue((prevValue) => prevValue + number);
  };

  const handleOperatorClick = (operator) => {
    setCurrentValue(displayValue);
    setOperator(operator);
    setDisplayValue('');
  };

  const handleEqualsClick = () => {
    const value1 = parseFloat(currentValue);
    const value2 = parseFloat(displayValue);

    let result;
    switch (operator) {
      case '+':
        result = value1 + value2;
        break;
      case '-':
        result = value1 - value2;
        break;
      case '*':
        result = value1 * value2;
        break;
      case '/':
        result = value1 / value2;
        break;
      default:
        result = '';
    }

    setDisplayValue(result.toString());
    setCurrentValue('');
    setOperator('');
    setHistory((prevHistory) => [...prevHistory, `${value1} ${operator} ${value2} = ${result}`]);
  };

  const handleClearClick = () => {
    setDisplayValue('');
    setCurrentValue('');
    setOperator('');
  };

  const handleClearHistoryClick = () => {
    setHistory([]);
  };

  return (
    <CalculatorWrapper>
      <h2>Kalkulačka</h2>
      <div className="display">{displayValue}</div>
      <div className="number-pad">
        <button onClick={() => handleNumberClick('7')}>7</button>
        <button onClick={() => handleNumberClick('8')}>8</button>
        <button onClick={() => handleNumberClick('9')}>9</button>
        <button onClick={() => handleNumberClick('4')}>4</button>
        <button onClick={() => handleNumberClick('5')}>5</button>
        <button onClick={() => handleNumberClick('6')}>6</button>
        <button onClick={() => handleNumberClick('1')}>1</button>
        <button onClick={() => handleNumberClick('2')}>2</button>
        <button onClick={() => handleNumberClick('3')}>3</button>
        <button onClick={() => handleNumberClick('0')}>0</button>
        <button onClick={() => handleNumberClick('.')}>.</button>
      </div>
      <div className="operations">
        <button onClick={() => handleOperatorClick('+')}>+</button>
        <button onClick={() => handleOperatorClick('-')}>-</button>
        <button onClick={() => handleOperatorClick('*')}>*</button>
        <button onClick={() => handleOperatorClick('/')}>/</button>
      </div>
      <div>
        <button className="clear"onClick={handleClearClick}>Clear</button>
        <button className="equals" onClick={handleEqualsClick}>
          =
        </button>
      </div>
      <div className="clear-history">
        <button onClick={handleClearHistoryClick}>Clear History</button>
      </div>
      <div className="history">
        <h3>History</h3>
        {history.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
    </CalculatorWrapper>
  );
};

export default Calculator;
