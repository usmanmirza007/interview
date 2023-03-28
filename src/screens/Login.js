import { StyleSheet, Text, View, ScrollView, Image, TextInput, Alert, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import {
  images,
  WINDOW_HEIGHT,
  WINDOW_WIDTH,
  colors,
} from '../constant';
import {
  Button,
  Header,
} from '../components';
import { useNavigation } from '@react-navigation/native';
import commonStyle from '../constant/commonStyle';
import { useDispatch } from 'react-redux';
import { loggedIn } from '../redux/reducer/mainSlice';

export const Login = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function validateEmail(email) {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  const handleLogin = () => {
    if (email && password) {
      if (!validateEmail(email)) {
        Alert.alert('Invalid email address')
      } else if (password.length < 6) {
        Alert.alert('Your password must be at least 6 characters')
      } else {
        dispatch(loggedIn(true))
        Alert.alert('You are login successfully')

      }
    } else {
      Alert.alert('Please fill all fields!')

    }
  }

  return (
    <ScrollView style={styles.container} showVerticalScrollIndicator={false}>
      <Text style={{ alignSelf: 'center', fontSize: 20, marginTop: 100 }}>Login</Text>

      <Text style={{ marginLeft: 25, fontSize: 15, marginTop: 50 }}>Email</Text>
      <View style={{ alignItems: 'center' }}>
        <TextInput value={email} style={[styles.textInput, {}]}
          placeholder={'Email'}
          placeholderTextColor={'#9E9E9E'}
          onChangeText={(text) => setEmail(text)}
          keyboardType={'email-address'} />
      </View>
      <Text style={{ marginLeft: 25, fontSize: 15, marginTop: 10 }}>Password</Text>
      <View style={{ alignItems: 'center' }}>
        <TextInput value={password}
          style={[styles.textInput, {}]}
          placeholder={'Password'}
          placeholderTextColor={'#9E9E9E'}
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)} />
      </View>

      <TouchableOpacity style={{
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: '#9E9E9E',
        borderRadius: 30,
        height: 45,
        width: '50%',
        marginTop: 50,
        marginHorizontal: 25,
        marginBottom: 20
      }} onPress={() => {
        console.log('sdsfds');
        handleLogin()
      }}>
        <Text>Login</Text>
      </TouchableOpacity>
    </ScrollView>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  inputView: {
    marginBottom: 20,
  },
  textInput: {
    width: WINDOW_WIDTH - 50,
    height: 48,
    borderRadius: 8,
    backgroundColor: '#0505050D',
    fontFamily: commonStyle.fontFamily.regular,
    paddingHorizontal: 18,
    fontSize: 12,
    borderColor: '#9E9E9E14',
    color: '#000',
    borderWidth: 1,
  },

});
