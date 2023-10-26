import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Home.css";
import Footer from './Footer';

function Home() {
  const navigate = useNavigate();
  const handleVolunteerLoginClick = () => {
    
    navigate('/VolunteerView');
  };

 const handleManagerViewClick = () => {
    navigate('/ManagerView');
};

    return (
        <div className="homePage">
            <main className="content">
              <div className="fade-in">
                <h1>Welcome to Bekir's Citflik.</h1>
                </div>
               <div className="button-group">
          <button onClick={handleVolunteerLoginClick} className="volunteer-login-button">
            Volunteer
          </button>
          <button onClick={handleManagerViewClick} className="manager-login-button">Manager</button>
        </div>
            </main>
            <Footer />
        </div>
    );
}


export default Home;