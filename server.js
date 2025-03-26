const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'Media')));
app.use(express.static(path.join(__dirname, 'Gallery')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'NJZ.html'));
});

app.get('/NJZ-Gallery.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'NJZ-Gallery.html'));
});

app.get('/NJZ-About.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'NJZ-About.html'));
});

app.get('/NJZ.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'NJZ.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});