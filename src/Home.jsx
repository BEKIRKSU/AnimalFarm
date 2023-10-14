import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Home.css";

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
              <div className="typewriter">
                <h1>Welcome to Bekir's Citflik.</h1>
                {/* <p>Volunteer or Manager</p> */}
                </div>
               <div className="button-group">
          <button onClick={handleVolunteerLoginClick} className="volunteer-login-button">
            Volunteer
          </button>
          <button onClick={handleManagerViewClick} className="manager-login-button">Manager</button>
        </div>
            </main>
        </div>
    );
}


export default Home;