/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import messaging from '@react-native-firebase/messaging';
import { updateUserProfileFromNotification } from './src/utils/updateUserProfileFromNotificaton';
import { useDispatch } from 'react-redux';

// Register Background handler

messaging().setBackgroundMessageHandler(async remoteMessage => {
  // updateUserProfileFromNotification(dispatch)
  console.log('Message handled in the background!', remoteMessage);
});

AppRegistry.registerComponent(appName, () => App);
