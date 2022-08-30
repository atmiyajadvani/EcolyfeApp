import * as React from 'react';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import Button from '../../constants/UI/Button';
import BackButton from '../../constants/UI/BackButton';
import Typography from '../../constants/Typography';
import Colors from '../../constants/Colors';

const S2_Process = ({navigation}) =>{

    function goBackTo(){
        navigation.navigate("CalculatorHome");
    }

    function goToNextScreen(){
        navigation.navigate("ResidenceScreen");
    }

    return (
        <SafeAreaView style={styles.screenView}>
            <StatusBar style="auto" />
            <BackButton onPress={goBackTo}></BackButton>
            <View style={styles.container}>
                <Image source={require("../../assets/images/process_image.png")} style={styles.image}></Image>
                <Text style={[Typography.h1, styles.h1]}>About Carbon Points</Text>
                <View style={styles.descriptionContainer}>
                    <Text style={[Typography.p2, styles.p2]}>
                        • Your points will determine your impact on the planet. {'\n'}
                        • If your score is less than 60 points , then you are making a smaller impact on your planet.{'\n'}
                        • If your score is more than 60 points , then you might want to look for some ways that you can reduce your impact.
                    </Text>
                </View>
                <Button text={"Continue"} type={"secondary"} onPress={goToNextScreen} style={styles.button} ></Button>
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
        paddingTop: 10,
    },


    image: {
        width: 220,
        height: 220,
        marginBottom: 40,
    },


    h1: {
        textAlign: 'left',
        color: Colors.green200,
    },

    descriptionContainer:{
        marginHorizontal: 32,
        marginBottom: 90,
        marginTop : 12,
    },

    p2: {
        paddingTop: 12,
        color: Colors.green100,
        width: 330,
    },


});

export default S2_Process;