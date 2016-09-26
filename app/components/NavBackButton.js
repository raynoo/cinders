import React, {Component, PropTypes} from 'react';
import {Image, Platform} from 'react-native';

export default class NavBackButton extends Component {

  render() {
    return (
      <Image style={this.props.style} source={backButtonImage} />
    );
  }
}

const backButtonImage = Platform.OS === 'ios' ?
  require('../img/back_white@2x.ios.png') :
  require('../img/back_white@2x.android.png')

NavBackButton.PropTypes = {
  style: PropTypes.object
}
