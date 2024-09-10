/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import TrackPlayer from 'react-native-track-player';
if (__DEV__) {
  import('./ReactotronConfig').then(() => console.log('Reactotron Configured'));
}
// TrackPlayer.registerPlaybackService(() => require('./trackPlayerServices'));
AppRegistry.registerComponent(appName, () => App);
