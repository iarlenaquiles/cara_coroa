import React, { Component } from 'react';
import {
  Image,
  View
} from 'react-native';

const cara = require('../imgs/moeda_cara.png');
const coroa = require('../imgs/moeda_coroa.png');

export default class Resultado extends Component {
	render() {
		return (
			<View>
				<Image source={cara}/>
				<Image source={coroa}/>
			</View>
		);
	}
}
