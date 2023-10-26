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

    const data = { name, email, session, date };

    try {
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
      console.error("Error sending data!", error);
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
