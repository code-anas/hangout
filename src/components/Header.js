import React from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons';
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
const Header = (props) => {
    console.log('scree', props.screenName)
    return (
        <View style={styles.headerContainer}>
            <View style={styles.headerView}>

                {props.screenName === 'Friend List' ? (<TouchableOpacity
                    onPress={props. onpressLeftArrow}
                    style={styles.crossButton} >
                    <Icon name='chevron-back-outline' size={25} color='#FFFFFF' />
                </TouchableOpacity>) : (<TouchableOpacity
                    onPress={props.onpressCross}
                    style={styles.crossButton} >
                    <Icon name='close' size={28} color='#FFFFFF' />
                </TouchableOpacity>)}

                <Text style={styles.txtProfile}>{props.screenName}</Text>

                {props.screenName === 'Friend List' ||   props.screenName === 'Setting' ?
                (<><View style={{width:30}}></View><View style={{width:30}}></View></>
                ) : (<>
                    <TouchableOpacity
                        onPress={props.onpressFriend}>
                        <Icon name='people' size={25} color='#FFFFFF' />
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={props.onpressSetting}>
                        <Icon name='settings-outline' size={21} color='#FFFFFF' />
                    </TouchableOpacity>
                </>)}
            </View>
        </View>
    );
};
const styles = StyleSheet.create(
    {
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
        txtProfile: {
            fontSize: 20,
            fontWeight: '600',
            color: '#FFFFFF',
            marginLeft: wp('20%')
        },
        txt: {
            color: '#45D4FF',
        },
    },
);
export default Header;
