import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Font } from '../Constant/Font';

const Welcome = () => {
  return (
    <View>
       <View style={styles.header}>
        <MaterialIcons name="keyboard-arrow-left" size={24} color="#000000" style={styles.icon} />
        
        <View style={styles.center}>
          <Text style={styles.heading}>Welcome Back!</Text>
        </View>

        <View style={{width:37,}}></View>  {/* Empty space to balance */}
       </View>  
    </View>
  )
}

export default Welcome

const styles = StyleSheet.create({
    header:{
        flexDirection:"row",
        justifyContent:"space-between", 
    },
    icon:{
        paddingHorizontal:4,
    },
    center:{
        alignItems: 'center',
        backgroundColor:'red',
    },
    heading:{
        marginTop:20,
        fontFamily:Font.semiBold,
    }
})
