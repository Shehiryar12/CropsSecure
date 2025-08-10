import { StyleSheet, View, Text } from 'react-native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import OwnershipComponent from '../Components/OwnershipComponent';
import { Font } from '../Constant/Font';

const Ownership = () => {
  return (
    <View>
      {/* Heading */}
      <View style={styles.heading}>
        <MaterialIcons
          name="keyboard-arrow-left"
          size={27}
          style={styles.arrowstyling}
        />
        <Text style={styles.LandStyling}>Land Area Ownership</Text>
        <View></View>
      </View>

    
      <OwnershipComponent
        title="Land Area Ownership"
        define="Chak 45, Toba Tek Singh, Faisalabad, Punjab, Pakistan"
        Acres="10 Acres" 
        certificate="View Certificate"
      />

    
      <OwnershipComponent
        title="Land Area Ownership"
        define="Mouza Kot Samaba, Rahim Yar Khan, Punjab, Pakistan."
        Acres="10 Acres" 
          certificate="View Certificate"
      />
    </View>
  );
};

export default Ownership;

const styles = StyleSheet.create({
  heading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 25,
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  LandStyling: {
    marginRight: 20,
    fontFamily:Font.bold,
  },
});
