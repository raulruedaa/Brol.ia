import express from 'express';

const router = express.Router();

// Defina suas rotas aqui
router.get('/', (req, res) => {
  res.send('Quiz routes');
});

export default router; 