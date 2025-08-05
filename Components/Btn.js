import styled from "@emotion/native";

export default function Btn({ title, onPress = () => {} }) {
  return (
    <BtnContainer onPress={onPress}>
      <TextBtn>{title}</TextBtn>
    </BtnContainer>
  );
}

const BtnContainer = styled.TouchableOpacity`
  background-color: blue;
  padding: 20px;
  border-radius: 10px;
  width: 25%;
  margin-bottom: 10px;
`;

const TextBtn = styled.Text`
  color: white;
  text-align: center;
  font-weight: bold;
`;
