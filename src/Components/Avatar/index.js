import React from 'react';
import {View} from 'react-native';
import Avatar, {IconTypes} from 'rn-avatar';

function AvatarComponent(props) {
  return (
    <View>
      <Avatar
        rounded
        showEditButton
        size={props.size ? props.size : 150}
        source={require('src/Assets/Images/avatar.png')}
        title="Image"
        editButton={{
          name: 'camera',
          type: IconTypes.Entypo,
        }}
      />
    </View>
  );
}

export default AvatarComponent;
