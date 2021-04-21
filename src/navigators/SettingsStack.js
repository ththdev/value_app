import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Settings } from "../containers";

const Stack = createStackNavigator();

export default function SettingsStack() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  );
}
