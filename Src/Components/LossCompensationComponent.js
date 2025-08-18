import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Font } from '../Constant/Font';
import { fonts } from '@rneui/base';

const LossCompensationComponent = props => {
  return (
    <View style={styles.container}>
      <View style={styles.innerconatiner}>
        <Image
          source={require('../Assets/Images/cropImg3.png')}
          style={styles.imagestyle}
        />
        <View style={styles.textContainer}>
          <Text style={styles.cropName}>{props?.title}</Text>
          <Text style={styles.dateText}>{props?.date}</Text>
          <Text style={styles.description}>
            {props?.description}
          </Text>
          <View style={styles.dottedline}></View>
          <Text style={styles.areastyle}>{props?.effectedarea}<Text style={{color:"#646464"}}> 2 Acres</Text></Text>
        </View>
      </View>
    </View>
  );
};

export default LossCompensationComponent;

const styles = StyleSheet.create({
  container: {},
  innerconatiner: {
    marginTop: 50,
    backgroundColor: 'lightgrey',
    marginHorizontal: 21,
    height: 110,
    borderRadius: 8,
    flexDirection: 'row',
  },
  imagestyle: {
    width: 75,
    height: 72,
    borderRadius: 4,
    marginLeft: 12,
    marginTop: 15,
  },
  textContainer: {
    marginLeft: 9,
    marginTop:15,
  },
  cropName: {
    fontFamily: Font.bold,
  },
  dateText: {
    lineHeight: 8,
    fontSize: 9,
    color: '#646464',
    fontFamily:Font.medium,
  },
  description: {
   
    fontSize: 9,
    marginTop:4,
    color: '#646464',
    fontFamily:Font.medium,
    width:170,
  },
  dottedline:{
     borderBottomWidth:1,
     borderColor:'#707070',
     borderStyle:'dashed',
     width:200,

    marginTop:4,
  },
  areastyle:{
    color:"#006838", 
    fontFamily:Font.medium,
    fontSize:8,
    marginTop:3
  }
});
