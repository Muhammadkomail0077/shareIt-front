import React, {useRef} from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  Pressable,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import InteractAvatar from '../../Components/ReusableComponent/Avatar';
import ButtonComp from '../../Components/ReusableComponent/Button';
import EventCard from '../../Components/ReusableComponent/Events';
import Heading from '../../Components/ReusableComponent/Heading';
import SafeArea from '../../Components/ReusableComponent/Safearea';
import BottomSheet from 'src/Components/ReusableComponent/BottomSheet';
import SecondFilters from '../../Components/SecondFilter';
import COLORS from '../../Assets/Style/Color';
import {styles} from '../../BottomScreens/Events/style';
import {yourProfile} from '../../Store/slices';
import {getRequest} from '../../App/fetch';
import {BASE_URL} from '../../App/api';
import {useState} from 'react';
import {useEffect} from 'react';
import {ActivityIndicator} from 'react-native-paper';
import {RefreshControl} from 'react-native-gesture-handler';

function MoreEvents({navigation}) {
  const reducerData = useSelector(state => state);
  const dispatch = useDispatch();
  const refRBSheet = useRef();

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
  const btn = () => {
    dispatch(yourProfile(true));
    navigation.navigate('Profiledetails');
  };

  const width = Dimensions.get('window').width;
  const PhotoWidth = width / 1.12;
  const LandscapePhotoWidth = width / 2.27;

  const height = Dimensions.get('window').height;
  const PhotoHeight = height / 3.1;
  const PhotoHeight1 = height / 2.8;
  const FilterHeight = height / 1.12;

  const [eventData, setEventData] = useState([]);
  const [loading, setLoading] = useState(false);

  const {AuthReducer, isDark} = useSelector(state => state);
  console.log('isMatch HomeScreen:', isDark);
  console.log('reducerData: ', reducerData);

  function LoadMoreRandomData() {
    setLoading(true);
    getRequest(`${BASE_URL}/getevents`, AuthReducer?.userData.userToken)
      .then(res => {
        // console.log('res' + JSON.stringify(res));
        let first = JSON.stringify(res);
        let second = JSON.parse(first);
        // console.log(second);
        setEventData(second.data);
        console.log('eventData', eventData);
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
        setLoading(false);
      });
  }

  useEffect(() => {
    LoadMoreRandomData();
  }, []);

  const wait = timeout => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  };

  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    LoadMoreRandomData();
    console.log('working useEffect By Default');

    wait(2000).then(() => {
      //disable refreshing
      setRefreshing(false);
    });
  }, []);

  return (
    <SafeArea>
      {/* <ScrollView> */}
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
                marginLeft: 10,
                // backgroundColor: 'blue',
              }}>
              {/* <TouchableOpacity onPress={navigation.navigate('Profiledetails')}> */}
              <View>
                <InteractAvatar
                  size={58}
                  // src={require('src/Assets/Images/avatar.png')}
                  press={btn}
                />
              </View>
              {/* </TouchableOpacity> */}
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                  <Image
                    style={{width: 30, height: 30}}
                    source={require('src/Assets/Images/logo.png')}
                  />
                </TouchableOpacity>
                <Heading
                  Fontsize={24}
                  Heading={'Interact'}
                  txtAlign={'center'}
                  Fontweight={'700'}
                />
              </View>

              <View>
                <ButtonComp
                  mode={'outlined'}
                  justify={'center'}
                  align={'center'}
                  btnHeight={60}
                  icon={'options-outline'}
                  Borderwidth={2}
                  radius={15}
                  // align={'flex-end'}
                  // leftMargin={20}
                  topMargin={0}
                  press={() => refRBSheet.current.open()}
                />
              </View>
              <BottomSheet refRBSheets={refRBSheet} height={FilterHeight}>
                <ScrollView contentContainerStyle={{flexGrow: 1}}>
                  <SecondFilters />
                  {/* <Calendars /> */}
                  <View
                    style={{
                      justifyContent: 'center',
                      alignContent: 'center',
                      flexDirection: 'row',
                      marginTop: 10,
                      marginBottom: 30,
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
                </ScrollView>
              </BottomSheet>
            </View>
          </View>

          <View
            style={{
              marginTop: 30,
              marginBottom:120
            }}>
            <FlatList
              contentContainerStyle={styles.flexable}
              // numColumns={2}
              // numColumns={2}
              refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
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
                            (index + 1) % 3 === 0 ? PhotoHeight : PhotoHeight1
                          }
                          justify={
                            (index + 1) % 3 === 0 ? 'space-between' : 'flex-end'
                          }
                          Textalign={(index + 1) % 3 === 0 ? 'center' : 'left'}
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
        </View>
      )}
      {/* </ScrollView> */}
    </SafeArea>
  );
}

export default MoreEvents;
