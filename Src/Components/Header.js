import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Font } from '../Constant/Font'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { wp } from '../Constant/Responsive';

const Header = () => {
  return (
   <View style={styles.header}>
          <MaterialIcons name="keyboard-arrow-left" size={23} color="black" />
          <Text style={styles.heading}>Add Land</Text>
          <View style={{ width: wp('10%') }}></View>
        </View>
  )
}

export default Header

const styles = StyleSheet.create({
      header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    marginTop: 14,
    marginLeft: 11,
  },
      heading: {
        fontFamily: Font.bold,
        fontSize: 15,
      },
})