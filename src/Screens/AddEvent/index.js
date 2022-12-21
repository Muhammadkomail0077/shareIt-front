import React, {useRef} from 'react';
import {Dimensions, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import InteractAvatar from '../../Components/ReusableComponent/Avatar';
import ButtonComp from '../../Components/ReusableComponent/Button';
import Heading from '../../Components/ReusableComponent/Heading';
import InteractParagraph from '../../Components/ReusableComponent/Paragraph';
import SafeArea from '../../Components/ReusableComponent/Safearea';
import Calendars from 'src/Components/ReusableComponent/Calendar';
import BottomSheet from 'src/Components/ReusableComponent/BottomSheet';
import Input from '../../Components/ReusableComponent/input';
import BasicBtn from 'src/Components/ReusableComponent/ButtonBasic';
import COLORS from '../../Assets/Style/Color';
import {useSelector} from 'react-redux';
import {useState} from 'react';
import {postRequestWithFormData} from '../../App/fetch';
import {BASE_URL} from '../../App/api';
import {showError} from '../../utils/PopupFunctions';
import {useEffect} from 'react';
import Geocoder from 'react-native-geocoding';

function AddEvent({navigation, route}) {
  const refRBSheet = useRef();

  const {AuthReducer} = useSelector(state => state);
  console.log(AuthReducer?.userData);

  // const {mapData} = route.params;
  // console.log('mapData: ', mapData ? mapData : '');

  console.log('Latitude: ', AuthReducer?.userData?.userLat);
  console.log('Longitude: ', AuthReducer?.userData?.userLon);

  const date = new Date();
  // console.log('date:', date);

  const [userInfo, setUserInfo] = useState('');

  var day = new Date().getDate();
  var month = new Date().getMonth() + 1;
  var year = new Date().getFullYear();

  var fullDate = year + '/' + month + '/' + day;

  function getDateFromCalender() {
    console.log('Add Event', userInfo);
  }
  const [eventName, setEventName] = useState('');

  const [description, setDescription] = useState('');

  Geocoder.init('AIzaSyDtp3OKKerq7d8LiZjKwo78fm9QEg8MMZk');

  function saveEvent() {
    const completeData = {
      eventName: `${eventName}`,
      eventDescription: `${description}`,
      eventDateTime: `${userInfo}`,
      eventLat: `${mapData.latitude}`,
      eventLong: `${mapData.longitude}`,
      eventLocation: `${cityName}`,
      eventshowType: `${0}`,
    };
    console.log('completeData:', completeData);
    if (
      !!completeData.eventName &&
      !!completeData.eventDescription &&
      !!completeData.eventLat &&
      !!completeData.eventDateTime &&
      !!cityName &&
      !!completeData.eventLong
    ) {
      navigation.navigate('Createevent', {eventData: completeData});
    } else {
      showError(`Something went wrong`);
    }
  }

  let region;

  route.params ? ({region} = route.params) : '';

  const [mapData, setMapData] = useState([]);
  const [cityName, setCityName] = useState('');

  useEffect(() => {
    console.log(region ? 'Add Event: ' + region : 'region');
    !!region && setMapData(JSON.parse(JSON.stringify(region)));
    console.log('mapData: ', mapData);
  }, [region]);

  useEffect(() => {
    Geocoder.from(mapData.latitude, mapData.longitude)
      .then(json => {
        var addressComponent = json.results[0].address_components[1].long_name;

        console.log(addressComponent);
        setCityName(addressComponent);
      })
      .catch(error => console.warn(error));
  }, [mapData]);

  console.log('cityName', cityName);

  return (
    <SafeArea>
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
              // padding: 5,
              marginTop: '8%',
              flexDirection: 'row',
              justifyContent: 'flex-start',
            }}>
            <InteractAvatar
              size={60}
              // src={require('src/Assets/Images/avatar.png')}
            />
            <View style={{justifyContent: 'center'}}>
              <Heading
                Fontweight={'700'}
                Fontsize={18}
                txtAlign={'center'}
                // p={10}
                mt={'5%'}
                ml={'10%'}
                Heading={AuthReducer?.userData?.name}
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
                top={'10%'}
                mode={'outlined'}
                label={'Event Name'}
                Onchange={eventNameData => {
                  setEventName(eventNameData);
                }}
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
                btnText={userInfo == '' ? 'Date' : userInfo}
                icon={'calendar-outline'}
                txtColor={COLORS.primary}
                fontSize={15}
                buttonSize={'100%'}
                viewWidth={'100%'}
                flexDirection={'row-reverse'}
                justifyContent={'flex-end'}
                alignItems={'center'}
                alignSelf={'center'}
                txtLeftMargin={0}
                rightMargin1={-15}
                txtLeftMargin1={0}
                fontStyle={'700'}
                iconSize={21}
                bgcolor={'#EDF9E5'}
                press={() => refRBSheet.current.open()}
              />

              <BottomSheet
                refRBSheets={refRBSheet}
                height={Dimensions.get('window').height / 1.4}>
                <Heading
                  Stylefont={'normal'}
                  Fontsize={14}
                  txtAlign={'center'}
                  Fontweight={'700'}
                  mt={'5%'}
                  Heading={'Birthday'}
                />
                <Calendars
                  userInfo={userInfo}
                  setUserInfo={setUserInfo}
                  fullDate={fullDate}
                />
                <View
                  style={{
                    justifyContent: 'center',
                    alignContent: 'center',
                    flexDirection: 'row',
                    bottom: 20,
                  }}>
                  <ButtonComp
                    // buttonSize={'90%'}
                    // viewWidth={'80%'}
                    btnHeight={56}
                    btnText={'Save'}
                    txtColor={COLORS.white}
                    justify={'center'}
                    align={'center'}
                    fontSize={16}
                    radius={15}
                    fontStyle={'700'}
                    txtwidth={'85%'}
                    press={() => {
                      getDateFromCalender();
                      refRBSheet.current.close();
                    }}
                  />
                </View>
              </BottomSheet>
            </View>

            <View style={{marginTop: 10}}>
              <BasicBtn
                btnText={'Location'}
                icon={'location-outline'}
                txtColor={COLORS.primary}
                fontSize={15}
                buttonSize={'100%'}
                viewWidth={'100%'}
                flexDirection={'row-reverse'}
                justifyContent={'flex-end'}
                alignItems={'center'}
                alignSelf={'center'}
                txtLeftMargin={0}
                rightMargin1={-15}
                txtLeftMargin1={0}
                fontStyle={'700'}
                iconSize={21}
                bgcolor={'#EDF9E5'}
                press={() => navigation.navigate('map')}
              />
            </View>
          </View>
          <Heading
            Fontweight={'700'}
            Fontsize={20}
            mt={'5%'}
            Heading={'Description'}
          />
          <View
            style={{
              // padding: 5,
              // top: 10,
              justifyContent: 'center',
              // width: '90%',
              alignItems: 'center',
              // flexDirection: 'row',
            }}>
            <Input
              outline={'#E8E6EA'}
              width={'100%'}
              top={10}
              mode={'outlined'}
              label={''}
              multiline={true}
              line={3}
              Onchange={descriptionData => {
                setDescription(descriptionData);
              }}
            />
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
              btnText={'Next'}
              txtColor={COLORS.white}
              justify={'center'}
              align={'center'}
              fontSize={16}
              radius={15}
              fontStyle={'700'}
              txtwidth={'100%'}
              press={() => {
                // navigation.navigate('Createevent');
                saveEvent();
              }}
            />
          </View>
        </View>
      </ScrollView>
    </SafeArea>
  );
}

export default AddEvent;
