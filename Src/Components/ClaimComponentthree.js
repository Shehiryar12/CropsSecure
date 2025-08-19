import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { Font } from '../Constant/Font';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const ClaimComponenttwo = props => {
  return (
    <SafeAreaView>
      {/* <Text>{props?.title}</Text> */}

      <View style={styles.box}>
        <View style={styles.innercontainer}>
          <Text style={styles.tobaccostyle}>{props?.title}</Text>
          <Text style={styles.Processingstyle}>{props?.processing}</Text>
        </View>

        <View style={styles.description}>
          <Text style={styles.descriptiontext}>
          {props?.description}
          </Text>
        </View>

  <View style={styles.endingContainer}>
        <TouchableOpacity style={styles.buttonstyle}>   
           <MaterialIcons name="phone-in-talk" size={12} color="#006838" marginLeft={6} />
             <Text style={styles.buttontext}>{props?.contact}</Text>
        </TouchableOpacity>
        <Text style={{fontSize:9,color:"#646464",fontFamily:Font.medium,marginTop:20,}}>{props?.date}</Text>
  </View>      

       
      </View>
    </SafeAreaView>
  );
};

export default ClaimComponenttwo;

const styles = StyleSheet.create({
  box: {
    width: 320,
    height: 127,
    backgroundColor: '#e0e0e0',
    marginLeft: 21,
    marginTop: 30,
    borderRadius: 4,
  },
  innercontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginTop: 12,
  },
  tobaccostyle: {
    fontFamily: Font.bold,
  },
  Processingstyle: {
    color: '#AC1318',
    fontSize: 10,
    marginTop: 2,
    fontFamily: Font.medium,
  },
  descriptiontext: {
    color: '#646464',
    fontSize: 9,
    width: 170,
    marginLeft: 17,
    marginTop: 2,
    fontFamily: Font.medium,
  },

buttonstyle:{
    width:93,
    height:26,
    borderRadius:244,
    borderWidth:1,
    borderColor:"grey",
    marginTop:20,
    flexDirection:'row',
    alignItems:"center",    
},
buttontext:{
     color:"#006838",
      fontSize:9,
      marginLeft:5,
        fontFamily:Font.medium,  
       
},
endingContainer:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    paddingHorizontal:16,
}

});
