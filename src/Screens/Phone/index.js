import React, {useState, useRef} from 'react';
import {View, TouchableOpacity, Text, Pressable} from 'react-native';
import PhoneInput from 'react-native-phone-number-input';
import styles from './style';
import auth from '@react-native-firebase/auth';
import Ionicons from 'react-native-vector-icons/Ionicons';
import COLORS from '../../Assets/Style/Color';
import {useNavigation} from '@react-navigation/native';
import ButtonComp from 'src/Components/ReusableComponent/Button';
import Heading from 'src/Components/ReusableComponent/Heading';
import InteractParagraph from 'src/Components/ReusableComponent/Paragraph';
import SafeArea from 'src/Components/ReusableComponent/Safearea';
import Input from 'src/Components/ReusableComponent/input';
import {ScrollView} from 'react-native-gesture-handler';
import {useSelector} from 'react-redux';

const Phone = () => {
  const [value, setValue] = useState('');
  const [countryCode, setCountryCode] = useState('');
  const [formattedValue, setFormattedValue] = useState('');
  const [valid, setValid] = useState(false);
  const [confirm, setConfirm] = useState(null);
  const phoneInput = useRef(PhoneInput);
  const navigation = useNavigation();

  const GetOTP = () => {
    if (formattedValue && formattedValue.length > 9) {
      navigation.navigate('otp', {formattedValue});
    } else {
      alert('Please Enter correct  phone number');
    }
  };
  const reducerData = useSelector(state => state);

  return (
    <SafeArea>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View
          style={{
            margin: '8%',
            justifyContent: 'space-between',
            flex: 1,
            // borderWidth: 2,
          }}>
          <View>
            <View style={{alignItems: 'flex-start'}}>
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
            <View>
              <Heading
                Stylefont={'normal'}
                Fontweight={'700'}
                Fontsize={34}
                mt={'10%'}
                // ml={'10%'}
                // p={10}
                lh={40}
                Heading={'My mobile'}
              />
              <InteractParagraph
                pWidth={'100%'}
                Direction={'row'}
                pAlign={'center'}
                txtAlign={'justify'}
                fs={16}
                // ml={'2.2%'}
                p={
                  'Please enter your valid phone number. We will send you a 6-digit code to verify your account. '
                }
              />
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flex: 1,
                  marginTop: 50,
                }}>
                <PhoneInput
                  ref={phoneInput}
                  defaultValue={value}
                  defaultCode="US"
                  layout="first"
                  onChangeText={text => {
                    setValue(text);
                  }}
                  onChangeFormattedText={text => {
                    setFormattedValue(text);
                    setCountryCode(phoneInput.current?.getCountryCode() || '');
                  }}
                  countryPickerProps={{withAlphaFilter: true}}
                  withDarkTheme={false}
                  withShadow
                  autoFocus
                  flagButtonStyle={{
                    backgroundColor: reducerData?.isDark?.isdark
                      ? '#292929'
                      : COLORS.bgcolor,
                    // borderColor: '#fff',
                    shadowColor: '#000',
                    elevation: 20,
                    // borderWidth: 0.3,
                  }}
                  containerStyle={{
                    height: 60,
                    borderRadius: 15,
                  }}
                  textContainerStyle={{
                    borderTopRightRadius: 15,
                    borderBottomRightRadius: 15,
                    backgroundColor: reducerData?.isDark?.isdark
                      ? '#292929'
                      : COLORS.bgcolor,
                  }}
                  textInputStyle={{
                    height: 60,
                    top: 1,
                    color: reducerData?.isDark?.isdark
                      ? COLORS.white
                      : COLORS.dark,
                  }}
                  codeTextStyle={{
                    color: reducerData?.isDark?.isdark
                      ? COLORS.white
                      : COLORS.dark,
                    shadowColor: '#000',
                    elevation: 20,
                  }}
                  placeholder={''}
                  disableArrowIcon
                  // renderDropdownImage={''}
                />
              </View>
            </View>
          </View>

          <View>
            <ButtonComp
              btnwidth={'96%'}
              btnHeight={56}
              btnText={'Send'}
              txtColor={COLORS.white}
              justify={'center'}
              align={'center'}
              fontSize={16}
              radius={15}
              fontStyle={'700'}
              txtwidth={'100%'}
              press={GetOTP}
            />
          </View>
          {/* <TouchableOpacity style={styles.button} onPress={GetOTP}>
              <Text style={styles.buttonText}>Send OTP</Text>
            </TouchableOpacity> */}
        </View>
      </ScrollView>
    </SafeArea>
  );
};

export default Phone;
