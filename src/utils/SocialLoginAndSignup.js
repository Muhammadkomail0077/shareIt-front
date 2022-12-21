import {View, Text} from 'react-native';
import React from 'react';
import {postRequestWithFormData} from '../App/fetch';
import {BASE_URL} from '../App/api';
import {
  getDataFromAsyncStorage,
  setDataToAsyncStorage,
} from './getAndSetDataToAsync';
import {getUserDataFromAsyncStorage} from '../Store/reducers/AuthReducer';
import {showError} from './PopupFunctions';
import {useDispatch} from 'react-redux';

const SocialLoginAndSignup = async (res, userType, setLoader, dispatch) => {
  try {
    console.log('res from SocialLoginAndSignup', userType);
    var data = new FormData();
    data.append('username', `${res.user.displayName}`);
    data.append('email', `${res.user.email}`);
    // id not creating issue fixed by adding password key because backend developer set check all keys
    data.append('password', ``);
    data.append('usertype', `${userType}`);
    data.append('roletype', `public`);
    data.append(
      'phone',
      `${res.user.phoneNumber ? res.user.phoneNumber : ''}`,
    );
    data.append('pic', {
      uri: `${res.user.photoURL}`,
      type: 'image/jpeg',
      name: 'photo.jpg',
    });
    console.log('formData', data);
    setLoader(true);
    // const pushData = await axios(requestOptions)
    const responseData = await postRequestWithFormData(
      `${BASE_URL}/signup`,
      data,
    )
      .then(async response => {
        setLoader(false);
        console.log('response:', response);
        if (response[0]?.status == 'true') {
          setLoader(false);
          const v = {
            name: response[0].data.username
              ? response[0].data.username
              : 'User',
            phoneNumber: response[0].data.phone,
            profile_pic: response[0].data.pic,
            email: response[0].data.email,
            role: response[0].data.roletype
              ? response[0].data.roletype
              : 'public',
            type: userType ? userType : 'userType',
            userId: response[0].data.user_id,
          };
          setDataToAsyncStorage('token', JSON.stringify(v));
          setDataToAsyncStorage('user', JSON.stringify(v));
          const afterGettingFromAsync = await getDataFromAsyncStorage('user')
            .then(async resp => {
              console.log('getDataFromAsyncStorage', JSON.parse(resp));
              // dispatch(getUserDataFromAsyncStorage(JSON.parse(resp)));
              // let data = JSON.parse(resp)
              console.log('res before return:', resp);
              return await resp;
              setLoader(false);
            })
            .catch(err => {
              console.log('error:', err);
            });
          return afterGettingFromAsync;
          //for async storage and redux
          // alert('Account Created Successfully');
        } else if (response[0]?.status == 'false') {
          setLoader(false);
          showError('Something went wrong please try again');
          console.log('false response from backend');
        }
      })
      .catch(err => {
        setLoader(false);
        showError('Something went wrong please try again');
        console.log('thenCatchError', err);
      });
    // console.log(formdata);
    console.log('responseData:', responseData);
    return responseData;
  } catch (err) {
    setLoader(false);
    showError('Something went wrong please try again');
    console.log('TryCatchError:', err);
  }
};

export default SocialLoginAndSignup;
