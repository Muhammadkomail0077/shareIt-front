import React, {useCallback, useEffect, useState} from 'react';
import {Alert, Image, Pressable, Text, View} from 'react-native';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import ButtonComp from '../../Components/ReusableComponent/Button';
import Heading from '../../Components/ReusableComponent/Heading';
import InteractParagraph from '../../Components/ReusableComponent/Paragraph';
import SafeArea from '../../Components/ReusableComponent/Safearea';
import Icon from 'react-native-vector-icons/AntDesign';
import COLORS from '../../Assets/Style/Color';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {useDispatch, useSelector} from 'react-redux';
import {SCREEN_WIDTH} from '../../utils/Dimensions';
import {postRequestWithFormData} from '../../App/fetch';
import {BASE_URL} from '../../App/api';
import {
  getDataFromAsyncStorage,
  setDataToAsyncStorage,
} from '../../utils/getAndSetDataToAsync';
import {userDataFromAsyncStorage} from '../../Store/slices/user';
import {ActivityIndicator} from 'react-native-paper';
import ImageLoad from 'react-native-image-placeholder';

function ViewAlbum({navigation, route}) {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const {AuthReducer} = useSelector(state => state);
  let userData = AuthReducer?.userData;
  const item = [route.params];
  const [banner, setBanner] = useState([]);
  const reducerData = useSelector(state => state);
  console.log('item:', item);
  let indexNum = item[0]?.index;
  let imageList = userData?.userAlbums[indexNum]?.uploads;
  console.log('indexNum:', indexNum);
  console.log('userData.uploads:', userData);
  console.log('userData.imageList:', userData?.userAlbums);

  // const filterFunction = ()=>{
  //   let filterArr = userData?.userAlbums.filter(function(item){
  //     return item.state == 'New York';
  //  }).map(function({id, name, city}){
  //      return {id, name, city};
  //  });
  // }
  // let data = [
  //   {id: 1, name: 'Mike', city: 'philps', state: 'New York'},
  //   {id: 2, name: 'Steve', city: 'Square', state: 'Chicago'},
  //   {id: 3, name: 'Jhon', city: 'market', state: 'New York'},
  //   {id: 4, name: 'philps', city: 'booket', state: 'Texas'},
  //   {id: 5, name: 'smith', city: 'brookfield', state: 'Florida'},
  //   {id: 6, name: 'Broom', city: 'old street', state: 'Florida'},
  // ];

  // let data = userData?.userAlbums
  //   .filter(function (item) {
  //     return item._id == '636628c4c941985e2b6558ef';
  //   })
  //   .map(function (val) {
  //     return val
  //   });
  // console.log('data:',data);

  const openGallery = () => {
    const options = {
      // storageOptions: {
      //   path: 'images',
      //   mediaType: 'video',
      // },
      mediaType: 'video',
      selectionLimit: 0,
      includeBase64: true,
      // saveToPhotos: true,
      include64: true,
      mediaType: 'photo',
      maxWidth: 540,
      maxHeight: 540,
      includeBase64: true,
      quality: 1,
    };
    launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error', response.error);
      } else if (response.customButton) {
        console.log('User Tapped custom button', response.customButton);
      } else {
        // const res = response.assets;
        const res = response.assets[0];
        uploadImagesToAlbum(res);
        // res.map((e, i) => {
        //   setBanner(banner => [...banner, e.uri]);
        // });
      }
    });
  };

  const uploadImagesToAlbum = imgData => {
    setLoading(true);
    try {
      if (imgData?.uri) {
        setLoading(true);
        let formData = new FormData();
        formData.append('albumName', `${imgData.albumName}`);
        formData.append('image', {
          uri: `${imgData?.uri}`,
          type: `${imgData?.type}`,
          name: 'photo.jpg',
        });
        console.log('form data album creation');
        postRequestWithFormData(
          `${BASE_URL}/pushalbum/${item[0]?.item?._id}`,
          formData,
          AuthReducer?.userData?.userToken,
        )
          .then(res => {
            if (res.success === true) {
              // showSuccess('Album Created Successfully')
              let data = userData?.userAlbums;
              // tempArr.push(res.data);
              let tempArr = [...data];
              tempArr.splice(indexNum, 1, res.data);
              let obj = {...userData, userAlbums: tempArr};
              console.log('myObj:', obj);
              setDataToAsyncStorage('user', JSON.stringify(obj));
              getDataFromAsyncStorage('user')
                .then(res => {
                  dispatch(userDataFromAsyncStorage(JSON.parse(res)));
                  console.log('after updated with userData', JSON.parse(res));
                  setLoading(false);
                  Alert.alert('Image Added Successfully');
                })
                .catch(error => {
                  setLoading(false);
                  console.log('error:', error);
                });
              // Alert.alert('Please Select Image');
              // navigation.goBack();
            } else {
              showError('something went wrong please try again');
            }
          })
          .catch(error => {
            setLoading(false);
            console.log('Catch Error in Album:', error);
          });
      } else {
        Alert.alert('Please Select Image');
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const keyExtractor = useCallback((item, index) => 'key' + index, [imageList]);
  const renderItem = useCallback(
    ({item}) => {
      return (
        <View style={{paddingHorizontal: '4%'}}>
          {/* <Pressable
          onPress={() =>
            navigation.navigate('viewAlbum', {
              item,
            })
            console.log(data.item[0].item.Text);
          }> */}
          <Pressable
            onPress={() => {
              console.log('pressed view album ');
              navigation.navigate('ViewImage', {
                item,
              });
            }}>
            <View style={{elevation: 10, borderRadius: 15, marginTop: 10}}>
              <ImageLoad
                loadingStyle={{ size: 'large', color: 'blue' }}
                style={{
                  width: 108,
                  height: 108,
                  borderRadius: 15,
                  backgroundColor: 'grey',
                }}
                resizeMode="cover"
                resizeMethod="resize"
                source={{uri: item.url}}
              />
            </View>
          </Pressable>
          {/* </Pressable> */}
        </View>
      );
    },
    [imageList],
  );
  const ListHeaderComponent = useCallback(
    () => (
      <View
        style={{
          flex: 1,
          // backgroundColor: 'coral',
          width: SCREEN_WIDTH,
          padding: '4%',
        }}>
        <View
          style={{
            alignItems: 'flex-start',
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
          <View
            style={{
              alignSelf: 'center',
            }}>
            <Heading
              Stylefont={'normal'}
              Fontweight={'500'}
              Fontsize={25}
              txtAlign={'center'}
              // ml={'3%'}
              mt={'5%'}
              //   p={10}
              Heading={`Album : ${
                item[0]?.e?.title === undefined
                  ? item[0]?.item?.albumName
                  : item[0]?.e?.title
              }`}
            />
          </View>
        </View>
        <View style={{width: '80%', alignSelf: 'center'}}>
          <InteractParagraph
            mt={10}
            fs={16}
            lh={25}
            txtAlign={'center'}
            p={'Upload Images in Albums'}
          />
        </View>
        {reducerData?.isDark?.yourProfile ? (
          <Pressable onPress={openGallery}>
            <View
              style={{
                marginTop: 20,
                alignItems: 'center',
                alignSelf: 'center',
                flexDirection: 'row',
                flex: 1,
                backgroundColor: COLORS.primary,
                padding: 15,
                borderRadius: 15,
              }}>
              <Icon name="pluscircleo" color={COLORS.white} size={25} />
              <InteractParagraph
                ml={5}
                fs={16}
                lh={25}
                color={COLORS.white}
                txtAlign={'center'}
                p={'Upload Images'}
              />
            </View>
          </Pressable>
        ) : (
          <></>
        )}
        <View>
          <Image
            style={{
              width: '100%',
              height: 220,
              borderRadius: 15,
              top: 4,
            }}
            resizeMode="cover"
            source={
              item[0]?.item?.albumImage
                ? {uri: item[0]?.item?.albumImage}
                : require('./../../Assets/Images/placeholder/placeholder.jpg')
            }
          />
        </View>
      </View>
    ),
    [userData],
  );

  return (
    <SafeArea>
      {/* <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 20,
        }}> */}
      {loading ? (
        <ActivityIndicator size="large" color="#00ff00" />
      ) : (
        <FlatList
          contentContainerStyle={{overflow: 'hidden'}}
          numColumns={3}
          // style={{padding:20}}
          // columnWrapperStyle={{justifyContent: 'space-between'}}
          ListHeaderComponent={ListHeaderComponent}
          showsVerticalScrollIndicator={false}
          keyExtractor={keyExtractor}
          data={imageList}
          renderItem={renderItem}
          // ItemSeparatorComponent
          // renderItem={()=>{
          //   return(
          //     <View>
          //       <Text>images</Text>
          //     </View>
          //   )
          // }}
        />
      )}

      {/* </View> */}
    </SafeArea>
  );
}

export default ViewAlbum;
