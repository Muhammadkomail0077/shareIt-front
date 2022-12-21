import React from 'react';
import {FlatList, Pressable, ScrollView, View} from 'react-native';
import {useDispatch} from 'react-redux';
import COLORS from '../../Assets/Style/Color';
import ButtonComp from '../../Components/ReusableComponent/Button';
import FriendsCard from '../../Components/ReusableComponent/FriendsCard';
import Heading from '../../Components/ReusableComponent/Heading';
import InteractParagraph from '../../Components/ReusableComponent/Paragraph';
import SafeArea from '../../Components/ReusableComponent/Safearea';
import {yourProfile} from '../../Store/slices';

function Families({navigation}) {
  const dispatch = useDispatch();

  const btn = () => {
    dispatch(yourProfile(false));
    navigation.navigate('Mainprofile');
  };

  const Backbtn = () => {
    dispatch(yourProfile(true));
    navigation.goBack();
  };

  // navigation.goBack()
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
  return (
    <SafeArea>
      <View style={{flexGrow: 1}}>
        <ScrollView contentContainerStyle={{flexGrow: 1}}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'flex-start',
              margin: '4%',
            }}>
            <ButtonComp
              mode={'outlined'}
              justify={'center'}
              align={'center'}
              btnHeight={65}
              icon={'chevron-back'}
              radius={15}
              Borderwidth={2}
              press={Backbtn}
            />
            <Heading
              Stylefont={'normal'}
              Fontweight={'700'}
              Fontsize={34}
              mt={'8%'}
              Heading={'Families Joined'}
            />
            <InteractParagraph
              p={
                'This is a list of people who have liked you and your matches.'
              }
              fs={16}
              mt={'5%'}
              txtAlign={'justify'}
            />

            {/* <View> */}
            <View
              style={{
                marginTop: 20,
                flexDirection: 'row',
              }}>
              <FlatList
                numColumns={2}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item, index) => 'key' + index}
                data={friends}
                renderItem={({item}) => {
                  return (
                    <View
                      style={{
                        flexGrow: 1,
                        alignItems: 'center',
                      }}>
                      <Pressable onPress={btn}>
                        <FriendsCard bgImg={item.bgImg} para={item.name} />
                      </Pressable>
                    </View>
                  );
                }}
              />
            </View>
            <View
              style={{
                marginTop: 20,
                alignItems: 'center',
                justifyContent: 'center',
                alignSelf: 'center',
              }}>
              <ButtonComp
                mode={'text'}
                btnwidth={'90%'}
                btnText={'Load More'}
                txtColor={COLORS.dark}
                justify={'center'}
                align={'center'}
                fontSize={16}
                radius={15}
                fontStyle={'700'}
                txtwidth={'100%'}
                // press={() => navigation.navigate('gender')}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeArea>
  );
}

export default Families;
