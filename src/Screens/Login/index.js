import React, {useEffect, useState} from 'react';
import {View, Image, ScrollView, Text, Alert} from 'react-native';
import logo from 'src/Assets/Images/logo.png';
import {styles} from './style';
import Input from 'src/Components/ReusableComponent/input';
import {ActivityIndicator, Divider} from 'react-native-paper';
import ButtonComp from 'src/Components/ReusableComponent/Button';
import COLORS from 'src/Assets/Style/Color';
import SafeArea from 'src/Components/ReusableComponent/Safearea';
import Heading from 'src/Components/ReusableComponent/Heading';
import InteractParagraph from 'src/Components/ReusableComponent/Paragraph';
import FacebookButton from '../../Components/ReusableComponent/FacebookButton';
import GoogleButton from '../../Components/ReusableComponent/GoogleButton';
import AppleButton from '../../Components/ReusableComponent/AppleButton';
import * as yup from 'yup';
import {Formik} from 'formik';
// import {useDispatch} from 'react-redux';
import {userDataFromAsyncStorage} from '../../Store/slices/user';
import AsyncStorage from '@react-native-async-storage/async-storage';
import auth from '@react-native-firebase/auth';
import {useDispatch, useSelector} from 'react-redux';
// import {removeUserDataFromAsyncStorage} from '../../Store/reducers/AuthReducer';
import {BASE_URL} from '../../App/api';
import {postRequest} from '../../App/fetch';
import {
  getDataFromAsyncStorage,
  setDataToAsyncStorage,
} from '../../utils/getAndSetDataToAsync';
import {showError} from '../../utils/PopupFunctions';
import { isMatch } from '../../Store/slices';

let loginValidationScheme = yup.object().shape({
  email: yup
    .string()
    .email('Please enter valid email')
    .required('Email address is required '),
  password: yup
    .string()
    .min(8, ({min}) => `Password must be at least ${min} characters`)
    .required('Password is required '),
  // .matches(
  //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
  //   'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character',
  // ),
});

export default function Login({navigation}) {
  // const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [passHide, setPassHide] = useState(false);
  // const {
  //   AuthData: {userData, status, error},
  // } = useSelector(state => state);
  // console.log('AuthData', userData);
  // // state.authData.userData.

  // const setToken = async () => {
  //   let user = {
  //     uid: '23ha-hd34-jd99-10yt-an62',
  //   }
  //   try {
  //     // const
  //   } catch (error) {

  //   }
  // };

  useEffect(() => {
    // dispatch(removeUserDataFromAsyncStorage())
  }, []);

  const loginUser = values => {
    try {
      if (userData.email && userData.password != '') {
        auth().signInWithEmailAndPassword(values.email, values.password);
      } else {
        alert('Please add Email and Password');
      }
    } catch (error) {
      console.log('Error:', error);
    }
  };

  const dispatch = useDispatch();
  const setToken = async value => {
    try {
      const jsonValue = JSON.stringify(value);
      console.log(`user data value ${jsonValue}`);
      const v = {
        userId: '3123-123-123123-3145',
      };
      await AsyncStorage.setItem('token', JSON.stringify(v));
      await AsyncStorage.setItem('user', JSON.stringify(v));
      let value1 = await AsyncStorage.getItem('token');
      let value2 = await AsyncStorage.getItem('user').then(res => {
        console.log('inside login');
        let val = JSON.parse(res);
        console.log(val);
        dispatch(userDataFromAsyncStorage(val));
        navigation.navigate('profile');
      });
    } catch (e) {
      console.log(e);
    }
  };

  const simpleLogin = value => {
    console.log('Value:', value);
    setLoading(true);
    postRequest(`${BASE_URL}/loginuser`, {
      userEmail: value.email.toLowerCase(),
      userPassword: value.password,
      // usertype: 'email',
    })
      .then(async res => {
        // setLoading(false);
        // console.log('Login Response From Backend:', res);
        if (res.success === true) {
          try {
            const v = {
              userId: res.data._id,
              name: res.data.userName ? res.data.userName : 'user',
              email: res.data.userEmail,
              userPassword: res.data.userPassword,
              userGenderShow: res.data.userGenderShow,
              isNewUser: res.data.isNewUser,
              profile_pic: res.data.userImage ? res.data.userImage : '',
              userAboutMe: res.data.userAboutme ? res.data.userAboutme : '',
              userCountry: res.data.userCountry ? res.data.userCountry : '',
              userCity: res.data.userCity ? res.data.userCity : '',
              userLifeStyleItems: res.data.userLifeStyleItems
                ? res.data.userLifeStyleItems
                : [],
              userInterest: res.data.userInterest ? res.data.userInterest : [],
              userAlbums: res.data.userAlbums ? res.data.userAlbums : [],
              userLon: res.data.userLon ? res.data.userLon : '',
              userLat: res.data.userLat ? res.data.userLat : '',
              userLocationPrivacy: res.data.userLocationPrivacy
                ? res.data.userLocationPrivacy
                : '',
              userNotificationToken: res.data.userNotificationToken
                ? res.data.userNotificationToken
                : '',
              userLastOnline: res.data.userLastOnline
                ? res.data.userLastOnline
                : '',
              userLastOnline: res.data.userLastOnline
                ? res.data.userLastOnline
                : '',
              userDOB: res.data.userDOB ? res.data.userDOB : '',
              userCreatedOn: res.data.userCreatedOn
                ? res.data.userCreatedOn
                : '',
              userToken: res.data.userToken,
              userDeviceType: res.data.userDeviceType,
              userGender: res.data.userGender,
              __v: res.data.__v,
              type: 'email',
              phoneNumber: res.data.userNumber ? res.data.userNumber : '',
              partnerProfile: res.data.partnerProfile? res.data.partnerProfile : '',
              userChatRooms: res.data.userChatRooms ? res.data.userChatRooms : '',
            };
            setDataToAsyncStorage('token', JSON.stringify(v.userToken));
            setDataToAsyncStorage('user', JSON.stringify(v));
            getDataFromAsyncStorage('user')
              .then(res => {
                if (v?.partnerProfile != '') {
                  dispatch(isMatch(true));
                  dispatch(userDataFromAsyncStorage(JSON.parse(res)));
                  console.log(
                    'Login withPartner profile: isMatch & userDataFromAsyncStorage both dispatch',
                  );
                  setLoading(false);
                } else {
                  dispatch(userDataFromAsyncStorage(JSON.parse(res)));
                  console.log('Login without Partner profile');
                  setLoading(false);
                }
              })
              .catch(error => console.log('error:', error));
          } catch (e) {
            console.log(e);
          }
        } else if (res.success === false) {
          setLoading(false);
          showError(`Error:${res.message}`);
          // alert('Please Enter Correct Email & Password')
        } else {
          setLoading(false);
          showMessage('Something went wrong please try again');
        }
      })
      .catch(error => {
        setLoading(false);
        console.log('loginError:', error);
      });
  };

  return (
    <Formik
      initialValues={{email: '', password: ''}}
      validateOnMount={true}
      onSubmit={values => {
        simpleLogin(values);
        // console.log("values",values);
      }}
      validationSchema={loginValidationScheme}>
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        touched,
        errors,
        isValid,
      }) => (
        <SafeArea>
          {loading ? (
            <View
              style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
              <ActivityIndicator size="large" color="#00ff00" />
            </View>
          ) : (
            <ScrollView contentContainerStyle={{flexGrow: 1}}>
              <View
                style={{
                  justifyContent: 'space-between',
                  flexGrow: 1,
                  margin: '5%',
                }}>
                <View style={styles.containerImg}>
                  <Image style={styles.logoImg} source={logo} />
                </View>
                <View style={styles.containerHeading}>
                  {/* <Heading style={styles.textheading}>Login to continue</Heading> */}
                  <Heading
                    Stylefont={'normal'}
                    Fontweight={'700'}
                    Fontsize={18}
                    txtAlign={'center'}
                    p={10}
                    lh={40}
                    Heading={'Login to continue'}
                  />
                </View>
                <View style={styles.containerInputs}>
                  <Input
                    Onchange={handleChange('email')}
                    Onblur={handleBlur('email')}
                    Value={values.email}
                    Keyboard={'email-address'}
                    outline={COLORS.border_color}
                    mode={'outlined'}
                    label="Email address"
                  />
                  {errors.email && touched.email && (
                    <Text
                      style={{
                        fontSize: 12,
                        color: 'red',
                        marginTop: 5,
                        marginBottom: 5,
                        marginLeft: 15,
                      }}>
                      {errors.email}
                    </Text>
                  )}
                  <Input
                    // right={{name: 'camera',}}
                    iconFunction={() => setPassHide(!passHide)}
                    rightIcon={true}
                    IconName={passHide ? 'eye-outline' : 'eye-off-outline'}
                    Onchange={handleChange('password')}
                    Onblur={handleBlur('password')}
                    Value={values.password}
                    Pass={passHide ? false : true}
                    outline={COLORS.border_color}
                    mode={'outlined'}
                    label="Password"
                    // IconName="check"
                  />
                  {errors.password && touched.password && (
                    <Text
                      style={{
                        fontSize: 12,
                        color: 'red',
                        marginTop: 5,
                        marginBottom: 5,
                        marginLeft: 15,
                      }}>
                      {errors.password}
                    </Text>
                  )}
                </View>

                <View style={styles.containerForget}>
                  <Divider style={styles.dividerForgetFirst} />
                  <View style={styles.containerForgetSecond}>
                    <ButtonComp
                      mode={'text'}
                      // txtRightMargin={0}
                      // txtLeftMargin={0}
                      btnText={'forgot password?'}
                      fontStyle={'bold'}
                      fontSize={14}
                      color={COLORS.dark}
                    />
                  </View>
                  <Divider style={styles.dividerForgetFirst} />
                </View>

                <View
                  style={{
                    justifyContent: 'center',
                    alignContent: 'center',
                    flexDirection: 'row',
                    marginVertical: '4%',
                  }}>
                  <ButtonComp
                    btnwidth={'97%'}
                    btnHeight={56}
                    btnText={'login'}
                    justify={'center'}
                    align={'center'}
                    fontSize={16}
                    radius={15}
                    txtwidth={'100%'}
                    txtColor={COLORS.white}
                    color={isValid ? COLORS.primary : COLORS.border_color}
                    enable={!isValid}
                    // press={() => navigation.navigate('profile')}
                    // press={() => setToken()}
                    press={handleSubmit}
                  />
                </View>

                <View style={styles.containerorLoginWith}>
                  <Divider style={styles.divider} />
                  <View style={styles.containerForgetSecond}>
                    <InteractParagraph
                      pWidth={'100%'}
                      Direction={'row'}
                      pAlign={'center'}
                      txtAlign={'justify'}
                      // ml={'10%'}
                      p={'or login with'}
                    />
                  </View>
                  <Divider style={styles.divider} />
                </View>

                <View style={styles.containerVectorIcons}>
                  <FacebookButton
                    loading={loading}
                    setLoading={setLoading}
                    navigation={navigation}
                  />
                  <GoogleButton
                    navigation={navigation}
                    loading={loading}
                    setLoading={setLoading}
                  />
                  <AppleButton
                    loading={loading}
                    setLoading={setLoading}
                    navigation={navigation}
                  />
                </View>
                <View style={styles.containerlastText}>
                  <InteractParagraph
                    pAlign={'center'}
                    p={'Do not have an account? '}
                  />
                  <ButtonComp
                    mode={'text'}
                    btnHeight={40}
                    txtRightMargin={0}
                    txtLeftMargin={0}
                    btnText={'Sign Up'}
                    align={'center'}
                    fontStyle={'bold'}
                    fontSize={14}
                    press={() => navigation.navigate('signup')}
                    // press={handleSubmit}
                  />
                </View>
              </View>
            </ScrollView>
          )}
        </SafeArea>
      )}
    </Formik>
  );
}