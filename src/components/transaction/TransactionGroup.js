import React from "react";
import { FlatList, View, Text } from "react-native";
import styled from "styled-components/native";
import TransactionGroupList from "./TransactionGroupList";

export default function TransactionGroup({ title, data }) {
  return (
    <Container>
      <GroupTitle>{title}</GroupTitle>
      <TransactionGroupList data={data} />
    </Container>
  );
}

const Container = styled.View`
  width: 100%;
  padding: 20px;
  background-color: #fff;
`;

const GroupTitle = styled.Text`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 15px;
`;
