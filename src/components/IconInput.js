import React from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons';
import {
    View,
    StyleSheet,
    TextInput,
} from 'react-native';
const Setting = (props) => {
    console.log('')
    return (
        <View style={styles.viewInputOne}>
            <Icon name={props.image} size={20} color='#595959' />
            <TextInput style={styles.inputOne}
                placeholder={props.placeHolder} placeholderTextColor={'#000000'} />
        </View>
    );
};
const styles = StyleSheet.create(
    {
        viewInputOne: {
            width: wp('86%'),
            height: hp('6%'),
            borderBottomWidth: 1,
            borderColor: '#D4D4D4',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: hp('2%')
        },
        inputOne: {
            flex: 1,
            color: '#000000',
            fontSize: 14,
            marginLeft: wp('3%')
        },
    },
);
export default Setting;
