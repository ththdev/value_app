import React from "react";
import { FlatList } from "react-native";
import styled from "styled-components/native";
import sample from "../../lib/sample.json";
import groupBy from "json-groupby";
import TransactionGroup from "./TransactionGroup";

export default function TransactionList() {
  let groupByDate = groupBy(sample, ["date"]);
  let dates = Object.keys(groupByDate);

  return (
    <FlatList
      style={{ width: "100%", paddingTop: 15 }}
      data={dates}
      keyExtractor={(item, index) => index.toString()}
      ItemSeparatorComponent={() => <Seperator />}
      renderItem={({ item }) => (
        <TransactionGroup title={item} data={groupByDate[item]} />
      )}
    />
  );
}

const Seperator = styled.View`
  height: 15px;
`;
