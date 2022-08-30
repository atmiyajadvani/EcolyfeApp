import * as React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import Button from '../../constants/UI/Button';
import BackButton from '../../constants/UI/BackButton';
import Typography from '../../constants/Typography';
import Colors from '../../constants/Colors';

import SelectList from 'react-native-dropdown-select-list';
import CarbonPoints from '../../constants/UI/CarbonPoints';


const S12_Results = ({navigation}) =>{

    function goToNextScreen(){ 
        navigation.navigate("CalculatorHome");
    }

    const [selected, setSelected]= React.useState("");

    const data = [
        {key: '1', value: 'Myself'},
        {key: '2', value: '2 members'},
        {key: '3', value: '3 members'},
        {key: '4', value: '4 members'},
        {key: '5', value: '5 members'},
        {key: '6', value: 'More than 5 members'},
    ];
    


    return (
        <SafeAreaView style={styles.screenView}>
            <StatusBar style="auto" />
            <View style={styles.container}>
                <Image source={require("../../assets/images/results_image.png")} style={styles.image}></Image>
                <View style={styles.contentContainer}>
                    <Text style={[Typography.h2, styles.h2]}>Your total score is <Text style={styles.inlineText}>48 points</Text></Text>
                    <Text style={[Typography.p3, styles.p3]}>Step 3 of 9</Text>
                </View>
                <Button text={"Calculate again"} type={"secondary"} onPress={goToNextScreen} ></Button>
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

    contentContainer: {
        textAlign: 'left',
        justifyContent: 'left',
        width: '85%',
    },

    p3: {
        paddingTop: 12,
        paddingBottom: 12,
        textAlign: 'left',
        justifyContent: 'center',
        color: Colors.grey200,
    },

    image: {
        width: 220,
        height: 220,
        marginBottom: 40,
    },

    inlineText: {
        color: Colors.green200,
    },


    descriptionContainer:{
        marginHorizontal: 24,
        height: 'auto',
    },

    h2: {
        textAlign: 'left',
        marginBottom: 24,
    },

    dropdownContainer:{
        marginBottom: 24,
    },

    inputstyles: {
        backgroundColor: Colors.white,

    },

    boxstyles: {
        borderWidth: 1,
        borderColor: Colors.buttonBorder,
        backgroundColor: Colors.white,
    },

    dropdownList: {
        borderWidth: 1,
        borderColor: Colors.buttonBorder,
        backgroundColor: Colors.white,

    },

    dropdownListText: {
        borderWidth: 1,
        borderColor: Colors.buttonBorder,
        backgroundColor: Colors.white,
        color: Colors.grey200,
        
    },

    dropdownText: {
        color: Colors.grey100,
    },


});

export default S12_Results;