import * as React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import Button from '../../constants/UI/Button';
import Typography from '../../constants/Typography';


const S1_Process = ({navigation}) =>{

    return (
        <SafeAreaView>
            <StatusBar style="auto" />
            <View style={styles.container}>
                <Image source={require("../../assets/images/process_image.png")} style={styles.image}></Image>
                <Text style={[Typography.h1, styles.h1]}>Determine your carbon points</Text>
                <Text style={[Typography.p1, styles.p2]}>Identify ways that you can lessen your {'\n'}impact on the environment.</Text>
                <Text style={[Typography.p3, styles.p3]}>* the calculated carbon footprint is an estimate.</Text>
                <Button text={"Calculate your footprint"} type={"primary"} ></Button>
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
        width: 220,
        height: 220,
        marginTop: 50,
        marginBottom: 40,
    },

    h1: {
        textAlign: 'left',
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

export default S1_Process;