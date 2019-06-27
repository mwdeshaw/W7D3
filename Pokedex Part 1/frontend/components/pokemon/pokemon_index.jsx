import React from 'react';

class PokemonIndex extends React.Component{
  constructor(props) {
    super(props);
    // this.state = {
    //   pokemon: []
    // };
  };

  componentDidMount() {
    const allPokemon = this.props.requestAllPokemon();
    // this.setState({ pokemon: allPokemon });
  }
    

  render() {
    if (!this.props.pokemon.length) {
      return null;

    };
    
      const pokeList = this.props.pokemon.map((poke, idx) => {
        return (
          <li
            key={idx}
          >
            {poke.name}
            <img src={poke.image_url}/>
          </li>
        );
      });

      return (
      <div className='pokemonIndex'>
        <h1>Pokedex</h1>
        <ul className='pokemon-list'>
          {pokeList}
        </ul>
      </div>
    );  
  };

}

export default PokemonIndex;