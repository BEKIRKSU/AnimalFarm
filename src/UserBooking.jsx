import React from "react";
import './UserBooking.css';

function UserBooking({ data }) {
    return (
      
      <div>
        <h1 className="bookingsTitle">Volunteer Bookings</h1>
         {data.map((booking, index) => (
        <div key={index} className="user-booking-container">
        <p><strong>Name:</strong> {booking.name}</p>
        <p><strong>Email:</strong> {booking.email}</p>
        <p><strong>Session:</strong> {booking.session}</p>
        <p><strong>Date:</strong> {new Date(booking.date).toLocaleDateString()}</p>
      </div>
     ))}
     </div>
   );
 }

export default UserBooking;


