import React, { useState } from 'react';
import QuestionForm from './components/QuestionForm';
import Results from './components/Results';
import { questions, maturityLevels } from './components/questionsData';

const App = () => {
    const [results, setResults] = useState(null);
    const [showResults, setShowResults] = useState(false);

    const calculateResults = (answers) => {
        let totalScore = 0;
        let categoryScores = {};

        Object.keys(answers).forEach((question) => {
            if (answers[question] === 'SIM') {
                const { weight, category } = questions[question];
                totalScore += weight;
                if (!categoryScores[category]) {
                    categoryScores[category] = 0;
                }
                categoryScores[category] += weight;
            }
        });

        let maturityLevel = 1;
        for (const [level, { min_score, max_score }] of Object.entries(maturityLevels)) {
            if (totalScore >= min_score && totalScore <= max_score) {
                maturityLevel = level;
                break;
            }
        }

        setResults({ totalScore, categoryScores, maturityLevel });
        setShowResults(true); // Mostrar os resultados após o cálculo
    };

    const handleBackToForm = () => {
        setShowResults(false); // Voltar para o formulário
    };

    return (
        <div>
            <h1>Autodiagnóstico LGPD</h1>
            {!showResults ? (
                <QuestionForm onSubmit={calculateResults} />
            ) : (
                <Results
                    totalScore={results.totalScore}
                    categoryScores={results.categoryScores}
                    maturityLevel={results.maturityLevel}
                    onBack={handleBackToForm}
                />
            )}
        </div>
    );
};

export default App;
