import React, { useEffect } from 'react';

import maturidadeImage from '../utils/maturidade.png'; // Importe a imagem
import '../App.css'; // Importe o arquivo CSS para os estilos

const Results = ({ totalScore, categoryScores, maturityLevel, responses, onBack }) => {
    // Função para calcular a posição da régua
    const calculatePosition = (score) => {
        if (score <= 53) return (score / 53) * 20;
        if (score <= 94) return 20 + ((score - 54) / (94 - 54)) * 20;
        if (score <= 130) return 40 + ((score - 95) / (130 - 95)) * 20;
        if (score <= 160) return 60 + ((score - 131) / (160 - 131)) * 20;
        if (score <= 171) return 80 + ((score - 161) / (171 - 161)) * 20;
        return 0; // Caso a pontuação esteja fora do intervalo esperado
    };
    // Função para formatar a questão
    const formatQuestion = (question) => {
        const match = question.match(/Seção \d+ - (.+)\?/);
        return match ? match[1] + '.' : question;
    };

    useEffect(() => {
        // Scroll para o topo da página quando o componente for montado
        window.scrollTo(0, 0);
    }, []);

    // Ordenar as questões pendentes com base no peso
    const sortedPendingQuestions = responses.no.slice().sort((a, b) => {
        const weightA = a.weight; // Acessa diretamente o peso de 'a'
        const weightB = b.weight; // Acessa diretamente o peso de 'b'
        return weightB - weightA; // Ordenar do maior para o menor peso
    });
    // Verifica se há apenas etapas realizadas ou apenas etapas pendentes
    const onlyCompleted = responses.yes.length > 0 && sortedPendingQuestions.length === 0;
    const onlyPending = responses.yes.length === 0 && sortedPendingQuestions.length > 0;

    return (
        <div className='result-section'>
            <h2>Resultados</h2>
            <p className={`nivel-maturidade nivel-maturidade-${maturityLevel}`}>
                Nível de maturidade da organização: <strong>{maturityLevel}</strong>
            </p>
            <p>Pontuação total: <strong>{totalScore}</strong></p>

            <h3>Pontuação por categoria:</h3>
            <ul>
                {Object.entries(categoryScores).map(([category, score]) => (
                    <li key={category}>{category}: {score}</li>
                ))}
            </ul>

            <h3>Requisitos esperados em cada nível (por atributo):</h3>
            <img
                src={maturidadeImage}
                alt="regua-maturidade"
                style={{ maxWidth: '100%', height: 'auto' }} // Define um tamanho máximo de largura e altura automática
            />

            <h3>Regua de referência pontuação / nível de maturidade:</h3>
            <div className="ruler-container">
                <div className="ruler-titles">
                    <div className="ruler-title">Inadequado</div>
                    <div className="ruler-title">Ajustes Iniciais</div>
                    <div className="ruler-title">Adequação Parcial</div>
                    <div className="ruler-title">Adequação Satisfatória</div>
                    <div className="ruler-title">Totalmente Adequado</div>
                </div>
                <div className="ruler">
                    <div className="ruler-level level-1">0 - 53 (Nível 1)</div>
                    <div className="ruler-level level-2">54 - 94 (Nível 2)</div>
                    <div className="ruler-level level-3">95 - 130 (Nível 3)</div>
                    <div className="ruler-level level-4">131 - 160 (Nível 4)</div>
                    <div className="ruler-level level-5">161 - 171 (Nível 5)</div>
                    <div className="ruler-indicator" style={{ left: `${calculatePosition(totalScore)}%` }}></div>
                </div>
            </div>


            <div className={`timeline ${onlyCompleted || onlyPending ? 'row-layout' : ''}`}>
                {onlyCompleted && (
                    <div className="timeline-item completed full-width">
                        <div className="timeline-content">
                            <h3>Etapas realizadas: {responses.yes.length}</h3>
                            <ul>
                                {responses.yes.map(({ question }, index) => (
                                    <li className='etapas-realizadas' key={index}>{formatQuestion(question)}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                )}

                {onlyPending && (
                    <div className="timeline-item pending full-width">
                        <div className="timeline-content">
                            <h3>Etapas pendentes: {sortedPendingQuestions.length}</h3>
                            <ul>
                                {sortedPendingQuestions.map(({ question }, index) => (
                                    <li className='etapas-pendentes' key={index}>{formatQuestion(question)}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                )}

                {!onlyCompleted && !onlyPending && (
                    <>
                        <div className="timeline-item completed">
                            <div className="timeline-content">
                                <h3>Etapas realizadas: {responses.yes.length}</h3>
                                <ul>
                                    {responses.yes.map(({ question }, index) => (
                                        <li className='etapas-realizadas' key={index}>{formatQuestion(question)}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="timeline-separator"></div> {/* Separador entre as etapas */}

                        <div className="timeline-item pending">
                            <div className="timeline-content">
                                <h3>Etapas pendentes: {sortedPendingQuestions.length}</h3>
                                <ul>
                                    {sortedPendingQuestions.map(({ question }, index) => (
                                        <li className='etapas-pendentes' key={index}>{formatQuestion(question)}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </>
                )}
            </div>

            <button onClick={onBack}>Responder novamente</button>
        </div>
    );
};

export default Results;
