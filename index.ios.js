import React, { Component } from 'react';
import {AppRegistry} from 'react-native';
import ShowTellApp from './app/components/ShowTellApp';

class showandtell extends Component {
  render() {
    return (
      <ShowTellApp />
    );
  }
}

AppRegistry.registerComponent('showandtell', () => showandtell);
