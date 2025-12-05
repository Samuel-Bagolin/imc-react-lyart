import React from 'react';

const ClassificationTable = ({ currentIMC }) => {
  const classifications = [
    { min: 0, max: 18.5, classification: 'Abaixo do peso', color: '#4dabf7' },
    { min: 18.5, max: 24.9, classification: 'Peso normal', color: '#51cf66' },
    { min: 25, max: 29.9, classification: 'Sobrepeso', color: '#ffd43b' },
    { min: 30, max: 34.9, classification: 'Obesidade Grau I', color: '#ff922b' },
    { min: 35, max: 39.9, classification: 'Obesidade Grau II', color: '#ff6b6b' },
    { min: 40, max: 100, classification: 'Obesidade Grau III', color: '#fa5252' }
  ];

  const isCurrentIMCInRange = (min, max) => {
    return currentIMC && currentIMC >= min && currentIMC <= max;
  };

  return (
    <div className="table-container">
      <h2>Classificação do IMC</h2>
      <div className="table-info">
        <p>Tabela de referência da Organização Mundial da Saúde</p>
      </div>
      
      <div className="classification-table">
        <div className="table-header">
          <div className="table-cell">IMC</div>
          <div className="table-cell">Classificação</div>
          <div className="table-cell">Situação</div>
        </div>
        
        {classifications.map((item, index) => (
          <div 
            key={index} 
            className={`table-row ${isCurrentIMCInRange(item.min, item.max) ? 'current' : ''}`}
            style={isCurrentIMCInRange(item.min, item.max) ? { backgroundColor: `${item.color}15` } : {}}
          >
            <div className="table-cell">
              <span className="imc-range">
                {item.min === 0 ? `< ${item.max}` : 
                 item.max === 100 ? `≥ ${item.min}` : 
                 `${item.min} - ${item.max}`}
              </span>
            </div>
            <div className="table-cell">
              <span 
                className="classification-badge" 
                style={{ backgroundColor: item.color }}
              >
                {item.classification}
              </span>
            </div>
            <div className="table-cell">
              {isCurrentIMCInRange(item.min, item.max) ? (
                <span className="current-indicator">Seu IMC está aqui</span>
              ) : (
                <span className="status-indicator">-</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClassificationTable;
