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
    'SG-Bold': require('./assets/fonts/SG-Bold.ttf'),
    'SG-Light': require('./assets/fonts/SG-Light.ttf'),
    'SG-Medium': require('./assets/fonts/SG-Medium.ttf'),
    'SG-Regular': require('./assets/fonts/SG-Regular.ttf'),
    'SG-SemiBold': require('./assets/fonts/SG-SemiBold.ttf'),
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
