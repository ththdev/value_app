import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import styled from "styled-components/native";
import BackButton from "../../components/base/BackButton";
import Header from "../../components/base/Header";

export default function DetailTransactionScreen({ route, navigation }) {
  const { title } = route.params;

  return (
    <Container>
      <Header headerLeft={<BackButton />} />
      <Text>{title}</Text>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
`;

const Text = styled.Text``;
