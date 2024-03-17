import React, { useEffect, useState } from 'react';
import firebase from 'firebase/compat/app'; // Menggunakan 'firebase/compat/app' untuk kompatibilitas
import 'firebase/compat/database'; // Menggunakan 'firebase/compat/database' untuk kompatibilitas
import { Card } from 'react-bootstrap';

const firebaseConfig = {
  // Konfigurasi Firebase Anda
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const DataMonitoringAlat = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const database = firebase.database();
    const ref = database.ref('/moisture'); // Ganti dengan path ke data Anda di Firebase Realtime Database

    ref.on('value', (snapshot) => {
      setData(snapshot.val());
    }, (error) => {
      console.error('Error fetching data:', error);
    });

    // Membersihkan event listener saat komponen unmount
    return () => {
      ref.off();
    };
  }, []);

  return (
    <Card>
      <Card.Body>
        <Card.Title>Data Monitoring Alat</Card.Title>
        <Card.Text>
          {data ? JSON.stringify(data) : 'Loading...'}
        </Card.Text>
        blom ada 
      </Card.Body>
    </Card>
  );
}

export default DataMonitoringAlat;