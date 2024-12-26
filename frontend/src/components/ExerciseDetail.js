import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ExerciseDetail({ match }) {
    const [exercise, setExercise] = useState(null);

    useEffect(() => {
        fetchExercise();
    }, []);

    const fetchExercise = async () => {
        const res = await axios.get(`/api/exercises/${match.params.id}`);
        setExercise(res.data);
    };

    if (!exercise) return <div>Carregando...</div>;

    return (
        <div>
            <h2>{exercise.titulo}</h2>
            <p><strong>Disciplina:</strong> {exercise.disciplina}</p>
            <p><strong>Tópico:</strong> {exercise.topico}</p>
            <p><strong>Dificuldade:</strong> {exercise.dificuldade}</p>
            <p>{exercise.enunciado}</p>
            <h3>Solução</h3>
            <ol>
                {exercise.solucao.map((s, index) => (
                    <li key={index}>{s.passo}</li>
                ))}
            </ol>
        </div>
    );
}

export default ExerciseDetail; 