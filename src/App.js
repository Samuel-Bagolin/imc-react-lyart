import React, { useState } from 'react';
import './App.css';

function App() {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [imc, setImc] = useState(null);
  const [classification, setClassification] = useState('');

  const calculateIMC = () => {
    if (!height || !weight || height <= 0 || weight <= 0) {
      alert('Por favor, insira valores válidos para altura e peso.');
      return;
    }
    
    const heightInMeters = height / 100;
    const calculatedIMC = weight / (heightInMeters * heightInMeters);
    const roundedIMC = parseFloat(calculatedIMC.toFixed(2));
    
    setImc(roundedIMC);
    
    // Classificação
    if (roundedIMC < 18.5) {
      setClassification('Abaixo do peso');
    } else if (roundedIMC < 24.9) {
      setClassification('Peso normal');
    } else if (roundedIMC < 29.9) {
      setClassification('Sobrepeso');
    } else if (roundedIMC < 34.9) {
      setClassification('Obesidade Grau I');
    } else if (roundedIMC < 39.9) {
      setClassification('Obesidade Grau II');
    } else {
      setClassification('Obesidade Grau III');
    }
  };

  const resetForm = () => {
    setHeight('');
    setWeight('');
    setImc(null);
    setClassification('');
  };

  return (
    <div className="app">
      <header className="header">
        <h1>Calculadora de IMC</h1>
        <p>Calcule seu Índice de Massa Corporal</p>
      </header>
      
      <main className="main-container">
        <div className="calculator-section">
          <div className="form-container">
            <div className="form-group">
              <label htmlFor="height">Altura (cm)</label>
              <input
                id="height"
                type="number"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                placeholder="Ex: 175"
                min="1"
                max="300"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="weight">Peso (kg)</label>
              <input
                id="weight"
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                placeholder="Ex: 70"
                min="1"
                max="300"
              />
            </div>
            
            <div className="button-group">
              <button onClick={calculateIMC} className="btn btn-calculate">
                Calcular IMC
              </button>
              <button onClick={resetForm} className="btn btn-reset">
                Limpar
              </button>
            </div>
          </div>
          
          {imc && (
            <div className="result-container">
              <h2>Seu Resultado</h2>
              <div className="result-card">
                <div className="imc-value">
                  <span className="value">{imc}</span>
                  <span className="label">IMC</span>
                </div>
                <div className="result-details">
                  <div className="detail-row">
                    <span className="detail-label">Altura:</span>
                    <span className="detail-value">{height} cm</span>
                  </div>
                  <div className="detail-row">
                    <span className="detail-label">Peso:</span>
                    <span className="detail-value">{weight} kg</span>
                  </div>
                  <div className="detail-row">
                    <span className="detail-label">Classificação:</span>
                    <span className="detail-value classification">{classification}</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        
        <div className="table-section">
          <div className="table-container">
            <h2>Classificação do IMC</h2>
            <div className="classification-table">
              <div className="table-row header">
                <div className="table-cell">IMC</div>
                <div className="table-cell">Classificação</div>
              </div>
              <div className="table-row">
                <div className="table-cell">&lt; 18.5</div>
                <div className="table-cell">Abaixo do peso</div>
              </div>
              <div className="table-row">
                <div className="table-cell">18.5 - 24.9</div>
                <div className="table-cell">Peso normal</div>
              </div>
              <div className="table-row">
                <div className="table-cell">25 - 29.9</div>
                <div className="table-cell">Sobrepeso</div>
              </div>
              <div className="table-row">
                <div className="table-cell">30 - 34.9</div>
                <div className="table-cell">Obesidade Grau I</div>
              </div>
              <div className="table-row">
                <div className="table-cell">35 - 39.9</div>
                <div className="table-cell">Obesidade Grau II</div>
              </div>
              <div className="table-row">
                <div className="table-cell">≥ 40</div>
                <div className="table-cell">Obesidade Grau III</div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <footer className="footer">
        <p>IMC é uma referência, mas não determina sozinho sua saúde. Consulte um profissional.</p>
      </footer>
    </div>
  );
}

export default App;
