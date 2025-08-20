import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Font } from '../Constant/Font';
import AreaComponent from '../Components/AreaComponent';
import AreaInput from '../Components/AreaInput';
import { wp } from '../Constant/Responsive';

const Area = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <MaterialIcons name="keyboard-arrow-left" size={23} color="black" />
        <Text style={styles.heading}>Crop To Insure</Text>
        <View style={{ width:wp(10) }}></View>
      </View>

      <AreaComponent
        title="Crop"
        borderRadius={12}
        borderColor="green"
        placeholder="Select insurance company"
        placeholderTextColor="#DBD8D8"
        fontSize={12}
      />

      <View style={{ flexDirection: 'row' }}>
    
        <View style={{ flex: 1, marginRight: -27 }}>
          <AreaComponent
            title="Area Unit"
            borderRadius={12}
            borderColor="#DBD8D8"
            placeholder="Select unit"
            placeholderTextColor="#DBD8D8"
            fontSize={12}
          />
        </View>

     
        <View style={{ flex: 1 }}>
          <AreaInput
            title="Area"
            borderRadius={12}
            placeholder="Enter area"
            placeholderTextColor="#DBD8D8"
            fontSize={12}
            borderColor="#DBD8D8"
            keyboardType="numeric"
          />
        </View>
      </View>

      <TouchableOpacity style={styles.buttonstyle}>
        <Text style={styles.buttontext}>Add</Text>
      </TouchableOpacity>

       <View style={styles.dottedcontainertwo}></View>   
      
      <View style={styles.status}>
        <Text style={{fontFamily:Font.medium, color:'#009245'}}>Crop</Text>
        <Text  style={{fontFamily:Font.medium, color:'#009245'}}>Unit</Text>
        <Text  style={{fontFamily:Font.medium, color:'#009245'}}>Area</Text>
      </View>

         <View style={styles.status}>
        <Text style={{fontFamily:Font.medium, color:'#646464',fontSize:12}}>Cotton</Text>
        <Text  style={{fontFamily:Font.medium, color:'#646464',marginRight:20,fontSize:12}}>Acre</Text>
        <Text  style={{fontFamily:Font.medium, color:'#646464',fontSize:12}}>100</Text>
      </View>

        <View style={styles.status}>
        <Text style={{fontFamily:Font.medium, color:'#646464',fontSize:12}}>Rice</Text>
        <Text  style={{fontFamily:Font.medium, color:'#646464',marginRight:8,fontSize:12}}>Acre</Text>
        <Text  style={{fontFamily:Font.medium, color:'#646464',fontSize:12}}>80</Text>
      </View>

      <View style={styles.status}>
        <Text style={{fontFamily:Font.medium, color:'#646464',fontSize:12}}>Wheat</Text>
        <Text  style={{fontFamily:Font.medium, color:'#646464',marginRight:22,fontSize:12}}>Acre</Text>
        <Text  style={{fontFamily:Font.medium, color:'#646464',fontSize:12}}>20</Text>
      </View>

      <TouchableOpacity style={styles.nextbutton}>
                 <Text style={styles.nextbuttontext}>Next</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Area;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    marginTop: 14,
    marginLeft: 12,
  },
  heading: {
    fontFamily: Font.bold,
    fontSize: 15,
  },
  buttonstyle: {
    backgroundColor: '#009245',
    width: 100,
    borderRadius: 8,
    alignSelf: 'flex-end',
    marginRight: 22,
    marginTop: 15,
  },
  buttontext: {
    textAlign: 'center',
    paddingVertical: 10,
    fontFamily: Font.medium,
    color: 'white',
  },
   dottedcontainertwo: {
    borderBottomColor: '#DBD8D8',
    borderBottomWidth: 1,
    borderStyle: 'solid',
    marginHorizontal: 22,
    marginTop: 14,
  
  },
  status:{
    flexDirection:"row",
    
    marginTop:11,
    justifyContent:"space-between",
    marginHorizontal:23,

  },
  nextbutton:{
    backgroundColor:"#009245",
    paddingVertical:12,
    marginHorizontal:20,
    borderRadius:8,
    marginTop:160,
  },
    nextbuttontext:{
     textAlign:"center",
     color:"white",
     fontFamily:Font.medium,
  }


});
