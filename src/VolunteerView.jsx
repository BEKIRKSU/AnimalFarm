import React from 'react';
import Key from './Key';
import Calendar from './Calendar';
import BookingForm from './BookingForm';
import "./VolunteerView.css"
import Footer from './Footer';
import QuoteBox from './QuoteBox';

function VolunteerView() {
    return (
        <>
            <div className='Calendar-Inputs'>
                <Key />
                <Calendar />
                <QuoteBox />
            </div>
            <div className='BookingFormVolunteerView'><BookingForm /></div>
            <div><Footer /></div>
        </>
    );
}

export default VolunteerView;
