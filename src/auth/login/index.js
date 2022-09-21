import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import FastImage from 'react-native-fast-image';
import {SafeAreaView} from 'react-native-safe-area-context';
import Button from '../../components/Button';
import Headercom from '../../components/Headercom';
import Modal from '../../components/Modal';

const Login = props => {
  const [checkTest, setCheckTest] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <Headercom
        Title="Hangout"
        loginheaderTextcolor={styles.headerTextcolor}
      />
      <FastImage
        source={require('../../assets/images/waves.png')}
        style={styles.waveImage}
      />
      <View style={styles.cardDesign}>
        <View style={styles.cardView}>
          <TextInput
            style={styles.input}
            placeholder="Phone Number"
            placeholderTextColor={'#595959'}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor={'#595959'}
          />
          <TouchableOpacity style={styles.forgotPassView}>
            <Text style={styles.forgotPassText}>Forgot Passwords?</Text>
          </TouchableOpacity>
          <Button
            joMarzi={'Sign  In'}
            styleDesign={styles.buttonDesignProps}
            onTap={() => props.navigation.navigate('CreateHangout')}
          />
          <TouchableOpacity
            style={styles.registerBtn}
            onPress={() => props.navigation.navigate('SignUp')}>
            <Text style={styles.registerText}>Register</Text>
          </TouchableOpacity>
{/* 
          <TouchableOpacity
            style={{backgroundColor: 'red', padding: 20}}
            onPress={() => setCheckTest(true)}>
            <Text>OPen</Text>
          </TouchableOpacity> */}
        </View>
      </View>
      {/* <Modal
        visibleTest={checkTest}
        callBackTestProp={() => setCheckTest(false)}
        callBackShowAlert={(dasdas) => {
          alert(dasdas);
        }}
      /> */}
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
    height: hp(10),
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
  cardView: {
    height: '100%',
    alignItems: 'center',
    marginTop: hp(10),
  },
  input: {
    marginVertical: '2%',
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
  headerTextcolor: {
    color: '#45D4FF',
  },
});

export default Login;
