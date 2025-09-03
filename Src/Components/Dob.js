
import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { Font } from '../Constant/Font'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { wp, hp } from '../Constant/Responsive';


const Dob = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>{props?.title}</Text>

      <View style={styles.textinputContainer}>  
        <TextInput
          style={styles.textinput}
          placeholder={props?.placeholder}
          placeholderTextColor={props?.placeholderTextColor}
           value={props?.value}  
  onChangeText={props?.onChangeText} 
        />  
        <MaterialIcons 
          name="calendar-today" 
          size={wp(4.7)} 
          color="#646464"
        />  
      </View>  
    </View>
  )
}

export default Dob

const styles = StyleSheet.create({
  container:{ 
    paddingHorizontal:wp(6.1),
    marginTop:hp(2.2),
  },

  header: {
    fontFamily: Font.medium,
  },

  textinputContainer:{
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: wp(2.2),
    // paddingHorizontal: 6,
    // paddingHorizontal:5,
     paddingHorizontal:wp(1.4),
    // height:hp(4),
    marginTop:hp(0.1),
  },

  textinput: {
    flex: 1,
    // marginTop:8,
  },
})

