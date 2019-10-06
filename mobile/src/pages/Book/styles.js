import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.SafeAreaView`
  margin: 20px;
`;

export const Label = styled.Text`
  color: #444;
  font-size: 17px;
  font-weight: bold;
  margin-bottom: 8px;
  margin-top: 10px;
`;

export const Input = styled.TextInput`
  font-size: 16px;
  height: 40px;
  background: #eee;
  border-radius: 4px;
  padding: 0 15px;
  border: 1px solid #eee;
  margin-bottom: 20px;
`;

export const Submit = styled(RectButton)`
  height: 42px;
  justify-content: center;
  align-items: center;
  background: #f05a5b;
  border-radius: 4px;
  padding: 5px;
`;

export const SubmitCancell = styled(RectButton)`
  height: 42px;
  justify-content: center;
  align-items: center;
  background: #ccc;
  border-radius: 4px;
  padding: 5px;
  margin-top: 10px;
`;
