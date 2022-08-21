import * as React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import Button from '../../constants/UI/Button';
import BackButton from '../../constants/UI/BackButton';
import Typography from '../../constants/Typography';
import Colors from '../../constants/Colors';

import SelectList from 'react-native-dropdown-select-list';


const S3_Residence = ({navigation}) =>{

    function goBackTo(){
        navigation.navigate("ProcessScreen");
    }

    function goToNextScreen(){ 
        navigation.navigate("ResidenceScreen");
    }

    const [selected, setSelected]= React.useState("");

    const data = [
        {key: '1', value: 'Bethune'},
        {key: '2', value: 'Calumet'},
        {key: '3', value: 'Pond'},
        {key: '4', value: 'Stong'},
        {key: '5', value: 'Tatham Hall'},
        {key: '6', value: 'Vanier'},
        {key: '7', value: 'Winters'},
        {key: '8', value: 'Founders'},
    ];
    


    return (
        <SafeAreaView>
            <StatusBar style="auto" />
            <BackButton onPress={goBackTo}></BackButton>
            <View style={styles.container}>
                <Image source={require("../../assets/images/residence_image.png")} style={styles.image}></Image>
                <View style={styles.contentContainer}>
                    <Text style={[Typography.p3, styles.p3]}>Step 1 of 9</Text>
                    <Text style={[Typography.h1, styles.h1]}>Select your residence at University</Text>

                    <SelectList 
                        data={data}  
                        setSelected={setSelected} 
                        boxStyles={{backgroundColor: Colors.grey500}}
                        dropdownStyles={{backgroundColor: Colors.grey500}}
                        dropdownItemTextStyle={{color: Colors.black}}
                        maxHeight={200}
                
                    />

                </View>
                <Button text={"Continue"} type={"secondary"} onPress={goToNextScreen} ></Button>
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

    contentContainer: {
        textAlign: 'left',
        justifyContent: 'left',
    },

    descriptionContainer:{
        marginHorizontal: 24,
        height: 'auto',
    },

    h1: {
        textAlign: 'left',
    },




});

export default S3_Residence;