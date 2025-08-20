import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { Font } from '../Constant/Font';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const ClaimComponenttwo = props => {
  return (
   
      <View style={styles.box}>
        <View style={styles.innercontainer}>
          <Text style={styles.tobaccostyle}>{props?.title}</Text>
          <Text style={styles.settledstyle}>{props?.settled}</Text>
        </View>
        <View style={styles.description}>
          <Text style={styles.descriptiontext}>{props?.description}</Text>
        </View>

        <View style={styles.endingContainer}>
          <TouchableOpacity style={styles.buttonstyle}>
            <MaterialIcons
              name="phone-in-talk"
              size={12}
              color="#006838"
              marginLeft={6}
            />
            <Text style={styles.buttontext}>{props?.contact}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonstyletwo}>
            <MaterialIcons
              name="payment"
              size={12}
              color="#006838"
              marginLeft={6}
            />
            <Text style={styles.buttontext}>{props?.payment}</Text>
          </TouchableOpacity>
           <Text style={styles.dateText}>{props?.date}</Text>
        </View>
      </View>
 
  );
};

export default ClaimComponenttwo;

const styles = StyleSheet.create({
  box: {
    width: 320,
    height: 127,
    backgroundColor: '#F6F6F6',
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
  settledstyle: {
    color: '#006838',
    fontSize: 10,
    marginTop: 2,
    fontFamily: Font.medium,
  },
  descriptiontext: {
    color: '#646464',
    fontSize: 9,
    width: 150,
    marginLeft: 17,
    marginTop: 2,
    fontFamily: Font.medium,
  },
  buttonstyle: {
    width: 93,
    height: 26,
    borderRadius:14,
    borderWidth: 1,
    borderColor: 'grey',
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
   
  },

  buttonstyletwo: {
    width: 96,
    height: 26,
   borderRadius:14,
    // borderRadius: 244,
    borderColor: 'grey',
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    // marginLeft: 9,
    backgroundColor: "#d3d3d3",
    // marginRight:-2,
    marginLeft:-30,
  },
  endingContainer: {
    flexDirection: 'row',
    paddingHorizontal: 16,
      alignItems: 'center',
      justifyContent: 'space-between',
    
  },
  buttontext: {
    color: '#006838',
    fontSize: 9,
    marginLeft: 4,
    fontFamily: Font.medium,
  },

    dateText: {
    fontSize: 9,
    color: '#646464',
    fontFamily: Font.medium,
    marginTop: 20,
    // alignItems:"center"
  },
});
