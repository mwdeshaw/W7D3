import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { HashRouter, Route } from 'react-router-dom';

// import { fetchOnePokemon } from './utils/api_util';
import { requestOnePokemon } from './actions/pokemon_actions';
// import ItemsReducer from


document.addEventListener('DOMContentLoaded', () => {
  const rootEl = document.getElementById('root');
  const store = configureStore();
  
  // window.requestOnePokemon = requestOnePokemon;
  // window.dispatch = store.dispatch;
  // window.getState = store.getState;


  ReactDOM.render(<Root store={store}/>, rootEl);
});