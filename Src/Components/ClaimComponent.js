import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Font } from '../Constant/Font';

const ClaimComponent = props => {
  return (
    <SafeAreaView>
      {/* <Text>{props?.title}</Text> */}

      <View style={styles.box}>
        <View style={styles.innercontainer}>
          <Text style={styles.tobaccostyle}>Tobacco</Text>
          <Text style={styles.Processingstyle}>Processing</Text>
        </View>

      <View style={styles.description}>
        <Text style={styles.descriptiontext}>Your Claim is processing, you should in touch with us.</Text>
      </View>  


      </View>
    </SafeAreaView>
  );
};

export default ClaimComponent;

const styles = StyleSheet.create({
  box: {
    width: 320,
    height: 138,
    backgroundColor: '#e0e0e0',
    marginLeft: 21,
    marginTop: 30,
    borderRadius: 4,
  },
  innercontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginTop: 12,
  },
  tobaccostyle: {
    fontFamily: Font.bold,
  },
  Processingstyle: {
    color: '#F39E1E',
    fontSize: 10,
    marginTop: 2,
    fontFamily:Font.medium,
  },
  descriptiontext:{
    color:'#646464',
    fontSize:9,
    width:170,
    marginLeft:17,
    marginTop:2,
    fontFamily:Font.medium,
  }
});
