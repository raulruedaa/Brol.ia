import express from 'express';
import mongoose from 'mongoose';
import exerciseRoutes from './routes/exerciseRoutes.js';
import quizRoutes from './routes/quizRoutes.js';

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