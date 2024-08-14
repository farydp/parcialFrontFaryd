import './App.css';
import { useState } from 'react';
import Card from './Components/Card';

function App() {
  const [name, setName] = useState('');
  const [animal, setAnimal] = useState('');
  const [error, setError] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleAnimalChange = (event) => {
    setAnimal(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validaciones
    if (name.trim().length < 3 || name.startsWith(' ') || animal.trim().length < 6) {
      setError(true);
      setSubmitted(false);
    } else {
      setError(false);
      setSubmitted(true);
    }
  };

  return (
    <div>
      <h1>Animais</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome:</label>
          <input type="text" value={name} onChange={handleNameChange} />
        </div>
        <div>
          <label>Qual é o seu animal favorito (mais de 6 letras):</label>
          <input type="text" value={animal} onChange={handleAnimalChange} />
        </div>
        <button type="submit">Enviar</button>
      </form>
      
      {error && <p>Por favor chequea que la información sea correctaaaa.</p>}
      
      {submitted && !error && <Card name={name} animal={animal} />}
    </div>
  );
}

export default App;