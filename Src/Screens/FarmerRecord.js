import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import IconEntypo from 'react-native-vector-icons/Entypo';
import FarmerComponent from '../Components/FarmerComponent';
import { Font } from '../Constant/Font';

const FarmerRecord = () => {
  return (
    <View style={styles.container}>
   <View style={styles.upperportion}> 
      <View style={styles.header}>
        <Icon name="menu" size={24} color="green" marginLeft={8} />

        <View style={styles.dateContainer}>
          <Text style={styles.dateText}>04 APR 24</Text>
          <Text style={styles.dayText}>MONDAY</Text>
          <IconEntypo name="calendar" color="black" size={16} />
        </View>
   </View>       
      </View>

      <View style={styles.box}>
        <View style={styles.boxRow}>
          <Text style={styles.boxText}>Farmer</Text>
          <Text style={styles.boxText}>26 km/h</Text>
        </View>

        {/* Bottom Row */}
        <View style={styles.boxRow}>
          {/* Name */}
          <Text style={styles.boxTextLarge}>ARSHAD ALI</Text>

          {/* Temperature + Cloud Icon */}
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={styles.boxTextLarge}>24°</Text>
            <Image
              source={require('../Assets/Images/Clouds.png')}
              style={styles.cloudImage}
            />
          </View>
        </View>
      </View>

      {/* Farmer Component */}
      <FarmerComponent
        Land="LAND RECORD"
        Details="LAND OWNERSHIP DETAILS"
        Insure="CROP TO INSURE"
        Compensation="LOSS COMPENSATION"
        Assessment="LOSS ASSESSMENT"
        Registration="AUTHORIZED DEALERSHIP REGISTRATION"
      />
    </View>
  );
};

export default FarmerRecord;

const styles = StyleSheet.create({

  upperportion:{
           
  },
  container: {
    backgroundColor: '#F0F7F8',
    flex: 1,
    // paddingHorizontal: 22,
    paddingTop: 30,
    paddingHorizontal: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
    // backgroundColor:"red",
    paddingHorizontal:0,
  },
  dateContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 15,
    paddingHorizontal: 16,
    paddingVertical: 5,
    alignItems: 'center',
    elevation: 5,
    marginRight: 8,
    width:130,
  },
  dateText: {
    fontSize: 10,
    marginRight: 6,
    fontFamily: Font.bold,
    // marginTop:5,
  },
  dayText: {
    fontSize: 7,
    color: '#555',
    marginRight: 5,
  },
  box: {
    backgroundColor: 'green',
    marginHorizontal: 8,
    marginTop: 10,
    borderRadius: 15,
    paddingVertical: 12,
    paddingHorizontal: 15,
    height:80,
  },
  boxRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  boxText: {
    color: 'white',
    fontSize: 14,
  },
  boxTextLarge: {
    color: 'white',
    fontSize: 18,
    marginRight: 4,
  },
  cloudImage: {
    width: 28,
    height: 28,
    marginLeft: 5,
    resizeMode: 'contain',
  },
});
