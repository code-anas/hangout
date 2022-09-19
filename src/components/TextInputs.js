import React from 'react';
import {
    StyleSheet,
    TextInput,
} from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const TextInputs = props => {
    console.log('us',props)
    return (
        <TextInput
            style={styles.input}
            placeholder={props.placeHolder}
            placeholderTextColor={'#595959'}
          
        />
    );
};
const styles = StyleSheet.create({
    input: {
        marginVertical: '2%',
        width: '80%',
        height: hp(5),
        borderBottomWidth: 1,
        borderBottomColor: '#D4D4D4',
        color:'#000000'
    },
});
export default TextInputs;
