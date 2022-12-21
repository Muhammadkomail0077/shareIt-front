import React, {useState} from 'react';
import {FlatList, Image, Pressable, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Divider} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import COLORS from '../../Assets/Style/Color';
import InteractAvatar from '../../Components/ReusableComponent/Avatar';
import ButtonComp from '../../Components/ReusableComponent/Button';
import FriendsCard from '../../Components/ReusableComponent/FriendsCard';
import Heading from '../../Components/ReusableComponent/Heading';
import InteractParagraph from '../../Components/ReusableComponent/Paragraph';
import SafeArea from '../../Components/ReusableComponent/Safearea';
import {yourProfile} from '../../Store/slices';
import Icon from 'react-native-vector-icons/AntDesign';
import Tabs from '../../Components/Tabs';

function Delete({navigation}) {
  const reducerData = useSelector(state => state);

  // const [hello, setHello] = useState(true);
  const dispatch = useDispatch();

  const btn = () => {
    dispatch(yourProfile(false));
    navigation.navigate('Mainprofile');
  };

  return (
    <SafeArea>
      <ScrollView>
        <View
          style={{
            flex: 1,
            margin: '4%',
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'flex-start',
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
              Fontsize={28}
              txtAlign={'center'}
              ml={'3%'}
              mt={'2%'}
              p={10}
              Heading={'Delete Account'}
            />
          </View>
          <View style={{width: '80%', alignSelf: 'center'}}>
            <InteractParagraph
              mt={10}
              fs={16}
              fw={'700'}
              lh={25}
              txtAlign={'center'}
              p={'Are you sure want to delete your account?'}
            />
          </View>
          <View
            style={{
              marginTop: '2%',
              width: '80%',
              flexDirection: 'row',
              alignItems: 'center',
              alignSelf: 'center',
            }}>
            <InteractParagraph
              fw={'100'}
              ml={5}
              lh={20}
              txtAlign={'center'}
              p={'Please let us know the reason you are leaving'}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              marginTop: 30,
            }}>
            <Tabs
              title={'LOREM IPSUM'}
              IconName={'hearto'}
              bgcolor={'#FE3B73'}
            />
            <Tabs
              title={'LOREM IPSUM'}
              IconName={'setting'}
              bgcolor={'#FFC931'}
            />
            <Tabs
              title={'LOREM IPSUM'}
              FontIcon={'format-paint'}
              bgcolor={'#15E5B4'}
            />
            <Tabs
              title={'LOREM IPSUM'}
              IconName={'dislike2'}
              bgcolor={'#73CDFF'}
            />
            <Tabs
              title={'LOREM IPSUM'}
              FeatherIcon={'trash'}
              bgcolor={'#9B9B9B'}
              Press={() => navigation.navigate('details')}
            />
            <Tabs
              title={'LOREM IPSUM'}
              SimpleIcon={'pencil'}
              bgcolor={'#F833B7'}
            />
          </View>
        </View>
      </ScrollView>
    </SafeArea>
  );
}

export default Delete;
