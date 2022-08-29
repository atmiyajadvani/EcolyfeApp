import * as React from 'react';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import Button from '../../constants/UI/Button';
import BackButton from '../../constants/UI/BackButton';
import Typography from '../../constants/Typography';
import Colors from '../../constants/Colors';

const CarbonPoints = () =>{

    return (
        <View style={styles.container}>
            <Text style={[Typography.button, styles.text]}>Carbon Points: 2 points</Text>
        </View>
        
    );

}

const styles = StyleSheet.create({

    container: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 190,
        height: 30,
        backgroundColor: Colors.white,
        borderWidth: 1,
        borderColor: Colors.buttonBorder,
        borderRadius: 8,
    },

    text: {
        color: Colors.blue,
        textAlign: 'center',
    },

});

export default CarbonPoints;