import React from "react";
import styled from "styled-components/native";
import BackButton from "../../components/base/BackButton";
import ScreenHeader from "../../components/base/ScreenHeader";
import DatePicker from "../../components/picker/DatePicker";

export default function DetailTransactionScreen({ route, navigation }) {
  const { data } = route.params;
  const { title, amount, date, category, photoUrl, memo } = data;

  return (
    <Container>
      <ScreenHeader headerLeft={<BackButton />} />
      <Header>
        <Image source={{ uri: photoUrl }} />
        <RowWrapper>
          <Title>{title}</Title>
          <Title>-$ {amount}</Title>
        </RowWrapper>
      </Header>
      <DetailList>
        <DetailWrapper>
          <Text>Type</Text>
          <OptionText>Spend</OptionText>
        </DetailWrapper>
        <DetailWrapper>
          <Text>Category</Text>
          <OptionText>{category}</OptionText>
        </DetailWrapper>
        <DetailWrapper>
          <Text>Date</Text>
          <DatePicker currentDate={date} />
        </DetailWrapper>
        <DetailWrapper>
          <Text>Source</Text>
        </DetailWrapper>
        <DetailWrapper>
          <Text>Memo</Text>
        </DetailWrapper>
      </DetailList>
    </Container>
  );
}

const Container = styled.View`
  background-color: #fff;
`;

const Header = styled.View`
  padding-top: 30px;
  flex-direction: column;
  align-content: flex-end;
  justify-content: space-between;
  padding-bottom: 30px;
  padding-left: 20px;
  padding-right: 20px;
`;

const Image = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 50px;
  background-color: #c4c4c4;
  margin-bottom: 15px;
`;

const Title = styled.Text`
  font-size: 32px;
  font-weight: bold;
`;

const Text = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;

const OptionText = styled.Text`
  font-size: 18px;
  color: #828282;
`;

const RowWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const DetailList = styled.View`
  padding-left: 20px;
  padding-right: 20px;
`;

const DetailWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;
