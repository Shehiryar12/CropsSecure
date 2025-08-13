import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import { Font } from '../Constant/Font';
import { Icon } from '@rneui/base';

const Reset = (props) => {
  return (
    <View>
      <View style={styles.header}>
        <Icon name="chevron-back" type="Ionicons" color="#fff" size={20}/>
        <Text style={styles.heading}>{props?.title}</Text>
        <View style={{ width: 20 }} />
      </View>

      <View>
        <Text style={styles.define}>{props?.define}</Text>
      </View>
    </View>
  );
};

export default Reset;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    backgroundColor: 'blue',
  },
  heading: {
    fontFamily: Font.bold,
    fontSize: 16,
    color: '#fff',
  },
  define: {
    marginTop: 11,
    color: '#646464',
    width: 280,
    marginHorizontal: 35,
    textAlign: 'center',
  },
});
