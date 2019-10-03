import React from 'react';
import { Router } from 'react-router-dom';
// config
import './config/ReactotronConfig';
// routes
import Routes from './routes';
import history from './services/history';
// styles
import GlobalStyle from './styles/global';

function App() {
  return (
    <Router history={history}>
      <GlobalStyle />
      <Routes />
    </Router>
  );
}

export default App;
