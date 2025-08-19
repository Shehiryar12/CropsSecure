import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Font } from '../Constant/Font'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ClaimComponent from '../Components/ClaimComponent';


const MyClaims = () => {
  return (
  <SafeAreaView> 
    <View style={styles.header}>
           <MaterialIcons name="keyboard-arrow-left" size={23} color="black" />
           <Text style={styles.heading}>My Claims</Text>
           <View style={{ width: 37 }}></View>
         </View>

     <ClaimComponent />    
   </SafeAreaView> 
  )
}

export default MyClaims

const styles = StyleSheet.create({

      header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 14,
        marginLeft: 12,
      },
      heading: {
        fontFamily: Font.bold,
        fontSize: 15,
      },
})