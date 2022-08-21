import * as React from 'react';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Screens
import S1_CalculatorScreen from '../calculator-screens/S1_CalculatorScreen';
import S2_Process from '../calculator-screens/S2_Process';
import S3_Residence from '../calculator-screens/S3_Residence';

const Stack = createNativeStackNavigator();

const CalculatorNavigator = ({navigation}) =>{

    function goToNextScreen(){
        navigation.navigate("ProcessScreen");
    }


    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator>
                <Stack.Screen 
                    name='CalculatorHome' 
                    component={S1_CalculatorScreen} 
                    options={{ headerShown: false }}
                />
                <Stack.Screen 
                    name='ProcessScreen' 
                    component={S2_Process} 
                    options={{ headerShown: false }}
                />
                <Stack.Screen 
                    name='ResidenceScreen'  
                    component={S3_Residence} 
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
        
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 80,
    },


    image: {
        marginTop: 50,
        width: 300,
        height: 300,
        marginBottom: 40,
    },

    h1: {
        textAlign: 'center',
    },

    p1: {
        paddingTop: 12,
        textAlign: 'center',
        color: '#6E757C',
        marginBottom: 100,
    },

    p3: {
        marginBottom: 12,
        color: '#AEB5BC',
    },


});

export default CalculatorNavigator;