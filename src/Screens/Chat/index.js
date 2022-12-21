import React, { useState, useEffect, useRef } from 'react';
import { Dimensions, FlatList, ScrollView, View, Pressable, StyleSheet, ActivityIndicator, TouchableOpacity, Image } from 'react-native';
import COLORS from '../../Assets/Style/Color';
import InteractAvatar from '../../Components/ReusableComponent/Avatar';
import ButtonComp from '../../Components/ReusableComponent/Button';
import Heading from '../../Components/ReusableComponent/Heading';
import InteractParagraph from '../../Components/ReusableComponent/Paragraph';
import SafeArea from '../../Components/ReusableComponent/Safearea';
import { Divider } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Input from '../../Components/ReusableComponent/input';
import { useSelector } from 'react-redux';
import { usePubNub } from "pubnub-react";
import moment from 'moment';
import { colors } from '../../Constants';
import SwipeableItem, {
  useSwipeableItemParams,
  OpenDirection,
} from "react-native-swipeable-item";
import Animated, { useAnimatedStyle } from "react-native-reanimated";
import { launchCamera, launchImageLibrary } from "react-native-image-picker"


function Chat({ navigation, route }) {
  const [msg, setMsg] = useState('');
  const item = route.params;
  const pubnub = usePubNub();
  const width = Dimensions.get('window').width;
  const InputWidth = width / 1.7;
  const margin = width / 25;
  const reducerData = useSelector(state => state);
  const userData = reducerData?.AuthReducer?.userData;
  const [messages, setMessages] = useState([]);
  const [delet, setDelete] = useState({
    channel: item?.id,
    start: "",
    end: "",
  });
  const scrollViewRef = useRef();
  let iD = item?.id;
  let partnerProfile = item?.partnerProfile;




  useEffect(async () => {
    if (pubnub, iD) {
      pubnub.setUUID(iD);
      const result = await pubnub.listFiles({ channel: item?.id });
      // console.log(result, "result")
      pubnub.fetchMessages({
        includeMessageActions: true,
        channels: [iD],
        count: 100
      },
        (status, response) => {
          let newMessages = response.channels
          newMessages[iD]?.map(envelope => {
            setMessages(msgs => [
              ...msgs,
              {
                id: envelope.message.id,
                author: envelope.uuid,
                content: envelope.message.content,
                timetoken: envelope.timetoken,
                from: envelope.message?.from,
                userName: envelope.message?.userName,
                action: envelope?.actions?.receipt,
                partnerId: envelope?.message?.partnerId,
                isImage: envelope?.message?.isImage,
                image: envelope?.message?.image

              }
            ]);
          })
        })
      const listener = {
        message: envelope => {
          setMessages(msgs => [
            ...msgs,
            {
              id: envelope.message.id,
              author: envelope.publisher,
              content: envelope.message.content,
              timetoken: envelope.timetoken,
              from: envelope.message?.from,
              userName: envelope.message?.userName,
              partnerId: envelope?.message?.partnerId,
              isImage: envelope?.message?.isImage,
              image: envelope?.message?.image
            }
          ]);
          console.log(envelope, "envelope")
        }
      };
      pubnub.addListener(listener);
      pubnub.subscribe({ channels: [iD] });
      return () => {
        pubnub.removeListener(listener);
        pubnub.unsubscribeAll();
      };
    }
  }, [pubnub, iD]);




  const handleSubmit = () => {
    setMsg('')
    const message = {
      content: msg,
      from: userData?.userId,
      userName: userData?.name,
      partnerId: partnerProfile,
      id: Math.random()
        .toString(16)
        .substr(2)
    };
    pubnub.publish({
      channel: item?.id,
      message: message,
    })
  };

  const uploadMedia = async (isCamera = false) => {
    launchImageLibrary({}, async res => {
      await pubnub.sendFile({
        channel: item.id,
        file: {
          uri: res?.assets[0]?.uri,
          name: res?.assets[0]?.fileName,
          mimeType: 'image/jpeg',
          id: Math.random().toString(16).substr(2),
          partnerId: partnerProfile,
          from: userData?.userId,
          userName: userData?.name,
        },
      }).then(async (res) => {
        const result = pubnub.getFileUrl(
          { channel: item.id, id: res.id, name: res.name })
        const message2 = {
          image: result,
          from: userData?.userId,
          userName: userData?.name,
          partnerId: partnerProfile,
          isImage: true,
          id: Math.random()
            .toString(16)
            .substr(2)
        };
        const message = await pubnub.publish({
          channel: item?.id,
          message: message2
        })
      })
    })
  }





  return (
    <SafeArea>
      <View
        style={{
          marginTop: '8%',
          marginLeft: '8%',
          marginRight: '8%',
          flex: 1,
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            flexDirection: 'row',
            marginTop: -35
          }}>
          <View
            style={{
              justifyContent: 'flex-start',
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
          </View>
          <View
            style={{
              alignItems: 'center',
              flex: 0.72,
              marginBottom: 10,
            }}>
            <InteractAvatar src={item.avatar} />
            <Heading
              Stylefont={'normal'}
              Fontweight={'700'}
              Fontsize={22}
              txtAlign={'center'}
              ml={'3%'}
              p={10}
              Heading={item.userName}
            />
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View
                style={{
                  height: 6,
                  width: 6,
                  backgroundColor: COLORS.primary,
                  borderRadius: 60,
                }}></View>
              <InteractParagraph p={'Online'} ml={5} />
            </View>
          </View>
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
            top: 20,
            marginBottom: 20,
          }}>
          <Divider
            style={{
              width: '40%',
              borderColor: COLORS.border_color,
              shadowColor: COLORS.dark,
              borderWidth: 1,
            }}
          />
          <InteractParagraph p={'Today'} Padding={7} />

          <Divider
            style={{
              width: '40%',
              borderColor: COLORS.border_color,
              shadowColor: COLORS.dark,
              borderWidth: 1,
            }}
          />
        </View>
        <ScrollView
          ref={scrollViewRef}
          onContentSizeChange={() => scrollViewRef.current.scrollToEnd({ y: 0, animated: true })}
          showsVerticalScrollIndicator={false}
        >
          {
            messages.length > 0 ?
              messages.map((item) => {
                let currentMessageTime = moment.utc(item.timetoken / 10000).local()
                currentMessageTime = moment(currentMessageTime).format('hh:mm A')
                return (
                  <>
                    {
                      item?.isImage ?
                        <View>
                          {
                            item.from == userData?.userId || item.partnerId == partnerProfile ?
                              <InteractParagraph p={`@ ${item.userName}`} fs={9} ml='auto' color={colors.black} />
                              :
                              <InteractParagraph p={`@ ${item.userName}`} fs={9} mr='auto' color={colors.black} />


                          }
                          <Image source={{ uri: item?.image }} style={item.from == userData?.userId || item.partnerId == partnerProfile ? styles.currentimagestyle : styles.otherimagestyle} />
                          {
                             item.from == userData?.userId || item.partnerId == partnerProfile ?
                             <InteractParagraph p={currentMessageTime} fs={9} ml='auto' color={colors.black} />
                             :
                             <InteractParagraph p={currentMessageTime} fs={9} mr='auto' color={colors.black} />

                          }
                        </View>
                        :
                        <View
                          style={item.from == userData?.userId || item.partnerId == partnerProfile ? styles.currentUserMessage : styles.otherUserMessage}
                          key={item.timetoken}
                        >
                          <View
                            style={item.from == userData?.userId || item.partnerId == partnerProfile ?  styles.currentMessage : styles.otherMessage}>
                            <InteractParagraph p={`@ ${item.userName}`} fs={9} ml='auto' color={colors.white} />
                            <InteractParagraph p={item.content} lh={21} color={colors.white} />
                            <InteractParagraph p={currentMessageTime} fs={9} ml='auto' color={colors.white} />
                          </View>

                        </View>

                    }


                  </>

                )
              })
              :
              <ActivityIndicator size={30} color={COLORS.primary} />
          }
        </ScrollView>

      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
          marginTop: margin,
        }}>
        <TouchableOpacity onPress={uploadMedia}>
          <View
            style={{
              borderWidth: 1,
              borderColor: COLORS.border_color,
              borderRadius: 15,
              padding: 15,
              marginBottom: 1,
            }}>
            <MaterialIcon
              color={COLORS.border_color}
              size={25}
              name="file-upload"
            />
          </View>
        </TouchableOpacity>
        <View style={{ marginBottom: 6 }}>
          <Input
            outline={'#E8E6EA'}
            mode={'outlined'}
            width={InputWidth}
            placeholder="Your Message"
            IconName={'send'}
            IconColor={COLORS.primary}
            line={5}
            Onchange={text => {
              setMsg(text)
            }}
            Value={msg}
          />
        </View>
        <Pressable onPress={handleSubmit}>
          <View
            style={{
              borderWidth: 1,
              borderColor: COLORS.border_color,
              borderRadius: 15,
              padding: 15,
              marginBottom: 1,
            }}>
            {/* <Icon name="mic" color={COLORS.primary} size={25} /> */}
            <Icon name="send-sharp" color={COLORS.primary} size={25} />
          </View>
        </Pressable>
      </View>
    </SafeArea>
  );
}



const styles = StyleSheet.create({
  currentUserMessage: {
    alignItems: 'flex-end',
    marginLeft: 50,
    marginTop: 10,
  },
  currentMessage: {
    backgroundColor: COLORS.primary,
    padding: 15,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
  },
  otherUserMessage: {
    marginTop: 10,
    marginRight: 50,
    alignItems: 'flex-start',
    flexWrap: 'wrap'
  },
  otherMessage: {
    backgroundColor: "#292929",
    padding: 15,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
  },
  underlayLeft: {
    flex: 1,
    backgroundColor: colors.WHITE,
    justifyContent: "flex-end",
    marginBottom: 10,
    borderRadius: 4
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  currentimagestyle: { height: 200, width: 100, alignSelf: 'flex-end' },
  otherimagestyle: { height: 200, width: 100 }
})

export default Chat;