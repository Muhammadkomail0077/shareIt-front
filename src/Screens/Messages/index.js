import React from 'react';
import { FlatList, Pressable, ScrollView, View } from 'react-native';
import MessageList from '../../Components/MessageList';
import ButtonComp from '../../Components/ReusableComponent/Button';
import Heading from '../../Components/ReusableComponent/Heading';
import Input from '../../Components/ReusableComponent/input';
import SafeArea from '../../Components/ReusableComponent/Safearea';
import { Searchbar } from 'react-native-paper';
import COLORS from '../../Assets/Style/Color';
import { Divider } from 'react-native-paper';
import { getRoom } from '../../App/fetch';
import { useEffect } from 'react';
import { useIsFocused } from '@react-navigation/native';
import { useSelector } from 'react-redux';

function Messages({ navigation }) {
  const reducerData = useSelector(state => state);
  const isFocused = useIsFocused()
  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = query => setSearchQuery(query);
  const chatRoom = reducerData?.AuthReducer?.userData?.userChatRooms
  const partnerId = reducerData?.AuthReducer?.userData.partnerProfile._id
  let arr = [];
  // console.log(chatRoom[0].partners, "REDUCER DATA")


  // const roomData = [
  //   {
  //     id: chatRoom[0]?._id,
  //     avatar: require('../../Assets/Images/avatar.png'),
  //     userName: `${chatRoom[0]?.partners[0]?.partnerName} & ${chatRoom[0]?.partners[1]?.partnerName}`,
  //     chatUser: 'Emelia',
  //     recentMsg: 'Hey! How are you long time no meetup?',
  //     color: 'red',
  //     messageAgo: '20 min',
  //     unread: true,
  //     unreadMsg: '5',
  //   },
  // ];
  return (
    <SafeArea>
      <ScrollView>
        <View
          style={{
            margin: '8%',
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-start',
            }}>
            <ButtonComp
              mode={'outlined'}
              justify={'center'}
              align={'center'}
              btnHeight={65}
              icon={'chevron-back'}
              radius={15}
              // rightMargin={'5%'}
              // leftMargin={'5%'}
              // topMargin={'5%'}
              Borderwidth={1}
              press={() => navigation.goBack()}
            />
            <Heading
              Stylefont={'normal'}
              Fontweight={'700'}
              Fontsize={27}
              txtAlign={'center'}
              ml={'3%'}
              p={10}
              Heading={'Messages'}
            />
          </View>
          <View style={{ marginTop: 20 }}>
            <Searchbar
              placeholder="Search"
              onChangeText={onChangeSearch}
              value={searchQuery}
              style={{
                backgroundColor: COLORS.bgcolor,
                borderRadius: 15,
                elevation: 2,
              }}
            />
          </View>
          {
            chatRoom?.map((item, index) => {
              item?.partners.map((v) => {
                let obj = {
                  name: v.partnerName,
                }
                arr.push(obj)
              })

              return (
                <>
                  <View
                    style={{
                      marginTop: 30,
                    }}>
                    <Pressable
                      onPress={() =>
                        navigation.navigate('chat', {
                          id: item._id,
                          partnerProfile: partnerId,
                          userName : `${arr[0].name} & ${arr[1].name}`
                        })
                      }>
                      <MessageList
                        avatar={require('../../Assets/Images/avatar.png')}
                        userName={`${arr[0].name} & ${arr[1].name}`}
                        msg={'Hello While Your Are Using Interact'}
                        ago={`2 min`}
                        unreadMsg={5}
                        color={item.color}
                      />
                    </Pressable>
                    <View
                      style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        top: 20,
                      }}>
                      <Divider
                        style={{
                          width: '90%',
                          borderColor: COLORS.border_color,
                          shadowColor: COLORS.dark,
                          borderWidth: 1,
                        }}
                      />
                    </View>
                  </View>

                </>
              )
            })
          }
        </View>
      </ScrollView>
    </SafeArea>
  );
}

export default Messages;