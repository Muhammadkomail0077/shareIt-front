import React from 'react';
import {Platform, View} from 'react-native';
import {Pagination} from 'react-native-snap-carousel';
import {TAB_HEIGHT} from '../Slider/carousel';

function pagination(props) {
  const {dots, activeDot, carRef} = props;

  return (
    <View
      style={{
        marginTop: TAB_HEIGHT,
      }}>
      <Pagination
        dotsLength={dots}
        activeDotIndex={activeDot}
        carouselRef={carRef}
        dotStyle={{
          width: 8,
          height: 8,
          borderRadius: 5,
          backgroundColor: '#4DC500',
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
        tappableDots={true}
      />
    </View>
  );
}

export default pagination;
