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


const S8_Purchases = ({navigation}) =>{

    function goBackTo(){
        navigation.navigate("DishWasherScreen");
    }

    function goToNextScreen(){ 
        navigation.navigate("WasteScreen");
    }

    const [selected, setSelected]= React.useState("");

    const data = [
        {key: '1', value: '4 - 5 items'},
        {key: '2', value: '6 - 8 items'},
        {key: '3', value: '9 - 12 items'},
    ];
    


    return (
        <SafeAreaView style={styles.screenView}>
            <StatusBar style="auto" />
            <BackButton onPress={goBackTo}></BackButton>
            <View style={styles.container}>
                <Image source={require("../../assets/images/lazy_image.png")} style={styles.image}></Image>
                <View style={styles.contentContainer}>
                    <Text style={[Typography.p3, styles.p3]}>Step 6 of 9</Text>
                    <Text style={[Typography.h2, styles.h2]}>how many major household <Text style={styles.inlineText}>purchases</Text> you make each year? </Text>
                    <View style={styles.dropdownContainer}>
                        <SelectList 
                            data={data}  
                            setSelected={setSelected} 
                            placeholder="no of members"
                            inputStyles={[Typography.p2, styles.inputstyles]}
                            boxStyles={[Typography.p2, styles.boxstyles]}
                            dropdownStyles={[Typography.p2 , styles.dropdownList]}
                            dropdownItemTextStyle={[Typography.p2 , styles.dropdownListText]}
                            dropdownTextStyles={[Typography.p2 , styles.dropdownText]}
                            maxHeight={90}
                        />
                    </View>
                </View>
                <CarbonPoints style={styles.carbonPoints} />
                <Button text={"Continue"} type={"secondary"} onPress={goToNextScreen} ></Button>
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

export default S8_Purchases;