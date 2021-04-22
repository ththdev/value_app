import React from "react";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/core";

export default function BackButton() {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Wrapper>
        <Ionicons name="chevron-back" size={18} color="#000" />
        <Text>Back</Text>
      </Wrapper>
    </TouchableOpacity>
  );
}

const Wrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;

const Text = styled.Text`
  font-size: 18px;
`;
