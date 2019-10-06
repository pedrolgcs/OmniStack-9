import React, { useState } from 'react';
import { Alert } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-community/async-storage';

import api from '~/services/api';

import {
  Container, Label, Input, Submit, SubmitCancell,
} from './styles';

export default function Book({ navigation }) {
  const [data, setDate] = useState('');
  const id = navigation.getParam('id');

  async function handleSubmit() {
    const user_id = await AsyncStorage.getItem('user');
    await api.post(`/spots/${id}/bookings`, { date: data }, { headers: { user_id } });

    Alert.alert('Solicitação de reserva enviada');
    navigation.navigate('Dashboard');
  }

  function handleCancel() {
    navigation.navigate('Dashboard');
  }

  return (
    <Container>
      <Label>Data de Interesse</Label>
      <Input
        placeholder="Qual data você quer reservar?"
        placeholderTextColor="#999"
        autoCapitalize="words"
        autoCorrect={false}
        value={data}
        onChangeText={setDate}
      />
      <Submit onPress={handleSubmit}>
        <Icon name="add" size={20} color="#fff" />
      </Submit>
      <SubmitCancell onPress={handleCancel}>
        <Icon name="cancel" size={20} color="#fff" />
      </SubmitCancell>
    </Container>
  );
}

Book.propTypes = {
  navigation: PropTypes.shape({
    getParam: PropTypes.func,
    navigate: PropTypes.func,
  }).isRequired,
};
