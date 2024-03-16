import React from 'react';
import { Card } from 'react-bootstrap';
import logo from "../assets/img/alat1.jpg";
import soil from '../assets/img/soil.jpg';
import pir from '../assets/img/pir.jpg';


function DeskripsiAlat() {
  return (
    <Card>
      <Card.Body>
        <Card.Title>Deskripsi Alat</Card.Title>
        <Card.Text>
          Kami membuat Alat penyiraman tanaman otomatis dan pendeteksi hama dengan sensor SoilMoisture dan PIR. 
          SoilMoisture dihubungkan dengan pompa air
        </Card.Text>
        <Card.Img src= {logo} alt="Deskripsi Alat"   />
        <Card.Img src= {soil} alt="Deskripsi Alat"   />
        <Card.Img src= {pir} alt="Deskripsi Alat"   />

          
      </Card.Body>
    </Card>
  );
}

export default DeskripsiAlat;