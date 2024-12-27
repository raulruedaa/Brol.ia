import express from 'express';

const router = express.Router();

// Defina suas rotas aqui
router.get('/', (req, res) => {
  res.send('Exercise routes');
});

export default router; 