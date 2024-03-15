const express = require('express');
const router = express.Router();

const { getAllNouriture, addNouriture, deleteNouriture } = require('./fonction/fonction');

router.post('/add', async (req, res) => {
  try {
    const { name, img } = req.body;
    const result = await addNouriture(name, img);
    res.status(200).send('Plat créée');
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/all', async (req, res) => {
  try {
    const result = await getAllNouriture();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete('/delete/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const result = await deleteNouriture(id);
    res.status(200).send('Plat supprimée');
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
