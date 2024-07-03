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
        let responses = { yes: [], no: [] }; // Para armazenar as respostas "Sim" e "Não"

        Object.keys(answers).forEach((question) => {
            const { weight, category } = questions[question];
            if (answers[question] === 'SIM') {
                totalScore += weight;
                if (!categoryScores[category]) {
                    categoryScores[category] = 0;
                }
                categoryScores[category] += weight;
                responses.yes.push({ question: question, weight: weight });
            } else {
                responses.no.push({ question: question, weight: weight });
            }
        });

        let maturityLevel = 1;
        for (const [level, { min_score, max_score }] of Object.entries(maturityLevels)) {
            if (totalScore >= min_score && totalScore <= max_score) {
                maturityLevel = level;
                break;
            }
        }

        setResults({ totalScore, categoryScores, maturityLevel, responses });
        setShowResults(true); // Mostrar os resultados após o cálculo
    };

    const handleBackToForm = () => {
        setShowResults(false); // Voltar para o formulário
    };

    return (
        <div>
            <h1>Protótipo SIA</h1>
            {!showResults ? (
                <QuestionForm onSubmit={calculateResults} />
            ) : (
                <Results
                    totalScore={results.totalScore}
                    categoryScores={results.categoryScores}
                    maturityLevel={results.maturityLevel}
                    responses={results.responses} // Passe as respostas para o componente Results
                    onBack={handleBackToForm}
                />
            )}
        </div>
    );
};

export default App;
