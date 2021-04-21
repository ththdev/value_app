import React from "react";
import styled from "styled-components/native";
import ContainerHeader from "../../components/base/ContainerHeader";

export default function AddTransactionScreen() {
  return (
    <Container>
      <Text>Add Transaction</Text>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const Text = styled.Text``;
