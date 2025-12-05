import React from 'react';

const ResultIMC = ({ imcData }) => {
  return (
    <div className="result-container">
      <h2>Seu Resultado</h2>
      
      <div className="result-card">
        <div className="imc-value">
          <span className="value">{imcData.imc}</span>
          <span className="label">IMC</span>
        </div>
        
        <div className="result-details">
          <div className="detail-row">
            <span className="detail-label">Altura:</span>
            <span className="detail-value">{imcData.height} cm</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">Peso:</span>
            <span className="detail-value">{imcData.weight} kg</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">Classificação:</span>
            <span 
              className="detail-value classification"
              style={{ color: imcData.classificationColor }}
            >
              {imcData.classification}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultIMC;
