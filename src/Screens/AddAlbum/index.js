import React, {useCallback, useState} from 'react';
import {FlatList, Image, Pressable, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Divider} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import COLORS from '../../Assets/Style/Color';
import InteractAvatar from '../../Components/ReusableComponent/Avatar';
import ButtonComp from '../../Components/ReusableComponent/Button';
import FriendsCard from '../../Components/ReusableComponent/FriendsCard';
import Heading from '../../Components/ReusableComponent/Heading';
import InteractParagraph from '../../Components/ReusableComponent/Paragraph';
import SafeArea from '../../Components/ReusableComponent/Safearea';
import {yourProfile} from '../../Store/slices';
import Icon from 'react-native-vector-icons/AntDesign';
import Tabs from '../../Components/Tabs';
import styles from './style';

function AddAlbum({navigation}) {
  const reducerData = useSelector(state => state);
  const {AuthReducer} = useSelector(state => state);
  console.log('AuthReducer AddAlbum:',AuthReducer?.userData?.userAlbums)
  // console.log(reducerData?.Albums?.albums);

  // const data = reducerData?.Albums?.albums;
  const data = AuthReducer?.userData?.userAlbums;
  console.log('albumDataFromReducer',data);

  // const [hello, setHello] = useState(true);
  const dispatch = useDispatch();

  const btn = () => {
    dispatch(yourProfile(false));
    navigation.navigate('Mainprofile');
  };

  const ListHeaderComponent = useCallback(
    () => (
      <View
        style={{
          width: '47%',
          overflow: 'hidden',
          margin: 5,
          borderRadius:10
        }}>
        <Pressable onPress={() => navigation.navigate('createAlbum')}>
          <View
            style={{
              backgroundColor: COLORS.border_color,
              height: 240,
            }}>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                flex: 1,
              }}>
              <Icon name="plus" color={COLORS.primary} size={30} />
            </View>
          </View>
        </Pressable>
      </View>
    ),
    [data],
  );

  const keyExtractor = useCallback((item, index) => 'key' + index, [data]);

  const renderItem = useCallback(
    ({item,index}) => {
      return (
        <>
          <View >
            <Pressable
              onPress={() =>
                navigation.navigate('viewAlbum', {
                  item,index
                })
              }>
              <Image
                // imageStyle={{borderRadius: 10}}
                style={styles.containerImage1}
                // source={require('src/Assets/Images/photo1.png')}
                source={item.albumImage?{uri: item.albumImage}: require('./../../Assets/Images/placeholder/placeholder.jpg')}
              />
              <View style={styles.overlay}>
                <Text style={styles.galleryTitle}>{item.albumName}</Text>
              </View>
            </Pressable>
          </View>
          {/* <View
            style={{
              flex: 1,
              flexWrap: 'wrap',
              margin: 5,
            }}>
            <Pressable
              onPress={() =>
                navigation.navigate('viewAlbum', {
                  item,
                })
              }>
              <Image
                style={{width: 145, height: 240}}
                source={{uri: item.banner}}
                // source={item.source}
              />
              <InteractParagraph
                ml={5}
                fw={'700'}
                color={COLORS.primary}
                p={item.Text}
                // p={item.title}
              />
            </Pressable>
          </View> */}
        </>
      );
    },
    [data],
  );

  const ItemSeparatorComponent = useCallback(
    () => <View style={{height: 10}} />,
    [data],
  );
  const ListFooterComponent = useCallback(
    () => <View style={{height: 140}} />,
    [data],
  );
  return (
    <View>
      {data.length > 0 ? (
        <FlatList
          numColumns={2}
          ListHeaderComponent={ListHeaderComponent}
          showsVerticalScrollIndicator={false}
          keyExtractor={keyExtractor}
          columnWrapperStyle={{justifyContent: 'space-between'}}
          data={data}
          ItemSeparatorComponent={ItemSeparatorComponent}
          // data={AlbumsData}
          renderItem={renderItem}
          ListFooterComponent={ListFooterComponent}
        />
      ) : (
        <View
          style={{
            width: '47%',
            overflow: 'hidden',
            marginHorizontal: 5,
          }}>
          <Pressable onPress={() => navigation.navigate('createAlbum')}>
            <View
              style={{
                backgroundColor: COLORS.border_color,
                height: 240,
              }}>
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  flex: 1,
                }}>
                <Icon name="plus" color={COLORS.primary} size={30} />
              </View>
            </View>
          </Pressable>
        </View>
      )}
    </View>
  );
}

export default AddAlbum;

const AlbumsData = [
  {
    source: require('src/Assets/Images/photo.png'),
    height: 290,
    width: 182,
    title: 'Album 1',
  },
  // {
  //   source: require('src/Assets/Images/photo2.png'),
  //   height: 280,
  //   width: 272,
  //   title: 'Album 2',
  // },
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

// <SafeArea>
//   <ScrollView>
//     <View
//       style={{
//         flex: 1,
//         margin: '4%',
//       }}>
//       <View
//         style={{
//           flexDirection: 'row',
//           alignItems: 'flex-start',
//         }}>
//         <ButtonComp
//           mode={'outlined'}
//           justify={'center'}
//           align={'center'}
//           btnHeight={65}
//           icon={'chevron-back'}
//           radius={15}
//           Borderwidth={1}
//           press={() => navigation.goBack()}
//         />
//         <Heading
//           Stylefont={'normal'}
//           Fontweight={'700'}
//           Fontsize={28}
//           txtAlign={'center'}
//           ml={'3%'}
//           mt={'2%'}
//           p={10}
//           Heading={'Albums'}
//         />
//       </View>
//       <View style={{width: '80%', alignSelf: 'center'}}>
//         <InteractParagraph
//           mt={10}
//           fs={16}
//           lh={25}
//           txtAlign={'center'}
//           p={'Upload Images in Albums'}
//         />
//       </View>

//       <View
//         style={{
//           marginTop: 20,
//           width: '100%',
//           overflow: 'hidden',

//           // backgroundColor: 'red',
//           // flexDirection: 'row',
//         }}>
//         {reducerData?.Albums?.albums.length ? (
//           <FlatList
//             numColumns={2}
//             showsVerticalScrollIndicator={false}
//             keyExtractor={(item, index) => 'key' + index}
//             data={data}
//             renderItem={({item}) => {
//               return (
//                 <>
//                   <View
//                     style={{
//                       flex: 1,
//                       flexWrap: 'wrap',
//                       margin: 5,
//                       // flexDirection: 'row',
//                     }}>
//                     <Pressable
//                       onPress={() =>
//                         navigation.navigate('viewAlbum', {
//                           item,
//                         })
//                       }>
//                       <Image
//                         style={{width: 145, height: 240}}
//                         source={{uri: item.banner}}
//                       />
//                       <InteractParagraph
//                         ml={5}
//                         fw={'700'}
//                         color={COLORS.primary}
//                         p={item.Text}
//                       />
//                     </Pressable>
//                   </View>
//                   {reducerData?.Albums?.albums.length < 2 ? (
//                     <View
//                       style={{
//                         width: '47%',
//                         overflow: 'hidden',
//                         marginTop: 5,
//                         // marginHorizontal: 5,

//                       }}>
//                       <Pressable
//                       style={{
//                         borderRadius:20,
//                       }}
//                         onPress={() => navigation.navigate('createAlbum')}>
//                         <View
//                           style={{
//                             backgroundColor: COLORS.border_color,
//                             height: 240,
//                           }}>
//                           <View
//                             style={{
//                               alignItems: 'center',
//                               justifyContent: 'center',
//                               flex: 1,
//                             }}>
//                             <Icon
//                               name="plus"
//                               color={COLORS.primary}
//                               size={30}
//                             />
//                           </View>
//                         </View>
//                       </Pressable>
//                     </View>
//                   ) : (
//                     <></>
//                   )}
//                 </>
//               );
//             }}
//           />
//         ) : (
//           <></>
//         )}
//         {reducerData?.Albums?.albums.length == 1 ? (
//           <></>
//         ) : (
//           <View
//             style={{
//               width: '47%',
//               overflow: 'hidden',
//               marginHorizontal: 5,
//             }}>
//             <Pressable onPress={() => navigation.navigate('createAlbum')}>
//               <View
//                 style={{
//                   backgroundColor: COLORS.border_color,
//                   height: 240,
//                 }}>
//                 <View
//                   style={{
//                     alignItems: 'center',
//                     justifyContent: 'center',
//                     flex: 1,
//                   }}>
//                   <Icon name="plus" color={COLORS.primary} size={30} />
//                 </View>
//               </View>
//             </Pressable>
//           </View>
//         )}
//       </View>
//     </View>
//   </ScrollView>
// </SafeArea>
