import React from 'react';
import {Image, Text, View} from 'react-native';
import styles from './style';

function CardSwipe({card}) {
  return (
    <View activeOpacity={1}>
      <Image source={card.photo} resizeMode="cover" />
      <View>
        <Text>{`${card.name}, ${card.bio}`}</Text>
      </View>
    </View>
  );
}

export default CardSwipe;
