import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Font } from '../Constant/Font';

const InsuranceClaimComponent = props => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innercontainer}>
        <Text style={styles.status}>{props?.title}</Text>
        <Text
          style={{ color: '#646464', fontFamily: Font.medium, fontSize: 10,}}
        >
          {props?.incidentdate}
        </Text>
        <Text style={{ color: 'black', fontFamily: Font.bold, fontSize: 10,marginLeft:1 }}>
          {props?.date}
        </Text>

        <View style={styles.picContainer}>
          <Text style={{ fontFamily: Font.bold, fontSize: 12 }}>
            {props?.upload}
          </Text>
        </View>

        <View style={styles.picbox}>
          <Image
            source={require('../Assets/Images/cropImg4.png')}
            style={styles.imagestyle}
          />
          <Image
            source={require('../Assets/Images/cropImg1.png')}
            style={styles.imagestyle}
          />
          <Image
            source={require('../Assets/Images/cropImg2.png')}
            style={styles.imagestyle}
          />
          <Image
            source={require('../Assets/Images/cropImg3.png')}
            style={styles.imagestyle}
          />
          <Image
            source={require('../Assets/Images/cropImg1.png')}
            style={styles.imagestyle}
          />
          <View style={styles.box}>
            <Image source={require("../Assets/Images/addIcon.png")} style={{width:30,height:30}}/>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default InsuranceClaimComponent;

const styles = StyleSheet.create({
  innercontainer: {
    marginLeft: 22,
  },

  status: {
    fontFamily: Font.bold,
    fontSize: 12,
    marginTop: 21,
  },
  picContainer: {
    marginTop: 22,
    // marginLeft:12,
  },
  picbox: {
    backgroundColor: 'white',
    width: 296,
    height: 188,
    borderRadius: 8,
    marginTop: 10,
    borderColor: '#DBD8D8',
    borderWidth: 1,
    flexDirection: 'row',
    marginLeft: 12,
    flexWrap: 'wrap',
  },
  imagestyle: {
    width: 90,
    height: 85,
    borderRadius: 8,
    marginHorizontal: 4,
    marginTop: 5,
  },
  box:{
    width:90,
    height:85,
    marginTop:5,
    borderWidth:1,
    borderRadius:8,
    alignItems:"center",
    justifyContent:'center',
    borderColor:"#DBD8D8",
  }
});
