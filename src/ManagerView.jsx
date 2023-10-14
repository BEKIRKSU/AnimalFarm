import Key from './Key';
import Calendar from './Calendar';
import { Link } from 'react-router-dom';

function ManagerView() {
    return (
        <>
            <div className='Calendar-Inputs'>
                <Key />
                <Calendar />
                <Link to="/userbooking" className="navbar-link">Volunteer Bookings</Link>
            </div>
        </>
    );
}

export default ManagerView;