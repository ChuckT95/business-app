import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

const initialState = {
  loggedin: false,
  cart: [],
  username: '',
  showmodal: false
}
function reducer(state = initialState, action){
  switch (action.type){
  case "LOGIN":
    return{
    loggedin: true,
    username: action.payload
    }

  case "LOGOUT":
    return{
    loggedin: false,
    username: ''
    }
  case "MODALCLICKON":
      return{showmodal: true}
  case "MODALCLICKOFF":
      return{showmodal: false}   
  default:
     return state;
}
}
const store = createStore(reducer);




ReactDOM.render(
  <Provider store = {store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
