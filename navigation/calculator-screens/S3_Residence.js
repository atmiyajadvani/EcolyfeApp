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
import { useNavigation } from '@react-navigation/native';


const S3_Residence = () =>{
    const navigation = useNavigation();

    function goBackTo(){
        navigation.navigate("ProcessScreen");
    }

    function goToNextScreen(){ 
        navigation.navigate("MembersScreen", {selected});
    }

    const [selected, setSelected]= React.useState("");
    
    const onSelection = (value) => {
        const selectedData = Object.values(data).find(e => e.key === value);
        setSelected(selectedData);
    }

    const data = [
        {key: 1, value: 'Bethune'},
        {key: 2, value: 'Calumet'},
        {key: 3, value: 'Pond'},
        {key: 4, value: 'Stong'},
        {key: 5, value: 'Tatham Hall'},
        {key: 6, value: 'Vanier'},
        {key: 7, value: 'Winters'},
        {key: 8, value: 'Founders'},
    ];


    return (
        <SafeAreaView style={styles.screenView}>
            <StatusBar style="auto" />
            <BackButton onPress={goBackTo}></BackButton>
            <View style={styles.container}>
                <Image source={require("../../assets/images/residence_image.png")} style={styles.image}></Image>
                <View style={styles.contentContainer}>
                    <Text style={[Typography.p3, styles.p3]}>Step 1 of 9</Text>
                    <Text style={[Typography.h2, styles.h2]}>Select your <Text style={styles.inlineText}>residence</Text> at University</Text>
                    <View style={styles.dropdownContainer}>
                        <SelectList 
                            data={data}  
                            setSelected={onSelection} 
                            placeholder="select your residence"
                            inputStyles={[Typography.p2, styles.inputstyles]}
                            boxStyles={[Typography.p2, styles.boxstyles]}
                            dropdownStyles={[Typography.p2 , styles.dropdownList]}
                            dropdownItemTextStyle={[Typography.p2 , styles.dropdownListText]}
                            dropdownTextStyles={[Typography.p2 , styles.dropdownText]}
                            maxHeight={90}
                        />
                    </View>
                </View>
                <View style={{width:"100%", display:"flex",alignItems: "center"}}>
                    <CarbonPoints style={styles.carbonPoints} />
                    <Button text={"Continue"} type={"secondary"} onPress={goToNextScreen} ></Button>
                </View>
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
        height: "91%",
        justifyContent: 'center',
        alignItems: 'center',
    },

    contentContainer: {
        flex: 1,
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
        flex: 1,
        width: 300,
        height: 220,
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
        width: "100%",
        marginTop: "1%",
        height: 100,
        position: "absolute",
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

export default S3_Residence;