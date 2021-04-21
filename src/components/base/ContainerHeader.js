import React from "react";
import styled from "styled-components/native";

export default function Header({ headerTitle, headerRight }) {
  return (
    <Container>
      <Title>{headerTitle}</Title>
      {headerRight}
    </Container>
  );
}

const Container = styled.View`
  width: 100%;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 100px;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  padding-bottom: 10px;
  background-color: #000;
`;

const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #fff;
`;
