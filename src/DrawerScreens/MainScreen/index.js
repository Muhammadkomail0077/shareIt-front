import React from 'react';
import {Image, View} from 'react-native';
import InteractAvatar from 'src/Components/ReusableComponent/Avatar';
import ButtonComp from 'src/Components/ReusableComponent/Button';
import Heading from 'src/Components/ReusableComponent/Heading';
import SafeArea from 'src/Components/ReusableComponent/Safearea';
import BottomTab from 'src/Navigation/BottomTab';

function HomeScreen({navigation}) {
  return (
    <SafeArea>
      <BottomTab />
    </SafeArea>
  );
}

export default HomeScreen;
