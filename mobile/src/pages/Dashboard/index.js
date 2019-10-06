/* eslint-disable react-native/no-inline-styles */
import React, { useState, useEffect, useMemo } from 'react';
import { ScrollView } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import SpotList from '~/components/SpotList';

import logo from '~/assets/logo.png';
import { Container, Logo } from './styles';

export default function Dashboard() {
  const [techs, setTechs] = useState([]);

  useEffect(() => {
    AsyncStorage.getItem('techs').then((storagedTechs) => {
      const techsArray = storagedTechs.split(',').map((tech) => tech.trim());
      setTechs(techsArray);
    });
  }, []);

  const techSize = useMemo(() => techs.length - 1);

  return (
    <Container>
      <Logo source={logo} />
      <ScrollView>
        {techs.map((tech, index) => (
          <SpotList key={tech} tech={tech} last={index === techSize} />
        ))}
      </ScrollView>
    </Container>
  );
}
