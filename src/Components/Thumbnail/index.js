import React, {useState} from 'react';
import {Button, View} from 'react-native';
import {ImageGallery} from '@georstat/react-native-image-gallery';
import {img} from '../../Assets/Images/Sliderone.png';
import COLORS from '../../Assets/Style/Color';
import ButtonComp from '../ReusableComponent/Button';
import {useSelector} from 'react-redux';

// const images = [
//   {
//     id: 1,
//     url: 'https://avatars2.githubusercontent.com/u/7970947?v=3&s=460',
//     // any other extra info you want
//   },
// ];

// const imageUrl = '../../Assets/Images/Sliderone.png';

function Thumbnail(props) {
  // const [isOpen, setIsOpen] = useState(false);
  // const openGallery = () => setIsOpen(true);
  // const closeGallery = () => setIsOpen(false);
  const reducerData = useSelector(state => state);

  const renderHeader = () => {
    return (
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
          IconColor={COLORS.primary}
          radius={15}
          topMargin={10}
          Borderwidth={2}
          press={props.close}
        />
      </View>
    );
  };

  return (
    <View
      style={{
        backgroundColor: reducerData.isDark.isdark
          ? COLORS.dark
          : COLORS.bgcolor,
      }}>
      <ImageGallery
        close={props.close}
        isOpen={props.open}
        renderHeaderComponent={renderHeader}
        // renderCustomImage={require('../../Assets/Images/Sliderthree.png')}
        images={[
          {
            thumbUrl:
              'https://www.diplomatrentals.com/wp-content/uploads/2020/03/12.png',
            url: 'https://www.diplomatrentals.com/wp-content/uploads/2020/03/12.png',
          },
          {
            thumbUrl:
              'https://images.pexels.com/photos/1024960/pexels-photo-1024960.jpeg?cs=srgb&dl=pexels-asad-photo-maldives-1024960.jpg&fm=jpg',
            url: 'https://images.pexels.com/photos/1024960/pexels-photo-1024960.jpeg?cs=srgb&dl=pexels-asad-photo-maldives-1024960.jpg&fm=jpg',
          },
          {
            thumbUrl:
              'https://www.finetoshine.com/wp-content/uploads/Couple-DP-2.jpg',
            url: 'https://www.finetoshine.com/wp-content/uploads/Couple-DP-2.jpg',
          },
          {
            thumbUrl:
              'https://st.depositphotos.com/3203799/4106/i/600/depositphotos_41066325-stock-photo-couple-in-love-silhouette-during.jpg',
            url: 'https://st.depositphotos.com/3203799/4106/i/600/depositphotos_41066325-stock-photo-couple-in-love-silhouette-during.jpg',
          },
        ]}
      />
    </View>
  );
}

export default Thumbnail;
