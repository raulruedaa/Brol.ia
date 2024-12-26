import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Quiz() {
    const [questions, setQuestions] = useState([]);
    const [current, setCurrent] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);

    useEffect(() => {
        fetchQuiz();
    }, []);

    const fetchQuiz = async () => {
        const res = await axios.get('/api/quizzes');
        setQuestions(res.data);
    };

    const handleAnswer = (isCorrect) => {
        if (isCorrect) setScore(score + 1);
        const next = current + 1;
        if (next < questions.length) {
            setCurrent(next);
        } else {
            setShowScore(true);
        }
    };

    if (showScore) {
        return <div>Seu placar: {score} de {questions.length}</div>;
    }

    if (questions.length === 0) return <div>Carregando Quiz...</div>;

    const question = questions[current];

    return (
        <div>
            <h2>Quiz</h2>
            <p>{question.pergunta}</p>
            {question.opcoes.map((op, index) => (
                <button key={index} onClick={() => handleAnswer(op.correta)}>
                    {op.texto}
                </button>
            ))}
        </div>
    );
}

export default Quiz; 