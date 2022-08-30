import * as React from 'react';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import Button from '../../constants/UI/Button';
import Typography from '../../constants/Typography';
import Colors from '../../constants/Colors';

const CalculatorScreen = ({navigation}) =>{

    function goToNextScreen(){
        navigation.navigate("ProcessScreen");
    }

    return (
        <SafeAreaView style={styles.screenView}>
            <StatusBar style="auto" />
            <View style={styles.container}>
                <Image source={require("../../assets/images/intro_image.png")} style={styles.image}></Image>
                <Text style={[Typography.h1, styles.h1]}>Calculate your {'\n'}carbon footprint</Text>
                <Text style={[Typography.p1, styles.p1]}>Identify ways that you can lessen your {'\n'}impact on the environment.</Text>
                <Text style={[Typography.p3, styles.p3]}>* the calculated carbon footprint is an estimate.</Text>
                <Button text={"Calculate your footprint"} type={"primary"} onPress={goToNextScreen}></Button>
            </View> 
        </SafeAreaView>
            
        
    );
}

const styles = StyleSheet.create({

    screenView:{
        flex: 1,
        backgroundColor: Colors.notionBack,
    },

    container: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 80,
    },


    image: {
        marginTop: 20,
        width: 280,
        height: 280,
        marginBottom: 40,
    },

    h1: {
        textAlign: 'center',
        color: Colors.green200
    },

    p1: {
        paddingTop: 12,
        textAlign: 'center',
        color: Colors.green100,
        marginBottom: 60,
    },

    p3: {
        marginBottom: 16,
        color: Colors.grey300,
    },



});

export default CalculatorScreen;