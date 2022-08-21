import React from 'react';
import { useEffect, useCallback } from 'react';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from '../EcolyfeApp/constants/Colors';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//Screens
import MainNavContainer from './navigation/MainNavContainer';


// const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();

//Screen Name Variables
const calculator = 'Calculator';
const blogs = 'Blogs';
const marketplace = 'Marketplace';
const profile = 'Profile';


export default function App() {

  const [fontsLoaded] = useFonts({
    'PJS-Bold': require('./assets/fonts/PJS-Regular.ttf'),
    'PJS-ExtraBold': require('./assets/fonts/PJS-ExtraBold.ttf'),
    'PJS-Medium': require('./assets/fonts/PJS-Medium.ttf'),
    'PJS-MediumItalic': require('./assets/fonts/PJS-MediumItalic.ttf'),
    'PJS-Regular': require('./assets/fonts/PJS-Regular.ttf'),
    'PJS-SemiBold': require('./assets/fonts/PJS-SemiBold.ttf'),
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);
  
  if (!fontsLoaded) {
    return null;
  }
  
  return (
    <MainNavContainer onLayout={onLayoutRootView} />
)};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
