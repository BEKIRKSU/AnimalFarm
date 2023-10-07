import React from "react";
import './UserBooking.css';


export function UserBookingList({ data }) {
  return (
      <div>
          <h1>Bookings</h1>
          {data.sort((a, b) => new Date(b.date) - new Date(a.date))
              .map((item) => (
                  <UserBooking key={item.id} data={item} />
              ))
          }
      </div>
  );
}

function UserBooking({ data }) {
    return (
      <div className="user-booking-container">
        <p><strong>Name:</strong> {data.name}</p>
        <p><strong>Email:</strong> {data.email}</p>
        <p><strong>Session:</strong> {data.session}</p>
        <p><strong>Date:</strong> {new Date(data.date).toLocaleDateString()}</p>
      </div>
    );
}

export default UserBooking;
