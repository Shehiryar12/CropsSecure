import React from 'react';

import Authorized from './Src/Screens/Authorized';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './Src/navigaton/AppNavigator';
import ForgotPassword from './Src/Screens/ForgotPassword';

const App = () => {
  return (
    // <NavigationContainer>
    //   <AppNavigator />
    // </NavigationContainer>

    <ForgotPassword/>
  );
};

export default App;
