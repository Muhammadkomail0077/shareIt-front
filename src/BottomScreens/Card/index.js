import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  Image,
  Pressable,
  ScrollView,
  TouchableOpacity,
  DevSettings,
  Dimensions,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Swiper from 'react-native-deck-swiper';
import CardSwipe from '../../Components/CardSwipe/index';
import COLORS from '../../Assets/Style/Color';
import InteractAvatar from '../../Components/ReusableComponent/Avatar';
import Heading from '../../Components/ReusableComponent/Heading';
import ButtonComp from '../../Components/ReusableComponent/Button';
import SafeArea from '../../Components/ReusableComponent/Safearea';
import Entypo from 'react-native-vector-icons/Entypo';
import Material from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './AppStyles';
import {Card, IconButton, OverlayLabel} from '../../Components/TinderSlider';
import {PhotoCards} from '../../Assets/Constants/';
import BottomSheet from 'src/Components/ReusableComponent/BottomSheet';
import Filters from '../../Components/Filter';
import {yourProfile} from '../../Store/slices';
import SecondFilters from '../../Components/SecondFilter';
import BoostPopup from '../../Components/BoostPopup';
import {BASE_URL} from '../../App/api';
import {
  getRequest,
  postRequest,
  postRequestWithFormData,
  postRequestWithFormDataWIthOutBody,
} from '../../App/fetch';
import {ActivityIndicator} from 'react-native-paper';
import {showError, showSuccess} from '../../utils/PopupFunctions';
// import {DevSettings} from 'react-native';

const familyIcon = '../../Assets/Images/TinderSLider/Shy-rafiki.png';

const TinderCard = ({navigation, route}) => {
  const item = route.params;
  // console.log('item: ', item.item);
  const useSwiper = useRef();
  const sliderIndex = useRef(0);
  const [index, setIndex] = useState(0);
  const reducerData = useSelector(state => state);
  const [isLeftSwipe, setIsLeftSwipe] = useState('');
  const [isRightSwipe, setIsRightSwipe] = useState('');

  useEffect(() => {
    console.log(
      '🚀 ~ file: index.js ~ line 45 ~ TinderCard ~ isLeftSwipe',
      isLeftSwipe,
    );
  }, [isLeftSwipe]);

  useEffect(() => {
    console.log(
      '🚀 ~ file: index.js ~ line 45 ~ TinderCard ~ isLeftSwipe',
      isRightSwipe,
    );
  }, [isRightSwipe]);

  const handleOnSwipedTop = () => useSwiper.current.swipeTop();
  const refRBSheet = useRef();
  const dispatch = useDispatch();
  const [refreshing, setRefreshing] = useState(0);
  const [visible, setVisible] = React.useState(false);
  const showModal = () => setVisible(true);
  // const reducerData = useSelector(state => state);

  const {AuthReducer} = useSelector(state => state);
  // console.log('AuthReducer: ', AuthReducer.userData);

  const hideModal = () => setVisible(false);

  const [checkIndex, setCheckIndex] = useState(0);
  const [cardData, setCardData] = useState([]);
  // console.log(
  //   '🚀 ~ file: index.js:97 ~ TinderCard ~ cardData',
  //   cardData,
  //   PhotoCards,
  // );

  const reload = () => {
    // sliderIndex.current(0);
  };
  const height = Dimensions.get('window').height;
  const FilterHeight = height / 1.12;

  const btn = () => {
    dispatch(yourProfile(true));
    navigation.navigate('Profiledetails');
  };
  const [loading, setLoading] = useState(false);

  const getData = () => {
    console.log('item: ', item.item);
    setCardData([]);
    setLoading(true);
    getRequest(
      `${BASE_URL}/getInteractswithInterest/${item.item}`,
      AuthReducer?.userData.userToken,
    )
      .then(res => {
        // console.log('res: ',res);
        let first = JSON.stringify(res);
        let second = JSON.parse(first);
        console.log(second.data);
        // const duplicateRes = second.data.filter(function (elem, pos) {
        //   return second.data.indexOf(elem) == pos;
        // });
        const ids = second.data.map(o => o._id);
        console.log('ids: ', ids);
        const filtered = second.data.filter(
          ({_id}, index) => !ids.includes(_id, index + 1),
        );
        console.log('filtered: ', filtered);
        setCardData(filtered);
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
        setLoading(false);
      });
  };

  // useEffect(() => {
  //   getData();
  // }, []);

  useEffect(() => {
    getData();
  }, [item]);

  const likeOrDislike = (swipe_val ,ind)=> {
    console.log('cardData ==============>: ',cardData[ind]);

    if (swipe_val === 'Dislike') {
      console.log('isLeftSwipe: ', isLeftSwipe);
      console.log('cardData[index]: ', cardData[ind]);
      let spliceValue = cardData[ind];
      console.log('spliceValue: ', spliceValue._id);
        postRequestWithFormDataWIthOutBody(
          `${BASE_URL}/dislikePartner/${spliceValue._id}`,
          AuthReducer?.userData.userToken,
        )
          .then(res => {
            console.log(res);
            if (res.success == true) {
              // showSuccess('Successfully Dislike partner');
            } else {
              showError('Something Went Wrong');
            }
          })
          .catch(err => {
            console.log(err);
            showError('Something Went Wrong');
          });
      
    }
    else {
      console.log('cardData[ind]: ', cardData[ind]);
      let spliceValue = cardData[ind];
      console.log('spliceValue: ', spliceValue._id);

      postRequestWithFormDataWIthOutBody(
        `${BASE_URL}/likePartner/${spliceValue._id}`,
        AuthReducer?.userData.userToken,
      )
        .then(res => {
          console.log(res);
          if (res.success == true) {
            // showSuccess('Successfully like partner');
            if (res.match == false) {
              showSuccess('Waiting other partner to like you Back');
            } else {
              showSuccess('You got a Match');
            }
          } else {
            showError('Something Went Wrong');
          }
        })
        .catch(err => {
          console.log(err);
          showError('Something Went Wrong');
        });
    }


  };

  const renderCard = (card, index) => {
    if (cardData !== [] && card) {
      return (
        <>
          <Card card={card} sliderIndex={sliderIndex} index={index} />
          {/* {console.log('card in render card', card)}
          {console.log('index in render card', index)} */}
        </>
      );
    }
  };

  const handleOnSwipedRight = () => {
    useSwiper.current.swipeRight();
    console.log('right Dislike');
  };

  const handleOnSwipedLeft = () => {
    useSwiper.current.swipeLeft();
    console.log('Left Like');
  };

  return (
    <SafeArea>
      <BoostPopup
        Modal={showModal}
        style={styles.Image}
        hideModal={hideModal}
        setVisible={setVisible}
        visible={visible}
      />

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
              alignItems: 'center',
              marginLeft: 5,
            }}>
            <View>
              <InteractAvatar size={58} press={btn} />
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                flex: 1,
              }}>
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

            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Pressable>
                <Material
                  name="bell-badge-outline"
                  size={30}
                  color={COLORS.primary}
                />
              </Pressable>
              <Pressable onPress={() => refRBSheet.current.open()}>
                <View
                  style={{
                    borderWidth: 1,
                    height: 45,
                    width: 45,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderColor: COLORS.border_color,
                    borderRadius: 15,
                    marginLeft: 5,
                  }}>
                  <Ionicons
                    name="options-outline"
                    size={25}
                    color={COLORS.primary}
                  />
                </View>
              </Pressable>
            </View>
            <BottomSheet refRBSheets={refRBSheet} height={FilterHeight}>
              <ScrollView>
                <SecondFilters />
                <View
                  style={{
                    justifyContent: 'center',
                    alignContent: 'center',
                    flexDirection: 'row',
                    marginTop: 10,
                    marginBottom: 20,
                  }}>
                  <ButtonComp
                    btnwidth={'87%'}
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
      </View>
      {loading ? (
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1,
            // paddingTop: '100%',
            marginBottom: 150,
            alignSelf: 'center',
          }}>
          <ActivityIndicator size="large" color="#00ff00" />
        </View>
      ) : (
        <>
          {cardData?.length !== 0 ? (
            <View style={styles.container}>
              <View style={styles.swiperContainer}>
                <Swiper
                onSwipedAll={() => setCardData([])}
                  ref={useSwiper}
                  containerStyle={styles.container}
                  cards={cardData.length !== 0 && cardData}
                  renderCard={(card, index) => <>{renderCard(card, index)}</>}
                  cardIndex={0}
                  backgroundColor={
                    reducerData?.isDark?.isdark
                      ? COLORS.darkMode
                      : COLORS.bgcolor
                  }
                  onSwiped={cardIndex => {
                    setIndex(cardIndex);
                  }}
                  onSwipedLeft={(ind) => likeOrDislike('like',ind)}
                  onSwipedRight={(ind) => likeOrDislike('Dislike',ind)}
                  stackSize={3}
                  swipeAnimationDuration={650}
                  stackSeparation={-10}
                  swipeBack={55}
                  stackAnimationTension={0}
                  stackScale={0}
                  disableBottomSwipe={true}
                  disableTopSwipe={true}
                  outputRotationRange={['-30deg', '0deg', '30deg']}
                  // infinite={true}
                  showSecondCard={true}
                  overlayOpacityHorizontalThreshold={100 / 2}
                  overlayOpacityVerticalThreshold={100 / 2}
                  overlayLabels={{
                    right: {
                      title: 'NOPE',
                      element: (
                        <IconButton
                          size={40}
                          name="close"
                          onPress={handleOnSwipedRight}
                          color={COLORS.darkGreen}
                          backgroundColor={COLORS.white}
                        />
                      ),
                      style: {
                        wrapper: styles.overlayWrapper,
                      },
                    },

                    left: {
                      title: 'LIKE',
                      element: (
                        <IconButton
                          size={40}
                          name="heart"
                          onPress={handleOnSwipedLeft}
                          color={COLORS.darkGreen}
                          backgroundColor={COLORS.white}
                        />
                      ),
                      style: {
                        wrapper: {
                          ...styles.overlayWrapper,
                          // alignItems: 'center',
                          marginLeft: 1,
                        },
                      },
                    },
                  }}
                />
                {/* </TouchableOpacity> */}
              </View>
              <View style={styles.buttonsContainer}>
                <IconButton
                  name="reload1"
                  // onPress={reload}
                  color={COLORS.lightGreen}
                  backgroundColor={COLORS.white}
                />
                <IconButton
                  size={30}
                  name="close"
                  onPress={handleOnSwipedRight}
                  color={COLORS.white}
                  backgroundColor={COLORS.darkGreen}
                />
                <IconButton
                  size={30}
                  name="heart"
                  onPress={handleOnSwipedLeft}
                  color={COLORS.white}
                  backgroundColor={COLORS.darkGreen}
                />

                <Pressable
                  onPress={showModal}
                  style={{
                    backgroundColor: COLORS.white,
                    borderRadius: 50,
                    alignItems: 'center',
                    justifyContent: 'center',
                    shadowColor: 'black',
                    shadowOffset: {
                      width: 0,
                      height: 2,
                    },
                    shadowRadius: 6,
                    shadowOpacity: 0.3,
                    elevation: 2,
                    padding: 15,
                  }}>
                  <Entypo
                    name="flash"
                    size={20}
                    style={{color: COLORS.lightGreen}}
                  />
                </Pressable>
              </View>
            </View>
          ) : (
            cardData.length === 0 && (
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  // marginTop: 30,
                  marginBottom: 150,
                }}>
                <Image source={require('../../Assets/Images/people.png')} />
                <Heading
                  Heading={'No More Profile Available !'}
                  mt={20}
                  Fontweight={'700'}
                  Fontsize={16}
                  txtAlign={'left'}
                />
              </View>
            )
          )}
        </>
      )}
    </SafeArea>
  );
};

export default TinderCard;
