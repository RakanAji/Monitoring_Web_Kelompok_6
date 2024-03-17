// routes.js

const express = require('express');
const router = express.Router();

// Route untuk URL lama
router.get('http://localhost:3000', (req, res) => {
    res.send('Ini adalah halaman untuk URL lama');
});

// Ubah route untuk URL lama ke URL baru
router.get('https://MonitoringWebKelompok6CAASCPS', (req, res) => {
    res.send('Ini adalah halaman untuk URL baru');
});

module.exports = router;
