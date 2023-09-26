import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import configureStore from ""
import reducer from './Store/reducer';
import {Provider} from "react-redux"

let store = configureStore({reducer: reducer})
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App/> 
    </Provider>      
  </React.StrictMode>
);


