import React from 'react';
import { useEffect, useCallback } from 'react';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { useFonts } from 'expo-font';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MainNavContainer from './navigation/MainNavContainer';
import CalculatorScreen from './navigation/screens/CalculatorScreen';
import { StatusBar } from 'expo-status-bar';

//Screens
import S1_Process from '../EcolyfeApp/navigation/calculator-screens/S1_Process';
import S2_Residence from '../EcolyfeApp/navigation/calculator-screens/S2_Residence';


const Stack = createNativeStackNavigator();


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
    <>
      <StatusBar style='auto'/>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
            name='CalculatorHome' 
            component={CalculatorScreen} 
            options={{ headerShown: false }}
          />
          <Stack.Screen 
            name='ProcessScreen' 
            component={S1_Process} 
            options={{ headerShown: false }}
          />
          <Stack.Screen 
            name='ResidenceScreen'  
            component={S2_Residence} 
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  
    
)};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
