import * as React from 'react'; 
import { StyleSheet, Text, View, Alert } from 'react-native';

const MarketplaceScreen = ({navigation}) =>{

    function onPress() {
        Alert.alert('This is the MarketplaceScreen');
    }

    return (
        <View style={styles.container}>
            <Text style={styles.h1} onPress={() => navigation.navigate('Calculate')}>Marketplace Screen</Text>
        </View> 
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    h1: {
        fontFamily: 'PJS-ExtraBold',
        fontSize: 28,
        letterSpacing: -0.25,
        textAlign: 'center',
    },

});

export default MarketplaceScreen;