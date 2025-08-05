import { TextInput, View, Text } from "react-native";
import styled from "@emotion/native";

export default function Input({ lable, props }) {
  return (
    <InputContainer>
      <Lable>{lable}</Lable>
      <_Input {...props} />
    </InputContainer>
  );
}

const InputContainer = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
  gap: 10px;
  padding: 10px;
`;

const Lable = styled.Text`
  margin-bottom: 5px;
  width: 25%;
`;

const _Input = styled.TextInput`
  border: 1px solid black;
  border-color: #ccc;
  border-radius: 10px;
  width: 50%;
  padding: 5px;
`;
