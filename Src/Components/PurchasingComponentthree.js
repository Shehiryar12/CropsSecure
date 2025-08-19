import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
import { Font } from '../Constant/Font'

const PurchasingComponentthree = (props) => {
  return (
    <SafeAreaView>
         <View style={styles.box}>
                <View style={styles.boxone}>
                  <View style={styles.imageContainer}>
                    <Image
                      source={require('../Assets/Images/medicen2.png')}
                      style={styles.imageonestyle}
                    />
                  </View>
                  <Text style={styles.title}>{props?.titlethree}</Text>
        
               <View style={styles.endingcontainer}>   
                  <TouchableOpacity style={styles.buttoncontainer}>
                       <Text  style={{color:'white',fontSize:8,fontFamily:Font.medium}}>{props?.deletethree}</Text>
                  </TouchableOpacity>
                  <Text style={{fontFamily:Font.bold,fontSize:9,marginTop:3,marginLeft:4,}}>{props?.pricethree}</Text>
                </View>
                </View>
        
                 
              </View>
    </SafeAreaView>
  )
}

export default PurchasingComponentthree

const styles = StyleSheet.create({
      box: {
    flexDirection: 'row',
    marginLeft: 12,
    marginTop: 30,
  },
  boxone: {
    width: 155,
    height: 200,
    backgroundColor: '#FFFFFF',
    elevation: 3,
    borderRadius: 14,
    marginLeft: 8,
    alignItems: 'flex-start', // text left aligned rahega
    padding: 10,
  },
  boxtwo: {
    width: 155,
    height: 200,
    backgroundColor: '#FFFFFF',
    elevation: 3,
    borderRadius: 14,
    marginLeft: 11,
  },
  imageContainer: {
    width: '100%',
    alignItems: 'center',
  },
  imageonestyle: {
    width: 40,
    height: 112,
  },
  title: {
    fontFamily: Font.bold,
    fontSize: 9,
    marginTop: 5,
    width: 120,
  },
  buttoncontainer:{
    backgroundColor:'#C92E2E',
    width:60,
    paddingTop:4,
    paddingBottom:4,
    alignItems:'center',      // 👈 horizontally center
  justifyContent:'center',
  borderRadius:4,
  },
  endingcontainer:{
    flexDirection:"row",
    marginTop:14,
  },

  imagetwoContainer: {
    width: '100%',
    alignItems: 'center',
  },

  imagetwostyle:{
      width: 58,
    height: 100,
  },
    titletwo: {
    fontFamily: Font.bold,
    fontSize: 9,
    marginTop: 5,
    width: 120,
  },
})