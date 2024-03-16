import React from 'react';
import DeskripsiAlat from './components/DeskripsiAlat';
import DataMonitoringAlat from './components/DataMonitoringAlat';
import ProfileTim from './components/ProfileTim';
import Footer from './components/Footer';
import "./css/main.css";
import Navigationbar from './components/Navigationbar';

function App() {
  return (
    <div>
      <div className="myBG">
        <Navigationbar />
      </div>

      <div className="deskripsialat">
        <DeskripsiAlat />
      </div>

      <div className="datamonitoringalat">
        <DataMonitoringAlat />
      </div>

      <div className="profiletim">
        <ProfileTim />
      </div>

      <div className="footer">
        <Footer />
      </div>
    </div>
  )
}

export default App
