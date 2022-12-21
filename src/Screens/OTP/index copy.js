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
import RNOtpVerify from 'react-native-otp-verify';
import InteractParagraph from 'src/Components/ReusableComponent/Paragraph';
import OTPInputView from '@twotalltotems/react-native-otp-input';

export default function Otp({
  route: {
    params: {formattedValue},
  },
}) {
  const [pin, setpin] = useState({
    pin1: '',
    pin2: '',
    pin3: '',
    pin4: '',
    pin5: '',
    pin6: '',
  });
  const textInputRef = useRef(0);
  const secondTextInput = useRef();
  const thirdTextInput = useRef();
  const fourthTextInput = useRef();
  const fifthTextInput = useRef();
  const sixthTextInput = useRef();
  const [code, setCode] = useState('');
  const [confirm, setConfirm] = useState(null);
  const [error, setError] = useState('');
  const [otp, setOtp] = useState('');
  const navigation = useNavigation();

  const signInWithPhoneNumber = async () => {
    // console.log(formattedValue);
    try {
      const confirmation = await auth().signInWithPhoneNumber(formattedValue);
      setConfirm(confirmation);
    } catch (error) {
      // console.log('signin Error:', error);
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
  }, [signInWithPhoneNumber()]);

  useEffect(() => {
    checkSome();
    console.log(formattedValue);
  }, [otp]);

  const checkSome = async () => {
    if (otp.length == 6) {
      console.log('check');
      const newCode = otp;
      console.log('cheeeeeeekh', newCode);
      try {
        const response = await confirm.confirm(newCode);
        console.log('value response', response);
        if (response) {
          navigation.navigate('profile');
        }
      } catch (error) {
        // console.log(otp);
        console.log('Error of confirmation: ', error.code);
        if (error.code == 'auth/session-expired') {
          alert('The verification code is expired');
          navigation.navigate('signin');
        }
        if (error.code == 'auth/invalid-verification-code') {
          setError('Incorrect pin');
        }
        if (error.code == 'auth/too-many-requests') {
          // alert('Incorrect pin')
          // navigation.navigate('googleSignIn');
        }
      }
    }
    return;
  };

  // // 'Your OTP is 969025. udS7yPJpbnZ'

  useEffect(() => {
    // RNOtpVerify.getHash().then(console.log).catch(console.log);

    RNOtpVerify.getOtp()
      .then(RNOtpVerify.addListener(otpHandler))
      .catch(p => alert(p));

    return () => RNOtpVerify.removeListener();
  }, []);

  const otpHandler = message => {
    // const msgArr = message.split('\n');
    // console.log(msgArr);
    // if (msgArr[0]) {
    const checkotp = /(\d{6})/g.exec(message)[1];
    console.log(checkotp, 'checkotp index');
    setOtp(checkotp);
    RNOtpVerify.removeListener();
    Keyboard.dismiss();
    // }
  };

  const [state, setState] = useState();

  const Estate = {
    code: '',
  };

  const check = val => {
    console.log(val);
  };

  const confirmCode = async code => {
    console.log('heyyeyeyey', code);
    let newCode = code;
    !otp ? setOtp(code) : null;

    // console.log(otp, 'otp check');
    // console.log('value response newcode', newCode);

    try {
      const response = await confirm.confirm(newCode);
      // console.log('value response', response);
      if (response) {
        navigation.navigate('profile');
      }
    } catch (error) {
      // console.log(otp);
      console.log('Error of confirmation: ', error);
      if (error == 'auth/session-expired') {
        alert('The verification code is expired');
        navigation.navigate('signIn');
      }
      if (error == 'auth/invalid-verification-code') {
        setError('Incorrect pin');
      }
      if (error == 'auth/too-many-requests') {
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
              // ml={'10%'}
              // p={10}
              lh={40}
              Heading={`00: ${counter < 10 ? '0' + counter : counter}`}
            />
            <View style={{width: '70%'}}>
              <Heading
                Stylefont={'normal'}
                // Fontweight={'700'}
                Fontsize={16}
                lh={30}
                txtAlign={'center'}
                Heading={'Type the verification code we’ve sent you'}
              />
            </View>
          </View>
          {/* <OTP
            codeCount={6}
            containerStyle={{marginTop: 50}}
            otpStyles={{backgroundColor: '#eee'}}
            // onTyping={code =>}
            onFinish={code => {
              console.log(`log ${code}`);
            }}
          /> */}
          <OTPInputView
            style={{width: '100%', height: 100}}
            pinCount={6}
            code={otp}
            codeInputFieldStyle={{color: '#000'}}
            // clearInputs
            // code={Estate.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
            // onCodeChanged={val => setOtp(val)}
            // onCodeChanged={Keyboard.}
            //+92 3483433803
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
            {/* <TouchableOpacity style={styles.button} onPress={confirmCode}>
            <Text style={styles.buttonText}>Confirm</Text>
          </TouchableOpacity> */}
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
