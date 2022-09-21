import React, {useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons';

const HeaderComp = props => {
  const [LeftHide, setLeftHide] = useState(props?.LeftHide);
  const [RightHide, setRightHide] = useState(props?.RightHide);
  return (
    <View
      style={[styles.header, {backgroundColor: props?.backgroundColorHeader}]}>
      {LeftHide == true ? (
        <TouchableOpacity onPress={props.onPressLeft} style={styles.backbutton}>
          <Icon name="chevron-back-outline" size={35} color="#FFFFFF" />
        </TouchableOpacity>
      ) : (
        <Text></Text>
      )}
      <Text style={[styles.headerText, props?.loginheaderTextcolor]}>
        {props.Title}
      </Text>
      {RightHide == true ? (
        <TouchableOpacity
          onPress={props.onPressRight}
          style={styles.backbutton}>
          <Icon name="chevron-forward-outline" size={35} color="#FFFFFF" />
        </TouchableOpacity>
      ) : (
        <Text></Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: hp(10),
    paddingHorizontal: wp(5),
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
});

export default HeaderComp;
