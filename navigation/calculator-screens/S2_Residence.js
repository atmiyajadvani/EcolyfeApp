import * as React from 'react';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import Button from '../../constants/UI/Button';
import Typography from '../../constants/Typography';


const Screen2 = () =>{

    return (
        <View>
            <Text>Hello Second Screen!!</Text>
        </View>
        
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

export default Screen2;