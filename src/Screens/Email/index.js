import React, {useState} from 'react';
import {View, TextInput, Text, Alert} from 'react-native';
import {styles} from './style';
import COLORS from 'src/Assets/Style/Color';
import ButtonComp from 'src/Components/ReusableComponent/Button';
import Heading from 'src/Components/ReusableComponent/Heading';
import InteractParagraph from 'src/Components/ReusableComponent/Paragraph';
import SafeArea from 'src/Components/ReusableComponent/Safearea';
import Input from 'src/Components/ReusableComponent/input';
import {ScrollView} from 'react-native-gesture-handler';
import * as yup from 'yup';
import {Formik} from 'formik';
import {postRequest, postRequestWithFormData} from '../../App/fetch';
import {showError} from '../../utils/PopupFunctions';
import {BASE_URL} from '../../App/api';
import {ActivityIndicator} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

let emailValidationScheme = yup.object().shape({
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
export default function Email({navigation}) {
  const [loader, setLoader] = useState(false);

  const signUp = async values => {
    setLoader(true);
    console.log('Value:', values);
    let data = {
      userEmail: values.email.toLowerCase(),
      userPassword: values.password,
    };
    console.log('data:', data);
    // var data = new FormData();
    // let email = values.email;
    // let emailInLowerCase = email.toLowerCase();
    // data.append('email', `${emailInLowerCase}`);
    // data.append('password', `${values.password}`);
    // data.append('usertype', `email`);
    // data.append('roletype', `public`);
    // data.append('username', `${values.userName ? values.userName : 'User'}`);
    // data.append('phone', ``);
    // data.append('pic', {
    //   uri: '',
    //   type: 'image/jpeg',
    //   name: 'photo.jpg',
    // });
    try {
      // const pushData = await fetch(`${BASE_URL}/signup`, requestOptions);
      // await pushData
      //   .json()
      postRequest(`${BASE_URL}/registeruser`, data)
        .then(async res => {
          // setLoader(false);
          console.log('res', res);
          if (res.success === true) {
            setLoader(false);
            // navigation.navigate('googleSignIn');
            // alert('Account Created successfully');
            Alert.alert('Success', 'Account Created Successfully', [
              {
                text: 'Sign In Now',
                // onPress: () => navigation.goBack(),
                onPress: () => navigation.navigate('login'),
                style: 'cancel',
              },
            ]);
          } else if (res.success === false) {
            setLoader(false);
            showError(`${res.message}`);
            console.log(`SuccessFalse:${res.message}`)
          } else{
            console.log('Success true&false not matching')
          }
        })
        .catch(err => {
          showError('Something wrong please try again');
          console.log('SignupError:', err);
          setLoader(false);
        });
    } catch (err) {
      setLoader(false);
      showMessage({
        message: 'Something Went Wrong',
        type: 'danger',
        color: 'white',
      });
      console.log('🚀 ~ file: index.js ~ line 91 ~ Email ~ err', err);
    }
  };

  return (
    <>
      {loader ? (
        <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
          <ActivityIndicator size="large" color="#00ff00" />
        </View>
      ) : (
        <Formik
          initialValues={{email: '', password: ''}}
          validateOnMount={true}
          onSubmit={values => signUp(values)}
          validationSchema={emailValidationScheme}>
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
              <ScrollView contentContainerStyle={{flexGrow: 1}}>
                <View
                  style={{
                    margin: '4%',
                    justifyContent: 'space-between',
                    flexGrow: 1,
                  }}>
                  <View>
                    <ButtonComp
                      mode={'outlined'}
                      justify={'center'}
                      align={'flex-start'}
                      btnHeight={65}
                      icon={'chevron-back'}
                      radius={15}
                      Borderwidth={2}
                      press={() => navigation.goBack()}
                    />
                  </View>

                  <View>
                    <Heading
                      Stylefont={'normal'}
                      Fontweight={'700'}
                      Fontsize={34}
                      mt={'10%'}
                      // ml={'10%'}
                      // p={10}
                      lh={40}
                      Heading={'My email'}
                    />
                  </View>

                  <View>
                    {/* <Text style={styles.ContainerMyEmailDescription}>
                      
                  </Text> */}
                    <InteractParagraph
                      pWidth={'100%'}
                      Direction={'row'}
                      pAlign={'center'}
                      txtAlign={'justify'}
                      // lh={30}
                      p={
                        'Please enter your valid email address. We will send you a 4-digit code to verify your account.'
                      }
                    />
                  </View>
                  <View style={{justifyContent: 'space-between', flexGrow: 1}}>
                    <View style={{marginTop: 30}}>
                      <Input
                        Onchange={handleChange('email')}
                        Onblur={handleBlur('email')}
                        Value={values.email}
                        Keyboard={'email-address'}
                        outline={'#E8E6EA'}
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
                        Onchange={handleChange('password')}
                        Onblur={handleBlur('password')}
                        Value={values.password}
                        Pass={true}
                        outline={'#E8E6EA'}
                        mode={'outlined'}
                        label="Password"
                        // placeholder={'eg:Abc@'}
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

                    <View>
                      <ButtonComp
                        btnwidth={'100%'}
                        btnHeight={56}
                        btnText={'Sign up'}
                        justify={'center'}
                        align={'center'}
                        fontSize={16}
                        radius={15}
                        color={isValid ? COLORS.primary : COLORS.border_color}
                        enable={!isValid}
                        txtColor={COLORS.white}
                        // press={() => navigation.navigate('verifyEmail')}
                        press={handleSubmit}
                      />
                    </View>
                  </View>
                </View>
              </ScrollView>
            </SafeArea>
          )}
        </Formik>
      )}
    </>
  );
}
