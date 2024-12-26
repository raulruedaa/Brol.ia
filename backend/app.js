import express from 'express';
const mongoose = require('mongoose');
const exerciseRoutes = require('./routes/exerciseRoutes');
const quizRoutes = require('./routes/quizRoutes');

const app = express();

mongoose.connect('mongodb://localhost/exercise-library', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(express.json());

app.use('/api/exercises', exerciseRoutes);
app.use('/api/quizzes', quizRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`)); 