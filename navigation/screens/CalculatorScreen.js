import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import Typography from '../../constants/Typography';

const CalculatorScreen = () =>{
    return (
        <SafeAreaView>
            <StatusBar style="auto" />
            <View style={styles.container}>
                <Image source={require("../../assets/images/plant.png")}></Image>
                <Text style={[Typography.h1, styles.h1]}>Calculate your {'\n'}carbon footprint</Text>
                <Text style={[Typography.p1, styles.p1]}>Identify ways that you can lessen your {'\n'}impact on the environment.</Text>
                <Text style={[Typography.p3, styles.p3]}>* the calculated carbon footprint is an estimate.</Text>
                <Pressable style={styles.primaryButton}><Text style={styles.buttonText}>Calculate your footprint</Text></Pressable>
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

    primaryButton: {
        height: 50,
        width: 327,
        backgroundColor: '#1AC77E',
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },

    buttonText: {
        fontFamily: 'PJS-SemiBold',
        fontSize: 14,
        color: '#ffffff',
    }

});

export default CalculatorScreen;