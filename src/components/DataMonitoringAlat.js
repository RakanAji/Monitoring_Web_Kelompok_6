import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card } from 'react-bootstrap';

function DataMonitoringAlat() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get('URL_API_BLYNK')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <Card>
      <Card.Body>
        <Card.Title>Data Monitoring Alat</Card.Title>
        <Card.Text>
          {data ? JSON.stringify(data) : 'Loading...'}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default DataMonitoringAlat;
