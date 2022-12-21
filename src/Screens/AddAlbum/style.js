import {Dimensions, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  containerImageFirst: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  containerImage1: {
    borderRadius: 10,
    height: Dimensions.get('window').height / 3,
    width: Dimensions.get('window').width / 2.22,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#4DC50030',
    justifyContent: 'center',
    alignItems: 'center',
  },
  galleryTitle: {
    fontSize: 22,
    color: 'white',
    fontWeight:'800',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
  },
});

export default styles;
