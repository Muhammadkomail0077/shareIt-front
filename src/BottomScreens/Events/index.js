import React, {useState} from 'react';
import {useEffect} from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  Pressable,
  TouchableOpacity,
  View,
} from 'react-native';
import {ScrollView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {BASE_URL} from '../../App/api';
import {getRequest, getRequestFromFormData} from '../../App/fetch';
import COLORS from '../../Assets/Style/Color';
import MainCard from '../../Components/MainCard';
import InteractAvatar from '../../Components/ReusableComponent/Avatar';
import ButtonComp from '../../Components/ReusableComponent/Button';
import EventCard from '../../Components/ReusableComponent/Events';
import Heading from '../../Components/ReusableComponent/Heading';
import SafeArea from '../../Components/ReusableComponent/Safearea';
import {yourProfile} from '../../Store/slices';
import {styles} from './style';
import {ActivityIndicator} from 'react-native-paper';
import {RefreshControl} from 'react-native-gesture-handler';

function Events({navigation}) {
  const reducerData = useSelector(state => state);
  const dispatch = useDispatch();
  const btn = () => {
    dispatch(yourProfile(true));
    navigation.navigate('Profiledetails');
  };

  const friends = [
    {
      id: 1,
      bgImg: require('src/Assets/Images/events.png'),
      name: 'Free Tonight?',
      title: 'Down for something',
      subtitle: 'Discover',
    },
    {
      id: 2,
      bgImg: require('src/Assets/Images/events.png'),
      name: 'Let’s be family.',
      title: 'Down for something',
      subtitle: 'Discover',
    },
    {
      id: 3,
      bgImg: require('src/Assets/Images/img.png'),
      name: 'Coffee Meetup?',
      title: 'Down for something',
      subtitle: 'Discover',
    },
    {
      id: 4,
      bgImg: require('src/Assets/Images/events.png'),
      name: 'Anna & Shan',
      title: 'Down for something',
      subtitle: 'Discover',
    },
    {
      id: 5,
      bgImg: require('src/Assets/Images/events.png'),
      name: 'Anna & Shan',
      title: 'Down for something',
      subtitle: 'Discover',
    },
    {
      id: 6,
      bgImg: require('src/Assets/Images/img.png'),
      name: 'Anna & Shan',
      title: 'Down for something',
      subtitle: 'Discover',
    },
  ];
  const width = Dimensions.get('window').width;
  const PhotoWidth = width / 1.13;
  const smallWidth = width / 2.29;

  const height = Dimensions.get('window').height;
  const PhotoHeight = height / 3.1;
  const smallHeight = height / 2.8;

  const {AuthReducer} = useSelector(state => state);
  // console.log('AuthReducer?.userData:', AuthReducer?.userData.userToken);

  const [createdEventData, setCreatedEventData] = useState([]);
  const [loading, setLoading] = useState(false);

  function getData() {
    setLoading(true);
    getRequest(`${BASE_URL}/getEventsByUser`, AuthReducer?.userData.userToken)
      .then(res => {
        // console.log('res' + JSON.stringify(res));
        let first = JSON.stringify(res);
        let second = JSON.parse(first);
        // console.log(second);
        setCreatedEventData(second.data);
        console.log('createdEventData', createdEventData);
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
        setLoading(false);
      });
  }

  useEffect(() => {
    getData();
  }, []);

  const wait = timeout => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  };

  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    getData();
    console.log('working useEffect By Default');

    wait(2000).then(() => {
      //disable refreshing
      setRefreshing(false);
    });
  }, []);

  return (
    <SafeArea>
      {loading ? (
        <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
          <ActivityIndicator size="large" color="#00ff00" />
        </View>
      ) : (
        <ScrollView
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }>
          {reducerData?.isDark?.isMatch ? (
            <View
              style={{
                flexGrow: 1,
                margin: '4%',
                // backgroundColor: 'blue',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  // margin: 30,
                  justifyContent: 'space-between',
                  marginLeft: 5,
                  marginRight: 5,
                }}>
                <InteractAvatar
                  size={58}
                  // src={require('src/Assets/Images/avatar.png')}
                  press={btn}
                />
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                  <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <Image
                      style={{width: 30, height: 30}}
                      source={require('src/Assets/Images/logo.png')}
                    />
                  </TouchableOpacity>
                  <Heading
                    Fontsize={24}
                    Heading={'My Events'}
                    txtAlign={'center'}
                    Fontweight={'700'}
                  />
                </View>
                <ButtonComp
                  mode={'outlined'}
                  justify={'center'}
                  align={'center'}
                  btnHeight={60}
                  featherIcon={'plus'}
                  Borderwidth={2}
                  radius={15}
                  topMargin={0}
                  press={() => navigation.navigate('Addevent')}
                />
              </View>
              {/* <View
                style={{
                  marginTop: 30,
                  // borderWidth: 1,
                }}>
                <View style={{marginBottom: 10}}>
                  <Heading
                    ml={7}
                    Heading={'Interesting Events'}
                    Fontweight={'700'}
                    Fontsize={19}
                    txtAlign={'left'}
                  />
                </View>
                <FlatList
                  contentContainerStyle={styles.flexable}
                  // numColumns={2}
                  data={friends}
                  renderItem={({item, index}) => {
                    return (
                      <>
                        {index <= 2 ? (
                          <View
                            style={{
                              flexGrow: 1,
                              alignItems: 'center',
                              marginLeft: 5,
                              // borderWidth: 1,
                            }}>
                            <EventCard
                              width={
                                (index + 1) % 3 === 0 ? PhotoWidth : smallWidth
                              }
                              height={
                                (index + 1) % 3 === 0
                                  ? PhotoHeight
                                  : smallHeight
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
                              title={item.title}
                              subtitle={item.subtitle}
                              bgImg={item.bgImg}
                              para={item.name}
                            />
                          </View>
                        ) : (
                          <></>
                        )}
                      </>
                    );
                  }}
                />
                
              </View> */}
              <View style={{marginTop: 20}}>
                <Heading
                  ml={7}
                  Heading={'Created Events'}
                  Fontweight={'700'}
                  Fontsize={19}
                  txtAlign={'left'}
                />
              </View>
              <View
                style={{
                  marginTop: 20,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <FlatList
                  numColumns={2}
                  showsVerticalScrollIndicator={false}
                  keyExtractor={(item, index) => 'key' + index}
                  data={createdEventData}
                  renderItem={({item, index}) => {
                    return (
                      <>
                        <Pressable
                          onPress={() =>
                            navigation.navigate('eventDetails', {
                              eventCardDetail: item,
                            })
                          }>
                          {index <= 1 ? (
                            <View
                              style={{
                                margin: '1%',
                              }}>
                              <EventCard
                                width={smallWidth}
                                height={smallHeight}
                                justify={'flex-end'}
                                Textalign={'left'}
                                marginRight={20}
                                Align={'center'}
                                marginLeft={0}
                                // title={
                                //   item?.eventName
                                //     ? item?.eventName
                                //     : 'item.title'
                                // }
                                subtitle={
                                  item?.eventDescription
                                    ? item?.eventDescription
                                    : 'Loading...'
                                }
                                bgImg={
                                  item?.eventImage
                                    ? {uri: item?.eventImage}
                                    : 'Loading...'
                                }
                                para={
                                  item?.eventName
                                    ? item?.eventName
                                    : 'Loading...'
                                }
                              />
                            </View>
                          ) : (
                            <></>
                          )}
                        </Pressable>
                      </>
                    );
                  }}
                />
              </View>
            </View>
          ) : (
            <View
              style={{
                flexGrow: 1,
                margin: '4%',
                // backgroundColor: 'blue',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  // margin: 10,
                  justifyContent: 'space-between',
                  marginLeft: 5,
                  marginRight: 5,
                }}>
                <InteractAvatar
                  size={58}
                  // src={require('src/Assets/Images/avatar.png')}
                  press={btn}
                />
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                  <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <Image
                      style={{width: 30, height: 30}}
                      source={require('src/Assets/Images/logo.png')}
                    />
                  </TouchableOpacity>
                  <Heading
                    Fontsize={20}
                    Heading={'My Events'}
                    txtAlign={'center'}
                    Fontweight={'700'}
                  />
                </View>
                {/* <View style={{right: 15}}> */}
                <ButtonComp
                  mode={'outlined'}
                  justify={'center'}
                  align={'center'}
                  btnHeight={63}
                  featherIcon={'plus'}
                  Borderwidth={2}
                  radius={15}
                  topMargin={0}
                  press={() => navigation.navigate('Addevent')}
                />
                {/* </View> */}
              </View>

              <View
                style={{
                  marginTop: 30,
                }}>
                <View style={{marginBottom: 10}}>
                  <Heading
                    Heading={'Interesting Events'}
                    Fontweight={'700'}
                    Fontsize={23}
                    txtAlign={'left'}
                  />
                  <View
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginTop: 30,
                    }}>
                    <Image
                      source={require('../../Assets/Images/noEvent.png')}
                    />
                    <Heading
                      Heading={'No Interested Event Yet !'}
                      mt={20}
                      Fontweight={'700'}
                      Fontsize={16}
                      txtAlign={'left'}
                    />
                  </View>
                </View>
              </View>

              <View
                style={{
                  marginTop: 30,
                }}>
                <View style={{marginBottom: 10}}>
                  <Heading
                    Heading={'Created Events'}
                    Fontweight={'700'}
                    Fontsize={23}
                    txtAlign={'left'}
                  />
                  {createdEventData.length !== 0 ? (
                    createdEventData.map((item, id) => (
                      <View
                        style={{
                          justifyContent: 'center',
                          alignItems: 'center',
                          marginTop: 30,
                        }}>
                        <Pressable
                          onPress={() =>
                            navigation.navigate('eventDetails', {
                              eventCardDetail: item,
                            })
                          }>
                          <EventCard
                            width={PhotoWidth}
                            height={PhotoHeight}
                            justify={'space-between'}
                            Textalign={'center'}
                            marginRight={0}
                            Align={'center'}
                            title={
                              item?.eventName
                                ? item?.eventName
                                : 'Take you to the your favorite cafe'
                            }
                            bgImg={{uri: item.eventImage}}
                            // para={
                            //   item?.eventDescription
                            //     ? item.eventDescription
                            //     : 'Loading....'
                            // }
                          />
                        </Pressable>
                      </View>
                    ))
                  ) : (
                    <View
                      style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: 30,
                      }}>
                      <Image
                        source={require('../../Assets/Images/calender.png')}
                      />
                      <Heading
                        Heading={'No Event Created Yet !'}
                        mt={20}
                        Fontweight={'700'}
                        Fontsize={16}
                        txtAlign={'left'}
                      />
                    </View>
                  )}
                </View>
              </View>
            </View>
          )}
        </ScrollView>
      )}
    </SafeArea>
  );
}

export default Events;
