import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Font } from '../Constant/Font';

const ReceiptComponents = props => {
  return (
    <SafeAreaView style={styles.Container}>
      <View style={styles.innerContainer}>
        <Text style={styles.status}>{props?.title}</Text>

        <View style={styles.header}>
        <Text style={{color:"#86BC41",fontSize:14,}}>{props?.productname}</Text>
        <Text style={{color:"#86BC41",fontSize:14,marginLeft:110,}}>{props?.itemname}</Text>
        <Text style={{color:"#86BC41",fontSize:14,}}>{props?.price}</Text>
      </View>

        <View style={styles.header}>
        <Text style={{color:"#DBD8D8",fontSize:10,width:160,fontFamily:Font.medium}}>{props?.descriptiontext}</Text>
        <Text style={{fontSize:10,color:"#FFFFFF",width:45,fontFamily:Font.medium}}>{props?.number}</Text>
        <Text style={{fontSize:10,color:"#FFFFFF",fontFamily:Font.medium,}}>{props?.pricenumber}</Text>
      </View>

       <View style={styles.header}>
        <Text style={{color:"#DBD8D8",fontSize:10,width:150,fontFamily:Font.medium}}>{props?.descriptiontexttwo}</Text>
        <Text style={{fontSize:10,color:"#FFFFFF",width:37,fontFamily:Font.medium}}>{props?.numbertwo}</Text>
        <Text style={{fontSize:10,color:"#FFFFFF",fontFamily:Font.medium,}}>{props?.pricenumbertwo}</Text>
      </View>

        <View style={styles.dottedContainer}></View>

         <View style={styles.header}>
        <Text style={{color:"#DBD8D8",fontSize:10,width:150,fontFamily:Font.medium}}>{props?.total}</Text>
        <Text style={{fontSize:10,color:"#FFFFFF",width:37,fontFamily:Font.medium}}>{props?.totalnumber}</Text>
        <Text style={{fontSize:10,color:"#FFFFFF",fontFamily:Font.medium,}}>{props?.totalprice}</Text>
      </View>

        <View style={styles.dottedContainertwo}></View>

        <View style={styles.header}>
        <Text style={{color:"#DBD8D8",fontSize:10,width:150,fontFamily:Font.medium}}>{props?.claimamount}</Text>
     
        <Text style={{fontSize:10,color:"#FFFFFF",fontFamily:Font.medium,}}>{props?.claimprice}</Text>
      </View>

     <View  style={styles.endingContainer}>
      <Text style={styles.endingtext}>{props?.endingtext}</Text>
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
