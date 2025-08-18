import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Font } from '../Constant/Font';
import ReceiptComponents from '../Components/ReceiptComponents';

const Receipt = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <MaterialIcons name="keyboard-arrow-left" size={23} color="black" />
        <Text style={styles.heading}>Receipt</Text>
        <View style={{ width: 36 }}></View>
      </View>

      <ReceiptComponents
        title="Khan Fertilizer"
        productname="Product"
        itemname="Items"
        price="Price (Rs)"
        descriptiontext="Stick Class Dispersing and adhesive"
        number={2}
        pricenumber={5600}
        descriptiontexttwo="Strong plus High phosphor that increase"
        numbertwo={2}
        pricenumbertwo={5200}
        total="Total"
        totalnumber={2}
        totalprice={10800}
        claimamount="Claim Amount"
        claimprice={"2,000,000"}
        endingtext="Present this receipt to the dealer to collect the products"
      />
    </SafeAreaView>
  );
};

export default Receipt;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // alignItems: 'center',
    marginTop: 14,
    marginLeft: 12,
  },
  heading: {
    fontFamily: Font.bold,
    fontSize: 15,
  },
});
