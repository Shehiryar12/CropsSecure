import { StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Font } from '../Constant/Font';

const Reset = props => {
  return (
    <View>
      <View style={styles.header}>
        <MaterialIcons
          name="keyboard-arrow-left"
          size={20}
          color="#000000"
          style={styles.icon}
        />
        <Text style={styles.heading}>{props?.title}</Text>
        <View style={{ width: 39 }}></View>
      </View>

      <View>
        <Text style={styles.define}>{props?.define}</Text>

        <View>
          <Text>{props.passwordtext}</Text>

              <TextInput
                      style={styles.textinput}
                      placeholder="Enter your email"
                      placeholderTextColor="#DBD8D8"
                      borderColor="#DBD8D8"
                      keyboardType="email-address"
                    />
        </View>
      </View>
    </View>
  );
};

export default Reset;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 11,
    marginTop: 20,
  },
  heading: {
    fontFamily: Font.bold,
    fontSize: 16,
    color: '#000',
    // marginTop: 13,
  },

  define: {
    marginTop: 11,
    color: '#646464',
    width: 280,
    marginHorizontal: 35,
    textAlign: 'center',
  },

    textinput: {
    borderWidth: 1,
    // borderRadius: 8,
    paddingHorizontal: 8,
    borderRadius:20,
  },
});
