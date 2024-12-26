import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ExerciseList() {
    const [exercises, setExercises] = useState([]);
    const [filters, setFilters] = useState({
        disciplina: '',
        topico: '',
        dificuldade: '',
    });

    useEffect(() => {
        fetchExercises();
    }, [filters]);

    const fetchExercises = async () => {
        const params = {};
        if (filters.disciplina) params.disciplina = filters.disciplina;
        if (filters.topico) params.topico = filters.topico;
        if (filters.dificuldade) params.dificuldade = filters.dificuldade;

        const res = await axios.get('/api/exercises', { params });
        setExercises(res.data);
    };

    const handleChange = (e) => {
        setFilters({ ...filters, [e.target.name]: e.target.value });
    };

    return (
        <div>
            <h2>Lista de Exercícios</h2>
            <div>
                <select name="disciplina" onChange={handleChange}>
                    <option value="">Todas as Disciplinas</option>
                    <option value="Física">Física</option>
                    <option value="Química">Química</option>
                    <option value="Biologia">Biologia</option>
                    <option value="Matemática">Matemática</option>
                </select>
                <input
                    type="text"
                    name="topico"
                    placeholder="Tópico"
                    onChange={handleChange}
                />
                <select name="dificuldade" onChange={handleChange}>
                    <option value="">Todas as Dificuldades</option>
                    <option value="Fácil">Fácil</option>
                    <option value="Médio">Médio</option>
                    <option value="Difícil">Difícil</option>
                </select>
            </div>
            <ul>
                {exercises.map(ex => (
                    <li key={ex._id}>{ex.titulo}</li>
                ))}
            </ul>
        </div>
    );
}

export default ExerciseList; 