import React, { useState } from 'react';
import axios from 'axios'; 
import './BookingForm.css';

const BookingForm = () => {
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [session, setSession] = useState('Morning');
  const [date, setDate] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

  if (name.trim() === '') {
    alert('Please enter your name.');
    return;
  }

  if (email.trim() === '') {
    alert('Please enter your email.');
    return;
  }

  if (session !== 'Morning' && session !== 'Evening') {
    alert('Please select a valid session (Morning or Evening).');
    return;
  }

  if (date === '') {
    alert('Please select a date.');
    return;
  }
  
  try {
    const existingDataResponse = await axios.get('https://animal-farm-api.onrender.com/retrievedata');
    const existingData = existingDataResponse.data;
  
    const isDataExists = existingData.some(entry => {
      const apiDate = new Date(entry.date);
      const userDate = new Date(date + "T00:00:00.000Z"); 
      return entry.session === session && apiDate.getTime() === userDate.getTime();
    });
  
    if (isDataExists) {
      alert('Booking for this date and session may already exist. Please review the calendar for a more suitable date or session to book.');
      return;
    }

    const data = { name, email, session, date };
    const response = await axios.post('https://animal-farm-api.onrender.com/retrievedata', data);
    console.log(response.data);

    const isMorningBooked = response.data.morning;
    const isEveningBooked = response.data.evening;

    if (session === 'Morning' && isMorningBooked) {
      alert('Morning session is already booked for this date. Please choose another date or session.');
    } else if (session === 'Evening' && isEveningBooked) {
      alert('Evening session is already booked for this date. Please choose another date or session.');
    } else {
      console.log('Booking successful!');
    }

  } catch (error) {
    console.error("Error sending/retrieving data!", error);
 
  }
};
  

  return (
    <div className='Calendar-Inputs'>
     <form className='formStyle' onSubmit={handleSubmit}>
    <label className='labelStyle'>Name</label>
    <input
      type="text"
      value={name}
      onChange={(e) => {
        const formattedValue = e.target.value; 
        setName(formattedValue);
      }}
      className='inputStyle'
    />
  
    <label className='labelStyle'>Email</label>
    <input
      type="email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      className='inputStyle'
    />
  
    <label className='labelStyle'>Session</label>
    <select
      value={session}
      onChange={(e) => setSession(e.target.value)}
      className='selectStyle'
    >
      <option value="Morning">Morning</option>
      <option value="Evening">Evening</option>
    </select>

    <label className='labelStyle'>Date</label>
    <input
      type="date"
      value={date}
      onChange={(e) => setDate(e.target.value)}
      className='inputStyle'
    />
  
    <button type="submit" className='submitButtonStyle'>
      Book
    </button>
</form>
    </div>
  );
};

export default BookingForm;
