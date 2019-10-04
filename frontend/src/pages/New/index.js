/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import api from '~/services/api';
import { Container, ImageLabel } from './styles';
import camera from '~/assets/camera.svg';

export default function New({ history }) {
  const [thumbnail, setThumbnail] = useState(null);
  const [company, setCompany] = useState('');
  const [techs, setTechs] = useState('');
  const [price, setPrice] = useState('');

  const previw = useMemo(() => {
    return thumbnail ? URL.createObjectURL(thumbnail) : null;
  }, [thumbnail]);

  async function handleSubmit(e) {
    e.preventDefault();
    const data = new FormData();
    const userId = localStorage.getItem('user');

    data.append('thumbnail', thumbnail);
    data.append('company', company);
    data.append('techs', techs);
    data.append('price', price);

    await api.post('/spots', data, {
      headers: { user_id: userId },
    });

    history.push('/dashboard');
  }

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <ImageLabel style={{ backgroundImage: `url(${previw})` }}>
          <input type="file" onChange={e => setThumbnail(e.target.files[0])} />
          <img src={camera} alt="Select img" />
        </ImageLabel>

        <label htmlFor="company">Empresa*</label>
        <input
          type="text"
          placeholder="Sua empresa"
          value={company}
          onChange={e => setCompany(e.target.value)}
        />

        <label htmlFor="techs">Tecnologias*</label>
        <input
          type="text"
          id="techs"
          placeholder="Quais tecnologias usam?"
          value={techs}
          onChange={e => setTechs(e.target.value)}
        />

        <label htmlFor="price">Preço*</label>
        <input
          type="text"
          id="price"
          placeholder="Valor cobrado por dia?"
          value={price}
          onChange={e => setPrice(e.target.value)}
        />
        <button type="submit">Salvar</button>
      </form>
    </Container>
  );
}

New.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};
