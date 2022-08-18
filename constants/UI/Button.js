import * as React from "react";
import { StyleSheet, Text, Pressable } from "react-native"

import Colors from "../Colors";


const TYPES = ["primary", "secondary", "disabled"];


const Button = ({text, onPress, type}) => {

    const buttonType = TYPES.includes(type) ? type : "primary";


    return (
        <Pressable style={styles.buttonView} onPress={onPress} >
            <Text style={styles.buttonText}>{text}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    buttonView: {
        height: 50,
        width: 327,
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 
            buttonType === "primary" 
            ? Colors.primaryButton : buttonType === "secondary" 
            ? Colors.secondaryButton : Colors.disabledButton,
    },

    buttonText: {
        fontFamily: 'PJS-SemiBold',
        fontSize: 14,
        color: Colors.white,
        
    },
});

export default Button;