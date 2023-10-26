import Key from './Key';
import Calendar from './Calendar';
import { Link } from 'react-router-dom';
import "./ManagerView.css"
import Footer from './Footer';

function ManagerView() {
    return (
        <>
        <div>
            <h1 className='manager-view-title'>Management</h1>
        </div>
        <div className='Calendar-Inputs'>
            <Key />
            <Calendar />
            <Link to="/userbooking" className="userbooking-link">Volunteer Bookings</Link>   
        </div>
        </>
    );
}

export default ManagerView;