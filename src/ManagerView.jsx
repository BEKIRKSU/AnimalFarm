import Key from './Key';
import Calendar from './Calendar';
import { Link } from 'react-router-dom';
import "./ManagerView.css"

function ManagerView() {
    return (
        <>
            <div className='Calendar-Inputs'>
                <Key />
                <Calendar />
                <Link to="/userbooking" className="userbooking-link">Volunteer Bookings</Link>
            </div>
        </>
    );
}

export default ManagerView;