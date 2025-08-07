import { StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';
import { Font } from '../Constant/Font';

const Account = props => {
  //  const [pass, setPass] = useState(true); 
  return (
    <View style={styles.NameContainer}>
      <Text style={styles.namestyle}>{props?.title}</Text>
      <TextInput
        style={styles.textinput}
        placeholder={props?.placeholder}
        placeholderTextColor={props?.placeholderTextColor}
        borderColor={props?.borderColor}
        maxLength={props?.maxLength}
        />
    </View>
  );
};

export default Account;

const styles = StyleSheet.create({
  NameContainer: {
    paddingHorizontal: 22,
    marginTop: 18,
  },
  namestyle: {
    fontFamily: Font.medium,
   color:"#646464"
  },
  textinput: {
    borderWidth: 1,
    borderRadius: 8,
  },
});
