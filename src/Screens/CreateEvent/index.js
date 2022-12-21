import React, {useRef} from 'react';
import {View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {ScrollView} from 'react-native-gesture-handler';
import ButtonComp from '../../Components/ReusableComponent/Button';
import Heading from '../../Components/ReusableComponent/Heading';
import SafeArea from '../../Components/ReusableComponent/Safearea';
import BasicBtn from 'src/Components/ReusableComponent/ButtonBasic';
import COLORS from '../../Assets/Style/Color';
import Icon from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import InteractParagraph from '../../Components/ReusableComponent/Paragraph';
import {IsEvent} from '../../Store/slices';
import {Pressable} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import {Image} from 'react-native';
import {useState} from 'react';
import {postRequestWithFormData} from '../../App/fetch';
import {BASE_URL} from '../../App/api';
import {showError} from '../../utils/PopupFunctions';
import {ActivityIndicator} from 'react-native-paper';

function CreateEvent({navigation, route}) {
  const dispatch = useDispatch();

  const {eventData} = route.params;
  console.log('eventData in create data:', eventData);
  const {AuthReducer} = useSelector(state => state);
  console.log('AuthReducer?.userData:', AuthReducer?.userData);
  const [loading, setLoading] = useState(false);

  const reducerData = useSelector(state => state);

  const statusChange = () => {
    const data = new FormData();
    data.append('eventName', `${eventData?.eventName}`);
    data.append('eventDescription', `${eventData?.eventDescription}`);
    data.append('eventDateTime', `${eventData?.eventDateTime}`);
    data.append('eventLat', `${eventData?.eventLat}`);
    data.append('eventLong', `${eventData?.eventLong}`);
    data.append('eventLocation', `${eventData.eventLocation}`);
    data.append('eventshowType', `${eventData?.eventshowType}`);
    data.append('image', {
      uri: `${imgUrl}`,
      type: 'image/jpeg',
      name: 'photo.jpg',
    });
    setLoading(true);

    console.log('data', data);
    console.log('AuthReducer?.userData?.userToken', AuthReducer?.userData?.userToken);

    postRequestWithFormData(
      `${BASE_URL}/createevents`,
      data,
      `${AuthReducer?.userData?.userToken}`,
    )
      .then(res => {
        setLoading(false);
        console.log('Add Event success:', res);
        if (res.success == true) {
          navigation.navigate('Events');
        } else {
          showError(`Something went wrong`);
        }
      })
      .catch(error => {
        setLoading(false);

        console.log('Error.catch: => Add Event:', error);
        showError(`Something went wrong`);
      });
  };

  const openGallery = () => {
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
        console.log('library Image');
        console.log(res);
      } else if (res.didCancel) {
        console.log('cancel');
        console.log(res.didCancel);
      }
    });
  };
  const [imgUrl, setIimgUrl] = useState('');

  return (
    <SafeArea>
      {loading ? (
        <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
          <ActivityIndicator size="large" color="#00ff00" />
        </View>
      ) : (
        <ScrollView>
          <View
            style={{
              margin: '4%',
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-start',
              }}>
              <ButtonComp
                mode={'outlined'}
                justify={'center'}
                align={'center'}
                btnHeight={65}
                icon={'chevron-back'}
                radius={15}
                // rightMargin={'5%'}
                // leftMargin={'5%'}
                // topMargin={'5%'}
                Borderwidth={1}
                press={() => navigation.goBack()}
              />
              <Heading
                Stylefont={'normal'}
                Fontweight={'700'}
                Fontsize={27}
                txtAlign={'center'}
                ml={'3%'}
                p={10}
                Heading={'Create Event'}
              />
            </View>
            <View
              style={{
                padding: 5,
                marginTop: '8%',
                justifyContent: 'center',
              }}>
              <View>
                <Heading
                  Fontweight={'700'}
                  Fontsize={18}
                  txtAlign={'center'}
                  // p={10}
                  mt={'5%'}
                  Heading={'Add Cover Photo'}
                />
              </View>
            </View>
            <View style={{flexGrow: 1}}>
              <View style={{marginTop: 10}}>
                <Pressable onPress={() => openGallery()}>
                  {!!imgUrl ? (
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
                        resizeMode="cover"
                        style={{width: 345, height: 200}}
                        source={{uri: imgUrl}}
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
                      <Icon name="add" color={COLORS.primary} size={45} />
                    </View>
                  )}
                </Pressable>
                <View style={{marginTop: 10}}>
                  <Heading
                    Stylefont={'normal'}
                    Fontweight={'700'}
                    Fontsize={20}
                    Heading={eventData?.eventName}
                  />
                  <View
                    style={{
                      marginTop: 10,
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <Icon name="earth" color={COLORS.primary} size={25} />
                    <InteractParagraph
                      // JContent={'center'}
                      ml={10}
                      fs={16}
                      p={'Public . Hosted by'}
                    />
                    <InteractParagraph
                      // JContent={'center'}
                      ml={5}
                      fw={'700'}
                      fs={16}
                      p={AuthReducer?.userData?.name}
                    />
                  </View>
                  <View
                    style={{
                      marginTop: 10,
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <AntDesign name="edit" color={COLORS.primary} size={25} />
                    <View style={{flexDirection: 'column'}}>
                      <InteractParagraph
                        // JContent={'center'}
                        ml={10}
                        fs={16}
                        fw={'700'}
                        p={'Description'}
                      />
                      <InteractParagraph
                        // JContent={'center'}
                        ml={10}
                        // fw={'700'}
                        fs={14}
                        p={eventData.eventDescription}
                      />
                    </View>
                  </View>
                  <View
                    style={{
                      marginTop: 10,
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <Icon
                      name="location-outline"
                      color={COLORS.primary}
                      size={25}
                    />
                    <View style={{flexDirection: 'column'}}>
                      <InteractParagraph
                        // JContent={'center'}
                        ml={10}
                        fs={16}
                        fw={'700'}
                        p={'Location'}
                      />
                      <InteractParagraph
                        // JContent={'center'}
                        ml={10}
                        // fw={'700'}
                        fs={14}
                        p={eventData.eventLocation}
                      />
                    </View>
                  </View>
                  <View
                    style={{
                      justifyContent: 'center',
                      alignContent: 'center',
                      flexDirection: 'row',
                      marginTop: '15%',
                      marginBottom: '10%',
                    }}>
                    <ButtonComp
                      btnwidth={'97.6%'}
                      btnHeight={56}
                      btnText={'Create Event'}
                      txtColor={COLORS.white}
                      justify={'center'}
                      align={'center'}
                      fontSize={16}
                      radius={15}
                      fontStyle={'700'}
                      txtwidth={'100%'}
                      press={statusChange}
                    />
                  </View>
                </View>
              </View>

              <View></View>
            </View>
          </View>
        </ScrollView>
      )}
    </SafeArea>
  );
}

export default CreateEvent;
