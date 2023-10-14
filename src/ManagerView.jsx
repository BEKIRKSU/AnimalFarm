import React from 'react';
import Key from './Key';
import Calendar from './Calendar';
import UserBooking from './UserBooking';
import "./VolunteerView.css"
import UserBooking from './UserBooking';

function VolunteerView() {
    return (
        <>
            <div className='Calendar-Inputs'>
                <Key />
                <Calendar />
                <UserBooking />
            </div>
        </>
    );
}

export default VolunteerView;
