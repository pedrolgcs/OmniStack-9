/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

import { Container, Content } from './styles';
import logo from '../../assets/logo.svg';

export default function Login() {
  return (
    <Container>
      <img src={logo} alt="AirCnC" />
      <Content>
        <p>
          Ofereça <strong>spots</strong> para programadores e encontre
          <strong>talentos para sua empresa</strong>
        </p>
        <form>
          <label htmlFor="email">e-mail *</label>
          <input type="email" id="email" placeholder="Seu melhor e-mail" />
          <button type="submit">Entrar</button>
        </form>
      </Content>
    </Container>
  );
}
