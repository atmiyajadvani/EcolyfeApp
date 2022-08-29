import * as React from "react";
import { View, Text, Pressable } from "react-native"
import Colors from "../Colors";
import Typography from "../Typography";


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
        borderWidth: 1,
        borderColor: 
            buttonType === "primary"
            ? Colors.white : Colors.buttonBorder,
    };

    return (
        <Pressable style={btnStyle} onPress={onPress} >
            <View>
                <Text style={[ Typography.Button, {
                    fontFamily: 'SG-SemiBold', 
                    fontSize: 14, 
                    color: 
                        buttonType === "primary"
                        ? Colors.white : Colors.green100, 
                }]}>{text}</Text>
            </View>
        </Pressable>
    );
}


export default Button;