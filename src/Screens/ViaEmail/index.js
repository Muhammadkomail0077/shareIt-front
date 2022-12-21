import React, {useState} from 'react';
import {View, TextInput, Text, Share, Alert} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import COLORS from 'src/Assets/Style/Color';
import ButtonComp from 'src/Components/ReusableComponent/Button';
import Heading from 'src/Components/ReusableComponent/Heading';
import Input from 'src/Components/ReusableComponent/input';
import SafeArea from 'src/Components/ReusableComponent/Safearea';
import {styles} from './style';
import * as yup from 'yup';
import {Formik} from 'formik';
import dynamicLinks from '@react-native-firebase/dynamic-links';
import {useSelector} from 'react-redux';
import {postRequest} from '../../App/fetch';
import {BASE_URL} from '../../App/api';
import {showError, showSuccess} from '../../utils/PopupFunctions';
import {ActivityIndicator} from 'react-native-paper';
import InteractParagraph from '../../Components/ReusableComponent/Paragraph';

let EmailValidationScheme = yup.object().shape({
  email: yup
    .string()
    .email('Please enter valid email')
    .required('Email address is required '),
});
export default function ViaEmail({navigation}) {
  const [loading, setLoading] = useState(false);
  const {AuthReducer} = useSelector(state => state);
  // console.log('AuthReducer: Via Email', AuthReducer?.userData?.userId);

  const generateLink = async email => {
    try {
      let userId = AuthReducer?.userData?.userId;
      var link = await dynamicLinks().buildShortLink(
        {
          link: `https://interactchat.page.link/PZXe?id=${userId}&email=${email}`,
          domainUriPrefix: 'https://interactchat.page.link',
          android: {
            packageName: 'com.interact',
            minimumVersion: '18',
          },
          ios: {
            appStoreId: '123456789',
            bundleId: 'com.interactchat.app',
            minimumVersion: '18',
          },
        },
        dynamicLinks.ShortLinkType.DEFAULT,
      );
      return link;
    } catch (error) {
      console.log('error raised', error);
    }
  };

  const inviteSpouse = async email => {
    try {
      console.log('email in lower case', email);
      setLoading(true);
      const getLink = await generateLink(email);
      console.log('Generated Link:', getLink);
      postRequest(`${BASE_URL}/sendMail`, {
        link: getLink,
        email: email,
      }).then(res => {
        if (res.success) {
          setLoading(false);
          Alert.alert('Partner Invite', 'Invitation sent successfully', [
            {
              text: 'Cancel',
              onPress: () => console.log('Cancel Pressed'),
              style: 'cancel',
            },
            {text: 'OK', onPress: () => console.log('OK Pressed')},
          ]);
          // showSuccess(res.message);
          console.log('showSuccess:', res.message);
        } else if (!res.success) {
          setLoading(false);
          // console.log(first)
          showError(res.message);
          console.log('showError', res.message);
        }
      });
    } catch (error) {
      alert(error.message);
    }
  };
  const onShare = async email => {
    try {
      const getLink = await generateLink(email);
      console.log('generated link:', getLink);
      const result = await Share.share({
        message: 'Invitation sent successfully',
        url: getLink,
        title: 'Spouse Invite',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
          console.log('Share.sharedAction', result.activityType);
        } else {
          console.log('Share.sharedAction! Else');
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        console.log('result.action === Share.sharedAction else if');
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      <SafeArea>
        {loading ? (
          <ActivityIndicator size="large" color="#00ff00" />
        ) : (
          <Formik
            initialValues={{email: ''}}
            validateOnMount={true}
            onSubmit={values => inviteSpouse(values.email.toLocaleLowerCase())}
            validationSchema={EmailValidationScheme}>
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
                      justifyContent: 'space-evenly',
                      flexGrow: 1,
                      margin: '4%',
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
                        topMargin={5}
                        press={() => navigation.goBack()}
                      />
                    </View>
                    <View>
                      <Heading
                        Stylefont={'normal'}
                        Fontweight={'700'}
                        Fontsize={34}
                        mt={'10%'}
                        // p={10}
                        lh={40}
                        Heading={'Via Email'}
                      />
                      <InteractParagraph
                        fw={'300'}
                        ml={5}
                        p={'Please enter your Partner Interact Email'}
                      />
                    </View>
                    <View style={{justifyContent: 'space-between', flex: 1}}>
                      <View style={{marginTop: 20}}>
                        <Input
                          Onchange={handleChange('email')}
                          Onblur={handleBlur('email')}
                          Value={values.email}
                          Keyboard={'email-address'}
                          outline={'#E8E6EA'}
                          mode={'outlined'}
                          label={'Email address'}
                        />
                        {errors.email && touched.email && (
                          <Text
                            style={{
                              fontSize: 12,
                              color: 'red',
                              marginTop: 5,
                              marginBottom: 5,
                              marginLeft: 5,
                            }}>
                            {errors.email}
                          </Text>
                        )}
                      </View>

                      <View>
                        <ButtonComp
                          btnwidth={'100%'}
                          btnHeight={56}
                          btnText={'Send Invite'}
                          justify={'center'}
                          align={'center'}
                          txtwidth={'100%'}
                          fontSize={16}
                          radius={15}
                          color={isValid ? COLORS.primary : COLORS.border_color}
                          enable={!isValid}
                          txtColor={COLORS.white}
                          press={handleSubmit}
                          // press={onShare}
                        />
                      </View>
                    </View>
                  </View>
                </ScrollView>
              </SafeArea>
            )}
          </Formik>
        )}
      </SafeArea>
    </>
  );
}
