import React, { useEffect } from 'react';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { Provider, useDispatch, useSelector } from 'react-redux';
import Navigation from './src/Navigation/Stack';
import { Store } from './src/Store';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { isDark, isMatch } from './src/Store/slices';
import { Alert, LogBox } from 'react-native';
import { userDataFromAsyncStorage } from './src/Store/slices/user';
import FlashMessage from 'react-native-flash-message';
import io from 'socket.io-client';
import {
  getDataFromAsyncStorage,
  setDataToAsyncStorage,
} from './src/utils/getAndSetDataToAsync';
import dynamicLinks from '@react-native-firebase/dynamic-links';
import { postRequest } from './src/App/fetch';
import { BASE_URL } from './src/App/api';
import { showError, showSuccess } from './src/utils/PopupFunctions';
import {
  NotificationServices,
  requestUserPermission,
} from './src/utils/NotificationServices';
import { NavigationContainer } from '@react-navigation/native';
import PubNub from 'pubnub';
import { PubNubProvider } from 'pubnub-react';

LogBox.ignoreLogs([
  "ViewPropTypes will be removed from React Native. Migrate to ViewPropTypes exported from 'deprecated-react-native-prop-types",
  'ColorPropType will be removed',
  'Failed prop type',
  'VirtualizedLists should never be nested',
]);

LogBox.ignoreAllLogs();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#000',
    accent: '#ffffff',
  },
};

const getData = async () => {
  try {
    let value = await AsyncStorage.getItem('isDark').then(res => {
      return res;
    });
    return value;
  } catch (e) {
    console.log(e);
  }
};

const getUserData = async () => {
  try {
    let value = await AsyncStorage.getItem('user').then(res => {
      return res;
    });
    return value;
  } catch (e) {
    console.log(e);
  }
};

const UserAuthenticated = () => {
  const dispatch = useDispatch();
  const reducerData = useSelector(state => state);
  const { AuthReducer } = reducerData;
  // console.log(`this is state`,userData?.userId);
  const handleDynamicLink = link => {
    console.log('link url++++', link);
    if (link?.url) {
      let data = link.url?.split('=');
      console.log('data', obj);
      let obj = {
        userid: data[1].split('&')[0],
        userEmail: data[2],
      };
      console.log('final Data', obj);
      setDataToAsyncStorage('deepLinkData', obj);
      setDataToAsyncStorage('needToCheckDeepLinkData', {
        isNeeded: true,
      });
      getDataFromAsyncStorage('user')
        .then(res => {
          let userData = JSON.parse(res);
          if (userData?.userId) {
            try {
              if (userData?.email === obj.userEmail) {
                try {
                  postRequest(`${BASE_URL}/confirmPartner`, obj).then(
                    backRes => {
                      if (backRes.success) {
                        let partnerProfile = backRes?.data?.partnerProfile;
                        let obj = { ...userData, partnerProfile: partnerProfile };
                        setDataToAsyncStorage('user', JSON.stringify(obj));
                        getDataFromAsyncStorage('user')
                          .then(res => {
                            dispatch(userDataFromAsyncStorage(JSON.parse(res)));
                            console.log('user data after partner added', res);
                            // setLoading(false);
                          })
                          .catch(error => console.log('error:', error));
                        dispatch(isMatch(true));

                        setDataToAsyncStorage('needToCheckDeepLinkData', {
                          isNeeded: false,
                        });
                        Alert.alert('Partner', 'Partner added successfully', [
                          {
                            text: 'Cancel',
                            onPress: () => console.log('Cancel Pressed'),
                            style: 'cancel',
                          },
                          {
                            text: 'OK',
                            onPress: () => {
                              console.log('OK Pressed');
                            },
                          },
                        ]);
                        // showSuccess('Your partner successfully Added');
                      } else if (!backRes.success) {
                        showError('not working please try again letter');
                      } else {
                        console.log('handleDynamicLnk else Error');
                      }
                    },
                  );
                } catch (error) {
                  console.log('Error:', error);
                }
              } else {
                setDataToAsyncStorage('deepLinkData', obj);
                Alert.alert(
                  'Partner Invitation',
                  'Your email address is not match please check your email address',
                  [
                    // {
                    //   text: 'Cancel',
                    //   onPress: () => console.log('Cancel Pressed'),
                    //   style: 'cancel',
                    // },
                    {
                      text: 'OK',
                      onPress: () => {
                        console.log('OK Pressed');
                      },
                    },
                  ],
                );
              }
            } catch (error) {
              console.log('Dynamic link Catch Error', error);
            }
          } else {
            Alert.alert(
              'Partner Invitation',
              'You need to login first to accept this',
              [
                {
                  text: 'Cancel',
                  onPress: () => console.log('Cancel Pressed'),
                  style: 'cancel',
                },
                {
                  text: 'OK',
                  onPress: () => {
                    console.log('OK Pressed');
                  },
                },
              ],
            );
          }
        })
        .catch(error => console.log('Error in dynamic file:', error));
    } else {
      console.log('dynamic link not available');
    }
    // if (!!link?.url) {
    //   let getId = link.url?.split('=').pop()
    //   console.log("user id", getId)
    //   setTimeout(() => {
    //     // NavigationService.navigate('UserDetail', { userId: getId })
    //     console.log('userNav')
    //   }, 1000);
    // }
  };
  // const getDlDataFromAstorage = () => {
  //   getDataFromAsyncStorage('needToCheckDeepLinkData')
  //     .then(res => {
  //       let responseData = JSON.parse(res);
  //       if (responseData === true) {
  //         if (!reducerData?.isDark?.isMatch) {
  //           getDataFromAsyncStorage('deepLinkData')
  //             .then(response => {
  //               if (response != null && undefined) {
  //                 getDataFromAsyncStorage('user')
  //                   .then(res => {
  //                     let userData = JSON.parse(res);
  //                     if (userData?.userId) {
  //                       try {
  //                         console.log('final Data', obj);
  //                         if (userData?.email === obj.userEmail) {
  //                           try {
  //                             postRequest(
  //                               `${BASE_URL}/confirmPartner`,
  //                               obj,
  //                             ).then(backRes => {
  //                               if (backRes.success) {
  //                                 dispatch(isMatch(true));
  //                                 setDataToAsyncStorage(
  //                                   'needToCheckDeepLinkData',
  //                                   {
  //                                     isNeeded: false,
  //                                   },
  //                                 );
  //                                 Alert.alert(
  //                                   'Partner',
  //                                   'Partner added successfully',
  //                                   [
  //                                     {
  //                                       text: 'Cancel',
  //                                       onPress: () =>
  //                                         console.log('Cancel Pressed'),
  //                                       style: 'cancel',
  //                                     },
  //                                     {
  //                                       text: 'OK',
  //                                       onPress: () => {
  //                                         console.log('OK Pressed');
  //                                       },
  //                                     },
  //                                   ],
  //                                 );
  //                                 // showSuccess('Your partner successfully Added');
  //                                 navi;
  //                               } else if (!backRes.success) {
  //                                 showError(
  //                                   'not working please try again letter',
  //                                 );
  //                               } else {
  //                                 console.log('handleDynamicLnk else Error');
  //                               }
  //                             });
  //                           } catch (error) {
  //                             console.log('Error:', error);
  //                           }
  //                         } else {
  //                           Alert.alert(
  //                             'Spouse Invitation',
  //                             'Your email address is not match please check your email address',
  //                             [
  //                               // {
  //                               //   text: 'Cancel',
  //                               //   onPress: () => console.log('Cancel Pressed'),
  //                               //   style: 'cancel',
  //                               // },
  //                               {
  //                                 text: 'OK',
  //                                 onPress: () => {
  //                                   console.log('OK Pressed');
  //                                 },
  //                               },
  //                             ],
  //                           );
  //                         }
  //                       } catch (error) {
  //                         console.log('Dynamic link Catch Error', error);
  //                       }
  //                     } else {
  //                       Alert.alert(
  //                         'Spouse Invitation',
  //                         'You need to login first to accept this',
  //                         [
  //                           {
  //                             text: 'Cancel',
  //                             onPress: () => console.log('Cancel Pressed'),
  //                             style: 'cancel',
  //                           },
  //                           {
  //                             text: 'OK',
  //                             onPress: () => {
  //                               console.log('OK Pressed');
  //                             },
  //                           },
  //                         ],
  //                       );
  //                     }
  //                   })
  //                   .catch(error =>
  //                     console.log('Error in dynamic file:', error),
  //                   );
  //               }
  //             })
  //             .catch(error =>
  //               console.log('Error: getting deepLinkData', error),
  //             );
  //         } else {
  //           console.log('Partner already added');
  //         }
  //       } else {
  //         console.log('no need to check');
  //       }
  //     })
  //     .catch(error => console.log('Error: isNeeded getting Error', error));
  // };
  useEffect(() => {
    (async () => {
      let value = getDataFromAsyncStorage('user')
        .then(res => {
          console.log('this is res in APp');
          if (res != null && res != undefined) {
            let v = JSON.parse(res);
            console.log('user Data after parse', v);
            // console.log('JSON.parse(res)', JSON.parse(res));
            if (v?.userId) {
              if (v?.partnerProfile != '') {
                dispatch(isMatch(true));
                dispatch(userDataFromAsyncStorage(JSON.parse(res)));
                console.log(
                  'withPartner profile: isMatch & userDataFromAsyncStorage both dispatch',
                );
              } else {
                dispatch(userDataFromAsyncStorage(JSON.parse(res)));
                console.log('without Partner profile');
              }
              // dispatch(userDataFromAsyncStorage(res));
            } else {
              console.log('data not found');
            }
          } else {
            console.log('userNot found');
          }
        })
        .catch(error =>
          console.log('Error:app.js userData getting from asyncSt', error),
        );
    })().catch(err => {
      console.error(err);
    });
    (async () => {
      requestUserPermission();
      NotificationServices(dispatch);
    })().catch(err => {
      console.error(err);
    });
    // getDlDataFromAstorage();

    dynamicLinks()
      .getInitialLink()
      .then(link => {
        handleDynamicLink(link);
      });
    const linkingListener = dynamicLinks().onLink(handleDynamicLink);
    return () => {
      linkingListener();
      // getDlDataFromAstorage();
    };
  }, []);

  return null;
};

const CheckTheme = () => {
  const dispatch = useDispatch();
  const state = useSelector(state => state);
  // console.log(`this is state`);
  // console.log(state);
  useEffect(() => {
    (async () => {
      let value = getData().then(res => {
        let v = JSON.parse(res);
        dispatch(isDark(v));
      });
    })().catch(err => {
      console.error(err);
    });
  }, []);

  return null;
};

const pubnub = new PubNub({
  publishKey: 'pub-c-3d8ac92b-8141-4195-a3f9-e834572cf497',
  subscribeKey: 'sub-c-efe3a275-40f8-484b-a2cb-a8cff3881c60',
  uuid: '131456'
});

export default function App() {
  // useEffect(() => {
  //   const socket = io('http://192.168.18.240:3000');
  // }, []);

  // useEffect(() => {
  //   dynamicLinks()
  //     .getInitialLink()
  //     .then(link => {
  //       handleDynamicLink(link);
  //     });
  //   const linkingListener = dynamicLinks().onLink(handleDynamicLink);
  //   return () => {
  //     linkingListener();
  //   };
  // }, []);

  return (

    <PubNubProvider client={pubnub}>
      <Provider store={Store}>
        <CheckTheme />
        <PaperProvider theme={theme}>
          {/* <NavigationContainer > */}
          <UserAuthenticated />
          <Navigation />
          {/* </NavigationContainer> */}
        </PaperProvider>
        <FlashMessage position="center" />
      </Provider>
    </PubNubProvider>
  );
}
