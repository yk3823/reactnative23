import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AppointmentScreen from '../screens/AppointmentScreen';
import FinalizeAppointmentScreen from '../screens/FinalizeAppointmentScreen';

const AppointmentStack = createStackNavigator();

const AppointmentStackNavigator = () => (
    <AppointmentStack.Navigator>
        <AppointmentStack.Screen name="Appointment" component={AppointmentScreen} />
        <AppointmentStack.Screen name="FinalizeAppointment" component={FinalizeAppointmentScreen} />
    </AppointmentStack.Navigator>

);

export default AppointmentStackNavigator;
