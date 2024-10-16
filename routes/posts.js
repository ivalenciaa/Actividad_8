const express = require('express');
const router = express.Router();
const Post = require('../models/Post');
const Autor = require('../models/Autor');

// Crear un nuevo post
router.post('/', async (req, res) => {
  try {
    const post = await Post.create(req.body);
    res.json(post);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el post' });
  }
});

// Obtener todos los posts con autor
router.get('/', async (req, res) => {
  try {
    const posts = await Post.findAll({ include: Autor });
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los posts' });
  }
});

// Obtener posts por autor
router.get('/autor/:autorId', async (req, res) => {
  try {
    const posts = await Post.findAll({
      where: { autor_id: req.params.autorId },
      include: Autor
    });
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los posts por autor' });
  }
});

module.exports = router;
