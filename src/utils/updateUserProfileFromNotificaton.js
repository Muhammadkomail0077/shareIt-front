import {Alert} from 'react-native';
import {isMatch} from '../Store/slices';
import {getRequestFromFormData} from './../App/fetch';
import {BASE_URL} from './../App/api';
import {
  getDataFromAsyncStorage,
  setDataToAsyncStorage,
} from './getAndSetDataToAsync';
import {userDataFromAsyncStorage} from '../Store/slices/user';
import { useDispatch } from 'react-redux';

export const updateUserProfileFromNotification = (dispatch) => {
  let value = getDataFromAsyncStorage('user')
    .then(async res => {
      console.log('this is res in APp');
      if (res != null && res != undefined) {
        let v = JSON.parse(res);
        console.log('user Data for confirmation after parse', v);
        // console.log('JSON.parse(res)', JSON.parse(res));
        if (v?.userId) {
          try {
            await getRequestFromFormData(
              `${BASE_URL}/getUserByToken`,
              v?.userToken,
            )
              .then(async response => {
                console.log('getUserByToken', response);
                if (response.success === true) {
                  try {
                    let data = {
                      ...v,
                      partnerProfile: response.data.partnerProfile,
                    };
                    console.log(
                      'response.partnerProfile',
                      response.data.partnerProfile,
                    );
                    console.log('after spread:', data);
                    await setDataToAsyncStorage('user', JSON.stringify(data));
                    await getDataFromAsyncStorage('user')
                      .then(asyncRes => {
                        if (asyncRes != null && asyncRes != undefined) {
                          let finalUserData = JSON.parse(asyncRes);
                        //   let finalUserData = asyncRes;
                          console.log('finalData From Async:', finalUserData);
                          dispatch(userDataFromAsyncStorage(finalUserData));
                          dispatch(isMatch(true));
                          Alert.alert('Partner Confirmation',
                            `${finalUserData?.name} added you as a Partner Successfully`,
                          );
                        } else {
                          console.log('data not found asyncRes');
                        }
                      })
                      .catch(error =>
                        console.log('Error: finalData From Async:', error),
                      );
                  } catch (error) {
                    console.log('setLatestUserDataToAsync:', error);
                  }
                } else if (response === false) {
                  console.log('Something went wrong bck res false');
                } else {
                  console.log('something else');
                }
              })
              .catch(error => console.log('Error:', error));
          } catch (error) {
            console.log('Error:', error);
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
};
