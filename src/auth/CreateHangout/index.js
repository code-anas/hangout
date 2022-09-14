import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import FastImage from 'react-native-fast-image';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';


const Login = props => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
      <TouchableOpacity style={{marginLeft:wp(5),marginTop:hp(0.5)}}>
        <Icon name='chevron-back-outline' size={35} color='#FFFFFF'/>
        </TouchableOpacity>
        <Text style={styles.headerText}>Hangout details</Text>
      </View>
      <View style={styles.Mainview}>
        <View style={styles.topworkoutsquadview}>
        <Text style={styles.Toptext}>
          Workout Squad
        </Text>
        <FastImage
        source={require('../../assets/images/users.png')}
        style={styles.usersImage}/>
      </View>
        <View style={styles.nameview}>
        <Text style={styles.nametext}>
          NAME
        </Text>
       <TouchableOpacity style={{marginLeft:wp(2),marginTop:hp(0.1)}}>
        <Icon name='create-outline' size={20} color='#BFBFBF'/>
        </TouchableOpacity>
      </View>
      <View style={styles.TextInput1view}>
        <TextInput  style={{paddingHorizontal:15}}/>
      </View>
        <View style={styles.dateview}>
        <Text style={styles.datetext}>
          DATE
        </Text>
       <TouchableOpacity style={{marginLeft:wp(2),marginTop:hp(0.2)}}>
         <Icon name='calendar' size={20} color='#BFBFBF'/>
        </TouchableOpacity>
      </View>
      <View style={styles.selectdateview}>
        <Text style={styles.selectdatetext}>
          Select Date
        </Text>
        <TouchableOpacity style={{marginTop:hp(0.5)}}>
         <Icon name='caret-down' size={25} color='#FFFFFF'/>
        </TouchableOpacity>
      </View>
      <View style={styles.timeview}>
        <Text style={styles.timetext}>
          TIME
        </Text>
       <TouchableOpacity style={{marginLeft:wp(2), marginTop:hp(0.3)}}>
         <Icon name='time-outline' size={20} color='#BFBFBF'/>
        </TouchableOpacity>
      </View>
      <View style={styles.adjusttimemainview}>
        <View style={styles.adjusttimeleftview}>
<View>
<TouchableOpacity>
        <Icon name='caret-up-outline' size={40} color='#BFBFBF'/>
        </TouchableOpacity>
 <TouchableOpacity>
         <Icon name='caret-down-outline' size={40} color='#BFBFBF'/>
        </TouchableOpacity>
</View>
<View style={styles.adjusttimetextview}>
  <Text style={styles.adjusttimetext1}>4</Text>
  <Text style={styles.adjusttimetext2}>:</Text>
  <Text style={styles.adjusttimetext3}>10</Text>
</View>
<View>
<TouchableOpacity>
        <Icon name='caret-up-outline' size={40} color='#BFBFBF'/>
        </TouchableOpacity>
 <TouchableOpacity>
         <Icon name='caret-down-outline' size={40} color='#BFBFBF'/>
        </TouchableOpacity>
</View>
</View>
<View style={styles.adjusttimerightview}>
  <View style={styles.AMview}>
    <Text style={styles.AMtext}>AM</Text>
  </View>
  <View style={styles.PMview}>
    <Text style={styles.PMtext}>PM</Text>
  </View>
</View>
      </View>
      <View style={styles.locationmainview}>
        <Text style={styles.locationtext}>LOCATION</Text>
        <TouchableOpacity style={{marginRight:wp(4)}}>
          <Icon name='add-outline' size={25} color='#BFBFBF'/>
        </TouchableOpacity>
      </View>
      <TouchableOpacity>
         <FastImage
        source={require('../../assets/images/map.png')}
        style={styles.mapImage}/>
        </TouchableOpacity>
        <View style={styles.discriptionview}>
        <Text style={styles.discriptiontext}>
        DESCRIPTION (optional)
        </Text>
        <View style={styles.TextInput2view}>
        <TextInput  style={{paddingHorizontal:15}}/>
      </View>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttontext}>Create Hangout</Text>
      </TouchableOpacity>
      
      </View>
      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#FFFFFF'
  },
  header: {
    flexDirection:'row',

    alignItems:'center',
    height: hp(10),
    backgroundColor:'#45D4FF'
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft:wp(10),
    color:'#FFFFFF'
  },
  Mainview:{
 paddingHorizontal: 30
  },
  topworkoutsquadview: {
flexDirection:'row',
marginTop:hp(4)
  },
  Toptext:{
    fontSize: 28,
    color: '#0852B9',
    fontWeight:'600'
  },
  usersImage:{
    height:hp(2),
    width:wp(6),
    marginLeft:wp(4),
    alignSelf:'center'
  },
  nameview: {
    flexDirection:'row',
    marginTop:hp(1)
      },
      nametext:{
        fontSize: 18,
      },
  dateview: {
    flexDirection:'row',
    marginTop:hp(1)
      },
      datetext:{
        fontSize: 18,
      },
  TextInput1view:{
    marginTop:hp(1),
    height:hp(5),
    width:'100%',
    backgroundColor:'#D4D4D460',
    borderRadius: 10,

  },
  selectdateview:{
    height:hp(6),
    width:'50%',
    backgroundColor:'#45D4FF',
    borderRadius:10,
    flexDirection:'row',
    marginTop:hp(1),
    justifyContent:'space-between',
    paddingHorizontal:15,
    alignItems:'center'

  },
  selectdatetext:{
    fontSize: 22,
    color:'#FFFFFF',
    fontWeight:'600'
  },
  timeview: {
    flexDirection:'row',
    marginTop:hp(1)
      },
      timetext:{
        fontSize: 18,
      },
  adjusttimemainview:{
    height:hp(10),
    width:'100%',
    marginTop:hp(1),
    flexDirection:'row',
    justifyContent:'space-between',
    paddingHorizontal:10,
    alignItems:'center',
  },
  adjusttimetextview:{
    flexDirection:'row',
    height:hp(6),
    width:wp(18),
    justifyContent:'space-between',
    alignItems:'center',
    marginTop:hp(1.5),
  },
  adjusttimetext1:{
    fontSize:35,
    fontWeight:'600',
    color:'#000000'
  },
  adjusttimetext2:{
    fontSize:32,
    fontWeight:'600',
    color:'#000000'
  },
  adjusttimetext3:{
    fontSize:35,
    fontWeight:'600',
    color:'#000000'
  },
  adjusttimeleftview:{
    flexDirection:'row',
    height:hp(10),
    width:wp(40),
    justifyContent:'space-between',
  },
  adjusttimerightview:{
    flexDirection:'row',
    height:hp(6),
    width:wp(24),
    justifyContent:'space-between',
  },
  AMview:{
    height:hp(4),
    width:wp(10),
    backgroundColor:'#45D4FF',
    alignSelf:'center',
    justifyContent:'center',
    borderRadius:10
  },
  PMview:{
    height:hp(4),
    width:wp(10),
    backgroundColor:'#C4C4C4',
    alignSelf:'center',
    justifyContent:'center',
    borderRadius:10
  },
  AMtext:{
    fontSize: 18,
    color:'#FFFFFF',
    textAlign:'center'
  },
  PMtext:{
    fontSize: 18,
    color:'#FFFFFF',
    justifyContent:'center',
    alignSelf:'center',
 },
 locationmainview:{
  marginTop:hp(3),
  flexDirection:'row',
  justifyContent:'space-between'
 },
 locationtext:{
  fontSize: 18
 },
 mapImage:{
  width:'100%',
  height:hp(8),
  borderRadius:10,
  marginTop:hp(1)
 },
 discriptionview: {
  marginTop:hp(2)
    },
  discriptiontext:{
      fontSize: 18,
    },
    TextInput2view:{
      marginTop:hp(1),
      height:hp(14),
      width:'100%',
      backgroundColor:'#D4D4D460',
      borderRadius: 10,
   },
  button:{
    marginTop:hp(2),
    height:hp(6),
    width:'80%',
    backgroundColor:'#45D4FF50',
    justifyContent:'center',
    alignItems:'center',
    alignSelf:'center',
    borderRadius:20
  },
  buttontext:{
    fontSize:20,
    color:'#FFFFFF',
    
  }
});

export default Login;
