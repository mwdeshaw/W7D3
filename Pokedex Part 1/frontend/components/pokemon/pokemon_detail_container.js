import { connect } from 'react-redux';
import { requestOnePokemon } from '../../actions/pokemon_actions';
import { selectOnePokemon } from '../../reducers/selectors';
import PokemonDetail from './pokemon_detail';


const mapStateToProps = (state, ownProps) => {
  let newId = Number(ownProps.match.params.id);
  return ({
    pokemon: selectOnePokemon(state, newId)
  });
};

const mapDispatchToProps = dispatch => ({
  requestOnePokemon: (id) => dispatch(requestOnePokemon(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonDetail);