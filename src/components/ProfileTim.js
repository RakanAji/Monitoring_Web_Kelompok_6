import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';

function ProfileTim() {

  const pembuatData = [
    { nama: 'Rayhan Syailendra', nim: '1101220096', asal: 'Jakarta', jurusan: 'Teknik Telekomunikasi' },
    { nama: 'Rakan Aji Pratama', nim: '1101213030', asal: 'Bogor', jurusan: 'Teknik Telekomunikasi' },
    { nama: 'Regina Ramadhani', nim: '1101223238', asal: 'Bekasi', jurusan: 'Teknik Telekomunikasi' },
    { nama: 'Yassar Ahmad Alif', nim: '1101223382', asal: 'Jawa', jurusan: 'Teknik Telekomunikasi' },
  ];

  return (
    <Row>
      <Col sm={12}>
        <Card>
          <Card.Body>
          <Card.Title>Profile Tim</Card.Title>
            <Row>
              {pembuatData.map((pembuat, index) => (
                <Col key={index} sm={6} md={4} lg={3} className="mb-5">
                  <Card>
                    <Card.Body>
                      <Card.Title>{pembuat.nama}</Card.Title>
                      
                      <Card.Text>
                        <strong>NIM:</strong> {pembuat.nim}<br />
                        <strong>Asal:</strong> {pembuat.asal}<br />
                        <strong>Jurusan:</strong> {pembuat.jurusan}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

export default ProfileTim;
