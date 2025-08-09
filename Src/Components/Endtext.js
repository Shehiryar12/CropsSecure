import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Font } from '../Constant/Font'

const Endtext = (props) => {
  return (
    <View>
            <Text style={styles.textstyle}>{props?.title}</Text>

              <TouchableOpacity style={styles.button}>
                  <Text style={styles.buttontext}>Sign Up{props?.buttontext}</Text>
                 </TouchableOpacity>        
    </View>
  )
}

export default Endtext

const styles = StyleSheet.create({

  textstyle:{
    paddingHorizontal:40  ,
    fontSize:9,
    fontFamily:Font.medium,
    marginTop:18,
    // flexWrap:'wrap', 
    
  },

  button:{
    backgroundColor:"#009245",
    paddingHorizontal:10,
    marginHorizontal:25,
    // marginHorizontal:10,
    borderRadius:8,
    marginTop:34,
   
  },
  buttontext:{
     textAlign:"center",
     paddingVertical:20,
     color:"white",
  }

})