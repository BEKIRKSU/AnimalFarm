import React from 'react';
import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import './Calendar.css';

function Calendar() {
    const [date, setDate] = useState(new Date());
    const [highlightedDates, setHighlightedDates] = useState({});
  
    useEffect(() => {
      axios.get('https://animal-farm-api.onrender.com/retrievedata')
        .then(response => {
          const data = response.data;
          const dates = {};
          
          data.forEach(item => {
            const dateString = new Date(item.date).toDateString();
            if (dates[dateString]) {
              dates[dateString].push(item.session);
            } else {
              dates[dateString] = [item.session];
            }
          });
  
          setHighlightedDates(dates);
        })
        .catch(error => {
          console.error('Error fetching data: ', error);
        });
    }, []);

  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  
  const firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  const daysInMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  
  const calendarRows = [];
  let dayCount = 1;
  
  for (let i = 0; i < 6; i++) {
    const row = [];
    for (let j = 0; j < 7; j++) {
        let keyForDay;
        if ((i === 0 && j < firstDayOfMonth) || dayCount > daysInMonth) {
            keyForDay = `empty-${i}-${j}`;
            row.push(<div key={keyForDay} className="calendar-day empty">{""}</div>);
        } else {
            const dayDate = new Date(date.getFullYear(), date.getMonth(), dayCount).toDateString();
            keyForDay = `day-${i}-${j}-${dayCount}`;
            let className = "calendar-day"; 
            if (highlightedDates[dayDate]) {
                if (highlightedDates[dayDate].includes('Morning') && highlightedDates[dayDate].includes('Evening')) {
                    className += " red";
                } else if (highlightedDates[dayDate].includes('Morning')) {
                    className += " green";
                } else if (highlightedDates[dayDate].includes('Evening')) {
                    className += " orange";
                }
            }
            row.push(<div key={keyForDay} className={className}>{dayCount}</div>);
            dayCount++;
        }
    }
    calendarRows.push(<div key={`row-${i}`} className="calendar-row">{row}</div>);
}


  return (
    <div className="calendar">
      <div className="calendar-header">
        <button onClick={() => setDate(new Date(date.setMonth(date.getMonth() - 1)))}>&lt;</button>
        <span>{monthNames[date.getMonth()]} {date.getFullYear()}</span>
        <button onClick={() => setDate(new Date(date.setMonth(date.getMonth() + 1)))}>&gt;</button>
      </div>
      <div className="calendar-days-header">
        {days.map((day, index) => (
          <div className="calendar-day-header" key={index}>{day}</div>
        ))}
      </div>
      <div className="calendar-body">
        {calendarRows}
      </div>
    </div>
  );
}

export default Calendar;
