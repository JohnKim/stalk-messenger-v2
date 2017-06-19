/**
 * @flow
 */

import { AppRegistry } from 'react-native';
import messenger from './app/index';

console.disableYellowBox = true;

AppRegistry.registerComponent('s5messenger', () => messenger);
