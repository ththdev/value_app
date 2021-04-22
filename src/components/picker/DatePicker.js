import React from "react";
import {
  TouchableOpacity,
  View,
  Text,
  Platform,
  Button,
  Modal,
} from "react-native";
import styled from "styled-components/native";
import DateTimePicker from "@react-native-community/datetimepicker";
import moment from "moment";

export default function DatePicker({ currentDate }) {
  const [date, setDate] = React.useState(new Date(1598051730000));
  const [visible, setVisible] = React.useState(false);

  const onChange = () => {
    setVisible(false);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <View>
      <Button title={currentDate} onPress={() => setVisible(true)} />
      <Modal visible={visible} transparent={true} animationType="slide">
        <Container>
          <AccessoryView>
            <TouchableOpacity onPress={onClose}>
              <Text style={{ fontSize: 16, fontWeight: "bold" }}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={{ fontSize: 16, fontWeight: "bold" }}>Done</Text>
            </TouchableOpacity>
          </AccessoryView>
          <DateTimePicker
            value={date}
            mode="date"
            display="spinner"
            style={{ width: "100%", backgroundColor: "white" }}
          />
        </Container>
      </Modal>
    </View>
  );
}

const Container = styled.View`
  flex: 1;
  justify-content: flex-end;
  align-items: center;
  /* background-color: #00000047; */
  z-index: 999;
`;

const AccessoryView = styled.View`
  width: 100%;
  height: 50px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  padding-left: 20px;
  padding-right: 20px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;
