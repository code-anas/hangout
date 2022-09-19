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
            <Header screenName={'Friend List'}
                onpressLeftArrow={() => props.navigation.goBack('Profile')} />
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
