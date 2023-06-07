/*Tady bych si představoval něco jako jestli je lichý nebo sudý týden, co je dnes za den.
Možná kdo má svátek, eventualně státní svátky a prázdniny. Zkuste něco vymyslet já už nemůžu je mi fakt na nic.*/

import React from 'react';
import styled from 'styled-components';

const DaysAndWeeksWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
    font-weight: bold;
    color: #fff;
    background-color: #333;
    padding: 20px;
    margin-bottom: 20px;
    border-radius: 3px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

    #body {
        font-family: 'Roboto', sans-serif;
    }

    .day {
        font-size: 24px;
        font-weight: bold;
        cursor: pointer;
        margin-bottom: 10px;
    }

    .week {
        font-size: 24px;
        font-weight: bold;
        cursor: pointer;
        margin-bottom: 10px;
    }

    .nameDay {
        font-size: 24px;
        font-weight: bold;
        cursor: pointer;
        margin-bottom: 10px;
    }

    .holiday {
        font-size: 24px;
        font-weight: bold;
        cursor: pointer;
        margin-bottom: 10px;
    }

    .headings {
        font-family: 'Roboto', sans-serif;
        text-align: center;
    }
`;

class DaysAndWeeks extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        currentDay: '',
        currentWeek: '',
        celebratedName: '',
        holidays: [],
      };
    }
  
    componentDidMount() {
        const currentDate = new Date();
        const currentDay = currentDate.toLocaleDateString('en-US', { weekday: 'long' });
        const currentWeek = this.getCurrentWeek(currentDate);
        const celebratedName = this.getCelebratedName(currentDate);
        const holidays = this.getHolidays(currentDate);
  
        this.setState({
            currentDay,
            currentWeek,
            celebratedName,
            holidays,
          });
    }
  
    getCurrentWeek(date) {
      const oneJan = new Date(date.getFullYear(), 0, 1);
      const currentWeek = Math.ceil(((date - oneJan) / 86400000 + oneJan.getDay() + 1) / 7);
      return currentWeek;
    }
  
    getCelebratedName(date) {
      const celebratedNames = {
        Monday: 'Dobroslav',
        Tuesday: 'Norbert',
        Wednesday: 'Iveta',
        Thursday: 'Medard',
        Friday: 'Stanislava',
        Saturday: 'Gita',
        Sunday: 'Bruno',
      };
  
      const day = date.toLocaleDateString('en-US', { weekday: 'long' });
      return celebratedNames[day] || '';
    }
  
    getHolidays(date) {
      const holidaysData = {
        '1/1': 'New Year',
        '2/14': 'Valentine\'s Day',
        '3/17': 'St. Patrick\'s Day',
        '12/25': 'Christmas',
      };
  
      const month = date.getMonth() + 1;
      const day = date.getDate();
      const holidayKey = `${month}/${day}`;
      return holidaysData[holidayKey] || [];
    }
  
    render() {
      const { currentDay, currentWeek, celebratedName, holidays } = this.state;
  
      return (
        <div className='headings'>
          <h1>Current Day: {currentDay}</h1>
          <h2>Current Week: {currentWeek}</h2>
          <h2>Celebrated Name: {celebratedName}</h2>
          <h2>Holidays:</h2>
          <ul>
            {holidays.length === 0 ? (
              <li>No holidays on this date</li>
            ) : (
              holidays.map((holiday, index) => <li key={index}>{holiday}</li>)
            )}
          </ul>
        </div>
      );
    }
  }
  
export default DaysAndWeeks;
