import React from 'react'
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Schedule.css'


const Schedule = () => {
    const [value, onChange] = useState(new Date());

    return (
      <div className='schedule-container'>
        <Calendar onChange={onChange} value={value} className="react-calendar"/>
      </div>
    );
}
export default Schedule;
