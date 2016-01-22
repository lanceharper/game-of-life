'use strict';
import React, {
  AppRegistry
} from 'react-native';
import App from './app/containers';
import sagaMiddleware from 'redux-saga';

AppRegistry.registerComponent('conway', () => App);
