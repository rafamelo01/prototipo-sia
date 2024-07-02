import React from 'react';
import maturidadeImage from '../utils/maturidade.png'; // Importe a imagem

const Results = ({ totalScore, categoryScores, maturityLevel, onBack }) => {
    return (
        <div className='result-section'>
            <h2>Resultados</h2>
            <p>Nível de maturidade da organização: {maturityLevel}</p>
            <p>Pontuação total: {totalScore}</p>

            <h3>Pontuação por categoria:</h3>

            <ul>
                {Object.entries(categoryScores).map(([category, score]) => (
                    <li key={category}>{category}: {score}</li>
                ))}
            </ul>

            <h3>Etapas por nível de maturidade:</h3>
            <img
                src={maturidadeImage}
                alt="Descrição da imagem"
                style={{ maxWidth: '100%', height: 'auto' }} // Define um tamanho máximo de largura e altura automática
            />
            <h3>Correlação pontuação / nível de maturidade</h3>
            <p>0 - 53 (Nível 1)</p>
            <p>54 - 94 (Nível 2)</p>
            <p>95 - 130 (Nível 3)</p>
            <p>131 - 160 (Nível 4)</p>
            <p>161 - 171 (Nível 5)</p>
            <button onClick={onBack}>Responder novamente</button>

        </div>
    );
};

export default Results;
