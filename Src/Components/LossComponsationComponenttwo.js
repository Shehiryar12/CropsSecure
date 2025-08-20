import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Font } from '../Constant/Font';
import { wp, hp } from '../Constant/Responsive';  

const LossCompensationComponenttwo = props => {
  return (
    <View style={styles.container}>
      <View style={styles.innerconatiner}>
        <Image
          source={require('../Assets/Images/cropImg2.png')}
          style={styles.imagestyle}
        />
        <View style={styles.textContainer}>
          <Text style={styles.cropName}>{props?.title}</Text>
          <Text style={styles.dateText}>{props?.date}</Text>
          <Text style={styles.description}>
            {props?.description}
          </Text>
          <View style={styles.dottedline}></View>
          <Text style={styles.areastyle}>
            {props?.effectedarea}
            <Text style={styles.acreText}> 2 Acres</Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

export default LossCompensationComponenttwo;

const styles = StyleSheet.create({
  container: {},
  innerconatiner: {
    marginTop: hp(2.5),           
    backgroundColor:'#F6F6F6',
    marginHorizontal: wp(5.5),    
    height: hp(14),               
    borderRadius: wp(2),       
    flexDirection: 'row',
  },
  imagestyle: {
    width: wp(19),                 
    height: hp(9.3),                 
    borderRadius: wp(2),          
    marginLeft: wp(3),            
    marginTop: hp(2),              
  },
  textContainer: {
    marginLeft: wp(2.5),          
    marginTop: hp(2),          
  },
  cropName: {
    fontFamily: Font.bold,
  },
  dateText: {
    lineHeight: hp(1),            
    fontSize: wp(2.5),         
    color: '#646464',
    fontFamily: Font.medium,
  },
  description: {
    fontSize: wp(2.5),            
    marginTop: hp(0.5),           
    color: '#646464',
    fontFamily: Font.medium,
    width: wp(45),                 
  },
  dottedline: {
    borderBottomWidth: 1,
    borderColor: '#707070',
    borderStyle: 'dashed',
    width: wp(55),                  
    marginTop: hp(2),              
  },
  areastyle: {
    color: '#006838',
    fontFamily: Font.medium,
    fontSize: wp(2.3),            
    marginTop: hp(0.5),            
  },
  acreText: {
    color: '#646464',
    fontFamily: Font.medium,
  },
});
