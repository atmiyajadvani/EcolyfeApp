import * as React from 'react';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import Button from '../../constants/UI/Button';
import Typography from '../../constants/Typography';


const CalculatorScreen = ({navigation}) =>{

    function goToNextScreen(){
        navigation.navigate("ProcessScreen");
    }


    return (
        <SafeAreaView>
            <StatusBar style="auto" />
            <View style={styles.container}>
                <Image source={require("../../assets/images/intro_image.png")}></Image>
                <Text style={[Typography.h1, styles.h1]}>Calculate your {'\n'}carbon footprint</Text>
                <Text style={[Typography.p1, styles.p1]}>Identify ways that you can lessen your {'\n'}impact on the environment.</Text>
                <Text style={[Typography.p3, styles.p3]}>* the calculated carbon footprint is an estimate.</Text>
                <Button text={"Calculate your footprint"} type={"primary"} onPress={goToNextScreen}></Button>
            </View> 
        </SafeAreaView>
            
        
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

export default CalculatorScreen;