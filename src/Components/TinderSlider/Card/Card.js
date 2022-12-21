import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  StyleSheet,
  ImageSourcePropType,
  Dimensions,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import {shape, string, number} from 'prop-types';
import styles from './Card.styles';
// import {Icon} from '../../TinderSlider';
import Icon from 'react-native-vector-icons/Ionicons';
import COLORS from '../../../Assets/Style/Color';
import {Button} from 'react-native-elements';
import PhotoCards from '../../../Assets/Constants/photoCards';

const TempElement = ({length}) => {
  // console.log("🚀 ~ file: Card.js ~ line 22 ~ TempElement ~ length", length)
  const [temp, setTemp] = useState([]);
  // console.log("🚀 ~ file: Card.js ~ line 23 ~ TempElement ~ temp", temp)
  useEffect(() => {
    let tempArr = [];
    for (let i = 0; i < length; i++) {
      tempArr.push(i);
      // console.log("🚀 ~ file: Card.js ~ line 29 ~ useEffect ~ tempArr", tempArr)
    }
    setTemp(tempArr);
  }, [length]);
  return temp.map((v, i) => (
    <View
      style={{
        alignItems: 'flex-end',
        width: 20,
        justifyContent: 'center',
      }}>
      <Icon
        style={{marginHorizontal: 4, marginVertical: 2}}
        size={7}
        name="ellipse"
        color={COLORS.white}
      />
    </View>
  ));
};

const Card = ({card, sliderIndex, index}) => {
  const [temp, setTemp] = useState(true);
  useEffect(() => {
    check();
  }, [temp]);

  // console.log();
  const check = e => {
    if (e) {
      // console.log(sliderIndex.current, PhotoCards[index]?.photo.length - 2);
      if (sliderIndex.current === 3) {
        sliderIndex.current = 0;
      } else {
        sliderIndex.current = sliderIndex.current + 1;
      }
    }
  };

  useEffect(() => {
    console.log('card in cards: ',card);
  }, [])
  

  return (
    card && (
      <Pressable
        onPress={e => {
          // console.log('check',e);
          setTemp(!temp);
          check(e);
          // silderFunc();
        }}
        // onLongPress={console => console.log('')}
      >
        <View style={styles.card}>
          {/* <Pressable
          onPress={() =>
            console.log('iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii')
          }> */}
          {/* <Button onPress={() => console.log('iiii')}> */}
          <Image
            style={styles.image}
            source={card.partnerImage ? {uri : card.partnerImage}:require('../../../Assets/Images/img.png')}
            resizeMode="cover"
            height="100%"
            width="100%"
          />
          <View style={styles.locationMark}>
            <View
              style={{
                width: '30%',
                flexDirection: 'row',

                backgroundColor: '#00000059',
                margin: 20,
                borderRadius: 10,
                padding: 10,
                overflow: 'hidden',

                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Icon
                size={16}
                name="location-outline"
                // style={{marginHorizontal: 10}}
                color={COLORS.white}
              />
              <Text style={styles.textMark}>{`${' 10 Km'}`}</Text>
            </View>
            <View
              style={{
                position: 'absolute',
                alignContent: 'center',
                right: 0,
                top: '25%',
                backgroundColor: '#ffffff69',
                paddingVertical: 20,
                borderTopLeftRadius: 33,
                borderBottomLeftRadius: 33,
              }}>
              <TempElement length={card.length} />
              {/* <TempElement length={1} /> */}
            </View>
            <ImageBackground
              source={{
                uri: card?.partnerImage,
                // uri: 'https://cdn.pixabay.com/photo/2018/03/12/12/32/woman-3219507_960_720.jpg',
              }}
              // source={card.photo}
              // style={{borderRadius: 20}}
              imageStyle={{
                borderBottomLeftRadius: 15,
                borderBottomRightRadius: 15,
              }}
              blurRadius={50}>
              <View style={styles.overlay} />
              <View
                style={{
                  // flexDirection: 'row',
                  // justifyContent: 'space-around',
                  backgroundColor: 'transparent',
                  padding: 5,
                  borderBottomLeftRadius: 15,
                  alignItems: 'flex-start',
                  left: 10,
                  borderBottomEndRadius: 15,
                }}>
                <Text style={styles.textHeading}>{`${card.partnerName}`}</Text>
                {/* <Text style={styles.text}>{`${card.title}`}</Text> */}
              </View>
            </ImageBackground>
          </View>
        </View>
      </Pressable>
    )
  );
};
// <Pressable onPress={() => console.log('000')}>

// </Pressable>

Card.propTypes = {
  card: shape({
    // photo: ImageSourcePropType,
    name: string,
    kilometer: string,
    title: number,
  }).isRequired,
};

export default Card;
