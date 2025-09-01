import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Modal,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import React, { useState } from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Font } from '../Constant/Font';
import InsuranceComponent from '../Components/InsuranceComponent';

const Insurance = () => {
  const [sheetVisible, setSheetVisible] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <MaterialIcons name="keyboard-arrow-left" size={23} color="black" />
        <Text style={styles.heading}>Crop To Insure</Text>
        <View style={{ width: 31 }} />
      </View>

      <View>
        <InsuranceComponent
          title="Company"
          borderRadius={12}
          borderColor="green"
          placeholder="Select insurance company"
          placeholderTextColor="#DBD8D8"
          fontSize={12}
        />
        <InsuranceComponent
          title="Insurance Type"
          borderRadius={12}
          borderColor="#DBD8D8"
          placeholder="Select insurance type"
          placeholderTextColor="#DBD8D8"
          fontSize={12}
        />

        <View style={{ marginTop: 15, marginLeft: 22 }}>
          <Text style={styles.label}>INSURANCE COMPANY</Text>
          <Text style={styles.value}>EFU Life Assurance Ltd</Text>

          <Text style={styles.label}>INSURANCE TYPE</Text>
          <Text style={styles.value}>Satallite Insurance</Text>

          <Text style={styles.label}>INSURED</Text>
          <Text style={styles.value}>Arshad Ali</Text>

          <Text style={styles.label}>COVERAGE</Text>
          <Text style={styles.value}>
            <Text style={{ fontFamily: Font.bold, color: 'black' }}>RS.</Text>{' '}
            2000000
          </Text>
        </View>

        <View style={styles.dottedcontainer} />
        <View style={styles.prices}>
          <Text style={{ fontFamily: Font.bold, fontSize: 11 }}>Premium</Text>
          <Text style={{ fontFamily: Font.bold, fontSize: 11 }}>
            Rs. <Text style={{ color: 'grey' }}>24000</Text>
          </Text>
        </View>

        <View style={styles.pricestwo}>
          <Text style={{ fontFamily: Font.bold, fontSize: 11 }}>Tax</Text>
          <Text style={{ fontFamily: Font.bold, fontSize: 11 }}>
            Rs.<Text style={{ color: 'grey' }}>6000</Text>
          </Text>
        </View>

        <View style={styles.dottedcontainertwo} />
        <View style={styles.totalprice}>
          <Text style={{ fontFamily: Font.bold, fontSize: 11 }}>Total</Text>
          <Text style={{ fontFamily: Font.bold, fontSize: 11 }}>Rs.30000</Text>
        </View>

       
        <TouchableOpacity                   //ye pay button
          style={styles.buttonstyle}
          onPress={() => setSheetVisible(true)}
        >
          <Text style={styles.buttontext}>Pay</Text>
        </TouchableOpacity>
      </View>

    
      <Modal
        visible={sheetVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setSheetVisible(false)}
      >
      
        <TouchableWithoutFeedback onPress={() => setSheetVisible(false)}>
          <View style={styles.sheetOverlay}>
          
            <TouchableWithoutFeedback>
              <View style={styles.bottomSheet}>
                <Text style={styles.sheetTitle}>Choose Payment Option</Text>

                <TouchableOpacity style={styles.optionButton}>
                  <Image
                    source={require('../Assets/Images/Jazzcashnewlogo.png')}
                    style={{ width: 20, height: 20, marginRight: 10 }}
                  />
                  <Text style={styles.optionText}>JazzCash</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.optionButton}>
                  <Image
                    source={require('../Assets/Images/easypaisa.png')}
                    style={{ width: 20, height: 20, marginRight: 10 }}
                  />
                  <Text style={styles.optionText}>EasyPaisa</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.optionButton}>
                  <Image
                    source={require('../Assets/Images/creditCard.png')}
                    style={{ width: 20, height: 20, marginRight: 10 }}
                  />
                  <Text style={styles.optionText}>Debit/Credit Card</Text>
                </TouchableOpacity>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </SafeAreaView>
  );
};

export default Insurance;

const styles = StyleSheet.create({
  container: { flex: 1,backgroundColor:"white" },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 14,
    marginLeft: 12,
    
  },
  heading: { fontFamily: Font.bold, fontSize: 15 },
  label: { fontFamily: Font.bold, color: 'black', marginTop: 12, fontSize: 11 },
  value: { color: '#646464', fontFamily: Font.medium, fontSize: 10 },
  dottedcontainer: {
    borderBottomColor: '#646464',
    borderBottomWidth: 1,
    borderStyle: 'dashed',
    marginHorizontal: 22,
    marginTop: 16,
  },
  pricestwo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 22,
    marginTop: 6,
  },
  prices: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 22,
    marginTop: 14,
    alignItems: 'center',
  },
  dottedcontainertwo: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    borderStyle: 'dashed',
    marginHorizontal: 22,
    marginTop: 14,
  },
  totalprice: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 22,
    marginTop: 7,
  },
  buttonstyle: {
    backgroundColor: '#009245',
    paddingVertical: 11,
    borderRadius: 12,
    marginHorizontal: 20,
    marginTop: 80,
  },
  buttontext: { color: '#fff', textAlign: 'center', fontFamily: Font.medium },
  sheetOverlay: {
    flex: 1,
   backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'flex-end',
    
  },
  bottomSheet: {
    backgroundColor: 'white',
    padding: 20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    // border:10,
  },
  sheetTitle: {
    fontFamily: Font.bold,
    fontSize: 13,
    marginBottom: 15,
    textAlign: 'center',
    color: '#646464',
  },
  optionButton: {
    flexDirection: 'row',
    padding: 12,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    marginTop: 10,
  },
  optionText: { fontFamily: Font.medium, fontSize: 14, color: 'black' },
});
