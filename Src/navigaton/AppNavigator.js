import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from '../Screens/Welcome';
import AccountScreen from '../Screens/AccountScreen';
import { Font } from '../Constant/Font';
import Authorized from '../Screens/Authorized';
import { NavigationContainer } from '@react-navigation/native';
import FarmerRecord from '../Screens/FarmerRecord';
import Ownership from '../Screens/Ownership';
import LandData from '../Screens/LandData';
import Addland from '../Screens/Addland';
import LossCompensation from '../Screens/LossCompensation';
import Assessment from '../Screens/Assessment';
import Area from '../Screens/Area';

const AppNavigator = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AccountScreen"
          component={AccountScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Authorized"
          component={Authorized}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="FarmerRecord"
          component={FarmerRecord}
          options={{ headerShown: false }}
        />

          <Stack.Screen
          name="LandData"
          component={LandData}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Ownership"
          component={Ownership}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Area"
          component={Area}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="LossCompensation"
          component={LossCompensation}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Assessment"
          component={Assessment}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;

const styles = StyleSheet.create({});
