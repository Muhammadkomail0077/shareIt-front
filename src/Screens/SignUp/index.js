import React, {useState} from 'react';
import {View, Image, Pressable, ScrollView, Platform} from 'react-native';
import logo from 'src/Assets/Images/logo.png';
import {styles} from './style';
import Icon from 'react-native-vector-icons/AntDesign';
import {Divider} from 'react-native-paper';
import {ActivityIndicator} from 'react-native-paper';
import googleIcon from 'src/Assets/Images/icons/icons.png';
import ButtonComp from 'src/Components/ReusableComponent/Button';
import SafeArea from 'src/Components/ReusableComponent/Safearea';
import Heading from 'src/Components/ReusableComponent/Heading';
import COLORS from 'src/Assets/Style/Color';
import InteractParagraph from 'src/Components/ReusableComponent/Paragraph';
import GoogleButton from '../../Components/ReusableComponent/GoogleButton';
import FacebookButton from '../../Components/ReusableComponent/FacebookButton';
import AppleButton from '../../Components/ReusableComponent/AppleButton';
import auth from '@react-native-firebase/auth';

export default function SignUp({navigation}) {
  const [loading, setLoading] = useState(false);
  const createAccount = values => {
    try {
      if (userData.email && userData.password != '') {
        auth().createUserWithEmailAndPassword(values.email, values.password);
      } else {
        alert('Please add Email and Password');
      }
    } catch (error) {
      console.log('Error:', error);
    }
  };
  return (
    <SafeArea>
      {/* <ScrollView contentContainerStyle={{flexGrow:1}}> */}

      {loading ? (
        <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
          <ActivityIndicator size="large" color="#00ff00" />
        </View>
      ) : (
        <View style={{justifyContent: 'space-between', flex: 1}}>
          <View
            style={{justifyContent: 'space-around', flexGrow: 1, margin: '5%'}}>
            <View style={styles.containerImg}>
              <Image style={styles.logoImg} source={logo} />
            </View>
            <View style={styles.containerHeading}>
              <Heading
                Stylefont={'normal'}
                Fontweight={'700'}
                Fontsize={18}
                txtAlign={'center'}
                // ml={'6%'}
                p={10}
                lh={40}
                Heading={'Sign up to continue'}
              />
            </View>

            <View style={styles.containerLoginButton}>
              <ButtonComp
                mode="contained"
                btnwidth={'90%'}
                btnHeight={56}
                btnText={'Continue with email'}
                justify={'center'}
                align={'center'}
                txtwidth={'100%'}
                fontSize={16}
                radius={15}
                txtColor={COLORS.white}
                press={() => navigation.navigate('email')}
              />
              {/* <ButtonComp
                btnwidth={'90%'}
                leftMargin={5}
                btnHeight={56}
                color={'#EDF9E5'}
                topMargin={20}
                btnText={'Use Phone Number'}
                txtColor={COLORS.primary}
                justify={'center'}
                align={'center'}
                fontSize={16}
                radius={15}
                fontStyle={'700'}
                txtwidth={'100%'}
                press={() => navigation.navigate('phone')}
              /> */}
            </View>
          </View>

          <View
            style={{justifyContent: 'space-evenly', flexGrow: 1, margin: '5%'}}>
            <View style={styles.containerorLoginWith}>
              <Divider style={styles.divider} />
              <View style={styles.containerForgetSecond}>
                {/* <Paragraph> or login with </Paragraph> */}
                <InteractParagraph p={'or login with'} />
              </View>
              <Divider style={styles.divider} />
            </View>

            <View style={styles.containerVectorIcons}>
              <FacebookButton
                navigation={navigation}
                loading={loading}
                setLoading={setLoading}
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
          </View>

          <View style={styles.containerlastText}>
            <InteractParagraph
              pAlign={'center'}
              p={'Already have an account?'}
            />
            <View style={styles.containerlastTextSecond}>
              <ButtonComp
                mode={'text'}
                btnHeight={40}
                txtRightMargin={0}
                txtLeftMargin={0}
                btnText={' Sign In'}
                align={'center'}
                fontStyle={'bold'}
                fontSize={14}
                press={() => navigation.navigate('login')}
              />
            </View>
          </View>

          <View style={styles.containerlastTwoLink}>
            <ButtonComp
              mode={'text'}
              btnHeight={40}
              txtRightMargin={0}
              txtLeftMargin={0}
              btnText={'Terms of use'}
              align={'center'}
              fontStyle={'bold'}
              fontSize={14}
            />
            <ButtonComp
              mode={'text'}
              btnHeight={40}
              txtRightMargin={0}
              txtLeftMargin={0}
              btnText={'Privacy Policy'}
              align={'center'}
              fontStyle={'bold'}
              fontSize={14}
            />
          </View>
          {/* </ScrollView> */}
        </View>
      )}
    </SafeArea>
  );
}
