import React from "react";
import styled from "styled-components/native";

export default function ScreenHeader({ headerTitle, headerLeft, headerRight }) {
  return (
    <Container>
      {headerLeft}
      <Title>{headerTitle}</Title>
      {headerRight}
    </Container>
  );
}

const Container = styled.View`
  width: 100%;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 20px;
  padding-bottom: 10px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #fff;
`;
