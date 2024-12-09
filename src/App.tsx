import './App.css';
import { useState } from 'react';
import Card from "./components/Card/Card";


const pokemons: { title: string; type: string }[] = [
  {
    title: "Pikachu",
    type: "electric",
  },
  {
    title: "Carapuce",
    type: "water",
  },
  {
    title: "Salamèche",
    type: "fire",
  },
  {
    title: "Léviathan",
    type: "water",
  },
  {
    title: "Salamèche",
    type: "fire",
  },
  {
    title: "Alakazam",
    type: "psychic",
  },
  {
    title: "Mewtwo",
    type: "psychic",
  },
  {
    title: "Dracaufeu",
    type: "fire",
  },
  {
    title: "Carapuce",
    type: "water",
  },
];

function App() {
  const [cardCount, setCardCount] = useState(0);
  const [selectedType, setSelectedType] = useState("all");
  return (
    <>
      <h1> Mon tracker Pokemon TGCP</h1>
      <span className="counter">
        Nombre de cartes dans ma collection : {cardCount}
      </span>
      <ul>
        <li>
          <button onClick={() => setSelectedType("all")}>Tout</button>
        </li>
        <li>
          <button onClick={() => setSelectedType("electric")}>Electrique</button>
        </li>
        <li>
          <button onClick={() => setSelectedType("water")}>Eau</button>
        </li>
        <li>
          <button onClick={() => setSelectedType("fire")}>Feu</button>
        </li>
        <li>
          <button onClick={() => setSelectedType("psychic")}>Psy</button>
        </li>
      </ul>
      <ul className="list">
        {pokemons.map((pokemon, index) => (
          <Card
            title={pokemon.title}
            imageSrc={"./pokemon/" + (1 + index) + ".png"}
            setCount={setCardCount}
            show={selectedType === pokemon.type || selectedType === "all"}

          />
        ))}
      </ul>
    </>
  )
}

export default App;
