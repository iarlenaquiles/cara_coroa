import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';
import { Router, Scene } from 'react-native-router-flux';

import Principal from './src/components/Principal';
import SobreJogo from './src/components/SobreJogo';
import OutrosJogos from './src/components/OutrosJogos';

export default class cara_coroa extends Component {
  render() {
    return (
      <Router sceneStyle={{ paddingTop: 50}}>
        <Scene key='principal' component={Principal} initil title="Cara ou Coroa" />
        <Scene key='sobrejogo' component={SobreJogo} title="Sobre o Jogo" />
        <Scene key='outrosjogos'  component={OutrosJogos} title="Outro Jogos" />
      </Router>
    );
  }
}

AppRegistry.registerComponent('cara_coroa', () => cara_coroa);
