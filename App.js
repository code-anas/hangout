import React from 'react';
import {Text, View, LogBox} from 'react-native';
import AppNavigator from './AppNavigator';

LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();

Text.defaultProps = Text.defaultProps || {};
Text.defaultProps.allowFontScaling = false;

export default class App extends React.Component {
  render() {
    return <AppNavigator />;
  }
}
