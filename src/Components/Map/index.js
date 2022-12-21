import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import MapView from 'react-native-maps';
import {Marker} from 'react-native-maps';
import {Callout} from 'react-native-maps';
import {Button} from 'react-native-paper';
import COLORS from '../../Assets/Style/Color';
import ButtonComp from '../ReusableComponent/Button';
import SafeArea from '../ReusableComponent/Safearea';

export default function App(mapdata, setMapData) {
  const [region, setRegion] = useState({
    latitude: 31.558635027751933,
    latitudeDelta: 6.226154526086827,
    longitude: -98.9500498585403,
    longitudeDelta: 3.65655530244112,
  });

  const navigation = useNavigation();

  return (
    <SafeArea>
      <View style={styles.container}>
        {/*Render our MapView*/}
        <MapView
          style={styles.map}
          //specify our coordinates.
          initialRegion={{
            latitude: 31.558635027751933,
            latitudeDelta: 6.226154526086827,
            longitude: -98.9500498585403,
            longitudeDelta: 3.65655530244112,
          }}
          onRegionChangeComplete={region => setRegion(region)}>
          {/*Make sure the Marker component is a child of MapView. Otherwise it won't render*/}
          <Marker coordinate={region} />
        </MapView>
      </View>
      <View
        style={{
          flex: 1,
          display: 'flex',
          justifyContent: 'space-between',
          flexDirection: 'column',
          alignContent: 'space-between',
          alignItems: 'center',
          margin: '5%',
        }}>
        <View></View>

        <Button
          color={COLORS.white}
          style={{
            backgroundColor: COLORS.dark,
            marginTop: 10,
            display: 'flex',
            width: '58%',
            alignItems: 'center',
          }}
          onPress={() => {
            console.log('working');
            console.log(region);
            navigation.navigate('Addevent', {region: region});
          }}>
          Select Location
        </Button>
      </View>
    </SafeArea>
  );
}
//create our styling code:
const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    // flex: 1, //the container will fill the whole screen.
    justifyContent: 'flex-end',
    alignItems: 'center',
    zIndex: 0,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
