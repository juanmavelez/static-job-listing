import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './container/App';
import { Provider } from 'react-redux';
import { store } from './store/configureStore';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('App')
);
