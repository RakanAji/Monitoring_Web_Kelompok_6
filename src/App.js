import React from 'react';
import DeskripsiAlat from './components/DeskripsiAlat';
import DataMonitoringAlat from './components/DataMonitoringAlat';
import ProfileTim from './components/ProfileTim';
import Footer from './components/Footer';
import "./css/main.css";
import Navigationbar from './components/Navigationbar';

function App() {
  return (
    <div className="container">
      <Navigationbar />

      <div className="content">
        <DeskripsiAlat />
        <DataMonitoringAlat />
        <ProfileTim />
      </div>

      <Footer />
    </div>
  )
}

export default App;
