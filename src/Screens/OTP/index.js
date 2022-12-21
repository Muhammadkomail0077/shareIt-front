import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Pressable,
  Keyboard,
} from 'react-native';
import Input from 'src/Components/ReusableComponent/PhoneInput';
import styles from './style';
import auth from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/native';
import Heading from 'src/Components/ReusableComponent/Heading';
import ButtonComp from 'src/Components/ReusableComponent/Button';
import COLORS from '../../Assets/Style/Color';
import SafeArea from 'src/Components/ReusableComponent/Safearea';
import PhoneInput from '../../Components/ReusableComponent/PhoneInput';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import RNOtpVerify from 'react-native-otp-verify';
import InteractParagraph from 'src/Components/ReusableComponent/Paragraph';

export default function Otp({
  route: {
    params: {formattedValue},
  },
}) {
  const [confirm, setConfirm] = useState(null);
  const [error, setError] = useState('');
  const [otp, setOtp] = useState();
  const [otpCheck, setOtpcheck] = useState('');
  const [checking, setChecking] = useState();
  const navigation = useNavigation();
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  const signInWithPhoneNumber = async () => {
    try {
      const confirmation = await auth().signInWithPhoneNumber(formattedValue);
      setConfirm(confirmation);
    } catch (error) {
      // alert(error);

      if (error.code == 'auth/too-many-requests') {
        alert(
          ' We have blocked all requests from this number due to unusual activity. Try again later',
        );
      }
      if (error.code == 'auth/session-expired') {
        alert(' You have alerady account of this number');
        navigation.navigate('signup');
      }
    }
  };

  const [counter, setCounter] = useState(59);

  function onAuthStateChanged(user) {
    console.log('user', user);
  }

  // useEffect(() => {
  //   const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
  //   return subscriber; // unsubscribe on unmount
  // }, [checking]);

  React.useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
  }, [counter]);

  useEffect(() => {
    signInWithPhoneNumber();
  }, []);

  useEffect(() => {
    RNOtpVerify.getOtp()
      .then(RNOtpVerify.addListener(otpHandler))
      .catch(p => alert(p));
  }, []);

  const otpHandler = async message => {
    const checkotp = await /(\d{6})/g.exec(message)[1];
    setOtp(checkotp);
    setOtpcheck(checkotp);
    RNOtpVerify.removeListener();
    Keyboard.dismiss();
  };

  // useEffect(() => {
  //   checkSome();
  // }, [otpCheck]);

  // const checkSome = () => {
  //   try {
  //     if (otpCheck.length === 6) {
  //       setChecking('8282828');
  //       console.log('checking', checking);
  //       navigation.navigate('profile');
  //     } else {
  //       console.log('error');
  //     }
  //   } catch (error) {
  //     alert(error);
  //   }
  // };
  // const checkSome = async () => {
  //   const newCode = otp;
  //   try {
  //     if (newCode.length === 6) {
  //       console.log('newCode', newCode);
  //       // .then(RNOtpVerify.addListener(otpHandler))
  //       // .catch(p => alert(p));
  //       await confirm
  //         .confirm(newCode)
  //         .then(navigation.navigate('profile'))
  //         .catch(p => alert(p));
  //       console.log('useEffect Response', response);
  //       if (response) {
  //         console.log('inside response');
  //         navigation.navigate('profile');
  //       }
  //     }
  //   } catch (error) {
  //     if (error == 'auth/session-expired') {
  //       alert('The verification code is expired');
  //       navigation.navigate('signup');
  //     }
  //     if (error == 'auth/invalid-verification-code') {
  //       setError('Incorrect pin');
  //     }
  //     if (error == 'auth/too-many-requests') {
  //       alert('Incorrect pin');
  //       navigation.navigate('signup');
  //     }
  //   }
  //   // }
  //   return;
  // };

  const confirmCode = async val => {
    let newCode = val;
    !otp ? setOtp(val) : null;
    try {
      const response = await confirm.confirm(otp);
      console.log(response);
      if (response) {
        navigation.navigate('profile');
      }
    } catch (error) {
      alert(console.log(error));
      if (error == 'auth/session-expired') {
        alert('The verification code is expired');
        navigation.navigate('signup');
      }
      if (error == 'auth/invalid-verification-code') {
        setError('Incorrect pin');
      }
      if (error == 'auth/too-many-requests') {
        alert('Incorrect pin');
        navigation.navigate('signup');
      }
    }
  };

  return (
    <SafeArea>
      <View
        style={{margin: '8%', justifyContent: 'space-between', flexGrow: 1}}>
        <View>
          <View
            style={{alignItems: 'flex-start', justifyContent: 'space-evenly'}}>
            <ButtonComp
              mode={'outlined'}
              justify={'center'}
              align={'center'}
              btnHeight={65}
              icon={'chevron-back'}
              radius={15}
              topMargin={10}
              Borderwidth={2}
              press={() => navigation.goBack()}
            />
          </View>
          <View style={{alignItems: 'center'}}>
            <Heading
              Stylefont={'normal'}
              Fontweight={'700'}
              Fontsize={34}
              mt={'10%'}
              lh={40}
              Heading={`00: ${counter < 10 ? '0' + counter : counter}`}
            />
            <View style={{width: '70%'}}>
              <Heading
                Stylefont={'normal'}
                Fontsize={16}
                lh={30}
                txtAlign={'center'}
                Heading={'Type the verification code we’ve sent you'}
              />
            </View>
          </View>
          <OTPInputView
            style={{width: '100%', height: 100}}
            pinCount={6}
            code={otp}
            codeInputFieldStyle={{color: '#000'}}
            autoFocusOnLoad={false}
            keyboardType={'number-pad'}
            keyboardAppearance={'default'}
            editable
            onCodeFilled={code => {
              confirmCode(code);
            }}
          />
        </View>
        <View style={{marginTop: 20}}>
          <View
            style={{
              marginTop: 30,
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'center',
              width: '100%',
            }}>
            <Pressable
              onPress={() => {
                signInWithPhoneNumber;
                setCounter(59);
              }}>
              <InteractParagraph p={`Didn't get the code?`} />
            </Pressable>
            <Text style={{color: 'red'}}>{error}</Text>
          </View>
          <View style={{marginTop: 20}}>
            <ButtonComp
              btnwidth={'100%'}
              btnHeight={56}
              btnText={'Send'}
              txtColor={COLORS.white}
              justify={'center'}
              align={'center'}
              fontSize={16}
              radius={15}
              fontStyle={'700'}
              txtwidth={'100%'}
              press={confirmCode}
            />
          </View>
        </View>
      </View>
    </SafeArea>
  );
}
