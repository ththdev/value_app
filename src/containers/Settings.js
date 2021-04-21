import React from "react";
import styled from "styled-components/native";
import ContainerHeader from "../components/base/ContainerHeader";

export default function Settings() {
  return (
    <Container>
      <ContainerHeader headerTitle="Settings" />
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
`;
