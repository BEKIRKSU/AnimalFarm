import React from "react";
import './UserBooking.css';
import { computeHeadingLevel } from "@testing-library/react";

function UserBooking({ data }) {
  
  console.log(data)
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


