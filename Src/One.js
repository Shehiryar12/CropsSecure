import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Font } from './Constant/Font';

const One = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.mediumText}>This is Medium</Text>
      <Text style={styles.boldText}>This is Bold</Text>
    </View>
  );
};

export default One;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  mediumText: {
    fontFamily: Font.medium,
    fontSize: 20,
  },
  boldText: {
    fontFamily: 'Poppins-Bold',
    fontSize: 20,
  },
});
