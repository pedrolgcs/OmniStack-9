import styled from 'styled-components';
import background from '~/assets/background.jpg';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  background: #000 url(${background}) no-repeat;
  background-size: cover;
`;

export const Content = styled.div`
  width: 100%;
  background: #fff;
  margin-top: 30px;
  border-radius: 4px;
  padding: 30px;
  max-width: 450px;
`;
