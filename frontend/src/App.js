import React from 'react';
import { Router } from 'react-router-dom';
// config
import './config/ReactotronConfig';
import history from './services/history';
// routes
import Routes from './routes';
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
