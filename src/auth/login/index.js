import React from 'react';
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

const Login = props => {
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
          <TouchableOpacity
            onPress={() => alert('Coming Soon InshAllah')}
            style={styles.forgotPassView}>
            <Text style={styles.forgotPassText}>Forgot Passwords?</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.signInBtn}>
            <Text style={styles.signInText}>Sign In</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.registerBtn}
            onPress={() => props.navigation.navigate('SignUp')}>
            <Text style={styles.registerText}>Register</Text>
          </TouchableOpacity>
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
    color:'#45D4FF'
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
    height: hp(72),
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
  signInBtn: {
    backgroundColor: '#45D4FF',
    width: wp(70),
    paddingVertical: '4%',
    alignItems: 'center',
    borderRadius: 40,
    marginTop: '10%',
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
    color: '#000000'
  },
  buttonDesignProps: {backgroundColor: 'black'},
});

export default Login;
