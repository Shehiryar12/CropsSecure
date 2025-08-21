// // import {
// //   ActivityIndicator,
// //   StyleSheet,
// //   Text,
// //   TouchableOpacity,
// //   View,
// // } from 'react-native';
// // import React, {useState} from 'react';
// // import {Dropdown} from 'react-native-element-dropdown';
// // import Entypo from 'react-native-vector-icons/Entypo';
// // import { Colors } from '../Constant/Colors';
// // import { hp, wp } from '../Constant/Responsive';
// // import { Font, fontSize } from '../Constant/Font';

// // const DropdownComp = props => {
// //   const [isFocus, setIsFocus] = useState(false);
// //   const sortedData = props?.isDataSorted
// //     ? props?.data?.slice()
// //     : props?.data?.slice().sort((a, b) => {
// //         const labelA = a[props?.labelField]?.toLowerCase();
// //         const labelB = b[props?.labelField]?.toLowerCase();
// //         return labelA?.localeCompare(labelB);
// //       });

// //   const renderLabel = () => {
// //     return (
// //       <View style={props?.label}>
// //         <View
// //           style={[
// //             {
// //               flexDirection: 'row',
// //               alignItems: 'center',
// //             },
// //             props.labelStyle,
// //           ]}>
// //           <Text style={[styles.titleStyling, props?.titleTextStyling]}>
// //             {props?.titleLabel}
// //           </Text>

// //           {props?.optionalText && (
// //             <Text style={styles.optionalStyling}> {props?.optionalText}</Text>
// //           )}
// //         </View>
// //       </View>
// //     );
// //   };

// //   return (
// //     <View style={props?.mainStyling}>
// //       <View>
// //         {renderLabel()}
// //         <Dropdown
// //           mode={props?.mode || 'modal'}
// //           ref={props?.dropDownRef}
// //           style={[
// //             styles.dropdown,
// //             {
// //               borderColor: isFocus ? Colors.primary : Colors.lightGray,
// //               width: props?.width || wp(90),
// //               opacity: props?.disbale ? 0.8 : 1,
// //               backgroundColor: props?.fixedValue ? Colors.lightGray : null
// //             },
// //             props?.dropdown,
// //           ]}
// //           placeholderStyle={[
// //             styles.placeholderStyle,
// //             {
// //               color: Colors?.lightGray,
// //             },
// //           ]}
// //           selectedTextStyle={[
// //             styles.selectedTextStyle,
// //             {
// //               color: props?.selectedTextStyle || Colors.secondary,
// //               textTransform:'capitalize'
// //             },
// //           ]}
// //           showsVerticalScrollIndicator={false}
// //           inputSearchStyle={styles.inputSearchStyle}
// //           iconStyle={[styles.iconStyle, props.iconStyle]}
// //           data={props?.notSorted ? props?.data : sortedData}
// //           search={props?.search ?? true}
// //           maxHeight={300}
// //           labelField={props?.labelField}
// //           valueField={props?.valueField}
// //           placeholder={!isFocus ? props.placeholder : '...'}
// //           searchPlaceholder="Search..."
// //           value={props?.value}
// //           itemTextStyle={styles.itemTextStyle}
// //           searchPlaceholderTextColor={Colors.lightGray}
// //           dropdownPosition={props?.position || 'auto'}
// //           containerStyle={{
// //             borderColor: Colors.primary,
// //             borderRadius: wp(2),
// //           }}
// //           onFocus={() => {
// //             props?.onFocus;
// //             setIsFocus(true);
// //           }}
// //           onBlur={() => setIsFocus(false)}
// //           onChange={props?.onChange}
// //           disable={props?.disbale || props?.loading}
// //           renderRightIcon={() => {
// //             return props?.loading ? (
// //               <ActivityIndicator size={wp(7)} color={Colors.iconColor} />
// //             ) : (
// //               <>
// //                 {props?.crossIcon && props?.value ? (
// //                   <TouchableOpacity onPress={props?.onClear}>
// //                     <Entypo
// //                       color={props?.crossColor || Colors.red}
// //                       name={'circle-with-cross'}
// //                       size={wp(7)}
// //                     />
// //                   </TouchableOpacity>
// //                 ) : null}
// //                 <Entypo
// //                   color={Colors.lightGray}
// //                   name={'chevron-down'}
// //                   size={wp(7)}
// //                 />
// //               </>
// //             );
// //           }}
// //         />
// //       </View>

// //       {props?.errorMessage && (
// //         <Text style={[styles.errMessage, {width: props?.errMessageStyle}]}>
// //           {props?.errorMessage}
// //         </Text>
// //       )}
// //     </View>
// //   );
// // };

// // export default DropdownComp;

// // const styles = StyleSheet.create({
// //   dropdown: {
// //     borderRadius: wp(2),
// //     backgroundColor: Colors.bg,
// //     paddingHorizontal: wp(3.5),
// //     paddingVertical: wp(2.6),
// //     alignItems: 'center',
// //     borderWidth: wp(0.4),
// //   },
// //   optionalStyling: {
// //     fontFamily: fontSize.Medium,
// //     fontSize: fontSize.S,
// //   },
// //   titleStyling: {
// //     color: Colors.dimGrey,
// //     fontFamily: Font.Semibold,
// //     fontSize: fontSize.M,
// //     marginLeft: wp(0.5),
// //   },
// //   icon: {
// //     marginRight: 5,
// //   },
// //   label: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //   },
// //   placeholderStyle: {
// //     fontSize: fontSize.S,
// //     color: Colors.bg,
// //     fontFamily: Font.regular,
// //   },
// //   selectedTextStyle: {
// //     fontSize: fontSize.S,
// //     fontFamily: Font.Regular,
// //     color: Colors.darkGray,
// //   },
// //   iconStyle: {
// //     width: hp(4),
// //     height: hp(4),
// //   },
// //   inputSearchStyle: {
// //     fontSize: fontSize.XS,
// //     fontFamily: Font.Regular,
// //     color: Colors.secondary,
// //   },
// //   itemTextStyle: {
// //     color: Colors.secondary,
// //     fontFamily: Font.Medium,
// //     fontSize: fontSize.S,
// //     textTransform: 'capitalize',
// //   },
// //   errMessage: {
// //     color: Colors.darkRed,
// //     fontFamily: Font.Regular,
// //     fontSize: fontSize.S,
// //     marginLeft: wp(1),
// //     textAlign: 'left',
// //   },
// // });

// import { StyleSheet, Text, View } from 'react-native';
// import React from 'react';
// import { Dropdown } from 'react-native-element-dropdown';
// import { Colors } from '../Constant/Colors';
// import { hp, wp } from '../Constant/Responsive';
// import { Font, fontSize } from '../Constant/Font';

// const DropdownComp = ({
//   titleLabel,
//   data,
//   labelField,
//   valueField,
//   placeholder,
//   value,
//   onChange,
//   mainStyling,
//   dropdown,
// }) => {
//   return (
//     <View style={mainStyling}>
//       {/* Title Label */}
//       {titleLabel && <Text style={styles.title}>{titleLabel}</Text>}

//       {/* Dropdown */}
//       <Dropdown
//         style={[styles.dropdown, dropdown]}
//         placeholderStyle={styles.placeholderStyle}
//         selectedTextStyle={styles.selectedTextStyle}
//         data={data}
//         labelField={labelField}
//         valueField={valueField}
//         placeholder={placeholder}
//         value={value}
//         onChange={onChange}
//       />
//     </View>
//   );
// };

// export default DropdownComp;

// const styles = StyleSheet.create({
//   dropdown: {
//     borderWidth: wp(0.4),
//     borderColor: Colors.lightGray,
//     borderRadius: wp(2),
//     backgroundColor: Colors.bg,
//     paddingHorizontal: wp(3.5),
//     paddingVertical: wp(2.6),
//   },
//   title: {
//     color: Colors.dimGrey,
//     fontFamily: Font.semiBold,
//     fontSize: fontSize.M,
//     marginBottom: hp(0.5),
//   },
//   placeholderStyle: {
//     fontSize: fontSize.S,
//     color: Colors.lightGray,
//     fontFamily: Font.regular,
//   },
//   selectedTextStyle: {
//     fontSize: fontSize.S,
//     fontFamily: Font.regular,
//     color: Colors.secondary,
//   },
// });

import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Dropdown } from 'react-native-element-dropdown';
import { Colors } from '../Constant/Colors';
import { wp, hp } from '../Constant/Responsive';
import { Font, fontSize } from '../Constant/Font';

const DropdownComp = ({
  titleLabel,
  data,
  labelField,
  valueField,
  placeholder,
  value,
  onChange,
  mainStyling,
  dropdown,
}) => {
  return (
    <View style={mainStyling}>
      {titleLabel && <Text style={styles.title}>{titleLabel}</Text>}

      <Dropdown
        style={[styles.dropdown, dropdown]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        data={data}
        labelField={labelField}
        valueField={valueField}
        placeholder={placeholder}
        value={value} //  link with state
        onChange={onChange} // 👈 update state on selection
      />
    </View>
  );
};

export default DropdownComp;

const styles = StyleSheet.create({
  dropdown: {
    borderWidth: wp(0.4),
    borderColor: Colors.lightGray,
    borderRadius: wp(2),
    backgroundColor: Colors.bg,
    paddingHorizontal: wp(3.5),
    paddingVertical: wp(2.6),
  },
  title: {
    color: Colors.dimGrey,
    fontFamily: Font.semiBold,
    fontSize: fontSize.M,
    marginBottom: hp(0.5),
  },
  placeholderStyle: {
    fontSize: fontSize.S,
    color: Colors.lightGray,
    fontFamily: Font.regular,
  },
  selectedTextStyle: {
    fontSize: fontSize.S,
    fontFamily: Font.regular,
    color: Colors.secondary,
  },
});
