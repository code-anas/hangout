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

const Notification = (props) => {
    return (
        <View style={styles.flex1Container}>
            <View style={styles.headerContainer}>
                <View style={styles.headerView}>
                    <TouchableOpacity
                        style={styles.crossButton}
                        onPress={() => props.navigation.goBack('Profile')}>
                        <Icon name='close' size={28} color='#FFFFFF' />
                    </TouchableOpacity>
                    <Text style={styles.txtSetting}>Notification</Text>
                    <Text style={styles.txt}>10</Text>
                </View>
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
        },
        headerView: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: wp('3%'),
            marginTop: hp('7%')
        },
        crossButton:{
            marginLeft:wp('-1%') 
        },
        txtSetting: {
            fontSize: 20,
            fontWeight: '600',
            color: '#FFFFFF',
        },
        txt: {
            color: '#FFFFFF',
            fontSize:16,
            fontWeight:'500'
        },
    },
);

export default Notification;
