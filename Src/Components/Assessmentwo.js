import { StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';
import { Font } from '../Constant/Font';
import AntDesign from 'react-native-vector-icons/AntDesign';


const Assessmentwo = props => {
  return (
    <View>
      <Text style={styles.heading}>{props?.title}</Text>
       <View
                style={[
                  styles.landstyle,
                  { borderColor: props?.borderColor || '#DBD8D8' },
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
                <AntDesign name="calendar" size={24} color="#DBD8D8" />
              </View>
    </View>
  );
};

export default Assessmentwo;

const styles = StyleSheet.create({
  heading: {
    fontFamily: Font.medium,
    marginBottom: 5,
    color: '#646464',
    marginHorizontal: 8,
    marginTop: 25,
    marginLeft: 21,
  },
    landstyle: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 8,
    paddingVertical: 4,
    marginHorizontal: 20,
  },
});
