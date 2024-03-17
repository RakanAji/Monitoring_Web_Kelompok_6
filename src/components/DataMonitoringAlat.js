import React, { useEffect, useState } from 'react';
import firebase from 'firebase/compat/app'; // Menggunakan 'firebase/compat/app' untuk kompatibilitas
import 'firebase/compat/database'; // Menggunakan 'firebase/compat/database' untuk kompatibilitas
import { Card } from 'react-bootstrap';

const firebaseConfig = {
  // Konfigurasi Firebase Anda
  apiKey: "AIzaSyAVp2aUwwu2LxBM-8xTQWNeUNPi7HS2Zhs",
  authDomain: "penyiraman-otomatis-5d816.firebaseapp.com",
  databaseURL: "https://penyiraman-otomatis-5d816-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "penyiraman-otomatis-5d816",
  storageBucket: "penyiraman-otomatis-5d816.appspot.com",
  messagingSenderId: "628078616253",
  appId: "1:628078616253:web:21391f4ca96d6e737ce1d4",
  measurementId: "G-ZNKS9EW6Z1"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const DataMonitoringAlat = () => {
  const [moisture, setMoisture] = useState(null);
  const [motionStart, setMotionStart] = useState(null);
  const [motionEnd, setMotionEnd] = useState(null);

  useEffect(() => {
    const database = firebase.database();
    const moistureRef = database.ref('/moisture'); 
    const motionStartRef = database.ref('/motion_detected_at');
    const motionEndRef = database.ref('/motion_ended_at');

    moistureRef.on('value', (snapshot) => {
      setMoisture(snapshot.val());
    }, (error) => {
      console.error('Error fetching moisture data:', error);
    });

    motionStartRef.on('value', (snapshot) => {
      setMotionStart(snapshot.val());
    }, (error) => {
      console.error('Error fetching motion start data:', error);
    });

    motionEndRef.on('value', (snapshot) => {
      setMotionEnd(snapshot.val());
    }, (error) => {
      console.error('Error fetching motion end data:', error);
    });

    // Membersihkan event listener saat komponen unmount
    return () => {
      moistureRef.off();
      motionStartRef.off();
      motionEndRef.off();
    };
  }, []);

  return (
    <div id='datamonitor'>
      <Card>
      <Card.Body>
      <Card.Title>Data Monitoring Alat</Card.Title>
      <Card.Text>
        <p>Soil Moisture: {moisture}</p>
          <p>Motion Detected at: {motionStart} </p>
          <p>Motion Ended at: {motionEnd} </p>
      </Card.Text>
      </Card.Body>
      </Card>
    </div>
  
  );
}

export default DataMonitoringAlat;