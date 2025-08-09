// import { StyleSheet, Text, TextInput, View } from 'react-native';
// import React from 'react';
// import { Font } from '../Constant/Font';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

// const Dob = props => {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>{props?.title}</Text>

//       <View style={styles.innercontainer}>
//         <TextInput
//           style={styles.textinput}
//           placeholder={props?.placeholder}
//           placeholderTextColor={props?.placeholderTextColor}
//           borderColor={props?.borderColor}
//         />
//         <MaterialIcons name="calendar-today" />
//       </View>
//     </View>
//   );
// };

// export default Dob;

// const styles = StyleSheet.create({
//   container: {
//     paddingHorizontal: 22,
//     marginTop: 18,
//   },

//   header: {
//     // marginBottom: 5,
//     // fontSize: 16,
//     // color: '#000',
//     fontFamily: Font.medium,
//     color: '#646464',
//   },

//   innercontainer: {
//     flexDirection: 'row',
//     alignItems:"center",
    
//   },

//   textinput: {
//     flex: 1,
//     height: 40,
//     borderRadius: 8,
//     borderWidth: 1,
//   },
// });


import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { Font } from '../Constant/Font'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Dob = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>{props?.title}</Text>

      <View style={styles.textinputContainer}>  
        <TextInput
          style={styles.textinput}
          placeholder={props?.placeholder}
          placeholderTextColor={props?.placeholderTextColor}
        />  
        <MaterialIcons 
          name="calendar-today" 
          size={17} 
          color="#646464"
        />  
      </View>  
    </View>
  )
}

export default Dob

const styles = StyleSheet.create({
  container:{ 
    paddingHorizontal:22,
    marginTop:18,
  },

  header: {
    fontFamily: Font.medium,
    color:"#646464", 
   
  },

  textinputContainer:{
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    height: 40,
    marginTop:1,
  },

  textinput: {
    flex: 1,
    // marginTop:8,
  },
})

