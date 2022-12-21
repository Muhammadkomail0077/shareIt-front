import React from 'react';
import {Dimensions, View} from 'react-native';
import COLORS from '../../Assets/Style/Color';
import InteractAvatar from '../ReusableComponent/Avatar';
import Heading from '../ReusableComponent/Heading';
import InteractParagraph from '../ReusableComponent/Paragraph';
import {Divider} from 'react-native-paper';
import { colors } from '../../Constants';

function MessageList(props) {
  const width = Dimensions.get('screen').width;
  const textWidth = width / 2.5;
  const colWidth = width / 1.9;
  // row={'row'}
  return (
    <View
      style={{
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'row',
      }}>
      <View>
        <InteractAvatar src={props.avatar} size={50} />
      </View>
      <View style={{width: colWidth}}>
        <Heading Heading={props.userName} Fontsize={13} Fontweight={'700'} />
        <View style={{flexDirection: 'row'}}>
          {!!props.chatUser && (
            <InteractParagraph color={props.color} p={`${props.chatUser}`} />
          )}
          <View>
            <InteractParagraph
              line={1}
              pWidth={textWidth}
              p={props.msg}
              ml={2}
              mt={1}
              fs={13}
            />
          </View>
        </View>
      </View>
      <View>
        <InteractParagraph p={props.ago} fs={11} color={COLORS.primary}/>
        {
          props.unread ? (
            <View
              style={{
                backgroundColor: COLORS.primary,
                borderRadius: 70,
                width: 20,
                height: 20,
                alignItems: 'center',
                justifyContent: 'center',
                alignSelf: 'flex-end',
                top: 2,
              }}>
              <InteractParagraph
                p={props.unreadMsg}
                color={COLORS.white}
                txtAlign={'center'}
                fs={11}
              />
            </View>
          ) : (
            <View style={{height: 20}}></View>
          )
          // <View></View>
        }
      </View>
    </View>
  );
}

export default MessageList;
