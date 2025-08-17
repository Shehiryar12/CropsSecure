import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Font } from '../Constant/Font';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


const AreaUnit = props => {
  return (
    <View style={{ flex: 1 }}>
      <Text style={styles.heading}>{props?.label}</Text>
      <View
        style={{
          borderWidth: 1,
          borderColor: '#ccc',
          borderRadius: 8,
          marginHorizontal: 40,
          paddingHorizontal: 8,
          justifyContent: 'center',
          height: 45,
          width:120,
          flexDirection:'row',
          justifyContent: 'space-between', 
          alignItems:'center',
        }}
      >
        <Text style={{ fontFamily: Font.medium, fontSize: 12, color: 'grey' }}>
          {props?.value}
        </Text>
                <MaterialIcons name="keyboard-arrow-down" size={21} color="#DBD8D8" />
        
      </View>
    </View>
  );
};

export default AreaUnit;

const styles = StyleSheet.create({
  heading: {
    fontFamily: Font.medium,
    marginTop: 27,
    color: '#646464',
    marginHorizontal:42,
  },
});
