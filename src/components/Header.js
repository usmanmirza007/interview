import React from 'react';
import { Text, StatusBar, View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
  colors,
  fontFamily,
  images,
  STATUS_BAR_HEIGHT,
  WINDOW_HEIGHT,
  WINDOW_WIDTH,
} from '../constant';

export const Header = () => {
  const navigation = useNavigation();

  return (
    <>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={colors.primaryBlue}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          backgroundColor: colors.white,
          alignItems: 'center',
          height: 70,
          paddingHorizontal: 20,
          marginTop: 30
        }}>
        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
          <Image
            source={images.menu}
            resizeMode={'contain'}
            style={{
              width: 30,
              height: 30,
              tintColor: colors.primaryBlack,
              alignSelf: 'center',
            }}
          />
        </TouchableOpacity>
      </View>
    </>
  );
};
