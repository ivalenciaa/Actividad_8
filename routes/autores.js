const express = require('express');
const router = express.Router();
const Autor = require('../models/Autor');

// Crear un nuevo autor
router.post('/', async (req, res) => {
  try {
    const autor = await Autor.create(req.body);
    res.json(autor);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el autor' });
  }
});

// Obtener todos los autores
router.get('/', async (req, res) => {
  try {
    const autores = await Autor.findAll();
    res.json(autores);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los autores' });
  }
});

module.exports = router;
