import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Style par défaut

const MonCalendrier = () => {
  const [date, setDate] = useState(new Date());

  return (
    <div>
      <h1>Sélectionnez une date :</h1>
      <Calendar onChange={setDate} value={date} />
      <p>Date sélectionnée : {date.toDateString()}</p>
    </div>
  );
};

export default MonCalendrier;
