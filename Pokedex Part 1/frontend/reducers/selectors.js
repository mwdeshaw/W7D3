export const selectAllPokemon = (state) => {
  return Object.values(state.entities.pokemon);
};

export const selectOnePokemon = (state, id) => {
  return state.entities.pokemon[id];
}