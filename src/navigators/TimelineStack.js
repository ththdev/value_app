import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Timeline } from "../containers";
import { AddTransactionScreen, DetailTransactionScreen } from "../screens";

const Stack = createStackNavigator();

export default function TimelineStack() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Timeline" component={Timeline} />
      <Stack.Screen name="AddTransaction" component={AddTransactionScreen} />
      <Stack.Screen
        name="DetailTransaction"
        component={DetailTransactionScreen}
      />
    </Stack.Navigator>
  );
}
