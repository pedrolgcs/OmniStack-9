/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '~/services/api';

import {
  Container, Logo, Span, Form, Email, Techs, Submit,
} from './styles';
import logo from '../../assets/logo.png';

export default function SignIn({ navigation }) {
  const [email, setEmail] = useState('');
  const [techs, setTechs] = useState('');

  useEffect(() => {
    AsyncStorage.getItem('user').then((user) => {
      console.tron.log(user);
      if (user) {
        navigation.navigate('Dashboard');
      }
    });
  }, []);

  async function handleSubmit() {
    const response = await api.post('/sessions', { email });
    const { _id } = response.data;

    Promise.all([AsyncStorage.setItem('user', _id), AsyncStorage.setItem('techs', techs)]);

    navigation.navigate('Dashboard');
  }

  return (
    <Container>
      <Logo source={logo} />
      <Form>
        <Span>Seu e-mail *</Span>
        <Email
          placeholder="Seu e-mail"
          placeholderTextColor="#999"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          value={email}
          onChangeText={setEmail}
        />
        <Span>Tecnologias *</Span>
        <Techs
          placeholder="Tecnologias de interesse"
          placeholderTextColor="#999"
          autoCapitalize="words"
          autoCorrect={false}
          value={techs}
          onChangeText={setTechs}
        />
        <Submit onPress={handleSubmit}>
          <Icon name="search" size={20} color="#fff" />
        </Submit>
      </Form>
    </Container>
  );
}

SignIn.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};
