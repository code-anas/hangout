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

const FriendList = () => {
    return (
        <View style={styles.flex1Container}>
            <View style={styles.headerContainer}>
                <View style={styles.headerView}>
                    <TouchableOpacity>
                        <Image
                            source={require('../../assets/images/leftArrow.png')} />
                    </TouchableOpacity>
                    <Text style={styles.TxtfriendList}>FriendList</Text>
                    <TouchableOpacity>
                        <Image
                            source={require('../../assets/images/plusCircle.png')}
                            style={styles.plusCirclePng} />
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
            <View style={styles.friendViewOne}>
                <Image
                    source={require('../../assets/images/image.jpeg')}
                    style={styles.image} />
                <Text style={styles.usmanBhatti}>Usman Bhatti</Text>
                <TouchableOpacity>
                    <Text style={styles.buttonRemove}>Remove</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.friendViewOne}>
                <Image
                    source={require('../../assets/images/imageTwo.jpeg')}
                    style={styles.image} />
                <Text style={styles.usmanBhatti}>Usman Bhatti</Text>
                <TouchableOpacity>
                    <Text style={styles.buttonRemove}>Remove</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.friendViewOne}>
                <Image
                    source={require('../../assets/images/imageThree.jpeg')}
                    style={styles.image} />
                <Text style={styles.usmanBhatti}>Usman Bhatti</Text>
                <TouchableOpacity>
                    <Text style={styles.buttonRemove}>Remove</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.friendViewOne}>
                <Image
                    source={require('../../assets/images/image.jpeg')}
                    style={styles.image} />
                <Text style={styles.usmanBhatti}>Usman Bhatti</Text>
                <TouchableOpacity>
                    <Text style={styles.buttonRemove}>Remove</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.friendViewOne}>
                <Image
                    source={require('../../assets/images/imageTwo.jpeg')}
                    style={styles.image} />
                <Text style={styles.usmanBhatti}>Usman Bhatti</Text>
                <TouchableOpacity>
                    <Text style={styles.buttonRemove}>Remove</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.friendViewOne}>
                <Image
                    source={require('../../assets/images/imageThree.jpeg')}
                    style={styles.image} />
                <Text style={styles.usmanBhatti}>Usman Bhatti</Text>
                <TouchableOpacity>
                    <Text style={styles.buttonRemove}>Remove</Text>
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
            paddingHorizontal: wp('3%'),
            marginTop: hp('8%')
        },
        TxtfriendList: {
            fontSize: 22,
            fontWeight: '700',
            color: '#FFFFFF',
        },
        plusCirclePng: {
            height: hp('3%'),
            width: wp('6%')
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
            marginLeft: wp('3%')
        },
        searchIconPng: {
            marginLeft: wp('5%')
        },
        image: {
            width: wp('14%'),
            height: hp('7%'),
            borderRadius: 40
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
            paddingHorizontal: wp('5%'),
            marginTop: wp('8%')
        }


    },
);

export default FriendList;
