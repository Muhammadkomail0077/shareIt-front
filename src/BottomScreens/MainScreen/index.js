import React, {useEffect, useRef, useState} from 'react';
import {View, Text, Image, FlatList, Pressable, Dimensions} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import COLORS from '../../Assets/Style/Color';
import InteractAvatar from '../../Components/ReusableComponent/Avatar';
import Heading from '../../Components/ReusableComponent/Heading';
import ButtonComp from '../../Components/ReusableComponent/Button';
import SafeArea from '../../Components/ReusableComponent/Safearea';
import EventCard from '../../Components/ReusableComponent/Events';
import {RefreshControl, ScrollView} from 'react-native-gesture-handler';
import MainCard from '../../Components/MainCard';
import BottomSheet from 'src/Components/ReusableComponent/BottomSheet';
import Filters from '../../Components/Filter';
import {yourProfile} from '../../Store/slices';
import {styles} from '../Events/style';
import {getRequest} from '../../App/fetch';
import {BASE_URL} from '../../App/api';
import {ActivityIndicator} from 'react-native-paper';

function MainScreen({navigation}) {
  const dispatch = useDispatch();
  const reducerData = useSelector(state => state);
  const {AuthReducer, isDark} = useSelector(state => state);
  console.log('isMatch HomeScreen:', isDark);
  console.log('reducerData: ', reducerData);

  const Interest = [
    {
      bgImg: require('src/Assets/Images/friends.png'),
    },
  ];

  const refRBSheet = useRef();

  const width = Dimensions.get('window').width;
  const PhotoWidth = width / 1.12;
  const LandscapePhotoWidth = width / 2.27;

  const height = Dimensions.get('window').height;
  const PhotoHeight = height / 3.1;
  const PhotoHeight1 = height / 2.8;

  const [eventData, setEventData] = useState([]);
  const [loading, setLoading] = useState(false);

  const btn = () => {
    navigation.navigate('Profiledetails');
  };
  console.log('AuthReducer?.userData: ', AuthReducer?.userData);

  const FilterHeight = height / 1.08;

  useEffect(() => {
    LoadMoreRandomData();
    reducerData?.isDark?.isMatch ? getInterestData() : null;
  }, []);

  const wait = timeout => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  };

  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    LoadMoreRandomData();
    reducerData?.isDark?.isMatch ? getInterestData() : null;
    console.log('working useEffect By Default');

    wait(2000).then(() => {
      //disable refreshing
      setRefreshing(false);
    });
  }, []);

  function LoadMoreRandomData() {
    setLoading(true);
    getRequest(`${BASE_URL}/getevents`, AuthReducer?.userData.userToken)
      .then(res => {
        let first = JSON.stringify(res);
        let second = JSON.parse(first);
        setEventData(second.data);
        console.log('eventData', eventData);
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
        setLoading(false);
      });
  }

  const [interestDataArray, setInterestDataArray] = useState([]);
  let interestFromGetInterest = [];

  function getInterestData() {
    // interestFromGetInterest = [];
    setLoading(true);
    getRequest(`${BASE_URL}/getinterest`)
      .then(res => {
        console.log('res from interest on main screen', res.data.interests);
        res.data.interests.map((data, key) => {
          console.log('Datalo', data.interestName);
          interestFromGetInterest.push(data.interestName);
          setLoading(false);
        });
        console.log('interestFromGetInterest: ', interestFromGetInterest);
        console.log(
          'AuthReducer?.userData.partnerProfile.partnerMergeInterest: ',
          AuthReducer?.userData.partnerProfile.partnerMergeInterest,
        );
        if (
          AuthReducer?.userData.partnerProfile.partnerMergeInterest.length !== 0
        ) {
          const intersection = interestFromGetInterest.filter(element =>
            AuthReducer?.userData.partnerProfile.partnerMergeInterest.includes(
              element,
            ),
          );
          console.log('intersection:', intersection);
          setInterestDataArray(intersection);
          console.log('Woring Not null');
        } else {
          console.log('Woring null');
          setInterestDataArray([...interestFromGetInterest]);
        }
        console.log('interestDataArray: ', interestDataArray);
      })
      .catch(err => {
        console.log('err from interest on main screen', err);
      });
  }

  return (
    <SafeArea>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        {loading ? (
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              flex: 1,
              paddingTop: '100%',
              alignSelf: 'center',
            }}>
            <ActivityIndicator size="large" color="#00ff00" />
          </View>
        ) : (
          <View
            style={{
              flexGrow: 1,
              margin: '4%',
            }}>
            <View style={{flexWrap: 'wrap'}}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  // alignContent:'space-between',
                  marginLeft: 1,
                  // backgroundColor: 'blue',
                }}>
                {/* <TouchableOpacity onPress={navigation.navigate('Profiledetails')}> */}
                <View style={{marginLeft: 5}}>
                  <InteractAvatar
                    size={58}
                    src={
                      AuthReducer?.userData?.profile_pic
                        ? {
                            uri: AuthReducer?.userData?.profile_pic,
                          }
                        : null
                    }
                    press={btn}
                  />
                </View>
                {/* </TouchableOpacity> */}
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    flex: 1,
                  }}>
                  <Image
                    style={{width: 30, height: 30}}
                    source={require('src/Assets/Images/logo.png')}
                  />
                  <Heading
                    Fontsize={24}
                    Heading={'Interact'}
                    txtAlign={'center'}
                    Fontweight={'700'}
                  />
                </View>
                {reducerData?.isDark?.isMatch ? (
                  <View style={{right: 5}}>
                    <ButtonComp
                      mode={'outlined'}
                      justify={'center'}
                      align={'center'}
                      btnHeight={63}
                      featherIcon={'message-circle'}
                      Borderwidth={2}
                      radius={30}
                      topMargin={0}
                      press={() => navigation.navigate('messages')}
                    />
                  </View>
                ) : (
                  <View>
                    <View>
                      <Text></Text>
                    </View>
                  </View>
                )}
                <BottomSheet refRBSheets={refRBSheet} height={FilterHeight}>
                  {/* <ScrollView contentContainerStyle={{flexGrow: 1}}> */}
                  <Filters />
                  {/* <Calendars /> */}
                  <View
                    style={{
                      justifyContent: 'center',
                      alignContent: 'center',
                      flexDirection: 'row',
                      marginTop: 10,
                      marginBottom: 20,
                    }}>
                    <ButtonComp
                      btnwidth={'85%'}
                      btnHeight={56}
                      btnText={'Continue'}
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
                  {/* </ScrollView> */}
                </BottomSheet>
              </View>
            </View>
            {reducerData?.isDark?.isMatch ? (
              <View
                style={{
                  marginTop: 30,
                  // backgroundColor:'black'
                  // borderWidth: 1,
                }}>
                {!!interestDataArray &&
                  interestDataArray !== [] &&
                  interestDataArray.length !== 0 && (
                    <>
                      <View>
                        <Heading
                          ml={7}
                          Heading={'For You'}
                          Fontweight={'700'}
                          Fontsize={23}
                          txtAlign={'left'}
                        />
                        <Heading
                          Heading={'Recommendations based on your profile'}
                          ml={7}
                          Fontweight={'normal'}
                          Fontsize={14}
                          txtAlign={'left'}
                        />
                      </View>
                      <View
                        style={{
                          marginTop: 20,
                          justifyContent: 'center',
                          alignItems: 'center',
                          // marginBottom: 120,
                        }}>
                        <FlatList
                          numColumns={2}
                          showsVerticalScrollIndicator={false}
                          keyExtractor={(item, index) => 'key' + index}
                          data={interestDataArray}
                          renderItem={({item}) => {
                            return (
                              <View
                                style={{
                                  padding: '1%',
                                  borderRadius: 15,
                                }}>
                                <Pressable
                                  onPress={() =>
                                    navigation.navigate('tinder', {item})
                                  }>
                                  <MainCard
                                    bgImg={Interest[0].bgImg}
                                    para={item}
                                  />
                                </Pressable>
                              </View>
                            );
                          }}
                        />
                      </View>
                    </>
                  )}

                <View style={{marginBottom: 10, marginTop: 30}}>
                  <Heading
                    ml={7}
                    Heading={'Nearby Events'}
                    Fontweight={'700'}
                    Fontsize={23}
                    txtAlign={'left'}
                  />
                  <Heading
                    Heading={'My Vibe...'}
                    ml={7}
                    Fontweight={'normal'}
                    Fontsize={16}
                    txtAlign={'left'}
                  />
                </View>
                <FlatList
                  contentContainerStyle={styles.flexable}
                  // numColumns={2}
                  // numColumns={2}
                  data={eventData}
                  renderItem={({item, index}) => {
                    return (
                      <>
                        <View
                          style={{
                            flexGrow: 1,
                            alignItems: 'center',
                            marginLeft: 5,
                            // borderWidth: 1,
                          }}>
                          <Pressable
                            onPress={() =>
                              navigation.navigate('eventDetails', {
                                eventCardDetail: item,
                              })
                            }>
                            <EventCard
                              width={
                                (index + 1) % 3 === 0
                                  ? PhotoWidth
                                  : LandscapePhotoWidth
                              }
                              height={
                                (index + 1) % 3 === 0
                                  ? PhotoHeight
                                  : PhotoHeight1
                              }
                              justify={
                                (index + 1) % 3 === 0
                                  ? 'space-between'
                                  : 'flex-end'
                              }
                              Textalign={
                                (index + 1) % 3 === 0 ? 'center' : 'left'
                              }
                              marginRight={(index + 1) % 3 === 0 ? 0 : 20}
                              Align={(index + 1) % 3 === 0 ? 'left' : 'center'}
                              marginLeft={(index + 1) % 3 === 0 ? 20 : 0}
                              title={item.eventName}
                              subtitle={item.eventDescription}
                              bgImg={{uri: item.eventImage}}
                              // para={item.name}
                              onEndReachedThreshold={0}
                              onEndReached={LoadMoreRandomData}
                            />
                          </Pressable>
                        </View>
                      </>
                    );
                  }}
                />
              </View>
            ) : (
              <View
                style={{
                  marginTop: 30,
                  marginBottom: 120,
                }}>
                <View style={{marginBottom: 10, marginTop: 30}}>
                  <Heading
                    ml={7}
                    Heading={'Nearby Events'}
                    Fontweight={'700'}
                    Fontsize={23}
                    txtAlign={'left'}
                  />
                  <Heading
                    Heading={'My Vibe...'}
                    ml={7}
                    Fontweight={'normal'}
                    Fontsize={16}
                    txtAlign={'left'}
                  />
                </View>
                <FlatList
                  contentContainerStyle={styles.flexable}
                  refreshControl={
                    <RefreshControl
                      refreshing={refreshing}
                      onRefresh={onRefresh}
                    />
                  }
                  data={eventData}
                  renderItem={({item, index}) => {
                    return (
                      <>
                        <View
                          style={{
                            flexGrow: 1,
                            alignItems: 'center',
                            marginLeft: 5,
                            // borderWidth: 1,
                          }}>
                          <Pressable
                            onPress={() =>
                              navigation.navigate('eventDetails', {
                                eventCardDetail: item,
                              })
                            }>
                            <EventCard
                              width={
                                (index + 1) % 3 === 0
                                  ? PhotoWidth
                                  : LandscapePhotoWidth
                              }
                              height={
                                (index + 1) % 3 === 0
                                  ? PhotoHeight
                                  : PhotoHeight1
                              }
                              justify={
                                (index + 1) % 3 === 0
                                  ? 'space-between'
                                  : 'flex-end'
                              }
                              Textalign={
                                (index + 1) % 3 === 0 ? 'center' : 'left'
                              }
                              marginRight={(index + 1) % 3 === 0 ? 0 : 20}
                              Align={(index + 1) % 3 === 0 ? 'left' : 'center'}
                              marginLeft={(index + 1) % 3 === 0 ? 20 : 0}
                              title={item.eventName}
                              subtitle={item.eventDescription}
                              bgImg={{uri: item.eventImage}}
                              // para={item.name}
                              onEndReachedThreshold={0}
                              onEndReached={LoadMoreRandomData}
                            />
                          </Pressable>
                        </View>
                      </>
                    );
                  }}
                />
                {/* </View> */}
              </View>
            )}
            {eventData.length === 0 && (
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: 30,
                }}>
                <Image source={require('../../Assets/Images/calender.png')} />
                <Heading
                  Heading={'No Event Schedule Yet !'}
                  mt={20}
                  Fontweight={'700'}
                  Fontsize={16}
                  txtAlign={'left'}
                />
              </View>
            )}
          </View>
        )}
      </ScrollView>
    </SafeArea>
  );
}

export default MainScreen;
