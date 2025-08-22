import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  TouchableWithoutFeedback,
} from 'react-native';
import React, { useState } from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Font } from '../Constant/Font';
import { hp, wp } from '../Constant/Responsive';
import { districtNames } from '../Constant/DummyData';
import DropdownComp from '../Components/DropdownComp';

const LandData = () => {
  const [district, setDistrict] = useState('');
  const [tehsil, setTehsil] = useState('');
  const [UC, setUC] = useState('');
  const [VillageName, setVillageName] = useState('');
  const [otherformoreinformation, setOtherformoreinformation] = useState('');

  const [modalVisible, setModalVisible] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.heading}>
        <MaterialIcons name="keyboard-arrow-left" size={23} color="black" />
        <Text style={styles.status}>Land Record</Text>
        <View style={styles.space}></View>
      </View>

      <DropdownComp
        titleLabel={'District Name'}
        data={districtNames}
        labelField="label"
        valueField="value"
        placeholder={'Enter district name'}
        value={district}
        onChange={item => setDistrict(item.value)}
        mainStyling={{ marginTop: hp(1.5) }}
        dropdown={{ marginTop: hp(1) }}
      />

      <DropdownComp
        titleLabel={'Tehsil Name'}
        data={districtNames}
        labelField="label"
        valueField="value"
        placeholder={'Enter tehsil name'}
        value={tehsil}
        onChange={item => setTehsil(item.value)}
        mainStyling={{ marginTop: hp(1.5) }}
        dropdown={{ marginTop: hp(1) }}
      />

      <DropdownComp
        titleLabel={'UC'}
        data={districtNames}
        labelField="label"
        valueField="value"
        placeholder={'Enter UC name'}
        value={UC}
        onChange={item => setUC(item.value)}
        mainStyling={{ marginTop: hp(1.5) }}
        dropdown={{ marginTop: hp(1) }}
      />

      <DropdownComp
        titleLabel={'Village Name'}
        data={districtNames}
        labelField="label"
        valueField="value"
        placeholder={'Enter Village Name'}
        value={VillageName}
        onChange={item => setVillageName(item.value)}
        mainStyling={{ marginTop: hp(1.5) }}
        dropdown={{ marginTop: hp(1) }}
      />

      <DropdownComp
        titleLabel={'Other (for more information)'}
        data={districtNames}
        labelField="label"
        valueField="value"
        placeholder={'Enter other info'}
        value={otherformoreinformation}
        onChange={item => setOtherformoreinformation(item.value)}
        mainStyling={{ marginTop: hp(1.5) }}
        dropdown={{ marginTop: hp(1) }}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.buttonText}>Save</Text>
      </TouchableOpacity>

     
      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="none"
        onRequestClose={() => setModalVisible(false)}
      >
       
        <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
          <View style={styles.modalContainer}>
          
            <TouchableWithoutFeedback>
              <View style={styles.modalBox}>
                <Text style={styles.modalText}>Estimated Loss</Text>
                <Text
                  style={{
                    marginTop: -20,
                    fontSize: 25,
                    fontFamily: Font.bold,
                    color: '#006838',
                  }}
                >
                  2,000,000
                </Text>

                <TouchableOpacity
                  style={styles.proceedBtn}
                  onPress={() => console.log('Proceed to Claim pressed')}
                >
                  <Text style={styles.proceedText}>Proceed to Claim</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.purchaseBtn}
                  onPress={() => console.log('Purchase With Dealer pressed')}
                >
                  <Text style={styles.purchaseText}>Purchase With Dealer</Text>
                </TouchableOpacity>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </SafeAreaView>
  );
};

export default LandData;

const styles = StyleSheet.create({
  container: { flex: 1, paddingHorizontal: wp(5) },
  space: { width: wp(7) },
  heading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 15,
  },
  status: { fontFamily: Font.bold, fontSize: 16 },
  button: {
    backgroundColor: '#00A651',
    paddingVertical: hp(1.7),
    borderRadius: wp(2),
    marginHorizontal: wp(2),
    marginTop: hp(7),
    alignItems: 'center',
  },
  buttonText: { fontFamily: Font.medium, fontSize: 13, color: 'white' },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalBox: {
    width: '85%',
    backgroundColor: 'white',
    padding: 30,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalText: { fontFamily: Font.medium, fontSize: 20, marginBottom: 20 },
  proceedBtn: {
    marginTop: 30,
    backgroundColor: '#009245',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 7,
    marginBottom: 10,
  },
  proceedText: { color: 'white', fontFamily: Font.bold, fontSize: 14 },
  purchaseBtn: {
    backgroundColor: '#000000',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 7,
    marginTop: 12,
  },
  purchaseText: { color: 'white', fontFamily: Font.bold, fontSize: 14 },
});
