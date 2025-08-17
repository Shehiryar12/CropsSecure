import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Font } from '../Constant/Font';
import AreaComponent from '../Components/AreaComponent';


const Area = () => {
  return (
     <SafeAreaView style={styles.container}>

   <View style={styles.header}>
        <MaterialIcons name="keyboard-arrow-left" size={23} color="black" />
        <Text style={styles.heading}>Crop To Insure</Text>
        <View style={{ width: 34 }}></View>
      </View>

      <View>
        <AreaComponent
          title="Crop"
          borderRadius={12}
          borderColor="green"
          placeholder="Select insurance company"
          placeholderTextColor="#DBD8D8"
          fontSize={12}
        />
      </View>

     </SafeAreaView>
  )
}

export default Area

const styles = StyleSheet.create({
      header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        // backgroundColor:"red",
        marginTop: 14,
        marginLeft: 12,
      },
      heading: {
        fontFamily: Font.bold,
        fontSize: 15,
      },
})