import React from "react";
import { TouchableOpacity, View } from "react-native";
import styled from "styled-components/native";
import ContainerHeader from "../components/base/ContainerHeader";
import TransactionList from "../components/transaction/TransactionList";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";

function RightButtons() {
  const navigation = useNavigation();
  return (
    <ButtonWrapper>
      <TouchableOpacity onPress={() => navigation.push("AddTransaction")}>
        <Ionicons name="add-outline" size={32} color="#fff" />
      </TouchableOpacity>
      <ButtonSpace />
      <TouchableOpacity>
        <Ionicons name="notifications" size={24} color="#fff" />
      </TouchableOpacity>
    </ButtonWrapper>
  );
}

export default function Timeline() {
  return (
    <Container>
      <ContainerHeader headerTitle="Timeline" headerRight={<RightButtons />} />
      <TransactionList />
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const ButtonWrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;

const ButtonSpace = styled.View`
  width: 20px;
  height: 20px;
  background-color: transparent;
`;
