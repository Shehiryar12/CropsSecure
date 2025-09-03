import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { wp, hp } from '../Constant/Responsive';
import { Font } from '../Constant/Font';

const CheckBoxComponent = props => {
  const [yes, setYes] = useState(false);

  return (
    <View>
      <View style={styles.rememberContainer}>
        <TouchableOpacity onPress={() => setYes(!yes)}>
          <MaterialIcons
            name={yes ? 'check-box' : 'check-box-outline-blank'}
            size={wp(4.5)}
            color="green"
            borderColor="lightgrey"
          />
        </TouchableOpacity>
        <Text style={styles.remember}>Remember Me</Text>
      </View>
    </View>
  );
};

export default CheckBoxComponent;

const styles = StyleSheet.create({
  rememberContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: hp(3.5),
    marginLeft: wp(5),
  },
  remember: {
    fontFamily: Font.medium,
    fontSize: wp(2.5),
    marginLeft: wp(1.2),
  },
});
