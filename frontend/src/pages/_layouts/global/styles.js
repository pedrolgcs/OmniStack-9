import styled from 'styled-components';
import { darken } from 'polished';
import background from '~/assets/background.jpg';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 100%;
  background: #000 url(${background}) no-repeat;
  background-size: cover;

  img {
    margin-top: 30px;
  }
`;

export const Content = styled.div`
  width: 100%;
  background: #fff;
  margin-top: 30px;
  border-radius: 4px;
  padding: 30px;
  max-width: 700px;
  margin-bottom: 30px;

  button {
    border: 0;
    border-radius: 2px;
    width: 100%;
    height: 42px;
    padding: 0 20px;
    font-size: 16px;
    font-weight: bold;
    background: #f05a5b;
    color: #fff;
    cursor: pointer;
    transition: background 0.5s;

    &:hover {
      background: ${darken(0.1, '#f05a5b')};
    }
  }
`;
