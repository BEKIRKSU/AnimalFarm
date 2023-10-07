import React from 'react';
import Key from './Key';
import Calendar from './Calendar';
import BookingForm from './BookingForm';

function HomeView() {
    return (
        <>
            <div className='Calendar-Inputs'>
                <Key />
                <Calendar />
            </div>
            <BookingForm />
        </>
    );
}

export default HomeView;
