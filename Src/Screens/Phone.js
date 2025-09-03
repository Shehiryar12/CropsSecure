import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import PhoneComponent from '../Components/PhoneComponent';
import { Font, fontSize } from '../Constant/Font';
import EmailComponent from '../Components/EmailComponent';

const Phone = () => {
  return (
    <SafeAreaView style={styles.fullscreen}>
      <PhoneComponent
        label="Sign Up"
        setAccount="Set Up Your Account"
        small="Hello there, sign up to continue"
        placeholder="Name"
        placeholderTextColor="#CBCBCB"
        color="black"
      />
       
      
      
    </SafeAreaView>
  );
};

export default Phone;

const styles = StyleSheet.create({
  fullscreen: {
   flex:1,
   backgroundColor:'#4AB95A',
 },
});
