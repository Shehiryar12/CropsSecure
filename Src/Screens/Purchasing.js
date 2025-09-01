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
import PurchasingComponent from '../Components/PurchasingComponent';
import PurchasingComponenttwo from '../Components/Purchasingcomponenttwo';
import PurchasingComponentthree from '../Components/PurchasingComponentthree';
import PurchasingComponentFour from '../Components/PurchasingComponentFour';
import { ScrollView } from 'react-native';

const Purchasing = () => {
  return (

    <SafeAreaView style={{ flex: 1 }}>
     
      <View style={styles.header}>
        <MaterialIcons name="keyboard-arrow-left" size={23} color="black" />
        <Text style={styles.heading}>My Purchase</Text>
        <View style={{ width: 38 }}></View>
      </View>

    
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', flex: 1 }}>
        <PurchasingComponent
          title="Stick Class Dispersing and adhesive"
          delete="Delete Item"
          price="RS. 2800"
        />
        <PurchasingComponenttwo
          titletwo="Strong plus High phosphor that increase"
          deletetwo="Delete Item"
          pricetwo="RS. 2600"
        />
        <PurchasingComponentthree
          titlethree="Stick Class Dispersing and adhesive"
          deletethree="Delete Item"
          pricethree="RS. 2800"
        />
        <PurchasingComponentFour
          titlethree="Strong plus High phosphor that increase"
          deletethree="Delete Item"
          pricethree="RS. 2600"
        />
      </View>

    
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.greenBtn}>
          <Text style={styles.greenBtnText}>Check Receipt</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.blackBtn}>
          <Text style={styles.blackBtnText}>Edit</Text>
        </TouchableOpacity>
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
  buttonContainer: {
    // paddingVertical: 20,
    alignItems: 'center',
    marginTop:90,
  },
  greenBtn: {
    backgroundColor: 'green',
    width: '90%',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 10,
  },
  greenBtnText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  blackBtn: {
    backgroundColor: 'black',
    width: '90%',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  blackBtnText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
