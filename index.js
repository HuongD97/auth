import React from 'react';
import {AppRegistry, Text} from 'react-native';
import {name as appName} from './app.json';
import App from './src/App';

AppRegistry.registerComponent('auth', () => App);
