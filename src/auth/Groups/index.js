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
                    { time: '10:30 AM', name: 'H Usman', date: 'sep 06th, 2022' },
                    { time: '10:30 AM', name: 'Usman Iqbal', date: 'sep 06th, 2022' },
                    { time: '10:30 AM', name: 'Usman Bhatti', date: 'sep 06th, 2022' },
                    { time: '10:30 AM', name: 'Usman Bhatti', date: 'sep 06th, 2022' },
                    { time: '10:30 AM', name: 'Usman Bhatti', date: 'sep 06th, 2022' },
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
                    { time: '10:30 AM', name: 'H Usman', date: 'sep 06th, 2022' },
                    { time: '10:30 AM', name: 'Usman Iqbal', date: 'sep 06th, 2022' },
                    { time: '10:30 Am', name: 'Usman Bhatti', date: 'sep 06th, 2022' },
                    { time: '10:30 Am', name: 'Usman Bhatti', date: 'sep 06th, 2022' },
                    { time: '10:30 Am', name: 'Usman Bhatti', date: 'sep 06th, 2022' },
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
                    { time: '10:30 AM', name: 'H Usman', date: 'sep 06th, 2022' },
                    { time: '10:30 AM', name: 'Usman Iqbal', date: 'sep 06th, 2022' },
                    { time: '10:30 AM', name: 'Usman Bhatti', date: 'sep 06th, 2022' },
                    { time: '10:30 AM', name: 'Usman Bhatti', date: 'sep 06th, 2022' },
                    { time: '10:30 AM', name: 'Usman Bhatti', date: 'sep 06th, 2022' },
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
                    { time: '10:30 AM', name: 'H Usman', date: 'sep 06th, 2022' },
                    { time: '10:30 AM', name: 'Usman Iqbal', date: 'sep 06th, 2022' },
                    { time: '10:30 AM', name: 'Usman Bhatti', date: 'sep 06th, 2022' },
                    { time: '10:30 AM', name: 'Usman Bhatti', date: 'sep 06th, 2022' },
                    { time: '10:30 AM', name: 'Usman Bhatti', date: 'sep 06th, 2022' },
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
                    { time: '10:30 AM', name: 'H Usman', date: 'sep 06th, 2022' },
                    { time: '10:30 AM', name: 'Usman Iqbal', date: 'sep 06th, 2022' },
                    { time: '10:30 AM', name: 'Usman Bhatti', date: 'sep 06th, 2022' },
                    { time: '10:30 AM', name: 'Usman Bhatti', date: 'sep 06th, 2022' },
                    { time: '10:30 AM', name: 'Usman Bhatti', date: 'sep 06th, 2022' },
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
                <View style={{height:hp(1),marginTop:20}}></View>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View>
                        {arr.map((res, index) => {
                            return (
                                <View style={show === index ? styles.firstView : null}>
                                    <ImageBackground
                                        source={require('../../assets/images/groupSquad.png')}
                                        style={show === index ? styles.imageBackground : styles.imageBackgroundOne}>
                                        <View style={[styles.imageBackgroundLayer, { backgroundColor: res.colorLayer }]}>
                                            <View style={styles.userImagesView}>
                                                <Text style={styles.txtWorkoutSquad}>{res.groupName}</Text>
                                                <View style={styles.userImage}>
                                                    {res.user.slice(0, 5).map((data) => {
                                                        return (
                                                            <Image
                                                                source={data.image}
                                                                style={styles.imageOne} />
                                                        )
                                                    })}
                                                    <View style={styles.whiteCircle}>
                                                        <Text style={styles.txtSeven}>{res.user.length >= 8 ? '7+' : res.user.length}</Text>
                                                    </View>
                                                </View>
                                                <View style={styles.addresView}>
                                                    <Icon name='location-outline' size={17} color='#FFFFFF' />
                                                    <Text style={styles.txtAddress}> Shahbir Town D-Type Building No 17 Flat No 10</Text>
                                                </View>
                                                <View style={styles.timeView}>
                                                    <Icon name='alarm-outline' size={16} color='#FFFFFF' />
                                                    <Text style={styles.timeTxt}> 12:30 PM</Text>
                                                </View>
                                                <View style={styles.dateView}>
                                                    <Icon name='calendar-outline' size={15} color='#FFFFFF' />
                                                    <Text style={styles.dateTxt}>  Sep 14th, 2022</Text>
                                                </View>
                                            </View>
                                            <View style={styles.optionAndArrowButton}>
                                                <TouchableOpacity>
                                                    <Icon name='ellipsis-vertical' size={25} color='#FFFFFF' />
                                                </TouchableOpacity>
                                                <TouchableOpacity
                                                    onPress={() => {
                                                        show === index ? setShow(null) : setShow(index)
                                                    }}
                                                    style={styles.arrowDownIcon}>
                                                    <Icon name='chevron-down' size={25} color='#FFFFFF' />
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                    </ImageBackground>
                                    {show === index ? (
                                        <View>
                                            <View style={styles.descriptionTxtView}>
                                                <Text style={styles.txtDiscription}>{res.description}</Text>
                                            </View>
                                            <View style={styles.upcomingHangoutContainer}>
                                                <View style={styles.calenderPngView}>
                                                    <TouchableOpacity>
                                                        <Icon name='calendar-outline' size={18} color='#7C7C7C' />
                                                    </TouchableOpacity>
                                                    <Text style={styles.txtUpcomingHangout}>Upcoming Hangouts</Text>
                                                </View>
                                                <TouchableOpacity style={styles.createNewView}>
                                                    <Text style={styles.txtCreateNew}>Create New</Text>
                                                    <Icon name='add-circle-outline' size={25} color='#1466B7' />
                                                </TouchableOpacity>
                                            </View>
                                            <ScrollView horizontal={true} style={styles.schedulesContainer}>
                                                {res.detail.events.map((detailRes) => {
                                                    return (
                                                        <View style={styles.scheduleOne}>
                                                            <View style={styles.clockOrTime}>
                                                                <Icon name='alarm-outline' size={16} color='#7C7C7C' />
                                                                <Text style={styles.txtTime}>{detailRes.time}</Text>
                                                            </View>
                                                            <Text style={styles.txtJason}>{detailRes.name}</Text>
                                                            <Text style={styles.txtDate}>{detailRes.date}</Text>
                                                        </View>
                                                    )
                                                })}
                                            </ScrollView>
                                        </View>
                                    ) : null}
                                </View>
                            )
                        }
                        )}
                    </View>
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
        firstView: {
            height: hp('51%'),
            width: wp('90%'),
            backgroundColor: '#FFFFFF',
            borderRadius: 30,
            marginBottom: hp('3%'),
            shadowColor: '#000',
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
            alignSelf: 'center'
        },
        imageBackground: {
            height: hp('18%'),
            width: wp('90%'),
            overflow: 'hidden',
            borderRadius: 30,
            shadowColor: '#000',
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
            alignSelf: 'center'
        },
        imageBackgroundOne: {
            height: hp('18%'),
            width: wp('90%'),
            overflow: 'hidden',
            borderRadius: 30,
            marginBottom: hp('3%'),
            shadowColor: '#000',
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
            alignSelf: 'center'
        },
        imageBackgroundLayer: {
            height: hp('18%'),
            width: wp('90%'),
            flexDirection: 'row',
            paddingHorizontal: wp('5%'),
            paddingVertical: hp('0.8%')
        },
        userImagesView: {
            width: wp('65%')
        },
        txtWorkoutSquad: {
            fontSize: 15,
            fontWeight: '600',
            color: '#FFFFFF'
        },
        imageOne: {
            width: wp('8%'),
            height: hp('4%'),
            borderRadius: 40,
            marginTop: hp('1%'),
            marginRight: wp('2%'),
        },
        userImage: {
            flexDirection: 'row',
        },
        whiteCircle: {
            width: wp('8%'),
            height: hp('4%'),
            backgroundColor: '#FFFFFF',
            borderRadius: 35,
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: hp('1%'),
            marginLeft: wp('1.5%')
        },
        txtSeven: {
            color: '#000000',
            fontWeight: '600',
        },
        txtAddress: {
            fontSize: 12,
            fontWeight: '700',
            color: '#FFFFFF',
        },
        addresView: {
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: hp('0.7%')
        },
        timeTxt: {
            fontSize: 12,
            fontWeight: '700',
            color: '#FFFFFF',
        },
        timeView: {
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: hp('0.7%')
        },
        dateTxt:{
            fontSize: 12,
            fontWeight: '700',
            color: '#FFFFFF',
        },
        dateView:{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: hp('0.7%')
        },
        optionAndArrowButton: {
            paddingHorizontal: wp('9%'),
            paddingVertical: hp('3%'),
        },
        arrowDownIcon: {
            marginTop: hp('6%'),
        },
        descriptionTxtView: {
            height: hp('8%'),
            marginTop: hp('2%'),
            // justifyContent:'center',
        },
        txtDiscription: {
            fontWeight: '400',
            color: '#00000050',
            paddingHorizontal: wp('4%'),
        },
        txtUpcomingHangout: {
            fontSize: 12,
            fontWeight: '500',
            color: '#4D4D4D',
            marginLeft: wp('2%')
        },
        txtCreateNew: {
            fontSize: 12,
            fontWeight: '500',
            color: '#1466B7',
            marginRight: wp('2%')
        },
        calenderPngView: {
            flexDirection: 'row',
        },
        createNewView: {
            flexDirection: 'row',
            alignItems: 'center'
        },
        upcomingHangoutContainer: {
            flexDirection: 'row',
            paddingHorizontal: wp('4%'),
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: hp('2%')
        },
        scheduleOne: {
            height: hp('13%'),
            width: wp('27%'),
            backgroundColor: '#EFEFEF',
            borderRadius: 25,
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: wp('2%'),
        },
        schedulesContainer: {
            width: wp('85%'),
            flexDirection: 'row',
            marginTop: hp('3%'),
            alignSelf: 'center'
            // paddingHorizontal: wp('3%'),
        },
        txtTime: {
            fontSize: 10,
            fontWeight: '500',
            color: '#7C7C7C',
            marginLeft: wp('1%')
        },
        clockOrTime: {
            flexDirection: 'row',
            alignItems: 'center',
        },
        txtJason: {
            fontSize: 15,
            fontWeight: '600',
            color: '#7C7C7C',
            marginTop: hp('0.5%')
        },
        txtDate: {
            fontSize: 12,
            fontWeight: '500',
            color: '#7C7C7C',
            marginTop: hp('0.5%')
        },
        txtBbq: {
            fontSize: 15,
            fontWeight: '600',
            color: '#7C7C7C',
            marginTop: hp('0.5%')
        },
        txtMovieNight: {
            fontSize: 15,
            fontWeight: '600',
            color: '#7C7C7C',
            marginTop: hp('0.5%')
        },
    },
);
export default Groups;
