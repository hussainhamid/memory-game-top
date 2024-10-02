import { useEffect, useState } from "react";
import FetchPokemonData from "./fetchPokemonData";

const pokemonArr = [
  { name: "pikachu" },
  { name: "charmander" },
  { name: "bulbasaur" },
  { name: "squirtle" },
  { name: "charizard" },
  { name: "venusaur" },
  { name: "blastoise" },
  { name: "mew" },
  { name: "mewtwo" },
  { name: "eevee" },
];

function shuffle(arr) {
  let currentIndex = arr.length;

  while (currentIndex !== 0) {
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [arr[currentIndex], arr[randomIndex]] = [
      arr[randomIndex],
      arr[currentIndex],
    ];
  }

  return arr;
}

function Card({ handleScore }) {
  const [pokemonData, setPokemonData] = useState([]);
  const [pokemonCardClicked, setPokemonCardClicked] = useState([]);

  useEffect(() => {
    const fetchAllPokemon = async () => {
      try {
        const dataPromises = pokemonArr.map((pokemon) =>
          FetchPokemonData(pokemon.name)
        );
        const result = await Promise.all(dataPromises);
        setPokemonData(result);
      } catch (err) {
        console.error("error comes from card.jsx", err);
      }
    };

    fetchAllPokemon();
  }, []);

  function handleClick(pokemon) {
    if (pokemonCardClicked.includes(pokemon.id)) {
      handleScore(false);
      alert("Game over");
      setPokemonCardClicked([]);
    } else {
      handleScore(true);
      setPokemonCardClicked([...pokemonCardClicked, pokemon.id]);
      setPokemonData((prev) => shuffle([...prev]));
    }
  }

  return (
    <div className="pokemon-container">
      {pokemonData.map((pokemon) => (
        <div
          key={pokemon.id}
          className="pokemon-card"
          onClick={() => handleClick(pokemon)}
        >
          <h4>{pokemon.name + pokemon.name.slice(1)}</h4>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        </div>
      ))}
    </div>
  );
}

export default Card;
