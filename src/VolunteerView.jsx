import React from 'react';
import Key from './Key';
import Calendar from './Calendar';
import BookingForm from './BookingForm';
import "./VolunteerView.css"

function VolunteerView() {
    return (
        <>
            <div className='Calendar-Inputs'>
                <Key />
                <Calendar />
                <BookingForm />
            </div>
        </>
    );
}

export default VolunteerView;
