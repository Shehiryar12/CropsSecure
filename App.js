import React from 'react';

import Authorized from './Src/Screens/Authorized';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './Src/navigaton/AppNavigator';
import ForgotPassword from './Src/Screens/ForgotPassword';
import Reset from './Src/Components/Reset';
import ResetPassword from './Src/Screens/ResetPassword';
import FarmerRecord from './Src/Screens/FarmerRecord';
import Ownership from './Src/Screens/Ownership';
import Account from './Src/Components/Account';
import AccountScreen from './Src/Screens/AccountScreen';
import FarmerComponent from './Src/Components/FarmerComponent';
import Welcome from './Src/Screens/Welcome';

const App = () => {
  return (
    // <NavigationContainer>
    //   <AppNavigator />
    // </NavigationContainer>

 <FarmerRecord/>

    
  );
};

export default App;
