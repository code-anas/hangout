import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createStackNavigator } from '@react-navigation/stack';
// Screens
import Login from './src/auth/login';
import SignUp from './src/auth/signup';
import Profile from './src/auth/Profile';
import Setting from './src/auth/Setting';
import FriendList from './src/auth/FriendList';
import Groups from './src/auth/Groups';
import Notification from './src/auth/Notification';

const RootStack = createStackNavigator();

function AppNavigator(props) {
  return (
    <>
      <SafeAreaView style={{ flex: 0, backgroundColor: '#2A347B' }} />
      <SafeAreaView style={{ flex: 1 }}>
        <NavigationContainer>
          <RootStack.Navigator
            screenOptions={{
              headerShown: false,
            }}>
            <RootStack.Screen name="Login" component={Login} />
            <RootStack.Screen name="SignUp" component={SignUp} />
            <RootStack.Screen name="Profile" component={Profile} />
            <RootStack.Screen name="Setting" component={Setting} />
            <RootStack.Screen name="FriendList" component={FriendList} />
            <RootStack.Screen name="Groups" component={Groups} />
            <RootStack.Screen name="Notification" component={Notification} />
          </RootStack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </>
  );
}

export default AppNavigator;
