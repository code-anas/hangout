import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Button = props => {
  return (
    <TouchableOpacity
      onPress={props.onPressSignin}
      style={[styles.signInBtn, props.styleDesign]}>
      <Text style={styles.signInText}>{props.button}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  signInBtn: {
    backgroundColor: '#45D4FF',
    width: wp(70),
    paddingVertical: '5%',
    alignItems: 'center',
    borderRadius: 40,
    marginTop: '5%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  signInText: {
    fontSize: 20,
    color: '#FFFFFF',
  },
});

export default Button;
