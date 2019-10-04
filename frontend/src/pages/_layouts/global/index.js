import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { Wrapper, Content } from './styles';
import logo from '~/assets/logo.svg';

export default function global({ children }) {
  return (
    <Wrapper>
      <Link to="/">
        <img src={logo} alt="AirCnC" />
      </Link>
      <Content>{children}</Content>
    </Wrapper>
  );
}

global.propTypes = {
  children: PropTypes.element.isRequired,
};
