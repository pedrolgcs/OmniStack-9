/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import api from '../../services/api';

import { Container } from './styles';

export default function Login({ history }) {
  const [email, setEmail] = useState('');

  const handleSubmit = useCallback(
    async e => {
      e.preventDefault();
      const { data } = await api.post('/sessions', {
        email,
      });
      const { _id } = data;
      localStorage.setItem('user', _id);
      history.push('/dashboard');
    },
    [email, history]
  );

  return (
    <Container>
      <p>
        Ofereça <strong>spots</strong> para programadores e encontre
        <strong>talentos para sua empresa</strong>
      </p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">e-mail *</label>
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          id="email"
          placeholder="Seu melhor e-mail"
        />
        <button type="submit">Entrar</button>
      </form>
    </Container>
  );
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};
