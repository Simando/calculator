import React, { useEffect, useState } from 'react';
import styled from 'styled-components';


const CurrentTimeWrapper = styled.div`
  text-align: center;
  margin-bottom: 20px;
  padding: 8px 16px;
  background-color: #4caf50;
  border: none;
  border-radius: 3px;
  font-size: 16px;
  font-family: 'Roboto', sans-serif;
`;


const ComponentWithInfo = () => {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {

    const intervalId = setInterval(() => {
      fetchCurrentTime();
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const fetchCurrentTime = () => {
    const now = new Date();
    const formattedTime = now.toLocaleTimeString();

    setCurrentTime(`Čas: ${formattedTime}`);
  };

  return (
    <>
      <CurrentTimeWrapper>{currentTime}</CurrentTimeWrapper>
    </>
  );
};

export default ComponentWithInfo;
