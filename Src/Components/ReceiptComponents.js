import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Font } from '../Constant/Font';

const ReceiptComponents = props => {
  return (
    <SafeAreaView style={styles.Container}>
      <View style={styles.innerContainer}>
        <Text style={styles.status}>{props?.title}</Text>

        <View style={styles.header}>
        <Text style={{color:"#86BC41",fontSize:14,}}>Product</Text>
        <Text style={{color:"#86BC41",fontSize:14,marginLeft:110,}}>Items</Text>
        <Text style={{color:"#86BC41",fontSize:14,}}>Price (Rs)</Text>
      </View>

        <View style={styles.header}>
        <Text style={{color:"#DBD8D8",fontSize:10,width:160,fontFamily:Font.medium}}>Stick Class Dispersing and adhesive</Text>
        <Text style={{fontSize:10,color:"#FFFFFF",width:45,fontFamily:Font.medium}}>2</Text>
        <Text style={{fontSize:10,color:"#FFFFFF",fontFamily:Font.medium,}}>5600</Text>
      </View>

       <View style={styles.header}>
        <Text style={{color:"#DBD8D8",fontSize:10,width:150,fontFamily:Font.medium}}>Strong plus High phosphor that increase</Text>
        <Text style={{fontSize:10,color:"#FFFFFF",width:37,fontFamily:Font.medium}}>2</Text>
        <Text style={{fontSize:10,color:"#FFFFFF",fontFamily:Font.medium,}}>5200</Text>
      </View>

        <View style={styles.dottedContainer}></View>

         <View style={styles.header}>
        <Text style={{color:"#DBD8D8",fontSize:10,width:150,fontFamily:Font.medium}}>Total</Text>
        <Text style={{fontSize:10,color:"#FFFFFF",width:37,fontFamily:Font.medium}}>2</Text>
        <Text style={{fontSize:10,color:"#FFFFFF",fontFamily:Font.medium,}}>10800</Text>
      </View>

        <View style={styles.dottedContainertwo}></View>

        <View style={styles.header}>
        <Text style={{color:"#DBD8D8",fontSize:10,width:150,fontFamily:Font.medium}}>Claim Amount</Text>
        {/* <Text style={{fontSize:10,color:"#FFFFFF",width:37,fontFamily:Font.medium}}>2</Text> */}
        <Text style={{fontSize:10,color:"#FFFFFF",fontFamily:Font.medium,}}>2,000,000</Text>
      </View>

     <View  style={styles.endingContainer}>
      <Text style={styles.endingtext}>Present this receipt to the dealer to collect the products</Text>
      </View> 
      </View>

      
    </SafeAreaView>
  );
};

export default ReceiptComponents;

const styles = StyleSheet.create({
  innerContainer: {
    backgroundColor: '#24282E',
    marginHorizontal: 20,
    borderRadius: 8,
    height: 550,
    marginTop: 55,
  },
  status: {
    color: 'white',
    fontFamily: Font.medium,
    textAlign: 'center',
    marginTop: 22,
    fontSize: 18,
  },
  header:{
  
    flexDirection:'row',
    justifyContent:"space-between",
    paddingHorizontal:10,
    paddingTop:10,
  },
  dottedContainer:{
    borderBottomWidth:1,
    borderColor:"white",
    borderStyle:"dashed",
    marginTop:90,
    marginHorizontal:12,
  },
   dottedContainertwo:{
    borderBottomWidth:1,
    borderColor:"white",
    borderStyle:"dashed",
    marginHorizontal:12,
    marginTop:10,
  },
  endingContainer:{
    alignItems:'center',
    marginTop:70,
    paddingHorizontal:10,
  },
  endingtext:{
      color:'#DBD8D8',
      fontSize:12,
   
      textAlign:'center',
      fontFamily:Font.medium,
      fontSize:10,
    //   width:230,
    // width:150,
    // width:160,
    width:180,
    marginTop:100,
       
  }
});
