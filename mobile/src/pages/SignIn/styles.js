import styled from 'styled-components/native';
import { Platform } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.KeyboardAvoidingView.attrs({
  behavior: 'padding',
  enabled: Platform.OS === 'ios',
})`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.Image``;

export const Form = styled.View`
  align-self: stretch;
  padding: 20px 30px;
`;

export const Email = styled.TextInput`
  font-size: 16px;
  height: 40px;
  background: #eee;
  border-radius: 4px;
  padding: 0 15px;
  border: 1px solid #eee;
  margin-bottom: 20px;
`;

export const Techs = styled.TextInput`
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

export const Span = styled.Text`
  color: #444;
  font-weight: bold;
  margin-bottom: 8px;
`;
