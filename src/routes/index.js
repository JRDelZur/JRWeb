const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index.html', { title: 'JR-Planet' });
});

router.get('/contact', (req, res) => {
    res.render('contact', { title: 'Contacto' });
});

router.get('/about', (req, res) => {
    res.render('about', { title: 'Acerca de' });
});

router.get('/service', (req, res) => {
    res.render('service', { title: 'Servicios' });
});

module.exports = router;