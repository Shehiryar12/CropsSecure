import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Font } from '../Constant/Font';
import ReceiptComponents from '../Components/ReceiptComponents';

const Receipt = () => {
  return (
   <SafeAreaView style={styles.container}>
         <View style={styles.header}>
           <MaterialIcons name="keyboard-arrow-left" size={23} color="black" />
           <Text style={styles.heading}>Receipt</Text>
           <View style={{ width: 36 }}></View>
         </View>

         <ReceiptComponents title="Khan Fertilizer"/>

         
         </SafeAreaView>
  )
}

export default Receipt

const styles = StyleSheet.create({
      header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        // alignItems: 'center',
        marginTop: 14,
        marginLeft: 12,
      },
      heading: {
        fontFamily: Font.bold,
        fontSize: 15,
      },
})