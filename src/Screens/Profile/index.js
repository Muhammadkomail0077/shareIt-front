import React, {useState} from 'react';
import {
  Button,
  Dimensions,
  Image,
  Pressable,
  ScrollView,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import COLORS from '../../Assets/Style/Color';
import ButtonComp from '../../Components/ReusableComponent/Button';
import SafeArea from '../../Components/ReusableComponent/Safearea';
import Icon from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Heading from '../../Components/ReusableComponent/Heading';
import InteractParagraph from '../../Components/ReusableComponent/Paragraph';
import InterestChip from '../../Components/ReusableComponent/InterestChip';
import Gallery from '../../Components/ReusableComponent/Gallery';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {ImageGallery} from '@georstat/react-native-image-gallery';
import Thumbnail from '../../Components/Thumbnail';
import {useSelector} from 'react-redux';

const imgUrl = 'src/Assets/Images/Sliderthree.png';

function Profile({navigation}) {
  const width = Dimensions.get('window').width;
  const [isOpen, setIsOpen] = useState(false);
  const openGallery = () => setIsOpen(true);
  const closeGallery = () => setIsOpen(false);
  const reducerData = useSelector(state => state);

  return (
    <SafeArea>
      <View style={{flexGrow: 1}}>
        {isOpen ? (
          <Thumbnail close={closeGallery} open={isOpen} />
        ) : (
          <ScrollView contentContainerStyle={{flexGrow: 1}}>
            <Pressable onPress={openGallery}>
              <Image
                source={require(imgUrl)}
                style={{
                  height: Dimensions.get('window').height / 1.5,
                  width: width,
                }}
                resizeMode="cover"
              />
            </Pressable>

            <View
              style={{
                alignItems: 'flex-start',
                margin: 10,
                position: 'absolute',
              }}>
              <ButtonComp
                mode={'outlined'}
                justify={'center'}
                align={'center'}
                btnHeight={65}
                icon={'chevron-back'}
                IconColor={COLORS.white}
                radius={15}
                Borderwidth={2}
                press={() => navigation.goBack()}
              />
            </View>
            <View
              style={{
                backgroundColor: reducerData.isDark.isdark
                  ? COLORS.dark
                  : COLORS.bgcolor, /////
                height: '90%',
                borderTopStartRadius: 28,
                borderTopEndRadius: 28,
                zIndex: 1,
                marginTop: -120,
              }}>
              <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                <View
                  style={{
                    backgroundColor: COLORS.white,
                    borderRadius: 30,
                    height: 45,
                    width: 45,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: -25,
                  }}>
                  <Icon
                    name="reload1"
                    size={20}
                    style={{color: COLORS.primary}}
                  />
                </View>
                <View
                  style={{
                    backgroundColor: COLORS.primary,
                    borderRadius: 30,
                    height: 50,
                    width: 50,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: -26,
                    marginLeft: 10,
                  }}>
                  <Icon name="close" size={20} style={{color: COLORS.white}} />
                </View>
                <View
                  style={{
                    backgroundColor: COLORS.white,
                    borderRadius: 30,
                    height: 45,
                    width: 45,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: -25,
                    marginLeft: 10,
                  }}>
                  <Icon name="star" size={20} style={{color: COLORS.primary}} />
                </View>
                <View
                  style={{
                    backgroundColor: COLORS.primary,
                    borderRadius: 30,
                    height: 50,
                    width: 50,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: -26,
                    marginLeft: 10,
                  }}>
                  <Icon name="heart" size={24} style={{color: COLORS.white}} />
                </View>
                <View
                  style={{
                    backgroundColor: COLORS.white,
                    borderRadius: 30,
                    height: 45,
                    width: 45,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: -25,
                    marginLeft: 10,
                  }}>
                  <Entypo
                    name="flash"
                    size={20}
                    style={{color: COLORS.primary}}
                  />
                </View>
              </View>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'flex-start',
                  margin: '4%',
                  // marginTop: 50,
                }}>
                <View
                  style={{
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                  }}>
                  <View style={{flexDirection: 'column'}}>
                    <Heading
                      Heading={'Jessica & Parker'}
                      Fontweight={'700'}
                      Fontsize={24}
                      ml={10}
                    />
                    <InteractParagraph ml={10} p={'Proffesional model'} />
                  </View>
                  <View
                    style={{
                      alignItems: 'flex-end',
                      flex: 1,
                    }}>
                    <ButtonComp
                      mode={'outlined'}
                      justify={'center'}
                      align={'center'}
                      btnHeight={65}
                      // txtRightMargin={12}
                      featherIcon={'message-circle'}
                      radius={15}
                      // topMargin={5}
                      Borderwidth={1}
                      // press={() => navigation.goBack()}
                    />
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    flexGrow: 1,
                    marginTop: 15,
                  }}>
                  <View>
                    <Heading
                      Heading={'Location'}
                      Fontweight={'700'}
                      Fontsize={16}
                      ml={10}
                    />
                    <InteractParagraph ml={10} p={'Texas , United States'} />
                  </View>
                  <View
                    style={{
                      alignItems: 'flex-end',
                      flex: 1,
                    }}>
                    <ButtonComp
                      mode={'text'}
                      btnHeight={40}
                      txtLeftMargin={0}
                      Rightmargin={10}
                      btnText={'1km'}
                      align={'flex-end'}
                      fontStyle={'700'}
                      bgcolor={'#EDF9E5'}
                      radius={7}
                      fontSize={14}
                      justify={'center'}
                      icon={'location-outline'}
                      iconSize={18}
                      // press={() => navigation.navigate('notification')}
                    />
                  </View>
                </View>
                <View
                  style={{
                    // flexDirection: 'row',
                    alignItems: 'center',
                    flexGrow: 1,
                    marginTop: 15,
                  }}>
                  <View>
                    <Heading
                      Heading={'About'}
                      Fontweight={'700'}
                      Fontsize={16}
                      ml={10}
                    />
                    <InteractParagraph
                      ml={10}
                      p={
                        'My name is Jessica Parker and I enjoy meeting new people and finding ways to help them have an uplifting experience. I enjoy reading..'
                      }
                    />
                    <ButtonComp
                      mode={'text'}
                      btnHeight={40}
                      txtLeftMargin={0}
                      btnText={'Read more'}
                      align={'flex-start'}
                      fontStyle={'700'}
                      fontSize={14}
                      justify={'center'}
                      iconSize={18}
                      leftMargin={8}
                      // press={() => navigation.navigate('notification')}
                    />
                  </View>
                </View>
                <View
                  style={{
                    // flexDirection: 'row',
                    alignItems: 'center',
                    flexGrow: 1,
                    marginTop: 10,
                  }}>
                  <View>
                    <Heading
                      Heading={'Interests'}
                      Fontweight={'700'}
                      Fontsize={16}
                      ml={10}
                    />
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    marginTop: 10,
                  }}>
                  <InterestChip
                    IconName={'checkmark-done'}
                    title={' Travelling '}
                  />
                  <InterestChip IconName={'checkmark-done'} title={' Books '} />
                  <InterestChip IconName={'checkmark-done'} title={' Music '} />
                  <InterestChip
                    IconName={'checkmark-done'}
                    title={' Dancing '}
                  />
                  <InterestChip
                    IconName={'checkmark-done'}
                    title={' Modeling '}
                  />
                </View>
                <View
                  style={{
                    // flexDirection: 'row',
                    alignItems: 'center',
                    flexGrow: 1,
                    marginTop: 10,
                  }}>
                  <View>
                    <Heading
                      Heading={'Gallery'}
                      Fontweight={'700'}
                      Fontsize={16}
                      ml={10}
                    />
                  </View>
                </View>
              </View>
              <View>
                {/* <ScrollView> */}
                <Gallery navigate={navigation} />
                {/* </ScrollView> */}
              </View>
            </View>
          </ScrollView>
        )}
      </View>
    </SafeArea>
  );
}

export default Profile;
