import {Pressable, Text, View} from 'react-native';
import React, {useState} from 'react';
import SafeArea from '../../Components/ReusableComponent/Safearea';
import styles from './style';
import ButtonComp from '../../Components/ReusableComponent/Button';
import Heading from '../../Components/ReusableComponent/Heading';
import {ActivityIndicator} from 'react-native-paper';

import Ionicons from 'react-native-vector-icons/Ionicons';
import {useSelector} from 'react-redux';
import COLORS from '../../Assets/Style/Color';
import MasonryList from 'react-native-masonry-list/src/MasonryList';
import InteractParagraph from '../../Components/ReusableComponent/Paragraph';
import AddAlbum from '../AddAlbum';

const GalleryMedia = ({navigation}) => {
  const reducerData = useSelector(state => state);
  const [loading, setLoading] = useState(false);
  return (
    <SafeArea>
      {loading ? (
        <ActivityIndicator size="large" color="#00ff00" />
      ) : (
        <>
          <View style={{flexGrow: 1, margin: '4%'}}>
            <View style={styles.BackIcon}>
              <ButtonComp
                mode={'outlined'}
                justify={'center'}
                align={'center'}
                btnHeight={65}
                icon={'chevron-back'}
                radius={15}
                Borderwidth={2}
                topMargin={5}
                press={() => navigation.goBack()}
              />
              <Heading
                Stylefont={'normal'}
                Fontweight={'700'}
                Fontsize={34}
                mt={'5%'}
                ml={'5%'}
                Heading={'Media'}
              />
            </View>
            <AddAlbum navigation={navigation}/>
            {/* <Pressable
              style={[
                styles.addBtn,
                {
                  borderColor: reducerData?.isDark?.isdark
                    ? COLORS.white
                    : COLORS.border_color,
                  borderWidth: 2,
                },
              ]}>
              <Ionicons name="add" size={30} />
            </Pressable> */}
          </View>
        </>
      )}
    </SafeArea>
  );
};

export default GalleryMedia;

const data = [
    {
      source: require('src/Assets/Images/photo.png'),
      height: 290,
      width: 182,
      title: 'Album 1',
    },
    {
      source: require('src/Assets/Images/photo2.png'),
      height: 280,
      width: 272,
      title: 'Album 2',
    },
    {
      source: require('src/Assets/Images/photo3.png'),
      height: 215,
      width: 182,
      title: 'Album 3',
    },
    {
      source: require('src/Assets/Images/photo1.png'),
      height: 222,
      width: 182,
      title: 'Album 4',
    },
    {
      source: require('src/Assets/Images/photo4.png'),
      height: 140,
      width: 220,
      title: 'Album 5',
    },
  ];