import React from "react";

const poke_num = 890;

const getPokemon = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const res = await fetch(url);
  return await res.json();
};

const fetchPokemon = async () => {
  const pokemonPromises = [];
  for (let i = 1; i <= poke_num; i++) {
    pokemonPromises.push(getPokemon(i));
  }
  return await Promise.all(pokemonPromises);
};

class PokemonContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: [],
    };
  }

  async componentDidMount() {
    const pokemon = await fetchPokemon();
    this.setState({ pokemon });
  }

  render() {
    return (
      <div className="pokecontainer">
        {this.state.pokemon.map((pokemon) => (
          <div key={pokemon.id} className="pokemon">
            {/* Add elements here to display the pokemon data */}
          </div>
        ))}
      </div>
    );
  }
}

export default PokemonContainer;
