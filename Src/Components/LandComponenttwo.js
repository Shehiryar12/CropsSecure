import { View, Text, TextInput, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Font } from '../Constant/Font';

const LandComponenttwo = props => {
  return (
    <SafeAreaView>
      <View style={{ marginTop: 20 }}>
        <Text
          style={{
            fontFamily: Font.medium,
            marginBottom: 5,
            color: '#646464',
            marginHorizontal: 8,
          }}
        >
          {props?.label}
        </Text>
        <View
          style={[
            styles.landstyle,
            { borderColor: props?.borderColor || '#DBD8D8' } 
          ]}
        >
          <TextInput
            placeholder={props?.placeholder}
            placeholderTextColor={props?.placeholderTextColor}
            style={{
              flex: 1,
              color: props?.textColor,
              fontSize: 12,
            }}
          />
          <MaterialIcons name="keyboard-arrow-down" size={24} color="#DBD8D8" />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LandComponenttwo;

const styles = StyleSheet.create({
  landstyle: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 8,
    paddingVertical: 4,
    marginHorizontal: 8,
  }
});
