const Exercise = require('../models/Exercise');

exports.getExercises = async (req, res) => {
    const { disciplina, topico, dificuldade } = req.query;
    let filter = {};
    if (disciplina) filter.disciplina = disciplina;
    if (topico) filter.topico = topico;
    if (dificuldade) filter.dificuldade = dificuldade;

    try {
        const exercises = await Exercise.find(filter);
        res.json(exercises);
    } catch (err) {
        res.status(500).json({ mensagem: err.message });
    }
};

exports.getExerciseById = async (req, res) => {
    try {
        const exercise = await Exercise.findById(req.params.id);
        if (!exercise) return res.status(404).json({ mensagem: 'Exercício não encontrado' });
        res.json(exercise);
    } catch (err) {
        res.status(500).json({ mensagem: err.message });
    }
}; 