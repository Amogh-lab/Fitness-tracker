import React, { useState } from 'react';
import './calender.css';

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const startOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
  const endOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
  const startDay = startOfMonth.getDay();

  const daysInMonth = [];
  for (let i = 0; i < startDay; i++) {
    daysInMonth.push(null);
  }
  for (let i = 1; i <= endOfMonth.getDate(); i++) {
    daysInMonth.push(new Date(currentDate.getFullYear(), currentDate.getMonth(), i));
  }

  const goToPrevMonth = () => {
    const prev = new Date(currentDate.setMonth(currentDate.getMonth() - 1));
    setCurrentDate(new Date(prev));
  };

  const goToNextMonth = () => {
    const next = new Date(currentDate.setMonth(currentDate.getMonth() + 1));
    setCurrentDate(new Date(next));
  };

  const isToday = (day) => {
    const today = new Date();
    return (
      day &&
      day.getDate() === today.getDate() &&
      day.getMonth() === today.getMonth() &&
      day.getFullYear() === today.getFullYear()
    );
  };

  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <button className="traverse" onClick={goToPrevMonth}>{'<'}</button>
        <h2>
          {currentDate.toLocaleString('default', { month: 'long' })} {currentDate.getFullYear()}
        </h2>
        <button className="traverse" onClick={goToNextMonth}>{'>'}</button>
      </div>
      <div className="calendar-grid">
        {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((day) => (
          <div key={day} className="calendar-day-name">{day}</div>
        ))}
        {daysInMonth.map((day, index) => (
          <div
            key={index}
            className={`calendar-day ${isToday(day) ? 'today' : ''}`}
          >
            {day ? day.getDate() : ''}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
