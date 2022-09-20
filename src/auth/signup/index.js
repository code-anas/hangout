import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import FastImage from 'react-native-fast-image';
import { SafeAreaView } from 'react-native-safe-area-context';
import Button from '../../components/Button';

const Login = props => {
  const [inputsArray, setInputArray] = useState([
    { value: '', name: 'User Name' },
    { value: '', name: 'First Name' },
    { value: '', name: 'Last Name' },
    { value: '', name: 'Phone Number' },
    { value: '', name: 'Password' },
    { value: '', name: 'Confirm Password' },
  ]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logoText}>HANGOUT</Text>
      </View>
      <FastImage
        source={require('../../assets/images/waves.png')}
        style={styles.waveImage}
      />
      <View style={styles.cardDesign}>
        <View style={styles.topContent}>
          <Text style={styles.createText}>Create Account</Text>
          <TouchableOpacity
            onPress={() => alert('Coming soon InshAllah')}>
            <FastImage
              source={require('../../assets/images/camera.png')}
              style={styles.cameraImage}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.textInputView}>
          {inputsArray?.map((res, key) => {
            return (
              <TextInput
                key={key}
                style={styles.input}
                placeholder={res.name}
                placeholderTextColor={'#595959'}
                value={inputsArray[key].value}
                onChangeText={value => {
                  inputsArray[key].value = value;
                  setInputArray(inputsArray);
                }}
              />
            );
          })}
          <Button
            onPressSignin={() => props.navigation.navigate('Login')}
            button={'Sign Up'} />
          <View style={styles.signInView}>
            <Text style={styles.alreadyHaveAnAccText}>Already have an account?  </Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Login')}>
              <Text style={styles.signInText}>Sign In</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    height: hp(13),
  },
  logoText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#45D4FF'
  },
  waveImage: {
    height: hp(14),
    width: '100%',
  },
  cardDesign: {
    backgroundColor: '#FFFFFF',
    height: '100%',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    position: 'absolute',
    bottom: 0,
    height: hp(73),
    width: '100%',
  },
  textInputView: {
    height: '100%',
    alignItems: 'center',
  },
  input: {
    marginVertical: '1%',
    width: '80%',
    height: hp(5),
    borderBottomWidth: 1,
    borderBottomColor: '#D4D4D4',
  },
  signInView: {
    flexDirection: 'row',
    marginTop: '5%',
  },
  signInText: {
    color: '#0266F2',
    fontWeight: 'bold',
    fontSize: 16
  },
  alreadyHaveAnAccText: {
    color: '#444547',
    fontWeight: 'bold',
    fontSize: 14
  },
  signInBtn: {
    backgroundColor: '#45D4FF',
    width: wp(70),
    paddingVertical: '4%',
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
  registerBtn: {
    marginTop: '10%',
  },
  registerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  topContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '5%',
    marginHorizontal: '5%',
    alignItems: 'center',
  },
  createText: {
    fontSize: 26,
    fontWeight: 'bold',
  },
  cameraImage: {
    height: hp(10),
    width: hp(10),
  },
});

export default Login;
