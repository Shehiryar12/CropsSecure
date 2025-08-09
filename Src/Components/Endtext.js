import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Font } from '../Constant/Font'

const Endtext = (props) => {
  return (
    <View style={{width:"100%"}}>
            <Text style={styles.textstyle}>{props?.title}</Text>
           
    </View>
  )
}

export default Endtext

const styles = StyleSheet.create({

  textstyle:{
    paddingHorizontal:41  ,
    fontSize:9,
    fontFamily:Font.medium,
    marginTop:7,
    flexWrap:'wrap',
    
  }

})