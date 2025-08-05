import { SafeAreaView } from "react-native-safe-area-context";
import Logo from "./Logo";
import styled from "@emotion/native";
import { TextInput, View, Text } from "react-native";

export default function Header({ title, descripeion }) {
  return (
    <SafeHeader>
      <HeaderContainer>
        <Logo _width={150} _height={100} />
        <Title>{title}</Title>
        <Descripeion>{descripeion}</Descripeion>
      </HeaderContainer>
    </SafeHeader>
  );
}

const SafeHeader = styled(SafeAreaView)`
  background-color: #e6f0fa;
`;

const HeaderContainer = styled.View`
  width: 100%;
  padding-top: 24px;
  padding-bottom: 20px;
  align-items: center;
`;

const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 10px;
`;

const Descripeion = styled.Text`
  font-size: 18px;
  text-align: center;
  margin-bottom: 10px;
`;
