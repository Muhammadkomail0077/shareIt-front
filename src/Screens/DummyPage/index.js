import React, {useEffect, useState} from 'react';
import {View, Image, ScrollView, Text} from 'react-native';
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

let loginValidationScheme = yup.object().shape({
  email: yup
    .string()
    .email('Please enter valid email')
    .required('Email address is required '),
  password: yup
    .string()
    .min(8, ({min}) => `Password must be at least ${min} characters`)
    .required('Password is required ')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character',
    ),
});

export default function DummyPage({navigation}) {
  const [name, setName] = useState('');

  useEffect(() => {
    // dispatch(removeUserDataFromAsyncStorage())
  }, []);

  const loginUser = () => {
    let lowerCaseUserName = name.toLowerCase(); //To convert Lower Case
    console.log(lowerCaseUserName);
    if (lowerCaseUserName == 'komail') {
      navigation.navigate('messages', {
        userName: lowerCaseUserName,
        uid: 'kom1122',
      });
    } else if (lowerCaseUserName == 'muhammad aamir') {
      navigation.navigate('messages', {
        userName: lowerCaseUserName,
        uid: 'Ma2922',
      });
    } else {
      alert('User Not Found');
    }
    setName('');
  };

  return (
    <SafeArea>
      <View
        style={{
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
            Heading={'Login to get userName'}
          />
        </View>
        <View>
          <Input
            Value={name}
            // Keyboard={''}
            outline={COLORS.border_color}
            mode={'outlined'}
            label="Name"
            Onchange={name => setName(name)}
          />
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
            color={!!name ? COLORS.primary : COLORS.border_color}
            // enable={!!name}
            // press={() => navigation.navigate('profile')}
            press={() => loginUser()}
          />
        </View>
      </View>
    </SafeArea>
  );
}
