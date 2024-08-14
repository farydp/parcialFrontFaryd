function Card({ name, animal }) {
  return (
    <div className="card">
      <h2>Bemvindo meu amigo:</h2>
      <p> {name} !</p>
      <p>Seu animal preferido é: {animal}</p>
    </div>
  );
}

export default Card;