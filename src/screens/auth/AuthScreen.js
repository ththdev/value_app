import React from "react";
import { View, Text } from "react-native";
import styled from "styled-components/native";

export default function AuthScreen({ navigation }) {
  return (
    <Container>
      <Text>Auth Screen</Text>
      <Button title="Login" onPress={() => navigation.navigate("Main")} />
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const Button = styled.Button``;
