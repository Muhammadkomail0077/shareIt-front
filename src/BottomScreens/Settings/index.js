import React, {useRef} from 'react';
import {Image, Pressable, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import ButtonComp from '../../Components/ReusableComponent/Button';
import Heading from '../../Components/ReusableComponent/Heading';
import InteractParagraph from '../../Components/ReusableComponent/Paragraph';
import SafeArea from '../../Components/ReusableComponent/Safearea';
import COLORS from '../../Assets/Style/Color';
import {Divider, List} from 'react-native-paper';
import FONT from 'src/Assets/Style/Font';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import {isMatch, UserData} from '../../Store/slices';
import {removeUserDataFromAsyncStorage} from '../../Store/slices/user';
import {useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {setDataToAsyncStorage} from '../../utils/getAndSetDataToAsync';

function MainSetting({navigation}) {
  const emptyIcon = () => {
    return (
      <Icon
        name="arrow-right"
        color={reducerData?.isDark?.isdark ? COLORS.white : COLORS.dark}
      />
    );
  };
  const [tap, setTap] = React.useState(false);
  const [tap1, setTap1] = React.useState(false);
  const [tap2, setTap2] = React.useState(false);
  const [tap3, setTap3] = React.useState(false);
  const [expand, setExpand] = React.useState(false);
  const [expand1, setExpand1] = React.useState(false);
  const [expand2, setExpand2] = React.useState(false);
  const [expand3, setExpand3] = React.useState(false);
  const reducerData = useSelector(state => state);

  const tapper = () => {
    if (tap === false) {
      //   console.log('trye');
      setTap(true);
      setExpand(true);
      setExpand1(false);
      setExpand2(false);
      setExpand3(false);
      if (expand1 || expand2 || expand3) {
        setTap1(false);
        setTap2(false);
        setTap3(false);
      }
    } else if (tap === true) {
      setTap(false);
      setExpand(false);
    }
  };
  const tapper1 = () => {
    if (tap1 === false) {
      console.log('true');
      setTap1(true);
      setExpand1(true);
      setExpand(false);
      setExpand2(false);
      setExpand3(false);
      if (expand || expand2 || expand3) {
        setTap(false);
        setTap2(false);
        setTap3(false);
      }
    } else if (tap1 === true) {
      console.log('false');
      setTap1(false);
      setExpand1(false);
    }
  };
  const tapper2 = () => {
    if (tap2 === false) {
      setTap2(true);
      setExpand2(true);
      setExpand(false);
      setExpand1(false);
      setExpand3(false);
      if (expand || expand1 || expand3) {
        setTap(false);
        setTap1(false);
        setTap3(false);
      }
    } else if (tap2 === true) {
      setTap2(false);
      setExpand2(false);
    }
  };
  const tapper3 = () => {
    if (tap3 === false) {
      setTap3(true);
      setExpand3(true);
      setExpand(false);
      setExpand1(false);
      setExpand2(false);
      if (expand || expand1 || expand2) {
        setTap(false);
        setTap2(false);
        setTap1(false);
      }
    } else if (tap3 === true) {
      setTap3(false);
      setExpand3(false);
    }
  };
  //   const refRBSheet = useRef();

  const dispatch = useDispatch();

  // const {auth} = reducerData;
  // const [userData, setUserData] = React.useState({});
  // console.log('userdata reducer Data',reducerData?.new?.userData)

  useEffect(() => {
    // console.log('New api data get');
    dispatch(UserData());
  }, []);

  const removeToken = async value => {
    // console.log('removeToken Clicked')
    try {
      await AsyncStorage.removeItem('token').then(() => {
        // console.log(`User Data ${reducerData}`);
        AsyncStorage.removeItem('user')
          .then(() => {
            dispatch(isMatch(false))
            dispatch(removeUserDataFromAsyncStorage());
          })
          .catch(error => console.log('Error:', error));
      });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <SafeArea>
      <ScrollView>
        <View
          style={{
            margin: '4%',
            // backgroundColor: 'blue',
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-start',
              marginLeft: 10,
            }}>
            <ButtonComp
              mode={'outlined'}
              justify={'center'}
              align={'center'}
              btnHeight={65}
              icon={'chevron-back'}
              radius={15}
              Borderwidth={1}
              press={() => navigation.goBack()}
            />
            <Heading
              Stylefont={'normal'}
              Fontweight={'700'}
              Fontsize={27}
              txtAlign={'center'}
              ml={'5%'}
              p={10}
              Heading={'Settings'}
            />
          </View>

          <View style={{marginTop: 20}}>
            <View>
              <List.Item
                //   style={{color:'#fff'}}
                title={'Profile'}
                titleStyle={{
                  color: reducerData?.isDark?.isdark
                    ? COLORS.white
                    : COLORS.dark,
                  fontWeight: 'normal',
                }}
                onPress={() => navigation.navigate('edit')}
              />
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Divider
                  style={{
                    width: '90%',
                    borderColor: COLORS.border_color,
                    shadowColor: COLORS.dark,
                    borderWidth: 1,
                  }}
                />
              </View>
              <List.Item
                title={'Change Password'}
                titleStyle={{
                  color: reducerData?.isDark?.isdark
                    ? COLORS.white
                    : COLORS.dark,
                  fontWeight: 'normal',
                }}
                onPress={() => navigation.navigate('changePass')}
              />
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Divider
                  style={{
                    width: '90%',
                    borderColor: COLORS.border_color,
                    shadowColor: COLORS.dark,
                    borderWidth: 1,
                  }}
                />
              </View>
              <List.Item
                title={'Create Event'}
                titleStyle={{
                  color: reducerData?.isDark?.isdark
                    ? COLORS.white
                    : COLORS.dark,
                  fontWeight: 'normal',
                }}
                onPress={() => navigation.navigate('Addevent')}
              />
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Divider
                  style={{
                    width: '90%',
                    borderColor: COLORS.border_color,
                    shadowColor: COLORS.dark,
                    borderWidth: 1,
                  }}
                />
              </View>
              <List.Item
                title={'My Event'}
                titleStyle={{
                  color: reducerData?.isDark?.isdark
                    ? COLORS.white
                    : COLORS.dark,
                  fontWeight: 'normal',
                }}
                // onPress={() => navigation.navigate('changePass')}
              />
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Divider
                  style={{
                    width: '90%',
                    borderColor: COLORS.border_color,
                    shadowColor: COLORS.dark,
                    borderWidth: 1,
                  }}
                />
              </View>
              <List.Accordion
                onPress={tapper}
                expanded={expand}
                style={{
                  backgroundColor: reducerData?.isDark?.isdark
                    ? COLORS.darkMode
                    : COLORS.bgcolor,
                }}
                titleStyle={
                  tap
                    ? {
                        fontFamily: FONT.pop,
                        fontWeight: '700',
                        // fontSize: 14,
                        color: reducerData?.isDark?.isdark
                          ? COLORS.white
                          : COLORS.dark,
                      }
                    : {
                        fontFamily: FONT.pop,
                        // fontSize: 14,
                        color: reducerData?.isDark?.isdark
                          ? COLORS.white
                          : COLORS.dark,
                      }
                }
                right={emptyIcon}
                title="Payment Methods"
                id="1">
                <List.Item
                  titleStyle={{
                    fontSize: 12,
                    marginLeft: 25,
                    color: COLORS.primary,
                  }}
                  title="Manage Payment Account"
                />
                <List.Item
                  titleStyle={{
                    fontSize: 12,
                    marginLeft: 25,
                    color: COLORS.primary,
                  }}
                  title="Restore Purchase"
                />
              </List.Accordion>
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Divider
                  style={{
                    width: '90%',
                    borderColor: COLORS.border_color,
                    shadowColor: COLORS.dark,
                    borderWidth: 1,
                  }}
                />
              </View>
              {/* </List.AccordionGroup> */}
              {/* </TouchableOpacity> */}
              <List.Item
                titleStyle={{
                  color: reducerData?.isDark?.isdark
                    ? COLORS.white
                    : COLORS.dark,
                  fontWeight: 'normal',
                }}
                title={'Settings'}
                onPress={() => navigation.navigate('setting')}
              />
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Divider
                  style={{
                    width: '90%',
                    borderColor: COLORS.border_color,
                    shadowColor: COLORS.dark,
                    borderWidth: 1,
                  }}
                />
              </View>
              {/* <TouchableOpacity onPress={tapper1} activeOpacity={1}> */}

              <List.Accordion
                style={{
                  backgroundColor: reducerData?.isDark?.isdark
                    ? COLORS.darkMode
                    : COLORS.bgcolor,
                }}
                expanded={expand1}
                onPress={tapper1}
                titleStyle={
                  tap1
                    ? {
                        fontFamily: FONT.pop,
                        fontWeight: '700',
                        // fontSize: 14,
                        color: reducerData?.isDark?.isdark
                          ? COLORS.white
                          : COLORS.dark,
                      }
                    : {
                        fontFamily: FONT.pop,
                        // fontSize: 14,
                        color: reducerData?.isDark?.isdark
                          ? COLORS.white
                          : COLORS.dark,
                      }
                }
                right={emptyIcon}
                title="Contact Us"
                id="2">
                <TouchableOpacity activeOpacity={1}>
                  <List.Item
                    onPress={() => navigation.navigate('help')}
                    titleStyle={{
                      fontSize: 12,
                      marginLeft: 25,
                      color: COLORS.primary,
                    }}
                    title="Help & Support"
                  />
                </TouchableOpacity>
              </List.Accordion>
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Divider
                  style={{
                    width: '90%',
                    borderColor: COLORS.border_color,
                    shadowColor: COLORS.dark,
                    borderWidth: 1,
                  }}
                />
              </View>
              {/* </TouchableOpacity> */}
              <List.Accordion
                onPress={tapper2}
                expanded={expand2}
                style={{
                  backgroundColor: reducerData?.isDark?.isdark
                    ? COLORS.darkMode
                    : COLORS.bgcolor,
                }}
                titleStyle={
                  tap2
                    ? {
                        fontFamily: FONT.pop,
                        fontWeight: '700',
                        // fontSize: 14,
                        color: reducerData?.isDark?.isdark
                          ? COLORS.white
                          : COLORS.dark,
                      }
                    : {
                        fontFamily: FONT.pop,
                        // fontSize: 14,
                        color: reducerData?.isDark?.isdark
                          ? COLORS.white
                          : COLORS.dark,
                      }
                }
                right={emptyIcon}
                title="Community"
                id="3">
                <List.Item
                  titleStyle={{
                    fontSize: 12,
                    marginLeft: 25,
                    color: COLORS.primary,
                  }}
                  title="Community Guidelines"
                />
              </List.Accordion>
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Divider
                  style={{
                    width: '90%',
                    borderColor: COLORS.border_color,
                    shadowColor: COLORS.dark,
                    borderWidth: 1,
                  }}
                />
              </View>
              {/* <TouchableOpacity onPress={tapper3} activeOpacity={1}> */}
              {/* <List.AccordionGroup > */}
              <List.Accordion
                onPress={tapper3}
                expanded={expand3}
                style={{
                  backgroundColor: reducerData?.isDark?.isdark
                    ? COLORS.darkMode
                    : COLORS.bgcolor,
                }}
                titleStyle={
                  tap3
                    ? {
                        fontFamily: FONT.pop,
                        fontWeight: '700',
                        // fontSize: 14,
                        color: reducerData?.isDark?.isdark
                          ? COLORS.white
                          : COLORS.dark,
                      }
                    : {
                        fontFamily: FONT.pop,
                        // fontSize: 14,
                        color: reducerData?.isDark?.isdark
                          ? COLORS.white
                          : COLORS.dark,
                      }
                }
                right={emptyIcon}
                title="Privacy"
                id="3">
                <List.Item
                  titleStyle={{
                    fontSize: 12,
                    marginLeft: 25,
                    color: COLORS.primary,
                  }}
                  title="Cookie Policy"
                />
                <List.Item
                  titleStyle={{
                    fontSize: 12,
                    marginLeft: 25,
                    color: COLORS.primary,
                  }}
                  title="Privacy Policy"
                />
                <List.Item
                  titleStyle={{
                    fontSize: 12,
                    marginLeft: 25,
                    color: COLORS.primary,
                  }}
                  title="Privacy Preferences"
                />
              </List.Accordion>
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Divider
                  style={{
                    width: '90%',
                    borderColor: COLORS.border_color,
                    shadowColor: COLORS.dark,
                    borderWidth: 1,
                  }}
                />
              </View>
              {/* </List.AccordionGroup> */}
              {/* </TouchableOpacity> */}
              <List.Item
                titleStyle={{
                  color: reducerData?.isDark?.isdark
                    ? COLORS.white
                    : COLORS.dark,
                  fontWeight: 'normal',
                }}
                title={'Legal'}
              />
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Divider
                  style={{
                    width: '90%',
                    borderColor: COLORS.border_color,
                    shadowColor: COLORS.dark,
                    borderWidth: 1,
                  }}
                />
              </View>
              <List.Item
                titleStyle={{
                  color: reducerData?.isDark?.isdark
                    ? COLORS.white
                    : COLORS.dark,
                  fontWeight: '700',
                }}
                onPress={removeToken}
                title={'Logout'}
              />
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: '5%',
                // marginBottom: '5%',
              }}>
              <Image
                source={require('src/Assets/Images/logo.png')}
                style={{width: 60, height: 60}}
              />
              <InteractParagraph p={'Version 0.0.123.021'} Fontsize={12} />
              <View style={{marginTop: 10}}>
                <Pressable onPress={() => navigation.navigate('delete')}>
                  <InteractParagraph
                    fw={'700'}
                    color={'red'}
                    p={'Delete Account'}
                    fs={16}
                  />
                </Pressable>
              </View>
              {/* <List.Item
                title={'Delete Account'}
                titleStyle={{
                  fontWeight: '700',
                  color: 'red',
                }}
              /> */}
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeArea>
  );
}

export default MainSetting;
