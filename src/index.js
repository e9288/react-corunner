import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {FilterableProductTable} from "./pages/FilterableProductTable";

ReactDOM.render(
  /*
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  */
  //<Provider store={store}><App /></Provider>,
  <FilterableProductTable></FilterableProductTable>, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
