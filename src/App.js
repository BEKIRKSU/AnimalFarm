import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';
import { UserBookingList } from './UserBooking';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Footer from './Footer';
import HomeView from './HomeView';
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

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/userbooking" element={<UserBookingList data={data} />} />
          <Route path="/" element={<Home />} />
          <Route path="/HomeView" element={<HomeView />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

