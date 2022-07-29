import * as React from 'react'; 
import { StyleSheet, Image } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

//Screens
import CalculatorScreen from './screens/CalculatorScreen';
import BlogsScreen from './screens/BlogsScreen';
import MarketplaceScreen from './screens/MarketplaceScreen';
import ProfileScreen from './screens/ProfileScreen';

//Screen Name
const calculator = 'Calculator';
const blogs = 'Blogs';
const marketplace = 'Marketplace';
const profile = 'Profile';

const Tab = createBottomTabNavigator();


const MainNavContainer = ({navigation}) =>{

    return (
        <NavigationContainer>
            <Tab.Navigator
            initialRouteName={calculator}
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    let rn = route.name;

                    if (rn === calculator) {
                        iconName = focused ? 'home' : 'home-outline';
                    } else if (rn === blogs) {
                        iconName = focused ? 'book' : 'book-outline';
                    }else if (rn === marketplace) {
                        iconName = focused ? 'cart' : 'cart-outline';
                    } else if (rn === profile) {
                        iconName = focused ? 'person' : 'person-outline';
                    }

                    return <Ionicons name={iconName} size={size} color={color} />;
                },
            })}
            tabBarOptions={{
                activeTintColor: 'tomato',
                inactiveTintColor: 'gray',
                labelStyle: {
                    fontSize: 10,
                    fontFamily: 'PJS-Bold',
                    marginTop: 10,
                },
                style: {
                    marginTop: 20,
                    height: 70,
                }
                
            }}
            >

                <Tab.Screen name={calculator} component={CalculatorScreen} />
                <Tab.Screen name={blogs} component={BlogsScreen} />
                <Tab.Screen name={marketplace} component={MarketplaceScreen} />
                <Tab.Screen name={profile} component={ProfileScreen} /> 
            </Tab.Navigator>
        </NavigationContainer>
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

export default MainNavContainer; 