import React from 'react';
import PokemonIndexItem from './pokemon_index_item';
import PokemonDetailContainer from './pokemon_detail_container';
import { Route } from 'react-router-dom';


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
      const pokeList = this.props.pokemon.map(poke => (
        <PokemonIndexItem
          key={poke.id}
          pokemon={poke}
        />
      ));
      return (
      <div className='pokemonIndex'>
        <h1>Pokedex</h1>
        <ul className='pokemon-list'>
          {pokeList}
        </ul>
          <Route path='/pokemon/:id' component={PokemonDetailContainer} />
      </div>
    );  
  };

}

export default PokemonIndex;