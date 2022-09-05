import React from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import {
    Text,
    View,
    StyleSheet,
    Image,
    TextInput,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import FastImage from 'react-native-fast-image';

const Profile = () => {
    return (
        <View style={styles.flex1Container}>
            <View style={styles.headerContainer}>
                <View style={styles.headerView}>
                    <TouchableOpacity>
                        <Image
                            source={require('../../assets/images/cross.png')} />
                    </TouchableOpacity>
                    <Text style={styles.txtProfile}>Profile</Text>
                    <TouchableOpacity style={styles.profilepng}>
                        <Image
                            source={require('../../assets/images/profile.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image
                            source={require('../../assets/images/setting.png')} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.nameProfilePicView}>
                <Image
                    style={styles.imagePng}
                    source={require('../../assets/images/drImageTwo.png')} />
                <Text style={styles.txtName}>Asfand Gagga</Text>
                <Text style={styles.txtPeopleCan}>People can add you as a</Text>
                <Text style={styles.txtFriendWith}>friend with this QR code</Text>
                <Image
                    style={styles.qrCodePng}
                    source={require('../../assets/images/qrCode.png')} />
            </View>
            <View style={styles.buttonView}>
                <TouchableOpacity style={styles.scannerButton}>
                    <Text style={styles.openQrScannerTxt}>Open QR Scanner</Text>
                </TouchableOpacity>
            </View>
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
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
        },
        headerView: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: wp('4%'),
            marginTop: hp('9%')
        },
        txtProfile: {
            fontSize: 20,
            fontWeight: '600',
            color: '#FFFFFF',
            marginLeft: wp('20%')
        },
        nameProfilePicView: {
            alignItems: 'center',
            marginTop: hp('5%')
        },
        imagePng: {
            height: hp('12%'),
            width: wp('25%'),
            borderRadius: 50,
        },
        txtName: {
            fontSize: 22,
            fontWeight: '700',
            color: '#000000',
            marginTop: hp('4%')
        },
        txtPeopleCan: {
            fontSize: 15,
            fontWeight: '600',
            color: '#00000050',
            marginTop: hp('4%')
        },
        txtFriendWith: {
            fontSize: 15,
            fontWeight: '600',
            color: '#00000050'
        },
        qrCodePng: {
            marginTop: hp('4%')
        },
        buttonView: {
            paddingHorizontal: wp('10%'),
            marginTop: hp('6%'),
        },
        scannerButton: {
            width: wp('80%'),
            height: hp('7%'),
            backgroundColor: '#0266F2',
            borderRadius: 35,
            alignItems: 'center',
            justifyContent: 'center',
            shadowColor: '#000',
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
        },
        openQrScannerTxt: {
            fontSize: 20,
            fontWeight: '700',
            color: '#FFFFFF'
        },
    },
);

export default Profile;