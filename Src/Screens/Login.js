import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import LoginComponent from '../Components/LoginComponent';

const Login = () => {
  return (
    <SafeAreaView style={styles.fullscreen}>
      <ScrollView>
        <StatusBar backgroundColor="#4AB95A" barStyle="light-content" />
        <LoginComponent small="Hello there, sign in to continue" />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  fullscreen: {
    flex: 1,
    backgroundColor: 'white',
  },
});
