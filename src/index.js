import React, { StrictMode } from 'react';
import ReactDOM  from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import store from './ReduxToolkit/Store'
import "bootstrap/dist/css/bootstrap.min.css";
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <StrictMode>
      <Provider store={store}>
         <App/>
      </Provider>
  </StrictMode>
)