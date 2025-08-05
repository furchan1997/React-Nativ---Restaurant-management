import styled from "@emotion/native";

// This is a custom component that handles the main structure of the content.

export default function Main({ children }) {
  return (
    // ########
    // ########
    // ########
    <MainContainer>{children}</MainContainer>
  );
}

const MainContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;
