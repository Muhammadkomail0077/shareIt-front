import React, {useEffect, useRef, useState} from 'react';
import {
  Dimensions,
  FlatList,
  ScrollView,
  View,
  Pressable,
  Image,
} from 'react-native';
import COLORS from '../../Assets/Style/Color';
import ButtonComp from '../../Components/ReusableComponent/Button';
import SafeArea from '../../Components/ReusableComponent/Safearea';
import Heading from '../../Components/ReusableComponent/Heading';
import InteractParagraph from '../../Components/ReusableComponent/Paragraph';
import InterestChip from '../../Components/ReusableComponent/InterestChip';
import Gallery from '../../Components/ReusableComponent/Gallery';
import {styles} from './style';
import FriendsCard from '../../Components/ReusableComponent/FriendsCard';
import {useDispatch, useSelector} from 'react-redux';
import InteractAvatar from '../../Components/ReusableComponent/Avatar';
import Icon from 'react-native-vector-icons/AntDesign';
import Icons from 'react-native-vector-icons/MaterialIcons';
import IconIon from 'react-native-vector-icons/Ionicons';
import BottomSheet from '../../Components/ReusableComponent/BottomSheet';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {ActivityIndicator, Avatar} from 'react-native-paper';
import {getRequest, postRequestWithFormData} from '../../App/fetch';
import {BASE_URL} from '../../App/api';
import {
  getDataFromAsyncStorage,
  setDataToAsyncStorage,
} from '../../utils/getAndSetDataToAsync';
import {userDataFromAsyncStorage} from '../../Store/slices/user';
import {showError, showSuccess} from '../../utils/PopupFunctions';

function ViewProfile({navigation}) {
  const [loading, setLoading] = useState(false);
  const refRBSheet = useRef();
  const dispatch = useDispatch();
  const reducerData = useSelector(state => state);
  const {
    AuthReducer: {userData, status, error},
  } = useSelector(state => state);
  console.log('AuthReducer:', userData);
  const [banner, setBanner] = useState();

  let testData = {
    message: 'success',
    success: true,
    data: {
      _id: '6373333b45b8bedbfc3edc7c',
      userName: 'Oliver',
      userEmail: 'oliver@gmail.com',
      userPassword:
        '$2a$08$W.9IKQIytPChVtoiE0MqG.Jkk58tXOKEYd.S3gfcnVN5FV9TM9bRC',
      userGenderShow: false,
      isNewUser: true,
      userImage: '',
      userAboutme: 'Passionate gamer and coder :)',
      userCountry: 'Australia',
      userCity: 'Melborne',
      userLifeStyleItems: ['Aries'],
      userInterest: ['Reading'],
      userAlbums: [],
      userLon: '24.96763714610862',
      userLat: '67.17882212874443',
      userLocationPrivacy: false,
      userNotificationToken:
        'iq2HWUHRPurnqrTkQzToN:APA91bE5r7CASNfwTLto0JWFge-bxwOOa0fTgIDLvXALc79LemLqfnbK58-eHHgtjLpCTHFUJ5BdeWSyntqngJ6e7CN1R8IXggKriRmgF3mhogGBTSgjAKCbklXBlJmR3w0ULGn8x-bS',
      userLastOnline: '',
      userDOB: '',
      userCreatedOn: '2022-11-15T06:35:39.699Z',
      userToken:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjM3MzMzM2I0NWI4YmVkYmZjM2VkYzdjIiwiaWF0IjoxNjY4NDk0MTM5LCJleHAiOjE2NjkwOTg5Mzl9.n8MaqJJo7o9fFxPdvus3PHC9tDZ52f9wOcr57EtuLsk',
      __v: 0,
      userDeviceType: 0,
      userGender: 0,
      userNumber: '5052378923',
      partnerProfile: {
        _id: '6373358145b8bedbfc3edc8d',
        partners: [
          {
            _id: '6373333b45b8bedbfc3edc7c',
            userName: 'Oliver',
            userEmail: 'oliver@gmail.com',
            userPassword:
              '$2a$08$W.9IKQIytPChVtoiE0MqG.Jkk58tXOKEYd.S3gfcnVN5FV9TM9bRC',
            userGenderShow: false,
            isNewUser: true,
            userImage: '',
            userAboutme: 'Passionate gamer and coder :)',
            userCountry: 'Australia',
            userCity: 'Melborne',
            userLifeStyleItems: ['Aries'],
            userInterest: ['Reading'],
            userAlbums: [],
            userLon: '24.96763714610862',
            userLat: '67.17882212874443',
            userLocationPrivacy: false,
            userNotificationToken:
              'iq2HWUHRPurnqrTkQzToN:APA91bE5r7CASNfwTLto0JWFge-bxwOOa0fTgIDLvXALc79LemLqfnbK58-eHHgtjLpCTHFUJ5BdeWSyntqngJ6e7CN1R8IXggKriRmgF3mhogGBTSgjAKCbklXBlJmR3w0ULGn8x-bS',
            userLastOnline: '',
            userDOB: '',
            userCreatedOn: '2022-11-15T06:35:39.699Z',
            userToken:
              'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjM3MzMzM2I0NWI4YmVkYmZjM2VkYzdjIiwiaWF0IjoxNjY4NDk0MTM5LCJleHAiOjE2NjkwOTg5Mzl9.n8MaqJJo7o9fFxPdvus3PHC9tDZ52f9wOcr57EtuLsk',
            __v: 0,
            userDeviceType: 0,
            userGender: 0,
            userNumber: '5052378923',
            partnerProfile: '6373358145b8bedbfc3edc8d',
          },
          {
            _id: '6373330545b8bedbfc3edc78',
            userName: 'Ocean',
            userEmail: 'ocean@gmail.com',
            userPassword:
              '$2a$08$JwFV6WjphzMuS0vM86QMWenTGxaeb6gHQKeHG3Wna0zHQOY/k5MWy',
            userGenderShow: false,
            isNewUser: true,
            userImage: '',
            userAboutme: 'Passionate gamer and coder :)',
            userCountry: 'Australia',
            userCity: 'Melborne',
            userLifeStyleItems: ['Aries'],
            userInterest: ['Reading'],
            userAlbums: [],
            userLon: '24.96763714610862',
            userLat: '67.17882212874443',
            userLocationPrivacy: false,
            userNotificationToken:
              'dfghTy9NQSGBS2Q6Byh1Bv:APA91bGrHhB_2nF996BsSyfbirACNWMbv6CQYsjzCAhmXIfxTWPvpPkpfo8KTHszrgcgI2ccbJO9-w5iMBVgvqLEO34-R8tMPoA7BuyLZCUwrYjg8gs4VxY6EVUG_Ka-gUMOZ3mDxWCb',
            userLastOnline: '',
            userDOB: '',
            userCreatedOn: '2022-11-15T06:34:45.013Z',
            userToken:
              'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjM3MzMzMDU0NWI4YmVkYmZjM2VkYzc4IiwiaWF0IjoxNjY4NDk0MDg1LCJleHAiOjE2NjkwOTg4ODV9.PuNpQlFJEteCcyomMQvIvZ-rYtVwwu-bJA6rrESooco',
            __v: 0,
            userDeviceType: 0,
            userGender: 0,
            userNumber: '5052378923',
            partnerProfile: '6373358145b8bedbfc3edc8d',
          },
        ],
        partnerName: 'Ocean and Oliver',
        partnerLikeuser: [],
        partnerDisLikeuser: [],
        __v: 0,
      },
    },
  };
  console.log('testData spread operator', {
    ...testData,
    partnerProfile: 'Aamir',
  });
  console.log('token:', userData?.userToken);

  const updateProfile = image => {
    try {
      // refRBSheet.current.close();
      console.log('image from assets:', image);
      const data = new FormData();
      // data.append('image', `${image}`);
      data.append('image', {
        uri: image.uri,
        type: 'image/jpeg',
        name: 'photo.jpg',
      });
      console.log('Append Data:', data);
      postRequestWithFormData(
        `${BASE_URL}/updateImage`,
        data,
        `${userData?.userToken}`,
      )
        .then(res => {
          console.log('profile updated success:', res);
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
            userCreatedOn: res.data.userCreatedOn ? res.data.userCreatedOn : '',
            userToken: userData?.userToken,
            userDeviceType: res.data.userDeviceType,
            userGender: res.data.userGender,
            __v: res.data.__v,
            phoneNumber: res.data.userNumber ? res.data.userNumber : '',
            partnerProfile: res.data.partnerProfile
              ? res.data.partnerProfile
              : '',
          };
          // setDataToAsyncStorage('token', JSON.stringify(v.userToken));
          setDataToAsyncStorage('user', JSON.stringify(v));
          getDataFromAsyncStorage('user')
            .then(res => {
              dispatch(userDataFromAsyncStorage(JSON.parse(res)));
              console.log('user', res);
              setLoading(false);
            })
            .catch(error => console.log('error:', error));
        })
        .catch(error => {
          setLoading(false);
          showError('something went wrong please try again');
          console.log('Error.catch: => updateProfile:', error);
        });
    } catch (error) {
      setLoading(false);
      showError('Something went wrong please try again');
      console.log('Error: => updateProfile:', error);
    }
  };
  const openGallery = () => {
    let option = {
      include64: true,
      mediaType: 'photo',
      maxWidth: 1000,
      maxHeight: 500,
    };
    launchImageLibrary(option, res => {
      console.log(res);
      if (res.assets) {
        setBanner(res.assets[0].uri);
        refRBSheet.current.close();
        setLoading(true);
        updateProfile(res.assets[0]);
        console.log('library Image');
        console.log(res);
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
        refRBSheet.current.close();
        setLoading(true);
        updateProfile(res.assets[0]);
        console.log('lCamera Img');
        console.log(res);
        // setIsImageUpload(true);
      } else if (res.didCancel) {
        console.log('cancel');
        console.log(res.didCancel);
      }
    });
  };

  const [imgUrl, setIimgUrl] = useState('');
  console.log('userData?.userToken: ', userData?.partnerProfile?.partnerImage);

  const openGalleryFromPartnerProfile = () => {
    let option = {
      include64: true,
      mediaType: 'photo',
    };
    launchImageLibrary(option, res => {
      console.log(res);
      if (res.assets) {
        // setBanner(res.assets[0].uri);
        console.log('Response:', res.assets[0].uri);
        setIimgUrl(res.assets[0].uri);
        console.log('library Image:', res.assets[0].uri);
        console.log(res);
        console.log('imgUrl: ', imgUrl);
        setLoading(true);
        const data = new FormData();
        data.append('image', {
          uri: `${imgUrl}`,
          type: 'image/jpeg',
          name: 'photo.jpg',
        });
        postRequestWithFormData(
          `${BASE_URL}/updatePartnerImage`,
          data,
          `${userData?.userToken}`,
        )
          .then(res => {
            setLoading(false);
            console.log('Add Event success:', res);
            const v = {
              userId: userData?.userId,
              name: userData.name ? userData.name : 'user',
              email: userData.email,
              userPassword: userData.userPassword,
              userGenderShow: userData.userGenderShow,
              isNewUser: userData.isNewUser,
              profile_pic: userData.profile_pic ? userData.profile_pic : '',
              userAboutMe: userData.userAboutme ? userData.userAboutme : '',
              userCountry: userData.userCountry ? userData.userCountry : '',
              userCity: userData.userCity ? userData.userCity : '',
              userLifeStyleItems: userData.userLifeStyleItems
                ? userData.userLifeStyleItems
                : [],
              userInteuserDatat: userData.userInteuserDatat
                ? userData.userInteuserDatat
                : [],
              userAlbums: userData.userAlbums ? userData.userAlbums : [],
              userLon: userData.userLon ? userData.userLon : '',
              userLat: userData.userLat ? userData.userLat : '',
              userLocationPrivacy: userData.userLocationPrivacy
                ? userData.userLocationPrivacy
                : '',
              userNotificationToken: userData.userNotificationToken
                ? userData.userNotificationToken
                : '',
              userLastOnline: userData.userLastOnline
                ? userData.userLastOnline
                : '',
              userLastOnline: userData.userLastOnline
                ? userData.userLastOnline
                : '',
              userDOB: userData.userDOB ? userData.userDOB : '',
              userCreatedOn: userData.userCreatedOn
                ? userData.userCreatedOn
                : '',
              userToken: userData?.userToken,
              userDeviceType: userData.userDeviceType,
              userGender: userData.userGender,
              __v: userData.__v,
              phoneNumber: userData.userNumber ? userData.userNumber : '',
              partnerProfile: res.data ? res.data : '',
            };
            // setDataToAsyncStorage('token', JSON.stringify(v.userToken));
            setDataToAsyncStorage('user', JSON.stringify(v));
            getDataFromAsyncStorage('user')
              .then(res => {
                dispatch(userDataFromAsyncStorage(JSON.parse(res)));
                console.log('user', res);
                setLoading(false);
              })
              .catch(error => console.log('error:', error));
            // if (res.success == true) {
            //   // navigation.navigate('Events');
            //   showSuccess('Partner Picture Uploaded Successfully');

            // } else {
            //   showError(`Something went wrong`);
            // }
          })
          .catch(error => {
            setLoading(false);

            console.log('Error.catch: => Add Event:', error);
            showError(`Something went wrong`);
          });
      } else if (res.didCancel) {
        console.log('cancel');
        console.log(res.didCancel);
      }
    });
  };

  // const [loading, setLoading] = useState(false);
  const [matchesDataArray, setMatchesDataArray] = useState([]);

  const getMatchesData = () => {
    setLoading(true);
    getRequest(`${BASE_URL}/getMatchInteract`, userData.userToken)
      .then(res => {
        let first = JSON.stringify(res);
        let second = JSON.parse(first);
        console.log(second.data);
        setMatchesDataArray(second.data);
        console.log('matchesDataArray', matchesDataArray);
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
        setLoading(false);
      });
  };

  useEffect(() => {
    getMatchesData();
  }, []);

  return (
    <>
      <SafeArea>
        {loading ? (
          <ActivityIndicator size="large" color="#00ff00" />
        ) : (
          <>
            <View style={{flexGrow: 1, paddingBottom: 30}}>
              <ScrollView contentContainerStyle={{flexGrow: 1}}>
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    margin: '4%',
                  }}>
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
                  <View
                    style={{
                      alignItems: 'center',
                      justifyContent: 'center',
                      alignSelf: 'center',
                    }}>
                    <Heading
                      Stylefont={'normal'}
                      Fontweight={'700'}
                      Fontsize={34}
                      // mt={'8%'}
                      Heading={'Profile Details'}
                    />
                    <View style={styles.avatar}>
                      <InteractAvatar
                        icon={'camera'}
                        src={
                          banner
                            ? {uri: banner}
                            : userData?.profile_pic === ''
                            ? null
                            : {uri: userData?.profile_pic}
                        }
                        size={120}
                        Iconsize={20}
                        IconPress={() => refRBSheet.current.open()}
                        // press={}
                      />
                    </View>
                  </View>
                  <View
                    style={{
                      justifyContent: 'center',
                      alignSelf: 'center',
                      alignItems: 'center',
                    }}>
                    <Heading
                      Stylefont={'normal'}
                      Fontweight={'700'}
                      Fontsize={30}
                      // mx={-5}
                      // mt={'8%'}
                      Heading={userData?.name}
                    />
                    <InteractParagraph p={`@${userData?.name}`} />
                    <InteractParagraph
                      fs={14}
                      fw={'700'}
                      p={
                        userData?.userCity
                          ? `${userData?.userCity},${userData?.userCountry}`
                          : 'add location'
                      }
                    />
                  </View>
                  <View style={{width: '100%'}}>
                    <View
                      style={{
                        borderColor: COLORS.border_color,
                        borderWidth: 1,
                        marginTop: 20,
                        borderRadius: 15,
                        // backgroundColor: 'coral'
                      }}>
                      <InteractParagraph
                        p={
                          userData?.userAboutMe
                            ? userData?.userAboutMe
                            : 'You can add about yourself!!!'
                        }
                        txtAlign={'center'}
                        Padding={20}
                      />
                      {/* <Avatar.Image
                size={24}
                source={{
                  uri: 'https://interact-beta.herokuapp.com/public/uploads/1667457376255.jpeg-photo-1570295999919-56ceb5ecca61.jpeg',
                }}
              /> */}
                    </View>
                  </View>
                  <View
                    style={{
                      alignItems: 'center',
                      alignSelf: 'center',
                      justifyContent: 'center',
                      alignContent: 'center',
                      marginTop: 10,
                    }}>
                    <Heading
                      Heading={'Interests'}
                      Fontweight={'100'}
                      Fontsize={16}
                      txtAlign={'center'}
                    />
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      flexWrap: 'wrap',
                      marginTop: 5,
                    }}>
                    {userData?.userInterest?.map((value, index) => (
                      <View key={index}>
                        <InterestChip
                          disabled={true}
                          // IconName={'checkmark-done'}
                          title={value}
                        />
                      </View>
                    ))}
                  </View>
                  <View
                    style={{
                      justifyContent: 'center',
                      alignContent: 'center',
                      alignItems: 'center',
                      alignSelf: 'center',
                      marginTop: '15%',
                      marginBottom: '10%',
                    }}>
                    <ButtonComp
                      btnwidth={'95%'}
                      btnHeight={56}
                      btnText={'Edit Profile'}
                      txtColor={COLORS.white}
                      justify={'center'}
                      align={'center'}
                      fontSize={16}
                      radius={15}
                      fontStyle={'700'}
                      txtwidth={'100%'}
                      press={() => navigation.navigate('edit')}
                    />
                  </View>
                  {reducerData?.isDark?.isMatch ? (
                    <>
                      <View
                        style={{
                          backgroundColor: 'rgba(77, 197, 0, 0.2)',
                          // padding: 20,
                          borderRadius: 15,
                          alignSelf: 'center',
                        }}>
                        <View
                          style={{
                            flexDirection: 'row',
                            marginTop: 30,
                          }}>
                          <>
                            {matchesDataArray.length !== 0 && (
                              <FlatList
                                numColumns={2}
                                showsVerticalScrollIndicator={false}
                                keyExtractor={(item, index) => 'key' + index}
                                data={matchesDataArray}
                                renderItem={({item}) => {
                                  return (
                                    <View
                                      style={{
                                        margin: '1%',
                                        flex: 1,
                                        alignItems: 'center',
                                        alignSelf: 'center',
                                      }}>
                                      <FriendsCard
                                        width={
                                          Dimensions.get('window').width / 3
                                        }
                                        height={
                                          Dimensions.get('window').height / 3.8
                                        }
                                        bgImg={{uri: item?.partnerImage}}
                                        para={item.partnerName}
                                      />
                                    </View>
                                  );
                                }}
                              />
                            )}
                          </>
                        </View>
                        <View
                          style={{
                            position: 'absolute',
                            alignSelf: 'center',
                            flexDirection: 'row',
                            top: -10,
                          }}>
                          <InteractParagraph
                            fw={'700'}
                            color={COLORS.primary}
                            p={'Friends '}
                          />
                          <InteractParagraph p={'(109)'} />
                        </View>
                        <View
                          style={{
                            marginTop: '5%',
                            marginBottom: '5%',
                          }}>
                          <ButtonComp
                            btnwidth={'90%'}
                            btnHeight={56}
                            btnText={'See All Families'}
                            txtColor={COLORS.white}
                            justify={'center'}
                            align={'center'}
                            fontSize={16}
                            radius={15}
                            fontStyle={'700'}
                            txtwidth={'100%'}
                            press={() => navigation.navigate('Families')}
                          />
                        </View>
                      </View>
                      <View style={{marginTop: 15, width: '100%'}}>
                        <Heading
                          Heading={'Partner Profile'}
                          Fontweight={'700'}
                          Fontsize={16}
                          // ml={10}
                        />
                        <Pressable
                          onPress={() => openGalleryFromPartnerProfile()}>
                          {imgUrl || userData.partnerProfile.partnerImage ? (
                            <View
                              style={{
                                // flexDirection: 'row',
                                justifyContent: 'flex-end',
                                alignItems: 'center',
                                borderRadius: 15,
                                borderColor: COLORS.primary,
                                borderWidth: 1,
                                width: '100%',
                                // height: '50%',

                                alignSelf: 'center',
                                // padding: '20%',
                                overflow: 'hidden',
                              }}>
                              <Image
                                resizeMode="contain"
                                style={{width: 345, height: 200}}
                                source={{
                                  uri: imgUrl
                                    ? imgUrl
                                    : userData?.partnerProfile?.partnerImage,
                                }}
                              />
                            </View>
                          ) : (
                            <View
                              style={{
                                // flexDirection: 'row',
                                justifyContent: 'flex-end',
                                alignItems: 'center',
                                borderRadius: 15,
                                borderColor: COLORS.primary,
                                borderWidth: 1,
                                width: '100%',
                                // height: '50%',

                                alignSelf: 'center',
                                padding: '20%',
                                overflow: 'hidden',
                              }}>
                              <IconIon
                                name="add"
                                color={COLORS.primary}
                                size={45}
                              />
                            </View>
                          )}
                        </Pressable>
                      </View>
                    </>
                  ) : (
                    <></>
                  )}
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      flexGrow: 1,
                      marginTop: 10,
                      // justifyContent: 'space-between',
                    }}>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        flex: 1,
                      }}>
                      <Heading
                        Heading={'Gallery'}
                        Fontweight={'700'}
                        Fontsize={16}
                        // ml={10}
                      />
                      {/* <Pressable
                        onPress={() => navigation.navigate('addAlbum')}>
                        <View style={{flexDirection: 'row'}}>
                          <InteractParagraph
                            fw={'700'}
                            p={'Edit'}
                            mt={3}
                            fs={16}
                            color={COLORS.primary}
                          />
                          <Icon
                            name="right"
                            color={COLORS.primary}
                            style={{top: 8}}
                          />
                        </View>
                      </Pressable> */}
                    </View>
                  </View>
                </View>
                <View>
                  {/* <ScrollView> */}
                  <Gallery navigation={navigation} />
                  {/* </ScrollView> */}
                </View>
              </ScrollView>
            </View>
            <BottomSheet refRBSheets={refRBSheet} height={160}>
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
                        padding: 10,
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
          </>
        )}
      </SafeArea>
    </>
  );
}

export default ViewProfile;

const friends = [
  {
    id: 1,
    bgImg: require('src/Assets/Images/friends.png'),
    name: 'Leilani & Hall',
  },
  {
    id: 2,
    bgImg: require('src/Assets/Images/friends.png'),
    name: 'Anna & Shan',
  },
  {
    id: 3,
    bgImg: require('src/Assets/Images/friends.png'),
    name: 'Robin & Latt',
  },
  {
    id: 4,
    bgImg: require('src/Assets/Images/friends.png'),
    name: 'Lilly & Wade',
  },
];
