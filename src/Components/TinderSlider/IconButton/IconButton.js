import React from 'react';
import {TouchableOpacity} from 'react-native';
import {func, string} from 'prop-types';
import Icon from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import styles from './IconButton.styles';
import {colors} from '../../../Constants';

const IconButton = props => (
  <TouchableOpacity
    style={[styles.singleButton, {backgroundColor: props.backgroundColor}]}
    onPress={props.onPress}
    activeOpacity={0.85}>
    <Icon
      name={props.name}
      // size={20}
      size={props.size ? props.size : 20}
      color={props.color}
    />
  </TouchableOpacity>
);

export default IconButton;
