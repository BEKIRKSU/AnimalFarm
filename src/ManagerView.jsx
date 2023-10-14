import Key from './Key';
import Calendar from './Calendar';
import BookingForm from './BookingForm';


function ManagerView() {
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

export default ManagerView;