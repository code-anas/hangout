import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Button = props => {
  return (
    <TouchableOpacity
      disabled={props.visiblity}
      onPress={() => props.onPress()}
      style={[styles.signInBtn, props.styleDesign]}>
      <Text style={styles.signInText}>{props.textName}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  signInBtn: {
    backgroundColor: '#45D4FF',
    height: hp(7),
    width: wp(70),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40,
    marginTop: '5%',
  },
  signInText: {
    fontSize: 18,
    color: '#FFFFFF',
  },
});

export default Button;
