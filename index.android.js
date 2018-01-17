import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';

import Rotas from './src/Rotas';

export default class cara_coroa extends Component {
  render() {
    return (
     <Rotas />
    );
  }
}

AppRegistry.registerComponent('cara_coroa', () => cara_coroa);
