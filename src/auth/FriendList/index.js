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

const FriendList = (props) => {
    let arr = [
        { name: 'Usman Bhatti' },
        { name: 'Abdul Haseeb' },
        { name: 'Huzam Mughal' },
        { name: 'Asfand Butt' },
        { name: 'Hamza Ahzam' },
        { name: 'Usman Chitto' },
    ]
    return (
        <View style={styles.flex1Container}>
            <View style={styles.headerContainer}>
                <View style={styles.headerView}>
                    <TouchableOpacity
                        style={styles.leftArrowButton}
                        onPress={() => props.navigation.goBack('profile')}>
                        <Icon name='chevron-back-outline' size={25} color='#FFFFFF' />
                    </TouchableOpacity>
                    <Text style={styles.TxtfriendList}>FriendList</Text>
                    <TouchableOpacity>
                        <Icon name='add-circle-outline' size={28} color='#FFFFFF' />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.txtInputview}>
                <Image
                    source={require('../../assets/images/searchIcon.png')}
                    style={styles.searchIconPng} />
                <TextInput style={styles.txtInput}
                    placeholder='Search friend' placeholderTextColor={'#00000050'} />
            </View>
            {arr.map((res) => {
                return (
                    <View style={styles.friendViewOne}>
                        <Image
                            source={require('../../assets/images/image.png')}
                            style={styles.image} />
                        <View style={styles.namesView}>
                            <Text style={styles.usmanBhatti}>{res.name}</Text>
                        </View>
                        <TouchableOpacity>
                            <Text style={styles.buttonRemove}>Remove</Text>
                        </TouchableOpacity>
                    </View>
                )
            })}

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
        leftArrowButton: {
            marginLeft:wp('-1%') 
        },
        TxtfriendList: {
            fontSize: 22,
            fontWeight: '700',
            color: '#FFFFFF',
        },
        txtInputview: {
            marginTop: hp('4%'),
            width: wp('90%'),
            height: hp('6%'),
            backgroundColor: '#00000020',
            borderRadius: 35,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            alignSelf: 'center',
        },
        txtInput: {
            flex: 1,
            fontSize: 18,
            fontWeight: '400',
            marginLeft: wp('3%'),
            color: '#000000'
        },
        searchIconPng: {
            marginLeft: wp('5%')
        },
        image: {
            width: wp('10%'),
            height: hp('5%'),
            borderRadius: 40
        },
        namesView: {
            width: wp('60%')
        },
        usmanBhatti: {
            fontSize: 16,
            fontWeight: '800',
            color: '#000000',
            marginRight: wp('30%')
        },
        buttonRemove: {
            fontSize: 14,
            fontWeight: '500',
            color: '#C22020'
        },
        friendViewOne: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: wp('4%'),
            marginTop: wp('8%')
        }


    },
);

export default FriendList;
