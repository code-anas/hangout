import React from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons';
import {
    Text,
    View,
    StyleSheet,
    Image,
    TextInput,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import Header from '../../components/Header';
import IconInput from '../../components/IconInput';

const Setting = (props) => {
    return (
        <View style={styles.flex1Container}>
            <Header screenName={'Setting'}
                onpressCross={() => { props.navigation.goBack('Profile') }} />
            <Text style={styles.accInfoTxt}>Account Information</Text>
            <View style={styles.inputViewContainer}>
                <IconInput placeHolder={'First Name'}
                    image={'person-outline'} />
                <IconInput placeHolder={'Last Name'}
                    image={'person-outline'} />
                <IconInput placeHolder={'Bhatti@gmail.com'}
                    image={'mail-outline'} />
            </View>
            <View style={styles.discriptionTxtView}>
                <Text style={styles.toChangeLineTxt}>To change your password, please log out</Text>
                <Text style={styles.andSelectTheLineTxt}>and select the Forgot Password option</Text>
            </View>
            <Text style={styles.txtNotifications}>Notifications</Text>
            <View style={styles.pushNotificationView}>
                <Text style={styles.txtPushNotifications}>Push Notifications</Text>
                <TouchableOpacity>
                    <View style={styles.pushNotificationButton}>
                        <Image source={require('../../assets/images/greenCircle.png')} />
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.borderLineView}></View>
            <TouchableOpacity
                onPress={() => props.navigation.navigate('Login')}
                style={styles.logOutButton}>
                <Text style={styles.txtLogOut}>Log Out</Text>
            </TouchableOpacity>
        </View>


    );
};
const styles = StyleSheet.create(
    {
        flex1Container: {
            flex: 1,
        },
        accInfoTxt: {
            fontSize: 22,
            fontWeight: '600',
            color: '#000000',
            paddingHorizontal: wp('4%'),
            marginTop: hp('3%'),
        },
        inputViewContainer: {
            paddingHorizontal: wp('7%'),
            marginTop: hp('4%')
        },
        toChangeLineTxt: {
            fontSize: 14,
            fontWeight: '500',
            color: '#00000050',
            letterSpacing: 1
        },
        andSelectTheLineTxt: {
            fontSize: 14,
            fontWeight: '500',
            color: '#00000050',
            marginTop: hp('1%'),
            letterSpacing: 1

        },
        discriptionTxtView: {
            alignItems: 'center',
            marginTop: hp('2%'),
        },
        txtNotifications: {
            fontSize: 22,
            fontWeight: '600',
            color: '#000000',
            paddingHorizontal: wp('4%'),
            marginTop: hp('4%'),
        },
        pushNotificationView: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: wp('4%'),
        },
        txtPushNotifications: {
            fontSize: 18,
            fontWeight: '600',
            color: '#000000',
            marginTop: hp('3%'),
        },
        pushNotificationButton: {
            height: hp('3%'),
            width: wp('12%'),
            backgroundColor: '#00000010',
            marginTop: hp('3%'),
            borderRadius: 15,
            justifyContent: 'center',
            paddingHorizontal: wp('1%'),
            borderColor: '#00000040',
            borderWidth: 1
        },
        borderLineView: {
            width: wp('100%'),
            height: 1,
            backgroundColor: '#D4D4D4',
            marginTop: hp('3%'),
        },
        txtLogOut: {
            fontSize: 18,
            fontWeight: '800',
            color: '#FF0000',
        },
        logOutButton: {
            alignItems: 'center',
            marginTop: hp('12%'),
        }
    },
);

export default Setting;
