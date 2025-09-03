import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo'; // Fixed import name
import FarmerComponent from '../Components/FarmerComponent';
import { Font } from '../Constant/Font';
import { useNavigation } from '@react-navigation/native';

const FarmerRecord = () => {
  const navigation = useNavigation();
  return (
  <View style={styles.container}> 
    <View style={styles.innercontainer}>
      <View style={styles.upperportion}>
        <View style={styles.header}>
          <Icon name="menu" size={24} color="green" style={styles.menuIcon} />

          <View style={styles.dateContainer}>
            <Text style={styles.dateText}>04 APR 24</Text>
            <Text style={styles.dayText}>MONDAY</Text>
            <Entypo name="calendar" color="black" size={16} /> 
          </View>
        </View>
      </View>

      <View style={styles.box}>
        <View style={styles.boxRow}>
          <Text style={styles.boxText}>Farmer</Text>
          <Text style={styles.boxText}>26 km/h</Text>
        </View>

        <View style={styles.boxRow}>
          <Text style={styles.boxTextLarge}>ARSHAD ALI</Text>

          <View style={styles.tempContainer}>
            <Text style={styles.boxTextLarge}>24°</Text>
            <Image
              source={require('../Assets/Images/Clouds.png')}
              style={styles.cloudImage}
            />
          </View>
        </View>
      </View>

      <FarmerComponent
        Land={() => navigation.navigate('LandData')}
        LandTitle="LAND RECORD"
        Details="LAND OWNERSHIP DETAILS"
        DetailOnPress={() => navigation.navigate('Ownership')}
        Insure="CROP TO INSURE"
        Compensation="LOSS COMPENSATION"
        Assessment="LOSS ASSESSMENT"
        Registration="AUTHORIZED DEALERSHIP REGISTRATION"
      />
    </View>
    </View> 
  );
};

export default FarmerRecord;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innercontainer: {
    backgroundColor: '#F0F7F8',
    flex: 1,
    paddingTop: 30,
    paddingHorizontal: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
    paddingHorizontal: 0,
  },
  menuIcon: {
    marginLeft: 8,
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
    width: 130,
  },
  dateText: {
    fontSize: 10,
    marginRight: 6,
    fontFamily: Font.bold,
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
    height: 80,
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
  tempContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cloudImage: {
    width: 28,
    height: 28,
    marginLeft: 5,
    resizeMode: 'contain',
  },
});