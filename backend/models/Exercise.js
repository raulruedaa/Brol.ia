const mongoose = require('mongoose');

const ExerciseSchema = new mongoose.Schema({
    titulo: String,
    disciplina: {
        type: String,
        enum: ['Física', 'Química', 'Biologia', 'Matemática'],
    },
    topico: String,
    dificuldade: {
        type: String,
        enum: ['Fácil', 'Médio', 'Difícil'],
    },
    enunciado: String,
    solucao: [{
        passo: String,
    }],
});

module.exports = mongoose.model('Exercise', ExerciseSchema); 