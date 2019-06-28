import { RECEIVE_ALL_POKEMON, RECEIVE_ONE_POKEMON } from '../actions/pokemon_actions';

const pokemonReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_POKEMON:
      const newState = Object.assign({}, action.pokemon);
      return newState;
    case RECEIVE_ONE_POKEMON:
      return action.pokemon;
    default:
      return state;
  }
}

export default pokemonReducer;