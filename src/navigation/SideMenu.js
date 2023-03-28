import React, { useState, useEffect } from 'react';
import { View, StatusBar, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';

import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { colors, fontFamily, STATUS_BAR_HEIGHT, images, WINDOW_WIDTH, WINDOW_HEIGHT } from '../constant';
import { useDispatch } from 'react-redux';
import { logout } from '../redux/reducer/mainSlice';
import { store } from '../redux/store';

const SideMenu = () => {
  const navigation = useNavigation()
  const dispatch = useDispatch()
  return (
    <View style={{ flex: 1, backgroundColor: '#fff', }}>
      <StatusBar
        translucent
        barStyle="light-content"
        backgroundColor={colors.primaryBlue}
      />
      <Image
        source={images.sol}
        style={{
          width: 100,
          height: 100,
          resizeMode: 'contain',
          alignSelf: 'center',
          marginTop: 50,
        }}
      />
      <Text numberOfLines={1} style={[styles.itemText, {marginLeft: 10}]}>Email: {store.getState().user.user}</Text>

      <ScrollView style={{}}>
        <TouchableOpacity onPress={() => { }} style={{ marginLeft: 15, marginTop: 20 + STATUS_BAR_HEIGHT }}>
          <Text style={styles.itemText}>News</Text>
        </TouchableOpacity>
        <View style={styles.separator} />
        <TouchableOpacity onPress={() => { }} style={{ marginLeft: 15, marginTop: 20 }}>
          <Text style={styles.itemText}>Video</Text>
        </TouchableOpacity>
        <View style={styles.separator} />
        <TouchableOpacity onPress={() => { dispatch(logout()) }} style={{ marginLeft: 15, marginTop: 20 }}>
          <Text style={styles.itemText}>Logout</Text>
        </TouchableOpacity>
        <View style={styles.separator} />
        
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1
  },
  colortext: {
    color: 'white'
  },
  itemText: {
    fontSize: 15,
    color: colors.black,
    fontFamily: fontFamily.poppins.bold
  },
  separator: {
    borderColor: '#2D2D2D',
    opacity: 0.2,
    borderWidth: .5,
    marginTop: 20,
  }

});

export default SideMenu