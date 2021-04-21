import React from "react";
import { Platform, TouchableWithoutFeedback } from "react-native";
import styled from "styled-components/native";
import TransactionImage from "./TransactionImage";
import { useNavigation } from "@react-navigation/native";

export default function Transaction({ data }) {
  const { title, amount, category } = data;

  const navigation = useNavigation();

  return (
    <TouchableWithoutFeedback
      onPress={() => navigation.push("DetailTransaction", { data })}
    >
      <Container>
        <RowWrapper>
          <TransactionImage />
          <ColWrapper style={{ marginLeft: 20 }}>
            <Text>{title}</Text>
            <SubText>{category}</SubText>
          </ColWrapper>
        </RowWrapper>
        <ColWrapper align="right">
          <Text>$ {amount}</Text>
          <SubText>$ 10.00</SubText>
        </ColWrapper>
      </Container>
    </TouchableWithoutFeedback>
  );
}

const Container = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Text = styled.Text`
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 5px;
`;

const SubText = styled.Text`
  font-size: 14px;
  color: #c4c4c4;
`;

const ColWrapper = styled.View`
  flex-direction: column;
  text-align: ${(props) => (props.align === "right" ? "right" : "left")};
`;

const RowWrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;

const LeftSide = styled.View``;
