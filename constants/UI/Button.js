import * as React from "react";
import { View, Text, Pressable } from "react-native"

import Colors from "../Colors";


const TYPES = ["primary", "secondary", "disabled"];


// Function begins here
const Button = ({text, onPress, type}) => {

    const buttonType = TYPES.includes(type) ? type : "primary";

    const btnStyle = {
        height: 50,
        width: 327,
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 
            buttonType === "primary" 
            ? Colors.primaryButton : buttonType === "secondary" 
            ? Colors.secondaryButton : Colors.disabledButton,
    };

    return (
        <Pressable style={btnStyle} onPress={onPress} >
            <View>
                <Text style={{fontFamily: 'PJS-SemiBold', fontSize: 14, color: Colors.white,}}>{text}</Text>
            </View>
        </Pressable>
    );
}


export default Button;