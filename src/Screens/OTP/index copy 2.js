import React, {useState, useEffect} from 'react';
import {View, Text, Pressable, Keyboard} from 'react-native';
import auth from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/native';
import Heading from 'src/Components/ReusableComponent/Heading';
import ButtonComp from 'src/Components/ReusableComponent/Button';
import COLORS from '../../Assets/Style/Color';
import SafeArea from 'src/Components/ReusableComponent/Safearea';
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
  const navigation = useNavigation();
  const [count, setCount] = useState(0);

  const signInWithPhoneNumber = async () => {
    try {
      const confirmation = await auth().signInWithPhoneNumber(formattedValue);
      setConfirm(confirmation);
    } catch (error) {
      alert(error);
      if (error.code == 'auth/too-many-requests') {
        alert(
          ' We have blocked all requests from this number due to unusual activity. Try again later',
        );
        navigation.navigate('signup');
      }
    }
  };

  const [counter, setCounter] = useState(59);

  React.useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
  }, [counter]);

  useEffect(() => {
    signInWithPhoneNumber();
  }, [signInWithPhoneNumber]);

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

  useEffect(() => {
    checkSome();
  }, [otpCheck]);

  const checkSome = async () => {
    // const newCode = otp;
    try {
      if (newCode.length === 6) {
        console.log('confirmation', confirm.confirm);
        console.log('Inside length checkup', newCode);
        const response = await confirm.confirm(newCode);
        console.log('response checkup', response);
        if (response) {
          navigation.navigate('profile');
        } else {
          alert('You are already registered');
        }
      }
    } catch (error) {
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
    // }
    return;
  };

  const confirmCode = async val => {
    let newCode = val;
    !otp ? setOtp(val) : null;

    try {
      const response = await confirm.confirm(newCode);
      if (response) {
        navigation.navigate('profile');
      }
    } catch (error) {
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

  const incrementCount = () => {
    // Update state with incremented value
    console.log(count);

    if (count < 3) {
      setCount(count + 1);
      console.log(count);
    } else {
      alert('You exceed today`s quota limit');
      navigation.navigate('signup');
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
            {!counter ? (
              <Pressable
                onPress={() => {
                  // signInWithPhoneNumber;
                  // incrementCount();
                  setCounter(59);
                }}>
                <InteractParagraph p={`Didn't get the code?`} />
              </Pressable>
            ) : (
              <></>
            )}
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
              enable={otp ? false : true}
              press={confirmCode}
            />
          </View>
        </View>
      </View>
    </SafeArea>
  );
}
