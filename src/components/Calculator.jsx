import { useState } from 'react';
import CalculationResult from './CalculationResult';

function Calculator() {
  // Atskiros useState būsenos įvestims, veiksmui, rezultatui ir klaidai
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [operation, setOperation] = useState('+');
  const [result, setResult] = useState(null); // null atskiria neatliktą skaičiavimą nuo 0
  const [errorMessage, setErrorMessage] = useState('');

  // Skaičiavimo funkcija
  const handleCalculate = () => {
    // 1. Patikriname, ar laukai nėra tušti
    if (num1.trim() === '' || num2.trim() === '') {
      setErrorMessage('Prašome užpildyti abu skaičių laukus.');
      setResult(null); // Klaidos atveju ankstesnio rezultato nerodome
      return;
    }

    // 2. Paverčiame įvestis į skaičius (palaiko ir trupmeninius)
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    if (isNaN(n1) || isNaN(n2)) {
      setErrorMessage('Įvestos reikšmės nėra tinkami skaičiai.');
      setResult(null);
      return;
    }

    // 3. Patikriname dalybą iš nulio
    if (operation === '/' && n2 === 0) {
      setErrorMessage('Dalyba iš nulio negalima.');
      setResult(null);
      return;
    }

    // 4. Atliekame veiksmą
    let res = 0;
    switch (operation) {
      case '+':
        res = n1 + n2;
        break;
      case '-':
        res = n1 - n2;
        break;
      case '*':
        res = n1 * n2;
        break;
      case '/':
        res = n1 / n2;
        break;
      default:
        res = 0;
    }

    // Išvalome klaidą ir nustatome rezultatą
    setErrorMessage('');
    // Suapvaliname slankiojo kablelio paklaidas (pvz. 0.1 + 0.2)
    setResult(Number(res.toFixed(8)));
  };

  // Papildomai: Išvalymo funkcija
  const handleReset = () => {
    setNum1('');
    setNum2('');
    setOperation('+');
    setResult(null);
    setErrorMessage('');
  };

  const containerStyle = {
    border: '1px solid #e0e0e0',
    borderRadius: '10px',
    padding: '20px',
    backgroundColor: '#ffffff',
    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.05)',
    textAlign: 'left'
  };

  const inputStyle = {
    padding: '8px 12px',
    fontSize: '16px',
    borderRadius: '6px',
    border: '1px solid #ccc',
    margin: '6px 0 14px',
    width: '100%',
    boxSizing: 'border-box'
  };

  const selectStyle = {
    padding: '8px 12px',
    fontSize: '16px',
    borderRadius: '6px',
    border: '1px solid #ccc',
    margin: '6px 0 14px',
    width: '100%',
    boxSizing: 'border-box',
    backgroundColor: '#fff'
  };

  const buttonStyle = {
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
    borderRadius: '6px',
    border: 'none',
    backgroundColor: '#1976d2',
    color: '#ffffff',
    fontWeight: 'bold',
    marginRight: '10px'
  };

  const resetButtonStyle = {
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
    borderRadius: '6px',
    border: '1px solid #ccc',
    backgroundColor: '#f5f5f5',
    color: '#333'
  };

  return (
    <div style={containerStyle}>
      <div>
        <label htmlFor="calc-num1" style={{ fontWeight: 'bold', color: '#444' }}>
          Pirmas skaičius:
        </label>
        <input
          id="calc-num1"
          type="number"
          step="any"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
          placeholder="Įveskite pirmą skaičių"
          style={inputStyle}
        />
      </div>

      <div>
        <label htmlFor="calc-op" style={{ fontWeight: 'bold', color: '#444' }}>
          Veiksmas:
        </label>
        <select
          id="calc-op"
          value={operation}
          onChange={(e) => setOperation(e.target.value)}
          style={selectStyle}
        >
          <option value="+">Sudėtis (+)</option>
          <option value="-">Atimtis (−)</option>
          <option value="*">Daugyba (×)</option>
          <option value="/">Dalyba (÷)</option>
        </select>
      </div>

      <div>
        <label htmlFor="calc-num2" style={{ fontWeight: 'bold', color: '#444' }}>
          Antras skaičius:
        </label>
        <input
          id="calc-num2"
          type="number"
          step="any"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
          placeholder="Įveskite antrą skaičių"
          style={inputStyle}
        />
      </div>

      <div style={{ marginTop: '6px' }}>
        <button style={buttonStyle} onClick={handleCalculate}>
          Skaičiuoti
        </button>
        <button style={resetButtonStyle} onClick={handleReset}>
          Išvalyti
        </button>
      </div>

      {/* Klaidos pranešimas */}
      {errorMessage && (
        <div style={{
          marginTop: '16px',
          padding: '12px 16px',
          backgroundColor: '#ffebee',
          border: '1px solid #ef5350',
          borderRadius: '8px',
          color: '#c62828',
          fontWeight: 'bold'
        }}>
          {errorMessage}
        </div>
      )}

      {/* Rezultato komponentas (rodomas per props, įskaitant atvejį, kai result === 0) */}
      {!errorMessage && <CalculationResult result={result} />}
    </div>
  );
}

export default Calculator;
