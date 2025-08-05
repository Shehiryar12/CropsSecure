import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

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

});
