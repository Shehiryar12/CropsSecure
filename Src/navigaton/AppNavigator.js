import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Welcome from '../Screens/Welcome'
import AccountScreen from '../Screens/AccountScreen'
import { Font } from '../Constant/Font'
import Authorized from '../Screens/Authorized'




const AppNavigator = () => {
const Stack=createNativeStackNavigator()

  return (
    <Stack.Navigator>
      <Stack.Screen  name="Welcome" component={Welcome} options={{ headerShown: false }}/>
       <Stack.Screen name="AccountScreen"component={AccountScreen} options={{ headerShown: false }}/>
       <Stack.Screen name="Authorized" component={Authorized}/>
    </Stack.Navigator>
  )
}

export default AppNavigator

const styles = StyleSheet.create({

})