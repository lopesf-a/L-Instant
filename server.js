const express = require('express');
const mariadb = require('mariadb');
const multer = require('multer');
const path = require('path');
const app = express();
const port = 3306;

// Configuration de MariaDB
const pool = mariadb.createPool({
  host: '127.0.0.1',
  user: 'root',
  password: '',
  database: 'photo_app'
});


app.use(express.json());

// Endpoint pour télécharger une photo
app.post('/upload', (req, res) => {
    const { url } = req.body;

    db.query('INSERT INTO photos (url) VALUES (?)', [url], (err, result) => {
        if (err) {
            console.error("Erreur lors de l'ajout de la photo : ", err);
            res.status(500).json({ error: "Erreur lors de l'ajout de la photo." });
        } else {
            res.json({ message: "Photo téléchargée avec succès." });
        }
    });
});

// Endpoint pour récupérer la liste des photos
app.get('/photos', (req, res) => {
    db.query('SELECT * FROM photos', (err, results) => {
        if (err) {
            console.error("Erreur lors de la récupération des photos : ", err);
            res.status(500).json({ error: "Erreur lors de la récupération des photos." });
        } else {
            res.json(results);
        }
    });
});

// Endpoint pour gérer le like d'une photo (à implémenter)

// Endpoint pour gérer le partage d'une photo (à implémenter)

app.listen(port, () => {
    console.log(`Serveur démarré sur le port ${port}`);
});