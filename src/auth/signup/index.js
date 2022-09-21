import React, {useState} from 'react';
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
import {SafeAreaView} from 'react-native-safe-area-context';
import Button from '../../components/Button';
import HeaderComp from '../../components/Header';

const Login = props => {
  const [inputsArray, setInputArray] = useState([
    {value: '', name: 'User Name'},
    {value: '', name: 'First Name'},
    {value: '', name: 'Last Name'},
    {value: '', name: 'Phone Number'},
    {value: '', name: 'Password'},
    {value: '', name: 'Confirm Password'},
  ]);

  return (
    <SafeAreaView style={styles.container}>
      <HeaderComp
        Title="Hangout"
        loginheaderTextcolor={styles.headerTextcolor}
      />
      <FastImage
        source={require('../../assets/images/waves.png')}
        style={styles.waveImage}
      />
      <View style={styles.cardDesign}>
        <View style={styles.topContent}>
          <Text style={styles.createText}>Create Account</Text>
          <TouchableOpacity>
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
            joMarzi={'Sign Up'}
            styleDesign={styles.buttonDesignProps}
            onTap={() => props.navigation.goBack()}
          />
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
    height: hp(79),
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
  forgotPassView: {
    alignSelf: 'flex-end',
    marginRight: '10%',
    marginTop: '5%',
  },
  forgotPassText: {
    color: '#0266F2',
    fontWeight: 'bold',
  },
  headerTextcolor: {
    color: '#45D4FF',
  },
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
  buttonDesignProps: {
    backgroundColor: '#45D4FF',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

export default Login;
