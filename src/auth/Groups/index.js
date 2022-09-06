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
const Groups = () => {
    let arr = [
        {
            groupName: 'Workout Squad',
            colorLayer: '#E45F5490',
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
                description: 'djndkbkjdvndjnvdk;nvdnv',
                latestTime: '10:30',
                events: [
                    { time: '10:30', name: 'Usman', date: 'sep 06th, 2022' },
                    { time: '10:30', name: 'Usman', date: 'sep 06th, 2022' },
                    { time: '10:30', name: 'Usman', date: 'sep 06th, 2022' },
                ]

            }
        },
        {
            groupName: 'Workout Squad Two', colorLayer: '#9D3E9490', user: [
                { image: require('../../assets/images/image.png') },
                { image: require('../../assets/images/image.png') },
                { image: require('../../assets/images/image.png') },
                { image: require('../../assets/images/image.png') },
                { image: require('../../assets/images/image.png') },
                { image: require('../../assets/images/image.png') },

            ]
        },
        {
            groupName: 'Workout Squad Three', colorLayer: '#2D39A890', user: [
                { image: require('../../assets/images/image.png') },
                { image: require('../../assets/images/image.png') },

            ]
        },
        {
            groupName: 'Workout Squad Four', colorLayer: '#00000090', user: [
                { image: require('../../assets/images/image.png') },
                { image: require('../../assets/images/image.png') },
                { image: require('../../assets/images/image.png') },
                { image: require('../../assets/images/image.png') },

            ]
        },
        {
            groupName: 'Workout Squad One', colorLayer: '#12977790', user: [
                { image: require('../../assets/images/image.png') },
                { image: require('../../assets/images/image.png') },
                { image: require('../../assets/images/image.png') },
            ]
        },
    ]
    const [show, setShow] = React.useState()
    return (
        <View style={styles.flex1Container}>
            <View style={styles.headerItems}>
                <Image
                    source={require('../../assets/images/imageThree.png')}
                    style={styles.image} />
                <TouchableOpacity style={styles.groupButton}>
                    <Text style={styles.txtGroup}>Groups</Text>
                    <View style={styles.downArrowPng}>
                        <Icon name='caret-down-outline' size={20} color='#FFFFFF' />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.notificationView}>
                        <Icon name='notifications' size={20} color='#FFFFFF' />
                    </View>
                </TouchableOpacity>
            </View>
            {/* First View */}
            <ScrollView>
                <View style={styles.firstViewContainer}>
                    {arr.map((res, index) => {
                        return (
                            <View style={show === index ? styles.firstView : null}>
                                <ImageBackground
                                    source={require('../../assets/images/groupSquad.png')}
                                    style={show === index ? styles.imageBackground : styles.imageBackgroundOne}>
                                    <View style={[styles.imageBackgroundLayer, { backgroundColor: res.colorLayer }]}>
                                        <View>
                                            <Text style={styles.txtWorkoutSquad}>{res.groupName}</Text>
                                            <View style={styles.firstViewImages}>
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
                                            <Text style={styles.txt22Member}>22 Members • 3 Upcoming Events</Text>
                                        </View>
                                        <View style={styles.optionAndArrowButton}>
                                            <TouchableOpacity>
                                                <Icon name='ellipsis-vertical' size={25} color='#FFFFFF' />
                                            </TouchableOpacity>
                                            <TouchableOpacity
                                                onPress={() => {
                                                    console.log('usman', res.id);
                                                    show === index ? setShow(null) : setShow(index)
                                                }}
                                                style={styles.arrowDownPng}>
                                                <Icon name='chevron-down' size={25} color='#FFFFFF' />
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </ImageBackground>
                                {show === index ? (
                                    <View>
                                        <Text style={styles.txtDiscription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                            eiusmod tempor incididunt ut labore et dolore magna
                                            aliqua. Ut enim ad minim veniam,</Text>
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
                                            <View style={styles.scheduleOne}>
                                                <View style={styles.clockOrTime}>
                                                    <Icon name='alarm-outline' size={16} color='#7C7C7C' />
                                                    <Text style={styles.txtTime}>12:30 PM</Text>
                                                </View>
                                                <Text style={styles.txtJason}>Jason’s Bday</Text>
                                                <Text style={styles.txtDate}>Jan 14th, 2020</Text>
                                            </View>
                                            <View style={styles.scheduleTwo}>
                                                <View style={styles.clockOrTime}>
                                                    <Icon name='alarm-outline' size={16} color='#7C7C7C' />
                                                    <Text style={styles.txtTime}>12:30 PM</Text>
                                                </View>
                                                <Text style={styles.txtBbq}>BBQ</Text>
                                                <Text style={styles.txtDate}>Jan 14th, 2020</Text>
                                            </View>
                                            <View style={styles.scheduleThree}>
                                                <View style={styles.clockOrTime}>
                                                    <Icon name='alarm-outline' size={16} color='#7C7C7C' />
                                                    <Text style={styles.txtTime}>12:30 PM</Text>
                                                </View>
                                                <Text style={styles.txtMovieNight}>Movie Night</Text>
                                                <Text style={styles.txtDate}>Jan 14th, 2020</Text>
                                            </View>
                                            <View style={styles.scheduleThree}>
                                                <View style={styles.clockOrTime}>
                                                    <Icon name='alarm-outline' size={16} color='#7C7C7C' />
                                                    <Text style={styles.txtTime}>12:30 PM</Text>
                                                </View>
                                                <Text style={styles.txtMovieNight}>Movie Night</Text>
                                                <Text style={styles.txtDate}>Jan 14th, 2020</Text>
                                            </View>
                                        </ScrollView>
                                    </View>
                                ) : null}
                            </View>
                        )
                    }
                    )}

                </View>
            </ScrollView>
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
            // height: hp('100%'),
            // width: wp('100%'),
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
            alignItems: 'center'
        },
        firstView: {
            height: hp('48%'),
            width: wp('92%'),
            backgroundColor: '#FFFFFF',
            borderRadius: 30,
            marginTop: hp('3%'),
            shadowColor: '#000',
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
        },
        imageBackground: {
            height: hp('15%'),
            width: wp('92%'),
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
        },
        imageBackgroundOne: {
            height: hp('15%'),
            width: wp('92%'),
            overflow: 'hidden',
            borderRadius: 30,
            marginTop: hp('3%'),
            shadowColor: '#000',
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
        },
        imageBackgroundLayer: {
            height: hp('15%'),
            width: wp('92%'),
            flexDirection: 'row',
            paddingHorizontal: wp('5%'),
            paddingVertical: hp('2%')
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
        firstViewImages: {
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
        txt22Member: {
            fontSize: 12,
            fontWeight: '700',
            color: '#FFFFFF',
            marginTop: hp('1%')
        },
        optionAndArrowButton: {
            paddingHorizontal: wp('9%'),
            paddingVertical: hp('1%'),
        },
        arrowDownPng: {
            marginTop: hp('3%'),
        },
        txtDiscription: {
            fontWeight: '400',
            color: '#00000050',
            paddingHorizontal: wp('4%'),
            marginTop: hp('2%')
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
            marginTop: hp('3%')
        },
        scheduleOne: {
            height: hp('13%'),
            width: wp('27%'),
            backgroundColor: '#EFEFEF',
            borderRadius: 25,
            alignItems: 'center',
            marginRight: 10,
            justifyContent: 'center',
        },
        scheduleTwo: {
            height: hp('13%'),
            width: wp('27%'),
            backgroundColor: '#EFEFEF',
            borderRadius: 25,
            alignItems: 'center',
            justifyContent: 'center', 
            marginRight: 10
        },
        scheduleThree: {
            height: hp('13%'),
            width: wp('27%'),
            backgroundColor: '#EFEFEF',
            borderRadius: 25,
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: 10
        },
        schedulesContainer: {
            flexDirection: 'row',
            paddingHorizontal: wp('4%'),
            paddingVertical: hp('3%'),
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
