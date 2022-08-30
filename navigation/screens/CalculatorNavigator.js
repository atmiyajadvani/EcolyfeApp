import * as React from 'react';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Screens
import S1_CalculatorHome from '../calculator-screens/S1_CalculatorHome';
import S2_Process from '../calculator-screens/S2_Process';
import S3_Residence from '../calculator-screens/S3_Residence';
import S4_Members from '../calculator-screens/S4_Members';
import S5_House from '../calculator-screens/S5_House';
import S6_Diet from '../calculator-screens/S6_Diet';
import S7_DishWasher from '../calculator-screens/S7_DishWasher';
import S8_Purchases from '../calculator-screens/S8_Purchases';
import S9_Waste from '../calculator-screens/S9_Waste';
import S10_Recycle from '../calculator-screens/S10_Recycle';
import S11_Travel from '../calculator-screens/S11_Travel';
import S12_Results from '../calculator-screens/S12_Results';

const Stack = createNativeStackNavigator();

const CalculatorNavigator = ({navigation}) =>{


    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator>
                <Stack.Screen 
                    name='CalculatorHome' 
                    component={S1_CalculatorHome} 
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
                <Stack.Screen 
                    name='MembersScreen'  
                    component={S4_Members} 
                    options={{ headerShown: false }}
                />   
                <Stack.Screen 
                    name='HouseScreen'  
                    component={S5_House} 
                    options={{ headerShown: false }}
                /> 
                <Stack.Screen 
                    name='DietScreen'  
                    component={S6_Diet} 
                    options={{ headerShown: false }}
                />  
                <Stack.Screen 
                    name='DishWasherScreen'  
                    component={S7_DishWasher} 
                    options={{ headerShown: false }}
                />  
                <Stack.Screen 
                    name='PurchasesScreen'  
                    component={S8_Purchases} 
                    options={{ headerShown: false }}
                />  
                <Stack.Screen 
                    name='WasteScreen'  
                    component={S9_Waste} 
                    options={{ headerShown: false }}
                />  
                <Stack.Screen 
                    name='RecycleScreen'  
                    component={S10_Recycle} 
                    options={{ headerShown: false }}
                />    
                <Stack.Screen 
                    name='TravelScreen'  
                    component={S11_Travel} 
                    options={{ headerShown: false }}
                />   
                <Stack.Screen 
                    name='ResultsScreen'  
                    component={S12_Results} 
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