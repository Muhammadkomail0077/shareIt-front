import React, {useEffect, useRef, useState} from 'react';
import {
  Dimensions,
  Pressable,
  SafeAreaView,
  ScrollView,
  View,
} from 'react-native';
import {Headline} from 'react-native-paper';
import COLORS from 'src/Assets/Style/Color';
import ButtonComp from 'src/Components/ReusableComponent/Button';
import Input from 'src/Components/ReusableComponent/input';
import {styles} from './style';
import SafeArea from 'src/Components/ReusableComponent/Safearea';
import Heading from 'src/Components/ReusableComponent/Heading';
import ThemeSwitch from 'src/Components/SwitchButton';
import BasicBtn from 'src/Components/ReusableComponent/ButtonBasic';
import BottomSheet from 'src/Components/ReusableComponent/BottomSheet';
import Calendars from 'src/Components/ReusableComponent/Calendar';
import {useSelector} from 'react-redux';
import InteractAvatar from '../../Components/ReusableComponent/Avatar';
import Icon from 'react-native-vector-icons/Ionicons';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import Icons from 'react-native-vector-icons/MaterialIcons';
import InteractParagraph from '../../Components/ReusableComponent/Paragraph';

function ProfileDetails({navigation}) {
  const refRBSheet = useRef();
  const reducerData = useSelector(state => state);
  const [firstName, setFirstName] = useState();
  const [lastName, setlastName] = useState();
  const refRBSheet1 = useRef();

  // console.log(reducerData?.UserData?.userdata);

  useEffect(() => {
    setFirstName(
      reducerData?.UserData?.userdata?.additionalUserInfo?.profile
        ?.first_name == undefined
        ? reducerData?.UserData?.userdata?.additionalUserInfo?.profile
            ?.given_name
        : reducerData?.UserData?.userdata?.additionalUserInfo?.profile
            ?.first_name,
    );
    setlastName(
      reducerData?.UserData?.userdata?.additionalUserInfo?.profile?.last_name ==
        undefined
        ? reducerData?.UserData?.userdata?.additionalUserInfo?.profile
            ?.family_name
        : reducerData?.UserData?.userdata?.additionalUserInfo?.profile
            ?.last_name,
    );
  }, [reducerData]);

  // const firstName =
  // reducerData?.isDark?.userdata?.additionalUserInfo?.profile?.first_name;
  // const lastName =
  //   reducerData?.isDark?.userdata?.additionalUserInfo?.profile?.last_name;

  // console.log(
  //   'hey',
  //   reducerData?.UserData?.userdata?.additionalUserInfo?.profile?.family_name,
  // );
  const [banner, setBanner] = useState();

  // const openGallery = () => {
  //   refRBSheet1.current.close();
  //   let options = {
  //     storageOptions: {
  //       path: 'images',
  //     },
  //     // selectionLimit: 2,
  //     skipBackup: true,
  //     saveToPhotos: true,
  //   };
  //   launchImageLibrary(options, response => {
  //     if (response.didCancel) {
  //       console.log('User cancelled image picker');
  //     } else if (response.error) {
  //       console.log('ImagePicker Error', response.error);
  //     } else if (response.customButton) {
  //       console.log('User Tapped custom button', response.customButton);
  //     } else {
  //       // const source = response?.assets[0]?.uri;
  //       setBanner(response?.assets[0]?.uri);
  //     }
  //   });
  // };
  const openGallery = () => {
    let option = {
      include64: true,
      mediaType: 'photo',
    };
    launchImageLibrary(option, res => {
      console.log(res);
      if (res.assets) {
        setBanner(res.assets[0].uri);
        console.log('library Image');
        console.log(res);
        refRBSheet1.current.close();
        // setIsImageUpload(true);
      } else if (res.didCancel) {
        console.log('cancel');
        console.log(res.didCancel);
      }
    });
  };

  const openCamera = () => {
    let option = {
      include64: true,
      mediaType: 'photo',
    };
    launchCamera(option, res => {
      console.log(res);
      if (res.assets) {
        setBanner(res.assets[0].uri);
        console.log('lCamera Img');
        console.log(res);
        refRBSheet1.current.close();
        // setIsImageUpload(true);
      } else if (res.didCancel) {
        console.log('cancel');
        console.log(res.didCancel);
      }
    });
  };

  // const openCamera = () => {
  //   refRBSheet1.current.close();
  //   let options = {
  //     storageOptions: {
  //       path: 'images',
  //       skipBackup: true,
  //     },
  //     saveToPhotos: true,
  //   };
  //   launchCamera(options, response => {
  //     if (response.didCancel) {
  //       console.log('User cancelled image picker');
  //     } else if (response.error) {
  //       console.log('ImagePicker Error', response.error);
  //     } else if (response.customButton) {
  //       console.log('User Tapped custom button', response.customButton);
  //     } else {
  //       const source = response?.assets[0]?.uri;
  //       setBanner(source);
  //     }
  //   });
  // };

  return (
    <SafeArea>
      <View
        style={{
          flexGrow: 1,
          margin: '4%',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <ScrollView contentContainerStyle={{flexGrow: 1}}>
          <View style={{justifyContent: 'space-around', flexGrow: 1}}>
            <Heading
              Stylefont={'normal'}
              Fontweight={'700'}
              Fontsize={34}
              txtAlign={'left'}
              Heading={' Profile Details'}
            />
            <View style={styles.avatar}>
              <InteractAvatar
                // src={{
                //   uri: 'https://www.whatsappprofiledpimages.com/wp-content/uploads/2021/11/free-Whatsapp-Dp-Boys-Stylish-Girls-Cute-Images-pics.jpg',
                // }}
                icon={'camera'}
                IconPress={() => refRBSheet1.current.open()}
                src={banner ? {uri: banner} : null}
                size={120}
                Iconsize={20}
              />
            </View>
          </View>
          <View style={{flexGrow: 1}}>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
              }}>
              <Input
                outline={'#E8E6EA'}
                width={'100%'}
                mode={'outlined'}
                label={'First name'}
                Value={firstName || ''}
                Onchange={e => setFirstName(e)}
              />
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
              }}>
              <Input
                outline={'#E8E6EA'}
                width={'100%'}
                top={'2%'}
                mode={'outlined'}
                label={'Last name'}
                Value={lastName || ''}
                Onchange={e => setlastName(e)}
              />
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
                marginTop: '4%',
              }}>
              <BasicBtn
                btnText={'Choose birthday date'}
                icon={'calendar-outline'}
                txtColor={COLORS.primary}
                viewWidth={'100%'}
                buttonSize={'100%'}
                fontSize={15}
                flexDirection={'row-reverse'}
                justifyContent={'flex-end'}
                alignItems={'center'}
                alignSelf={'center'}
                txtLeftMargin={0}
                rightMargin1={-15}
                txtLeftMargin1={0}
                fontStyle={'700'}
                iconSize={21}
                bgcolor={COLORS.btn_bgColor}
                press={() => refRBSheet.current.open()}
              />
              <BottomSheet
                refRBSheets={refRBSheet}
                height={Dimensions.get('window').height / 1.45}>
                <ScrollView>
                  <Heading
                    Stylefont={'normal'}
                    Fontsize={14}
                    txtAlign={'center'}
                    Fontweight={'700'}
                    mt={'5%'}
                    Heading={'Birthday'}
                  />
                  <Calendars />
                  <View
                    style={{
                      justifyContent: 'center',
                      alignContent: 'center',
                      flexDirection: 'row',
                      bottom: 20,
                    }}>
                    <ButtonComp
                      btnwidth={'90%'}
                      btnHeight={56}
                      btnText={'Save'}
                      txtColor={COLORS.white}
                      justify={'center'}
                      align={'center'}
                      fontSize={16}
                      radius={15}
                      fontStyle={'700'}
                      txtwidth={'100%'}
                      press={() => refRBSheet.current.close()}
                    />
                  </View>
                </ScrollView>
              </BottomSheet>
            </View>
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignContent: 'center',
            }}>
            <ButtonComp
              btnwidth={'100%'}
              btnHeight={56}
              btnText={'Confirm'}
              txtColor={COLORS.white}
              justify={'center'}
              align={'center'}
              fontSize={16}
              radius={15}
              fontStyle={'700'}
              press={() => navigation.navigate('gender')}
            />
          </View>
          {/* <ThemeSwitch /> */}
        </ScrollView>
      </View>
      <BottomSheet refRBSheets={refRBSheet1} height={160}>
        <View
          style={{
            alignItems: 'flex-start',
            margin: '8%',
            flexDirection: 'row',
            justifyContent: 'flex-start',
          }}>
          <View
            style={{
              marginLeft: 10,
            }}>
            <Pressable onPress={openCamera}>
              <View
                style={{
                  backgroundColor: COLORS.primary,
                  borderRadius: 25,
                  width: 50,
                  height: 50,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Icons name="photo-camera" color={'#fff'} size={30} />
              </View>
            </Pressable>
            <InteractParagraph p={'Camera'} />
          </View>
          <View
            style={{
              marginLeft: 40,
            }}>
            <Pressable onPress={openGallery}>
              <View
                style={{
                  backgroundColor: COLORS.primary,
                  borderRadius: 25,
                  padding: 10,
                }}>
                <Icons name="photo-library" color={'#fff'} size={30} />
              </View>
            </Pressable>
            <InteractParagraph p={' Gallery'} />
          </View>
        </View>
      </BottomSheet>
    </SafeArea>
  );
}

export default ProfileDetails;
