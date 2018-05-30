import React, { PureComponent } from 'react';
import {
  View,
  TouchableNativeFeedback
} from 'react-native';


export default class Button extends PureComponent {
  render() {
    return (
      <TouchableNativeFeedback
        delayPressIn={ 0 }
        background={ TouchableNativeFeedback.SelectableBackground() } // eslint-disable-line new-cap
        { ...this.props }>
        { this.props.children }
      </TouchableNativeFeedback>
    );
  }
}
