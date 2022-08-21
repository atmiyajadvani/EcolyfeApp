import * as React from "react";
import { View, Text, Pressable, StyleSheet, Image } from "react-native"

import Colors from "../Colors";


// Function begins here
const BackButton = ({onPress}) => {
    return (
        <Pressable onPress={onPress}>
                <Image source={require("../../assets/images/back_button.png")} style={styles.backButton}></Image>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    backButton: {
        width: 32,
        height: 32,
        marginLeft: 24,
        marginTop: 24,
    },
});



export default BackButton;