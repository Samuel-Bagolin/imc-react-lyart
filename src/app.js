import React, { useState } from 'react';
import FormIMC from './components/FormIMC';
import ResultIMC from './components/ResultIMC';
import ClassificationTable from './components/ClassificationTable';
import './App.css';

function App() {
  const [imcData, setImcData] = useState({
    imc: null,
    classification: '',
    height: '',
    weight: ''
  });

  const calculateIMC = (height, weight) => {
    if (!height || !weight || height <= 0 || weight <= 0) {
      return null;
    }
    
    const heightInMeters = height / 100;
    const imc = weight / (heightInMeters * heightInMeters);
    return parseFloat(imc.toFixed(2));
  };

  const getClassification = (imc) => {
    if (imc < 18.5) return { classification: 'Abaixo do peso', color: '#4dabf7' };
    if (imc < 24.9) return { classification: 'Peso normal', color: '#51cf66' };
    if (imc < 29.9) return { classification: 'Sobrepeso', color: '#ffd43b' };
    if (imc < 34.9) return { classification: 'Obesidade Grau I', color: '#ff922b' };
    if (imc < 39.9) return { classification: 'Obesidade Grau II', color: '#ff6b6b' };
    return { classification: 'Obesidade Grau III', color: '#fa5252' };
  };

  const handleFormSubmit = (height, weight) => {
    const imc = calculateIMC(height, weight);
    
    if (imc) {
      const classificationData = getClassification(imc);
      setImcData({
        imc,
        classification: classificationData.classification,
        classificationColor: classificationData.color,
        height,
        weight
      });
    } else {
      setImcData({
        imc: null,
        classification: '',
        height: '',
        weight: ''
      });
    }
  };

  const handleReset = () => {
    setImcData({
      imc: null,
      classification: '',
      height: '',
      weight: ''
    });
  };

  return (
    <div className="app">
      <header className="header">
        <h1>Calculadora de IMC</h1>
        <p>Calcule seu Índice de Massa Corporal</p>
      </header>
      
      <main className="main-container">
        <div className="calculator-section">
          <FormIMC onSubmit={handleFormSubmit} onReset={handleReset} />
          {imcData.imc && <ResultIMC imcData={imcData} />}
        </div>
        
        <div className="table-section">
          <ClassificationTable currentIMC={imcData.imc} />
        </div>
      </main>
      
      <footer className="footer">
        <p>IMC é uma referência, mas não determina sozinho sua saúde. Consulte um profissional.</p>
      </footer>
    </div>
  );
}

export default App;
