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

const Setting = (props) => {
    return (
        <View style={styles.flex1Container}>
            <View style={styles.headerContainer}>
                <View style={styles.headerView}>
                    <TouchableOpacity
                        style={styles.crossButton}
                        onPress={() => props.navigation.goBack('Profile')}>
                        <Icon name='close' size={28} color='#FFFFFF' />
                    </TouchableOpacity>
                    <Text style={styles.txtSetting}>Settings</Text>
                    <Text style={styles.txt}>AA</Text>
                </View>
            </View>
            <Text style={styles.accInfoTxt}>Account Information</Text>
            <View style={styles.inputViewContainer}>
                <View style={styles.viewInputOne}>
                    <Icon name='person-outline' size={20} color='#595959' />
                    <TextInput style={styles.inputOne}
                        placeholder='First Name' placeholderTextColor={'#000000'} />
                </View>
                <View style={styles.viewInputTwo}>
                    <Icon name='person-outline' size={20} color='#595959' />
                    <TextInput style={styles.inputTwo}
                        placeholder='Last Name' placeholderTextColor={'#000000'} />
                </View>
                <View style={styles.viewInputThree}>
                    <Icon name='mail-outline' size={20} color='#595959' />
                    <TextInput style={styles.inputThree}
                        placeholder='Bhatti@gmail.com' placeholderTextColor={'#000000'} />
                </View>

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
        headerContainer: {
            height: hp('13%'),
            width: wp('100%'),
            backgroundColor: '#45D4FF',
        },
        headerView: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: wp('3%'),
            marginTop: hp('7%')
        },
        crossButton: {
            marginLeft: wp('-1%')
        },
        txtSetting: {
            fontSize: 20,
            fontWeight: '600',
            color: '#FFFFFF',
        },
        txt: {
            color: '#45D4FF',
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
        viewInputOne: {
            width: wp('86%'),
            height: hp('6%'),
            borderBottomWidth: 1,
            borderColor: '#D4D4D4',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
        },
        inputOne: {
            flex: 1,
            color: '#000000',
            fontSize: 14,
            marginLeft: wp('3%')
        },
        viewInputTwo: {
            width: wp('86%'),
            height: hp('6%'),
            borderBottomWidth: 1,
            borderColor: '#D4D4D4',
            marginTop: hp('3%'),
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center'
        },
        inputTwo: {
            flex: 1,
            color: '#000000',
            fontSize: 14,
            marginLeft: wp('3%')
        },
        viewInputThree: {
            width: wp('86%'),
            height: hp('6%'),
            borderBottomWidth: 1,
            borderColor: '#D4D4D4',
            marginTop: hp('3%'),
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
        },
        inputThree: {
            flex: 1,
            color: '#000000',
            fontSize: 14,
            marginLeft: wp('3%')
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
            marginTop: hp('18%'),
        }
    },
);

export default Setting;
