import React from 'react';
import { Card } from 'react-bootstrap';
import logo from "../assets/img/alat1.jpg";
import soil from '../assets/img/soil.jpg';
import pir from '../assets/img/pir.jpg';
import "../css/main.css";



function DeskripsiAlat() {
  return (
  <div id="deskripsialat" >    
    <Card>
    <Card.Body>
    <Card.Title >Deskripsi Alat</Card.Title>
    <Card.Text style={{ textAlign: 'justify' }}>
      Alat Pendeteksi Hama dan Penyiraman Air Otomatis dengan Monitoring Kelembaban Tanah pada Tanaman Bayam adalah sebuah sistem otomatis yang dirancang untuk merawat tanaman bayam dengan efisien. Alat ini menggunakan sensor kelembaban tanah untuk memantau tingkat kelembaban tanah, serta sensor PIR untuk mendeteksi kehadiran hama di sekitar tanaman. Sensor kelembaban tanah akan digunakan untuk memantau tingkat kelembaban tanah dan akan dioutputkan di LCD, dari output tersebut akan didapatkan informasi apakah tanah tersebut kering apa lembab. Jika tanah terlalu kering maka sistem pengairan akan diaktifkan. Sensor PIR akan mendeteksi keberadaan hama hewan hewan kecil yang berpotensi merusak tanaman dan sensor tersebut akan mengaktifkan buzzer.
    </Card.Text>
    <Card.Img src= {logo} alt="Deskripsi Alat" style={{ height:300, width:300}} />
    <Card.Img src= {soil} alt="Deskripsi Alat" style={{ height:300, width:300}} />
    <Card.Img src= {pir} alt="Deskripsi Alat"  style={{ height:300, width:300}} />

    </Card.Body>
    </Card>
    
    </div>
  );
}

export default DeskripsiAlat;