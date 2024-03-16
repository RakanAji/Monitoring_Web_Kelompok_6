import React from 'react';
import { Card } from 'react-bootstrap';


function DeskripsiAlat() {
  return (
    <Card>
      <Card.Body>
        <Card.Title>Deskripsi Alat</Card.Title>
        <Card.Text>
          Kami membuat Alat penyiraman tanaman otomatis dan pendeteksi hama dengan sensor SoilMoisture dan PIR. 
          SoilMoisture dihubungkan dengan pompa air
        </Card.Text>
        <Card.Img src="\assets\img\foto_alip.jpg" alt="Deskripsi Alat" fluid />

          
      </Card.Body>
    </Card>
  );
}

export default DeskripsiAlat;