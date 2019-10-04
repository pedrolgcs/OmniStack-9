import styled from 'styled-components';

export const SpotList = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  margin-bottom: 30px;

  li {
    display: flex;
    flex-direction: column;

    header {
      width: 100%;
      height: 120px;
      background-size: cover;
      border-radius: 4px;
    }

    strong {
      margin-top: 10px;
      font-size: 24px;
      color: #444;
    }

    span {
      font-size: 15px;
      color: #999;
    }
  }
`;
