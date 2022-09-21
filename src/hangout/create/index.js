import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  ScrollView
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import FastImage from 'react-native-fast-image';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import HeaderComp from '../../components/Header';
import Button from '../../components/Button';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment/moment';

const CreateHangout = props => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [datepicker, setDatePicker] = useState(false);
  const [Select, setSelect] = useState();
  const [AM, setAM] = useState(0);

  const [Input1, setInput1] = useState('');
  const [Input2, setInput2] = useState('');
  const [checkValues, setCheckValues] = useState(false);
  const setdate = data => {
    setSelect(data);
    setDatePicker(false);
  };

  const isEmpty = () => {
    if (
      Input1 != '' &&
      hours != '' &&
      minutes != '' &&
      Select != '' 
    ) {
      setCheckValues(true);
      Alert.alert("Sucess")
    } else{
      Alert.alert("Please fill all fields.")

    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <HeaderComp
        Title="Hangout Details"
        LeftHide={true}
        backgroundColorHeader="#45D4FF"
        onTouch={() => props.navigation.goBack()}
      />
      <ScrollView>
  
       <DateTimePickerModal
        isVisible={datepicker}
        mode="date"
        onConfirm={data => setdate(data)}
        onCancel={() => setDatePicker(false)}
      />
      <View style={styles.Mainview}>
        <View style={styles.topworkoutsquadview}>
          <Text style={styles.Toptext}>Workout Squad</Text>
          <FastImage
            source={require('../../assets/images/users.png')}
            style={styles.usersImage}
          />
        </View>
        <View style={styles.nameview}>
          <Text style={styles.nametext}>NAME</Text>
          <TouchableOpacity style={{marginLeft: wp(2), marginTop: hp(0.1)}}>
            <Icon name="create-outline" size={20} color="#BFBFBF" />
          </TouchableOpacity>
        </View>
        <View style={styles.TextInput1view}>
          <TextInput
            style={{paddingHorizontal: 15}}
            onChangeText={value => setInput1(value)}
          />
        </View>
        <View style={styles.dateview}>
          <Text style={styles.datetext}>
            DATE : {moment(Select).format('L')}
          </Text>
          <TouchableOpacity style={{marginLeft: wp(2), marginTop: hp(0.2)}}>
            <Icon name="calendar" size={20} color="#BFBFBF" />
          </TouchableOpacity>
        </View>
        <View style={styles.selectdateview}>
          <Text style={styles.selectdatetext}>Select Date</Text>
          <TouchableOpacity
            onPress={() => setDatePicker(true)}
            style={{marginTop: hp(0.5)}}>
            <Icon name="caret-down" size={25} color="#FFFFFF" />
          </TouchableOpacity>
        </View>
        <View style={styles.timeview}>
          <Text style={styles.timetext}>TIME</Text>
          <TouchableOpacity style={{marginLeft: wp(2), marginTop: hp(0.3)}}>
            <Icon name="time-outline" size={20} color="#BFBFBF" />
          </TouchableOpacity>
        </View>
        <View style={styles.adjusttimemainview}>
          <View style={styles.adjusttimeleftview}>
            <View>
              <TouchableOpacity
                onPress={() => {
                  hours === 12 ? setHours(1) : setHours(hours + 1);
                }}>
                <Icon name="caret-up-outline" size={40} color="#BFBFBF" />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  hours === 1 ? setHours(12) : setHours(hours - 1);
                }}>
                <Icon name="caret-down-outline" size={40} color="#BFBFBF" />
              </TouchableOpacity>
            </View>
            <View style={styles.adjusttimetextview}>
              <Text style={styles.adjusttimetext1}>{hours}</Text>
              <Text style={styles.adjusttimetext2}>:</Text>
              <Text style={styles.adjusttimetext3}>{minutes}</Text>
            </View>
            <View>
              <TouchableOpacity
                onPress={() => {
                  minutes > 58
                    ? (setMinutes(0),
                      hours < 12 ? setHours(hours + 1) : setHours(1))
                    : setMinutes(minutes + 1);
                }}>
                <Icon name="caret-up-outline" size={40} color="#BFBFBF" />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  minutes < 1
                    ? (setMinutes(59),
                      hours < 1 ? setHours(12) : setHours(hours - 1))
                    : setMinutes(minutes - 1);
                }}>
                <Icon name="caret-down-outline" size={40} color="#BFBFBF" />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.adjusttimerightview}>
            <TouchableOpacity onPress={() => setAM(1)}>
              <View
                style={[
                  styles.AMview,
                  {backgroundColor: AM == 1 ? '#45D4FF' : '#C4C4C4'},
                ]}>
                <Text style={styles.AMtext}>AM</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setAM(2)}>
              <View
                style={[
                  styles.AMview,
                  {backgroundColor: AM == 2 ? '#45D4FF' : '#C4C4C4'},
                ]}>
                <Text style={styles.PMtext}>PM</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.locationmainview}>
          <Text style={styles.locationtext}>LOCATION</Text>
          <TouchableOpacity style={{marginRight: wp(4)}}>
            <Icon name="add-outline" size={25} color="#000000" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
          <FastImage
            source={require('../../assets/images/map.png')}
            style={styles.mapImage}
          />
        </TouchableOpacity>
        <View style={styles.discriptionview}>
          <Text style={styles.discriptiontext}>DESCRIPTION (optional)</Text>
          <View style={styles.TextInput2view}>
            <TextInput
              style={{paddingHorizontal: 15}}
              onChangeText={res => setInput2(res)}
              multiline={true}
            />
          </View>
        </View>
        <View style={{alignSelf: 'center'}}>
          <Button
            joMarzi={'Create Hangout'}
            styleDesign={[
              {
                backgroundColor: checkValues ? '#45D4FF' : '#45D4FF60'
              }
            ]}
            visiblity={false}
            onTap={() => isEmpty()}
          />
        </View>
      </View>
      </ScrollView>
 
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  Mainview: {
    paddingHorizontal: 30,
  },
  topworkoutsquadview: {
    flexDirection: 'row',
    marginTop: hp(2),
  },
  Toptext: {
    fontSize: 22,
    color: '#0852B9',
    fontWeight: '600',
  },
  usersImage: {
    height: hp(1.7),
    width: wp(4.7),
    marginLeft: wp(4),
    alignSelf: 'center',
  },
  nameview: {
    flexDirection: 'row',
    marginTop: hp(1),
  },
  nametext: {
    fontSize: 18,
    color: '#000000'
  },
  dateview: {
    flexDirection: 'row',
    marginTop: hp(1),
    color: '#000000'
  },
  datetext: {
    fontSize: 18,
    color: '#000000'
  },
  TextInput1view: {
    marginTop: hp(1),
    height: hp(5),
    width: '100%',
    backgroundColor: '#D4D4D460',
    borderRadius: 10,
  },
  selectdateview: {
    height: hp(5.5),
    width: '45%',
    backgroundColor: '#45D4FF',
    borderRadius: 10,
    flexDirection: 'row',
    marginTop: hp(1),
    justifyContent: 'space-between',
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectdatetext: {
    fontSize: 22,
    color: '#FFFFFF',
    fontWeight: '500',
  },
  timeview: {
    flexDirection: 'row',
    marginTop: hp(1),
  },
  timetext: {
    fontSize: 18,
    color: '#000000'
  },
  adjusttimemainview: {
    height: hp(10),
    width: '100%',
    marginTop: hp(1),
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  adjusttimetextview: {
    flexDirection: 'row',
    height: hp(6),
    width: wp(20),
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: hp(1.5),
  },
  adjusttimetext1: {
    fontSize: 30,
    fontWeight: '500',
    color: '#000000',
  },
  adjusttimetext2: {
    fontSize: 30,
    fontWeight: '600',
    color: '#000000',
  },
  adjusttimetext3: {
    fontSize: 30,
    fontWeight: '500',
    color: '#000000',
  },
  adjusttimeleftview: {
    flexDirection: 'row',
    height: hp(10),
    width: wp(45),
    justifyContent: 'space-between',
  },
  adjusttimerightview: {
    flexDirection: 'row',
    height: hp(6),
    width: wp(24),
    justifyContent: 'space-between',
    alignItems:'center'
  },
  AMview: {
    height: hp(4),
    width: wp(10),
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  PMview: {
    height: hp(4),
    width: wp(10),
    backgroundColor: '#C4C4C4',
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  AMtext: {
    fontSize: 18,
    color: '#FFFFFF',
    textAlign: 'center',
  },
  PMtext: {
    fontSize: 18,
    color: '#FFFFFF',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  locationmainview: {
    marginTop: hp(2),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  locationtext: {
    fontSize: 18,
    color: '#000000'
  },
  mapImage: {
    width: '100%',
    height: hp(8),
    borderRadius: 10,
    marginTop: hp(1),
  },
  discriptionview: {
    marginTop: hp(2),
  },
  discriptiontext: {
    fontSize: 18,
    color: '#000000'
  },
  TextInput2view: {
    marginTop: hp(1),
    height: hp(14),
    width: '100%',
    backgroundColor: '#D4D4D460',
    borderRadius: 10,
  },

  headerTextcolor: {
    color: '#45D4FF',
  },
});

export default CreateHangout;
