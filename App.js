import React, { useEffect } from 'react';
// navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import SideMenu from './src/navigation/SideMenu';
import { Home } from './src/screens';
import { Provider, useSelector } from 'react-redux';
import { Login } from './src/screens/Login';
import { persistor, store } from './src/redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { Image, View } from 'react-native';
import { images } from './src/constant';
import { Setting } from './src/screens/Setting';
import { Profile } from './src/screens/Profile';
import SplashScreen from 'react-native-splash-screen';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

// useEffect(() => {

//   setTimeout(() => {
//     // if (SplashScreen) {
//       // SplashScreen.hide();
//     // }

//   }, 2000);
// }, [])

const DrawerNavigation = () => (
  <Drawer.Navigator
    drawerPosition="left"
    initialRouteName="BottomNavigation"
    drawerContent={props => <SideMenu {...props} />}>
    <Drawer.Screen
      name="Home"
      component={Home}
      options={{ headerShown: false }}
    />
    <Drawer.Screen
      name="BottomNavigation"
      component={BottomNavigation}
      options={{ headerShown: false }}
    />

  </Drawer.Navigator>
);


const BottomNavigation = () => {

  return (
    <Tab.Navigator
      initialRouteName="Home"
      detachInactiveScreens={true}
      screenOptions={({ route }) => ({
        tabBarStyle: {
          backgroundColor: '#000'
        },
        tabItemStyle: {
          height: 70,
        },
        tabBarIcon: ({ focused }) => {
          var tintColor = { tintColor: focused ? '#E95F6D' : 'gray' };
          var border
          var icon

          switch (route.name) {
            case 'Home':
              icon = images.home;
              border = {};
              break;

            case 'Profile':
              icon = images.profile;
              border = {};
              break;

            case 'Settings':
              icon = images.setting;
              border = {};
              break;

            default:
              break;
          }
          return (
            <Image
              source={icon}
              resizeMode="contain"
              style={[
                tintColor,
                border,

                {
                  marginTop: 5,
                  height: 22,
                  width: 22,
                },
              ]}
            />
          );
        },
      })}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: ({ focused }) => null,
          headerShown: false
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Setting}
        options={{
          tabBarLabel: ({ focused }) => null,
          headerShown: false
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: ({ focused }) => null,
          headerShown: false
        }}
      />
    </Tab.Navigator>
  );
};


const AuthStack = () => (
  <Stack.Navigator initialRouteName="Login">
    <Stack.Screen
      name="Login"
      component={Login}
      options={{
        animationEnabled: false,
        headerShown: false,
      }}
    />
  </Stack.Navigator>
);


function MainStack() {
  const token = useSelector(state => state?.user?.token)

  if (token) {
    return <DrawerNavigation />
  } else {
    return <AuthStack />
  }
}
export default () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <MainStack />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};
