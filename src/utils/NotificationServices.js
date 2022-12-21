import AsyncStorage from '@react-native-async-storage/async-storage';
import messaging from '@react-native-firebase/messaging';
import {Alert} from 'react-native';
import {isMatch} from '../Store/slices';
import {getRequestFromFormData} from './../App/fetch';
import {BASE_URL} from './../App/api';
import {
  getDataFromAsyncStorage,
  setDataToAsyncStorage,
} from './getAndSetDataToAsync';
import {userDataFromAsyncStorage} from '../Store/slices/user';
import {showMessage} from 'react-native-flash-message';
import { updateUserProfileFromNotification } from './updateUserProfileFromNotificaton';

export const requestUserPermission = async () => {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    console.log('Authorization status:', authStatus);
    getFcmToken();
  } else {
    console.log('userDeclined permission');
  }
};

const getFcmToken = async () => {
  try {
    let fcmToken = await AsyncStorage.getItem('fcmToken');
    console.log('fcm Token old ==>', fcmToken);
    if (!fcmToken) {
      try {
        const fcmToken = await messaging().getToken();
        if (fcmToken) {
          console.log('the new generated token', fcmToken);
          await AsyncStorage.setItem('fcmToken', fcmToken); // already in json
        }
      } catch (error) {
        console.log('fcm Token Error:', error);
      }
    }
  } catch (error) {
    console.log('error:', error);
  }
};

export const NotificationServices = dispatch => {
  // Assume a message-notification contains a "type" property in the data payload of the screen to open

  // Note: -====== we shift this into Separate function and call it to app.js
  // Foreground Notification Handler
  messaging().onMessage(async remoteMessage => {
    //  Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
    console.log('foreground handler:', remoteMessage);
    if (remoteMessage?.data?.nottype === 'confirmation_partner') {
      updateUserProfileFromNotification(dispatch)
    }
  });

  messaging().onNotificationOpenedApp(remoteMessage => {
    console.log(
      'Notification caused app to open from background state:',
      remoteMessage.notification,
    );
    if (remoteMessage?.data?.nottype === 'confirmation_partner') {
      updateUserProfileFromNotification(dispatch)
    }
    // navigation.navigate(remoteMessage.data.type);
  });

  // Check whether an initial notification is available
  messaging()
    .getInitialNotification()
    .then(remoteMessage => {
      if (remoteMessage) {
        console.log(
          'Notification caused app to open from quit state:',
          remoteMessage.notification,
        );
        // setInitialRoute(remoteMessage.data.type); // e.g. "Settings"
        if (remoteMessage?.data?.nottype === 'confirmation_partner') {
          updateUserProfileFromNotification(dispatch)
        }
      }
    });
};
