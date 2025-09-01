import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import Welcome from '../Screens/Welcome';
import AccountScreen from '../Screens/AccountScreen';
import Authorized from '../Screens/Authorized';
import FarmerRecord from '../Screens/FarmerRecord';
import ResetPassword from '../Screens/ResetPassword';
import LandData from '../Screens/LandData';
import LossCompensation from '../Screens/LossCompensation';
import Ownership from '../Screens/Ownership';
import Assessment from '../Screens/Assessment';
import Area from '../Screens/Area';

const Stack = createNativeStackNavigator();
const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="AccountScreen" component={AccountScreen} />
        <Stack.Screen name="Authorized" component={Authorized} />
        <Stack.Screen name="ResetPassword" component={ResetPassword} />
        <Stack.Screen name="FarmerRecord" component={FarmerRecord} />
        <Stack.Screen name="LandData" component={LandData} />
        <Stack.Screen name="LossCompensation" component={LossCompensation} />
        <Stack.Screen name="Ownership" component={Ownership} />
        <Stack.Screen name="Assessment" component={Assessment} />
        <Stack.Screen name="Area" component={Area} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
