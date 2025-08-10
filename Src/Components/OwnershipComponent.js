// import { Image, StyleSheet, Text, View } from 'react-native';
// import React from 'react';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

// const OwnershipComponent = props => {
//   return (
//     <View style={styles.container}>
//       {/* Heading */}
//       <View style={styles.heading}>
//         <MaterialIcons
//           name="keyboard-arrow-left"
//           size={27}
//           style={styles.arrowstyling}
//         />
//         <Text style={styles.LandStyling}>{props.title}</Text>
//         <View></View>
//       </View>

//       {/* Boxed Section */}
//       <View style={styles.boxed}>
//         <View style={styles.box}>
//           {/* Row: Image + Text */}
//           <View style={{ flexDirection: 'row', alignItems: 'center' }}>
//             <Image
//               source={require('../Screens/landimage.jpg')}
//               style={styles.landimage}
//             />
//             <View style={{ flexDirection: 'column', flex: 1 }}>
//               <Text style={styles.landtext}>{props.title}</Text>
//               <Text style={styles.landtexttwo}>{props.define}</Text>
//               <Text style={styles.dotline}></Text>

//               <View style={styles.totalContainer}>
//               <Text style={styles.totalarea}>  
//                 Total Area: <Text style={styles.Acre}>10 Acres</Text>
//                 <Text style={styles.certificate}>View Certificate</Text>
//               </Text>
//               </View> 
//             </View>
//           </View>

//           {/* Dotline on Next Line */}
//           {/* <View>
//             <Text style={styles.dotline}></Text>
//           </View> */}
//         </View>
//       </View>
//     </View>
//   );
// };

// export default OwnershipComponent;

// const styles = StyleSheet.create({
//   container: {},
//   heading: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginTop: 25,
//     paddingHorizontal: 10,
//     alignItems: 'center',
//   },
//   LandStyling: {
//     marginRight: 20,
//   },
//   boxed: {
//     marginTop: 50,
//   },
//   box: {
//     width: 320,
//     height: 110,
//     backgroundColor: 'lightgrey',
//     marginHorizontal: 20,
//     borderRadius: 8,
//     paddingVertical: 5,
//   },
//   landimage: {
//     width: 80,
//     height: 80,
//     borderRadius: 8,
//     marginLeft: 15,
//     marginTop: 10,
//     marginRight: 10,
//   },
//   landtext: {
//     fontWeight: 'bold',
//     marginBottom: 5,
//   },
//   landtexttwo: {
//     fontSize: 9,
//     color: '#646464',
//   },
//   dotline: {
//     borderBottomWidth: 1,
//     borderBottomColor: '#000',
//     borderStyle: 'dotted',
//     //  marginHorizontal:10,
//     // paddingHorizontal:12,
//     // marginHorizontal:5,
//     marginHorizontal: 7,
//   },
//   totalContainer:{
//     flexDirection:"row",
//     justifyContent:"space-between",
//   },
//   totalarea: {
//     fontSize: 8,
//     color: 'green',
//   },
//   Acre:{
//     color:"black",
//   },
//   certificate:{
//     marginLeft:10,
//   }
  
// });


import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const OwnershipComponent = props => {
  return (
    <View style={styles.container}>
      {/* Heading */}
      <View style={styles.heading}>
        <MaterialIcons
          name="keyboard-arrow-left"
          size={27}
          style={styles.arrowstyling}
        />
        <Text style={styles.LandStyling}>{props.title}</Text>
        <View></View>
      </View>


      <View style={styles.boxed}>
        <View style={styles.box}>
    
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image
              source={require('../Screens/landimage.jpg')}
              style={styles.landimage}
            />
            <View style={{ flexDirection: 'column', flex: 1 }}>
              <Text style={styles.landtext}>{props.title}</Text>
              <Text style={styles.landtexttwo}>{props.define}</Text>

           
              <View style={styles.dotline} ></View>

              <View style={styles.totalContainer}>
                <Text style={styles.totalarea}>
                  Total Area: <Text style={styles.Acre}>10 Acres</Text>
                </Text>
                <Text style={styles.certificate}>View Certificate</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default OwnershipComponent;

const styles = StyleSheet.create({
  container: {},
  heading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 25,
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  LandStyling: {
    marginRight: 20,
  },
  boxed: {
    marginTop: 50,
  },
  box: {
    width: 320,
    height: 110,
    backgroundColor: 'lightgrey',
    marginHorizontal: 20,
    borderRadius: 8,
    paddingVertical: 5,
  },
  landimage: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginLeft: 15,
    marginTop: 10,
    marginRight: 10,
  },
  landtext: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  landtexttwo: {
    fontSize: 10,
    color: '#646464',

  },
  dotline: {
    borderBottomWidth: 1,
    borderBottomColor: '#BDBDBD',
    borderStyle: 'dotted',
    // marginHorizontal: 17,
    marginTop: 5,
    width:210,
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // marginHorizontal: 10,
    marginTop: 5,
  },
  totalarea: {
    fontSize: 8,
    color: 'green',
  },
  Acre: {
    color: 'black',
  },
  certificate: {
    fontSize: 8,
    marginRight:17,

  },
});
