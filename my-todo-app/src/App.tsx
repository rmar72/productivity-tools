import React from 'react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import Home from './pages/Home';

const App = () => (
  <Provider store={store}>
    <Home />
  </Provider>
);

export default App;
