import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {createStackNavigator} from '@react-navigation/stack';
// Screens
import Login from './src/auth/login';

const RootStack = createStackNavigator();

function AppNavigator(props) {
  return (
    <>
      <SafeAreaView style={{flex: 0, backgroundColor: '#2A347B'}} />
      <SafeAreaView style={{flex: 1}}>
        <NavigationContainer>
          <RootStack.Navigator
            screenOptions={{
              headerShown: false,
            }}>
            <RootStack.Screen name="Login" component={Login} />
          </RootStack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </>
  );
}

export default AppNavigator;
