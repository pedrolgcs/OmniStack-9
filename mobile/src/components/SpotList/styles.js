import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  margin-top: 30px;
  margin-bottom: ${({ last }) => (last ? '20px' : '0')};
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #444;
  padding: 0 10px;
  margin-bottom: 15px;
`;

export const Bold = styled.Text`
  font-weight: bold;
`;

export const List = styled.FlatList`
  padding: 0 10px;
`;

export const ListItem = styled.View`
  margin-right: 15px;
`;

export const Image = styled.Image`
  width: 200px;
  height: 120px;
  border-radius: 2px;
`;

export const Company = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #333;
  margin-top: 10px;
`;

export const Price = styled.Text`
  font-size: 15px;
  color: #999;
  margin-top: 5px;
`;

export const Submit = styled(RectButton)`
  height: 32px;
  justify-content: center;
  align-items: center;
  background: #f05a5b;
  border-radius: 4px;
  margin-top: 15px;
`;
