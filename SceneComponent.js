import React, { PureComponent } from 'react';
import {
  View,
  StyleSheet
} from 'react-native';

import StaticContainer from './StaticContainer';


export default class SceneComponent extends PureComponent {
  render() {
    const { shouldUpdated } = this.props;

    return (
      <View { ...this.props }>
          <StaticContainer shouldUpdate={ shouldUpdated }>
            { this.props.children }
          </StaticContainer>
      </View>
    );
  }
}
