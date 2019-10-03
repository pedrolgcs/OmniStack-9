import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper, Content } from './styles';
import logo from '~/assets/logo.svg';

export default function global({ children }) {
  return (
    <Wrapper>
      <img src={logo} alt="AirCnC" />
      <Content>{children}</Content>
    </Wrapper>
  );
}

global.propTypes = {
  children: PropTypes.element.isRequired,
};
