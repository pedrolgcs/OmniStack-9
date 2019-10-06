/* eslint-disable no-underscore-dangle */
/* eslint-disable react-native/no-inline-styles */
import React, { useState, useEffect } from 'react';
import { withNavigation } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';
import api from '~/services/api';

import {
  Container, Title, Bold, List, ListItem, Image, Company, Price, Submit,
} from './styles';

function SpotList({ tech, last, navigation }) {
  const [spots, setSpots] = useState([]);

  useEffect(() => {
    async function loadSpots() {
      const response = await api.get('/spots', {
        params: { tech },
      });
      setSpots(response.data);
    }

    loadSpots();
  }, []);

  function handleNavigate(id) {
    navigation.navigate('Book', { id });
  }

  return (
    <Container last={last}>
      <Title>
        Empresas que usam <Bold>{tech}</Bold>
      </Title>
      <List
        data={spots}
        keyExtractor={(spot) => spot.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <ListItem>
            <Image source={{ uri: 'https://unsplash.it/400/400?image=1' }} />
            <Company>{item.company}</Company>
            <Price>{item.price ? `R$${item.price}/dia` : 'GRATUITO'}</Price>
            <Submit onPress={() => handleNavigate(item._id)}>
              <Icon name="done" size={20} color="#fff" />
            </Submit>
          </ListItem>
        )}
      />
    </Container>
  );
}

SpotList.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
  tech: PropTypes.string.isRequired,
  last: PropTypes.bool,
};

SpotList.defaultProps = {
  last: false,
};

export default withNavigation(SpotList);
