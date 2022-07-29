import * as React from 'react'; 
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native';


const CalculatorScreen = () =>{
    return (
        <SafeAreaView>
            <StatusBar style="auto" />
            <View style={styles.container}>
                <Image source={require('./assets/images/plant.png')} style={styles.image} />
                <Text style={styles.h1}>Calculate your {'\n'}carbon footprint</Text>
                <Text style={styles.p1}>Identify ways that you can lessen your {'\n'}impact on the environment.</Text>
                <Text style={styles.p4}>* the calculated carbon footprint is an estimate.</Text>
                <Pressable style={styles.primaryButton}><Text style={styles.buttonText}>Calculate your footprint</Text></Pressable>
            </View> 
    </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },


    image: {
        marginTop: 50,
        width: 300,
        height: 300,
        marginBottom: 40,
    },

    h1: {
        fontFamily: 'PJS-ExtraBold',
        fontSize: 28,
        letterSpacing: -0.25,
        textAlign: 'center',
    },

    p1: {
        paddingTop: 12,
        fontFamily: 'PJS-Medium',
        fontSize: 16,
        letterSpacing: -0.25,
        textAlign: 'center',
        color: '#6E757C',
        lineHeight: 24,
    },

    p4: {
        paddingTop: 40,
        fontFamily: 'PJS-MediumItalic',
        lineHeight: 14,
        fontSize: 12,
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