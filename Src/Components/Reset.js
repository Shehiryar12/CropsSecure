import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import { Font } from '../Constant/Font';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Reset = props => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity>
            <MaterialIcons
              name="keyboard-arrow-left"
              size={24}
              color="#000000"
            />
          </TouchableOpacity>
          <Text style={styles.heading}>{props?.title}</Text>
          <View style={{ width: 24 }} /> {/* Placeholder for spacing */}
        </View>

        <Text style={styles.define}>{props?.define}</Text>
      </View>
    </SafeAreaView>
  );
};

export default Reset;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    alignItems: 'center', // Center content horizontally
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '94%',
  },
  heading: {
    fontFamily: Font.bold,
    fontSize: 15,
    textAlign: 'center',
    flex: 1,
  },
  define: {
    marginTop: 10,
    color: '#646464',
    fontSize:12,
    fontFamily:Font.medium,
    textAlign:'center',
    width:"80%",
    

  },
});
