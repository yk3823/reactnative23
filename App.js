import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import AboutScreen from './screens/AboutScreen'; // Update these paths as needed
import AccountScreen from './screens/AccountScreen';
import AppointmentScreen from './screens/AppointmentScreen';
import FinalizeAppointmentScreen from './screens/FinalizeAppointmentScreen';
const Tab = createBottomTabNavigator();
const AppointmentStack = createNativeStackNavigator();

<AppointmentStack.Navigator screenOptions={{ headerShown: false }}>
  <AppointmentStack.Screen name="AppointmentDetails" component={AppointmentScreen} />
  <AppointmentStack.Screen name="FinalizeAppointment" component={FinalizeAppointmentScreen} />
</AppointmentStack.Navigator>


export default function App() {
  const [splashScreen, setSplashScreen] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSplashScreen(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (splashScreen) {
    return (
      <View style={styles.fullScreen}>
        <Image
          source={require('./assets/sara.jpg')}
          style={styles.fullScreenImage}
        />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <Tab.Navigator>
        <Tab.Screen
          name="About"
          component={AboutScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="information" color={'#fcc3c6'} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Appointment"
          component={AppointmentScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="calendar-clock" color={'#fcc3c6'} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Account"
          component={AccountScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="account" color={'#fcc3c6'} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  fullScreen: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  fullScreenImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});
