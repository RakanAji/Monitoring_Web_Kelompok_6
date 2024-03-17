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
      <div >
        <Navigationbar />
      </div>

      <div >
        <DeskripsiAlat />
      </div>

      <div >
        <DataMonitoringAlat />
      </div>

      <div >
        <ProfileTim />
      </div>

      <div >
        <Footer />
      </div>
    </div>
  )
}

export default App
