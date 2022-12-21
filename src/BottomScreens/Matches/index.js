import React, {useEffect, useState} from 'react';
import {FlatList, Image, Pressable, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {ActivityIndicator, Divider} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {BASE_URL} from '../../App/api';
import {getRequest} from '../../App/fetch';
import COLORS from '../../Assets/Style/Color';
import InteractAvatar from '../../Components/ReusableComponent/Avatar';
import ButtonComp from '../../Components/ReusableComponent/Button';
import FriendsCard from '../../Components/ReusableComponent/FriendsCard';
import Heading from '../../Components/ReusableComponent/Heading';
import InteractParagraph from '../../Components/ReusableComponent/Paragraph';
import SafeArea from '../../Components/ReusableComponent/Safearea';
import {yourProfile} from '../../Store/slices';

function Matches({navigation}) {
  const reducerData = useSelector(state => state);

  // const [hello, setHello] = useState(true);
  const dispatch = useDispatch();

  const btn = () => {
    dispatch(yourProfile(false));
    navigation.navigate('Mainprofile');
  };

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
  const {AuthReducer} = useSelector(state => state);
  const [loading, setLoading] = useState(false);
  const [matchesDataArray, setMatchesDataArray] = useState([]);

  const getMatchesData = () => {
    setLoading(true);
    getRequest(`${BASE_URL}/getMatchInteract`, AuthReducer?.userData.userToken)
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
    <SafeArea>
      {loading ? (
        <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
          <ActivityIndicator size="large" color="#00ff00" />
        </View>
      ) : (
        <>
          {reducerData?.isDark?.isMatch ? (
            <ScrollView>
              <View
                style={{
                  flex: 1,
                  margin: '4%',
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    //   margin: 30,
                    justifyContent: 'space-between',
                  }}>
                  <View
                    style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Heading
                      Fontsize={34}
                      Heading={'Interactions'}
                      txtAlign={'center'}
                      Fontweight={'700'}
                    />
                  </View>
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
                <InteractParagraph
                  mt={10}
                  fs={17}
                  fw={'100'}
                  txtAlign={'justify'}
                  p={
                    'This is a list of people who have liked you and your matches.'
                  }
                />
                <View style={{marginTop: '15%', flexDirection: 'row'}}>
                  <Divider
                    style={{
                      width: '40%',
                      borderColor: COLORS.border_color,
                      borderWidth: 1,
                    }}
                  />
                  <InteractParagraph mt={-10} fw={'100'} ml={5} p={'Today '} />
                  <Divider
                    style={{
                      width: '43%',
                      borderColor: COLORS.border_color,
                      borderWidth: 1,
                    }}
                  />
                </View>
                <View
                  style={{
                    marginTop: 20,
                    flexDirection: 'row',
                  }}>
                  <FlatList
                    numColumns={2}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => 'key' + index}
                    data={matchesDataArray}
                    renderItem={({item}) => {
                      return (
                        <View
                          style={{
                            flexGrow: 1,
                            alignItems: 'center',
                          }}>
                          <Pressable onPress={btn}>
                            <FriendsCard
                              bgImg={
                                item.partnerImage
                                  ? {uri:item.partnerImage}
                                  : require('src/Assets/Images/friends.png')
                              }
                              para={item.partnerName}
                            />
                          </Pressable>
                        </View>
                      );
                    }}
                  />
                </View>
              </View>
            </ScrollView>
          ) : (
            <View
              style={{
                // flex: 1,
                flexGrow: 1,
                margin: '4%',
                // backgroundColor: 'blue',
              }}>
              <View style={{alignItems: 'center'}}>
                <Heading
                  Fontsize={34}
                  Heading={'Interactions'}
                  txtAlign={'center'}
                  Fontweight={'700'}
                />
              </View>

              <InteractParagraph
                mt={10}
                fs={17}
                fw={'100'}
                txtAlign={'center'}
                p={
                  'This is a list of people who have liked you and your matches.'
                }
              />
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexGrow: 1,
                }}>
                <InteractParagraph
                  mt={10}
                  fs={17}
                  fw={'normal'}
                  lh={25}
                  txtAlign={'center'}
                  p={
                    'An individual can’t get matched Only paired profiles are able to interact with matched profiles'
                  }
                />
              </View>
              {/* </View> */}
            </View>
          )}
          {matchesDataArray.length === 0 && (
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginBottom: 130,
                }}>
                <Image source={require('../../Assets/Images/people.png')} />
                <Heading
                  Heading={'No Interaction Yet !'}
                  // mt={20}
                  Fontweight={'700'}
                  Fontsize={16}
                  txtAlign={'left'}
                />
              </View>
            )}
        </>
      )}
    </SafeArea>
  );
}

export default Matches;
