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
    ScrollView,
    ImageBackground
} from 'react-native';
import GroupCom from '../../components/GroupCom';
const Groups = (props) => {
    let arr = [
        {
            groupName: 'Workout Squad',
            colorLayer: '#E45F5490',
            description: 'Im developing an app in React Native',
            user: [
                { image: require('../../assets/images/image.png') },
                { image: require('../../assets/images/image.png') },
                { image: require('../../assets/images/image.png') },
                { image: require('../../assets/images/image.png') },
                { image: require('../../assets/images/image.png') },
                { image: require('../../assets/images/image.png') },
                { image: require('../../assets/images/image.png') },
                { image: require('../../assets/images/image.png') },
                { image: require('../../assets/images/image.png') },
                { image: require('../../assets/images/image.png') },
                { image: require('../../assets/images/image.png') },
                { image: require('../../assets/images/image.png') }
            ],
            detail: {
                latestTime: '10:30',
                events: [
                    { time: '10:30 AM', name: 'Birthday', date: 'sep 06th, 2022' },
                    { time: '10:30 AM', name: 'BBQ', date: 'sep 06th, 2022' },
                    { time: '10:30 AM', name: 'Meet Up', date: 'sep 06th, 2022' },
                    { time: '10:30 AM', name: 'Break Up', date: 'sep 06th, 2022' },
                    { time: '10:30 AM', name: 'Hook Up', date: 'sep 06th, 2022' },
                ]
            }
        },
        {
            groupName: 'Workout Squad Two', colorLayer: '#9D3E9490',
            description: 'My Nmae is Usman Bhatti.Im developing an app in React Native',
            user: [
                { image: require('../../assets/images/image.png') },
                { image: require('../../assets/images/image.png') },
                { image: require('../../assets/images/image.png') },
                { image: require('../../assets/images/image.png') },
                { image: require('../../assets/images/image.png') },
                { image: require('../../assets/images/image.png') },
            ],
            detail: {
                latestTime: '10:30',
                events: [
                    { time: '10:30 AM', name: 'Birthday', date: 'sep 06th, 2022' },
                    { time: '10:30 AM', name: 'BBQ', date: 'sep 06th, 2022' },
                    { time: '10:30 Am', name: 'Meet Up', date: 'sep 06th, 2022' },
                    { time: '10:30 Am', name: 'Break Up', date: 'sep 06th, 2022' },
                    { time: '10:30 Am', name: 'Hook Up', date: 'sep 06th, 2022' },
                ]
            }
        },
        {
            groupName: 'Workout Squad Three', colorLayer: '#2D39A890',
            description: 'My Nmae is Usman Bhatti.Im developing an app in React Native.I reach my goal ASAP INSHALLAH',
            user: [
                { image: require('../../assets/images/image.png') },
                { image: require('../../assets/images/image.png') },
            ],
            detail: {
                latestTime: '10:30',
                events: [
                    { time: '10:30 AM', name: 'Birthday', date: 'sep 06th, 2022' },
                    { time: '10:30 AM', name: 'BBQ', date: 'sep 06th, 2022' },
                    { time: '10:30 AM', name: 'Meet Up', date: 'sep 06th, 2022' },
                    { time: '10:30 AM', name: 'Break Up', date: 'sep 06th, 2022' },
                    { time: '10:30 AM', name: 'Hook Up', date: 'sep 06th, 2022' },
                ]
            }
        },
        {
            groupName: 'Workout Squad Four', colorLayer: '#00000090',
            description: 'My Nmae is Usman Bhatti.Im developing an app in React Native.I reach my goal ASAP INSHALLAH',
            user: [
                { image: require('../../assets/images/image.png') },
                { image: require('../../assets/images/image.png') },
                { image: require('../../assets/images/image.png') },
                { image: require('../../assets/images/image.png') },
            ],
            detail: {
                latestTime: '10:30',
                events: [
                    { time: '10:30 AM', name: 'Birthday', date: 'sep 06th, 2022' },
                    { time: '10:30 AM', name: 'BBQ', date: 'sep 06th, 2022' },
                    { time: '10:30 AM', name: 'Meet Up', date: 'sep 06th, 2022' },
                    { time: '10:30 AM', name: 'Break Up', date: 'sep 06th, 2022' },
                    { time: '10:30 AM', name: 'Hook Up', date: 'sep 06th, 2022' },
                ]
            }
        },
        {
            groupName: 'Workout Squad One', colorLayer: '#12977790',
            description: 'My Nmae is Usman Bhatti.Im developing an app in React Native.I reach my goal ASAP INSHALLAH',
            user: [
                { image: require('../../assets/images/image.png') },
                { image: require('../../assets/images/image.png') },
                { image: require('../../assets/images/image.png') },
            ],
            detail: {
                latestTime: '10:30',
                events: [
                    { time: '10:30 AM', name: 'Birthday', date: 'sep 06th, 2022' },
                    { time: '10:30 AM', name: 'BBQ', date: 'sep 06th, 2022' },
                    { time: '10:30 AM', name: 'Meet Up', date: 'sep 06th, 2022' },
                    { time: '10:30 AM', name: 'Break Up', date: 'sep 06th, 2022' },
                    { time: '10:30 AM', name: 'Hook Up', date: 'sep 06th, 2022' },
                ]
            }
        },
    ]
    const [show, setShow] = React.useState()
    return (
        <View style={styles.flex1Container}>
            <View style={styles.headerItems}>
                <TouchableOpacity
                    onPress={() => props.navigation.navigate('Profile')}>
                    <Image
                        source={require('../../assets/images/imageThree.png')}
                        style={styles.image} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.groupButton}>
                    <Text style={styles.txtGroup}>Groups</Text>
                    <View style={styles.downArrowPng}>
                        <Icon name='caret-down-outline' size={20} color='#FFFFFF' />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => props.navigation.navigate('Notification')}>
                    <View style={styles.notificationView}>
                        <Icon name='notifications' size={20} color='#FFFFFF' />
                    </View>
                </TouchableOpacity>
            </View>
            {/* Card Design */}
            <View style={styles.firstViewContainer}>
                <ScrollView showsVerticalScrollIndicator={false}>
                        {arr.map((resp, index) => {
                            return (
                                <GroupCom res={resp} />
                            )
                        }
                        )}
                    <View style={{height:20}}/>
                </ScrollView>
            </View>
        </View >
    );
};
const styles = StyleSheet.create(
    {
        flex1Container: {
            flex: 1,
        },
        image: {
            width: wp('10%'),
            height: hp('5%'),
            borderRadius: 40,
            shadowColor: '#000',
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
            borderColor: '#45D4FF',
            borderWidth: 5
        },
        groupButton: {
            width: wp('35%'),
            height: hp('5%'),
            backgroundColor: '#45D4FF',
            borderRadius: 35,
            flexDirection: 'row',
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
        txtGroup: {
            fontSize: 16,
            fontWeight: '700',
            color: '#FFFFFF'
        },
        downArrowPng: {
            marginTop: hp('0.7%'),
            marginLeft: wp('1%'),
            // width: wp('3%'),
            // height: hp('0.8%'),
        },
        notificationView: {
            width: wp('10%'),
            height: hp('5%'),
            backgroundColor: '#45D4FF',
            borderRadius: 35,
            alignItems: 'center',
            justifyContent: 'center'
        },
        notificationIcon: {
            // alignSelf: 'center',
        },
        headerItems: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: wp('4%'),
            paddingVertical: hp('5%'),
            shadowColor: '#000',
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
        },
        firstViewContainer: {
            flex: 1,
            backgroundColor: '#FFFFFF',
            borderTopLeftRadius: 50,
            borderTopRightRadius: 50,
            shadowColor: '#000',
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
            overflow: 'hidden',
        },
    },
);
export default Groups;
