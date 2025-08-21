import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const CheckBoxPractice = () => {
  const [yes, setYes] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.rememberContainer}>
        <TouchableOpacity onPress={() => setYes(!yes)}>
          <MaterialIcons
            name={yes ? 'check-box' : 'check-box-outline-blank'}
            size={22}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default CheckBoxPractice;

const styles = StyleSheet.create({
    container:{
           flex:1,
           backgroungColor:"white",
    },
  rememberContainer: {
    marginLeft: 10,
    marginTop: 10,
  },
});
