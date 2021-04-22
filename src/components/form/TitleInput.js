import React from "react";
import styled from "styled-components/native";

export default function TitleInput() {
  const [title, onChangeTitle] = React.useState();

  return <Input value={title} onChange={onChangeTitle} />;
}

const Input = styled.TextInput`
  font-size: 32px;
  font-weight: bold;
`;
