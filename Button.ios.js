import React, { PureComponent } from 'react';
import {
  View,
  TouchableOpacity
} from 'react-native';


export default class Button extends PureComponent {
  render() {
    return (
      <TouchableOpacity { ...this.props }>
        { this.props.children }
      </TouchableOpacity>
    );
  }
}
