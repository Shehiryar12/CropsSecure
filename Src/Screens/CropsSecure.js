import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CropsSecure = () => {
  return (
    <SafeAreaView  style={styles.container}>
         <Image source={require("../Assets/Images/cropSecure.png")} style={styles.image} />
           
    </SafeAreaView>
  )
}

export default CropsSecure

const styles = StyleSheet.create({
      container: {
    flex: 1,   
    backgroundColor: '#fff',          
    justifyContent: 'center', 
    alignItems:'center',
    
      
  },
   image: {
    width: 240,  
    height: 240,
    resizeMode: 'contain',
   
  },
})