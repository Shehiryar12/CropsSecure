import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { Font } from '../Constant/Font';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import PurchasingComponent from '../Components/PurchasingComponent';
import PurchasingComponenttwo from '../Components/Purchasingcomponenttwo';
import PurchasingComponentthree from '../Components/PurchasingComponentthree';
import PurchasingComponentFour from '../Components/PurchasingComponentFour';

const Purchasing = () => {
  return (
    <SafeAreaView>
      <View style={styles.header}>
        <MaterialIcons name="keyboard-arrow-left" size={23} color="black" />
        <Text style={styles.heading}>My Purchase</Text>
        <View style={{ width: 38 }}></View>
      </View>

      <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
        <PurchasingComponent
          title="Stick Class Dispersing and adhesive"
          delete="Delete Item"
          price="RS. 2800"
        />
        <PurchasingComponenttwo
          titletwo="Strong plus High phosphor that increase"
          deletetwo="Delete Item"
          pricetwo="RS. 2800"
        />
        <PurchasingComponentthree
          titlethree="Stick Class Dispersing and adhesive"
          deletethree="Delete Item"
          pricethree="RS. 2800"
        />
        <PurchasingComponentFour
          titlethree="Strong plus High phosphor that increase"
          deletethree="Delete Item"
          pricethree="RS. 2800"
        />
      </View>
    </SafeAreaView>
  );
};

export default Purchasing;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 14,
    marginLeft: 12,
  },
  heading: {
    fontFamily: Font.bold,
    fontSize: 15,
  },
});
