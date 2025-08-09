import React from 'react';

import Authorized from './Src/Screens/Authorized';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './Src/navigaton/AppNavigator';

const App = () => {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>

    // <Authorized/>
  );
};

export default App;
