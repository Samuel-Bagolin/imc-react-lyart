import React, { useState } from 'react';

const FormIMC = ({ onSubmit, onReset }) => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    
    if (!height || height <= 0) {
      newErrors.height = 'Altura inválida. Use valores positivos.';
    } else if (height > 300) {
      newErrors.height = 'Altura muito alta. Use valores em centímetros.';
    }
    
    if (!weight || weight <= 0) {
      newErrors.weight = 'Peso inválido. Use valores positivos.';
    } else if (weight > 300) {
      newErrors.weight = 'Peso muito alto. Use valores em quilogramas.';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      onSubmit(parseFloat(height), parseFloat(weight));
    }
  };

  const handleReset = () => {
    setHeight('');
    setWeight('');
    setErrors({});
    onReset();
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="imc-form">
        <div className="form-group">
          <label htmlFor="height">
            Altura (cm)
          </label>
          <input
            id="height"
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            placeholder="Ex: 175"
            min="1"
            max="300"
            step="0.1"
            className={errors.height ? 'input-error' : ''}
          />
          {errors.height && <span className="error-message">{errors.height}</span>}
        </div>
        
        <div className="form-group">
          <label htmlFor="weight">
            Peso (kg)
          </label>
          <input
            id="weight"
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder="Ex: 70"
            min="1"
            max="300"
            step="0.1"
            className={errors.weight ? 'input-error' : ''}
          />
          {errors.weight && <span className="error-message">{errors.weight}</span>}
        </div>
        
        <div className="button-group">
          <button type="submit" className="btn btn-calculate">
            Calcular IMC
          </button>
          <button type="button" onClick={handleReset} className="btn btn-reset">
            Limpar
          </button>
        </div>
      </form>
      
      <div className="form-info">
        <p>Preencha sua altura em centímetros e peso em quilogramas.</p>
        <p>O IMC será calculado automaticamente.</p>
      </div>
    </div>
  );
};

export default FormIMC;
