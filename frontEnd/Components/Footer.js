import Logo from "./Logo";
import styled from "@emotion/native";
import { TextInput, View, Text } from "react-native";

// This is a custom FOOTER. With defined characteristics. Logo design varies

export default function Footer() {
  return (
    <FooterContainer>
      <ContentWrapper>
        <Logo _height={60} _width={60} />
        <TextFooter>כל הזכויות שמורות</TextFooter>
      </ContentWrapper>
    </FooterContainer>
  );
}

const FooterContainer = styled.View`
  width: 100%;
  background-color: #e6f0fa;
`;

const ContentWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const TextFooter = styled.Text`
  color: blue;
  font-weight: bold;
  margin-left: 10px;
  font-size: 16px;
`;
