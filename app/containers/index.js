import React, { Component } from 'react-native';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux/native';
import sagaMiddleware from 'redux-saga';
import reducer from '../reducers';
import sagas from '../sagas';
import GameApp from './gameApp';

const createStoreWithMiddleware = applyMiddleware(
  sagaMiddleware(...sagas)
)(createStore);

const store = createStoreWithMiddleware(reducer);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        {() => <GameApp/>}
      </Provider>
    );
  }
}
