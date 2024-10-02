export default async function FetchPokemonData(pokemonName) {
  try {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}/`;

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`response not okay ${response.status}`);
    }
    const data = response.json();
    console.log(data);
  } catch (err) {
    console.error(`error for ${pokemonName}: `, err);

    return {
      id: Math.random(),
      name: pokemonName,
    };
  }
}
