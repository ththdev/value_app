import React from "react";
import { FlatList } from "react-native";
import Transaction from "./Transaction";

export default function TransactionGroupList({ data }) {
  return (
    <FlatList
      data={data}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => <Transaction data={item} />}
    />
  );
}
