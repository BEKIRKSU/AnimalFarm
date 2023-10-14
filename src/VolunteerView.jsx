import React from 'react';
import Key from './Key';
import Calendar from './Calendar';
import BookingForm from './BookingForm';
import UserBooking from './UserBooking';

function VolunteerView() {
    return (
        <>
            <div className='Calendar-Inputs'>
                <Key />
                <Calendar />
                {/* <UserBooking /> */}
                <BookingForm />
            </div>
        </>
    );
}

export default VolunteerView;
