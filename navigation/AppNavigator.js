import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { NavigationContainer } from '@react-navigation/native';
import NewListingButton from "./NewListingButton";
import AboutScreen from '../screens/AboutScreen';
import AccountScreen from '../screens/AccountScreen';
import AppointmentScreen from '../screens/AppointmentScreen';
import AppointmentStackNavigator from './AppointmentStackNavigator'; // import the Stack Navigator

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
    <Tab.Navigator>
        <Tab.Screen
            name="About"
            component={AboutScreen}
            options={{
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="information" color={color} size={size} />
                ),
            }}
        />
        <Tab.Screen
            name="Appointment"
            component={AppointmentStackNavigator}
            options={{
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="calendar-clock" color={color} size={size} />
                ),
            }}
        />
        <Tab.Screen
            name="Account"
            component={AccountScreen}
            options={{
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="account" color={color} size={size} />
                ),
            }}
        />
    </Tab.Navigator>
);

export default AppNavigator;