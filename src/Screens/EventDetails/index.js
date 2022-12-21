import React from 'react';
import {
  Dimensions,
  Image,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import InteractAvatar from '../../Components/ReusableComponent/Avatar';
import ButtonComp from '../../Components/ReusableComponent/Button';
import EventCard from '../../Components/ReusableComponent/Events';
import Heading from '../../Components/ReusableComponent/Heading';
import InteractParagraph from '../../Components/ReusableComponent/Paragraph';
import SafeArea from '../../Components/ReusableComponent/Safearea';
import Icon from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import COLORS from '../../Assets/Style/Color';
import {yourProfile} from '../../Store/slices';
function EventDetails({navigation, route}) {
  const reducerData = useSelector(state => state);
  const dispatch = useDispatch();
  const eventCardDetail = route.params;
  console.log('eventCardDetail: ', eventCardDetail);
  const btn = () => {
    dispatch(yourProfile(true));
    navigation.navigate('Profiledetails');
  };

  const {AuthReducer} = useSelector(state => state);
  console.log('AuthReducer?.userData:', AuthReducer?.userData);

  const width = Dimensions.get('window').width;
  const imgWidth = width / 1.09;

  const height = Dimensions.get('window').height;
  const imgHeight = height / 2.9;

  return (
    <SafeArea>
      <ScrollView>
        <View style={{margin: '4%'}}>
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
          <View style={{marginTop: '10%'}}>
            <Heading
              Fontsize={20}
              Heading={
                eventCardDetail.eventCardDetail.eventName
                  ? eventCardDetail.eventCardDetail.eventName
                  : 'Loading...'
              }
              txtAlign={'center'}
              Fontweight={'700'}
            />
            <InteractParagraph txtAlign={'center'} p={'XYZ Area, Texas'} />
          </View>
          <View style={{marginTop: 10, alignItems: 'center'}}>
            <EventCard
              width={imgWidth}
              height={imgHeight}
              justify={'flex-end'}
              Textalign={'center'}
              titleSize={20}
              marginTop={5}
              marginBottom={5}
              //   marginRight={ 20}
              Align={'center'}
              //   marginLeft={(index + 1) % 3 === 0 ? 20 : 0}
              title={'Interested '}
              bgImg={
                eventCardDetail.eventCardDetail.eventImage
                  ? {uri: eventCardDetail.eventCardDetail.eventImage}
                  : require('src/Assets/Images/img.png')
              }
            />
          </View>
          <View>
            <View
              style={{
                marginTop: 10,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Icon name="time-outline" color={COLORS.primary} size={25} />
              <View style={{flexDirection: 'column'}}>
                <InteractParagraph
                  // JContent={'center'}
                  ml={10}
                  // fw={'700'}
                  fs={14}
                  p={'30th June,2022'}
                />
              </View>
            </View>
            <View
              style={{
                marginTop: 10,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <AntDesign name="addusergroup" color={COLORS.primary} size={25} />
              <View style={{flexDirection: 'column'}}>
                <InteractParagraph
                  // JContent={'center'}
                  ml={10}
                  // fw={'700'}
                  fs={14}
                  p={'500+ people going'}
                />
              </View>
            </View>
            <View
              style={{
                marginTop: 10,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <AntDesign name="user" color={COLORS.primary} size={25} />
              <InteractParagraph
                // JContent={'center'}
                ml={10}
                //   fs={16}
                p={'Arranged by'}
              />
              <InteractParagraph
                // JContent={'center'}
                ml={5}
                fw={'700'}
                //   fs={16}
                p={AuthReducer?.userData?AuthReducer?.userData.name:'user'}
              />
            </View>
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
                //   fs={16}
                p={'Public Event'}
              />
            </View>
          </View>
          <View style={{marginTop: 20}}>
            <Heading
              Heading={'Details'}
              Fontweight={'700'}
              Fontsize={20}
              ml={4}
            />
          </View>
          <View
            style={{
              borderColor: COLORS.border_color,
              borderWidth: 1,
              marginTop: 10,
              borderRadius: 15,
            }}>
            <InteractParagraph
              p={
                eventCardDetail.eventCardDetail.eventDescription
                  ? eventCardDetail.eventCardDetail.eventDescription
                  : `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`
              }
              txtAlign={'justify'}
              Padding={20}
            />
          </View>
        </View>
      </ScrollView>
    </SafeArea>
  );
}

export default EventDetails;
