import React from 'react';
import maturidadeImage from '../utils/maturidade.png'; // Importe a imagem
import '../App.css'; // Importe o arquivo CSS para os estilos

const Results = ({ totalScore, categoryScores, maturityLevel, onBack }) => {
    // Função para calcular a posição da régua
    const calculatePosition = (score) => {
        if (score <= 53) return (score / 53) * 20;
        if (score <= 94) return 20 + ((score - 54) / (94 - 54)) * 20;
        if (score <= 130) return 40 + ((score - 95) / (130 - 95)) * 20;
        if (score <= 160) return 60 + ((score - 131) / (160 - 131)) * 20;
        if (score <= 171) return 80 + ((score - 161) / (171 - 161)) * 20;
        return 0; // Caso a pontuação esteja fora do intervalo esperado
    };

    return (
        <div className='result-section'>
            <h2>Resultados</h2>
            <p>Nível de maturidade da organização: <strong>{maturityLevel}</strong></p>
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
                alt="Descrição da imagem"
                style={{ maxWidth: '100%', height: 'auto' }} // Define um tamanho máximo de largura e altura automática
            />

            <h3>Regua de referência pontuação / nível de maturidade</h3>
            <div className="ruler">
                <div className="ruler-level level-1">0 - 53 (Nível 1)</div>
                <div className="ruler-level level-2">54 - 94 (Nível 2)</div>
                <div className="ruler-level level-3">95 - 130 (Nível 3)</div>
                <div className="ruler-level level-4">131 - 160 (Nível 4)</div>
                <div className="ruler-level level-5">161 - 171 (Nível 5)</div>
                <div className="ruler-indicator" style={{ left: `${calculatePosition(totalScore)}%` }}></div>
            </div>

            <button onClick={onBack}>Responder novamente</button>
        </div>
    );
};

export default Results;
