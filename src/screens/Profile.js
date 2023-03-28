import {StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import React from 'react';
import {
  images,
  colors,
} from '../constant';
import {
  Header,
} from '../components';
import {useNavigation} from '@react-navigation/native';

export const Profile = () => {
  const navigation = useNavigation();
  return (
    <>
      <Header image={images.menu}  />
      <ScrollView style={styles.container} showVerticalScrollIndicator={false}>
       <Text style={{alignSelf: 'center'}}>Profile screen</Text>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  
});
