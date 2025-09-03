import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {hp} from '../Constant/Responsive';


const SignHeaderComponent = (props) => {
  return (
   <View style={styles.signupcontainer}>
           <Text style={styles.label}>{props?.label}</Text>
         </View>
  )
}

export default SignHeaderComponent

const styles = StyleSheet.create({
      signupcontainer: {
        backgroundColor: '#4AB95A',
        height: hp(12.3),
        justifyContent: 'center',
      },
    
})