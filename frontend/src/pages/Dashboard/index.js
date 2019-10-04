/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '~/services/api';

import { formatPreci } from '~/utils/format';

import { SpotList } from './styles';

export default function Dashboard() {
  const [spots, setSpots] = useState([]);

  useEffect(() => {
    async function loadSpots() {
      const userId = localStorage.getItem('user');
      const response = await api.get('/dashboard', {
        headers: { user_id: userId },
      });

      const data = response.data.map(spot => ({
        ...spot,
        priceFormatted: formatPreci(spot.price),
      }));

      setSpots(data);
    }
    loadSpots();
  }, []);
  return (
    <>
      <SpotList>
        {spots.map(spot => (
          <li key={spot._id}>
            <header style={{ backgroundImage: `url(${spot.thumbnail_url})` }} />
            <strong>{spot.company}</strong>
            <span>{spot.priceFormatted}/dia</span>
          </li>
        ))}
      </SpotList>
      <Link to="/new">
        <button type="button">Cadastrar novo spot</button>
      </Link>
    </>
  );
}
