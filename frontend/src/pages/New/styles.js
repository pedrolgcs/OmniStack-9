import styled from 'styled-components';

export const Container = styled.div`
  > p {
    font-size: 22px;
    line-height: 30px;
    margin-bottom: 30px;
  }

  form {
    display: flex;
    flex-direction: column;

    label {
      font-size: 14px;
      color: #444;
      font-weight: bold;
      margin-bottom: 8px;

      span {
        font-weight: normal;
        font-size: 12px;
        color: #999;
      }
    }

    input {
      margin-bottom: 20px;
      border: 1px solid #ddd;
      border-radius: 2px;
      height: 45px;
      padding: 0 15px;
      font-size: 16px;
    }
  }
`;

export const ImageLabel = styled.label`
  margin-bottom: 20px;
  border: 1px dashed #ddd;
  background-size: cover;
  cursor: pointer;
  height: 160px;
  display: flex;
  justify-content: center;
  align-items: center;

  input {
    display: none;
  }
`;
