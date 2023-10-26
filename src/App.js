import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';
import UserBooking from './UserBooking';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Footer from './Footer';
import VolunteerView from './VolunteerView';
import ManagerView from './ManagerView';
import Home from './Home';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://animal-farm-api.onrender.com/retrievedata')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
  }, []);
  console.log(data)

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/userbooking" element={<UserBooking data={data} />} />
          <Route path="/" element={<Home />} />
          <Route path="/VolunteerView" element={<VolunteerView />} />
          <Route path="/ManagerView" element={<ManagerView />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

