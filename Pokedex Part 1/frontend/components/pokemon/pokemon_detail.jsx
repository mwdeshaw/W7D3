import React from 'react';
import { Route } from 'react-router-dom';
import PokemonIndexItem from './pokemon_index_item';

class PokemonDetail extends React.Component {
  constructor(props) {
    super(props);
  };

  componentDidMount() {
    this.props.requestOnePokemon(this.props.match.params.id)
  };

  render() {
    if (this.props.pokemon === undefined) {
      return null;
    }

    return(
      <div>
        <li key={this.props.pokemon.id}>
          <img src={this.props.pokemon.image_url} />
          <h2>{this.props.pokemon.name}</h2>
            <h2>{this.props.pokemon.name}</h2>
            <p>Type: {this.props.pokemon.type} </p>
            <p>Attack: {this.props.pokemon.attack} </p>
            <p>Defense: {this.props.pokemon.defense} </p>
            <p>Moves: {this.props.pokemon.moves} </p>
            <p>Items: {this.props.pokemon.items} </p>
        </li>
        {/* <Route path='/pokemon' component={} /> */}
        
      </div>
    )
  };


}

// should have a route in here

export default PokemonDetail;